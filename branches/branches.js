(function () {
  const data = window.MapphexData.load();
  const config = window.MapphexData.loadConfig();
  const page = document.body.dataset.page || "branch-directory";
  if (window.MapphexAuth && !window.MapphexAuth.guard()) return;
  const nav = [
    ["Directory", "branch-directory.html"],
    ["Dashboard", "branch-dashboard.html"],
    ["Detail", "branch-detail.html"],
    ["Inventory", "branch-inventory.html"],
    ["Sales", "branch-sales.html"],
    ["Staff", "branch-staff.html"],
    ["Finance", "branch-finance.html"],
    ["Transfers", "branch-transfers.html"],
    ["Assets", "branch-assets.html"]
  ];

  function shell(title, subtitle) {
    const active = location.pathname.split("/").pop();
    document.body.innerHTML = `
      <header class="app-topbar">
        <a class="brand" href="../director/Director.html"><img src="../images/enterprise-logo.png" alt=""><div><div class="brand-title">MAPPHEX</div><div class="brand-subtitle">${subtitle}</div></div></a>
        <div class="toolbar"><a class="btn" href="../hr/hr-dashboard.html">HR</a><a class="btn" href="../departments/departments-hub.html">Departments</a><a class="btn primary" href="../reports/reports-branches.html">Reports</a></div>
      </header>
      <div class="module-shell"><aside class="module-sidebar"><div class="sidebar-label">${config.labels.branch} Module</div>${nav.map(([label, href]) => `<a class="nav-link ${href === active ? "active" : ""}" href="${href}">${label}</a>`).join("")}</aside>
      <main class="module-main"><div class="page-head"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div><div id="page-actions" class="toolbar"></div></div><div id="view-root"></div></main></div>`;
  }

  function requirementsPanel() {
    return `<section class="panel"><div class="panel-header"><h2>Setup requirements</h2><span class="pill">Configurable</span></div><div class="panel-body"><ul class="requirements-list">${window.MapphexData.requirements.branches.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
  }

  function schemaPanel() {
    const schema = window.MapphexData.schemas.branch;
    return `<section class="panel"><div class="panel-header"><h2>Reusable data structure</h2><span class="pill">Business-type agnostic</span></div><div class="panel-body detail-list">${Object.entries(schema).map(([group, fields]) => `<div class="detail-item"><span>${group}</span><strong>${fields.join(", ")}</strong></div>`).join("")}</div></section>`;
  }

  function branchCards() {
    if (!data.branches.length) {
      return window.MapphexData.emptyState(`No ${config.labels.branch.toLowerCase()} records yet`, "Create location records only when the company needs multiple sites. Single-location companies can still use HR, departments and reports without branches.");
    }
    return data.branches.map((branch) => `<article class="card"><h3>${branch.name}</h3><p class="muted small">${branch.location || "Location not set"} - ${branch.region || "Region not set"}</p><div class="detail-list"><div class="detail-item"><span>Manager</span><strong>${branch.manager || "Not assigned"}</strong></div><div class="detail-item"><span>Staff</span><strong>${(branch.staff || []).length}</strong></div><div class="detail-item"><span>Inventory lines</span><strong>${(branch.inventory || []).length}</strong></div><div class="detail-item"><span>Takings</span><strong>${window.MapphexData.money(branch.finance?.dailyTakings)}</strong></div></div><p><a class="btn primary" href="branch-detail.html?id=${branch.id}">Open ${config.labels.branch.toLowerCase()}</a></p></article>`).join("");
  }

  function directory() {
    shell(`${config.labels.branch} Directory`, `All ${config.labels.branch.toLowerCase()} records with list and region overview`);
    if (!window.MapphexAuth?.guard?.(["super_admin", "director", "hr"])) return;
    const map = data.branches.length
      ? `<div class="panel-body map-strip">${data.branches.map((b) => `<div class="map-pin"><strong>${b.name}</strong><p class="muted small">${b.location || "Location not set"}</p><span class="pill ok">${b.region || "Region not set"}</span></div>`).join("")}</div>`
      : window.MapphexData.emptyState("No locations to display", "Add branches, campuses, stores, offices, warehouses or any other location type your business uses.");
    document.querySelector("#view-root").innerHTML = `${requirementsPanel()}${schemaPanel()}<section class="grid four">
      <article class="kpi"><div class="kpi-label">${config.labels.branch}s</div><div class="kpi-value">${data.branches.length}</div><div class="kpi-foot">Active locations</div></article>
      <article class="kpi"><div class="kpi-label">Staff assigned</div><div class="kpi-value">${data.branches.reduce((t, b) => t + (b.staff || []).length, 0)}</div><div class="kpi-foot">Location rosters</div></article>
      <article class="kpi"><div class="kpi-label">Daily takings</div><div class="kpi-value">${window.MapphexData.money(window.MapphexData.sum(data.branches.map((b) => b.finance?.dailyTakings)))}</div><div class="kpi-foot">Today</div></article>
      <article class="kpi"><div class="kpi-label">Transfers</div><div class="kpi-value">${data.branches.reduce((t, b) => t + (b.transfers || []).length, 0)}</div><div class="kpi-foot">Open and approved</div></article>
    </section><section class="panel" style="margin-top:16px"><div class="panel-header"><h2>Region view</h2><span class="pill">Optional</span></div>${map}</section><section class="grid three">${branchCards()}</section>`;
  }

  function selectedBranch() {
    const id = new URLSearchParams(location.search).get("id");
    return data.branches.find((branch) => branch.id === id) || data.branches[0];
  }

  function scopedBranch() {
    const session = window.MapphexAuth?.getSession?.();
    if (session?.role === "branch" && session.branchId) {
      return data.branches.find((branch) => branch.id === session.branchId);
    }
    return selectedBranch();
  }

  function visibleBranches() {
    const session = window.MapphexAuth?.getSession?.();
    if (session?.role === "branch" && session.branchId) {
      return data.branches.filter((branch) => branch.id === session.branchId);
    }
    return data.branches;
  }

  function dashboard() {
    const branch = scopedBranch();
    shell("Branch Dashboard", "Branch manager workspace scoped to one assigned location");
    if (!window.MapphexAuth?.guard?.(["super_admin", "director", "branch"])) return;
    if (!branch) {
      document.querySelector("#view-root").innerHTML = window.MapphexData.emptyState("No branch assigned", "This account needs a branch assignment from the Director before branch data can be shown.");
      return;
    }
    const staff = (branch.staff || []).map((id) => data.employees.find((employee) => employee.id === id)).filter(Boolean);
    const inventory = branch.inventory || [];
    const sales = branch.sales || [];
    const transfers = branch.transfers || [];
    const assets = branch.assets || [];
    document.querySelector("#view-root").innerHTML = `<section class="grid four">
      <article class="kpi"><div class="kpi-label">Staff</div><div class="kpi-value">${staff.length}</div><div class="kpi-foot">Assigned here</div></article>
      <article class="kpi"><div class="kpi-label">Stock lines</div><div class="kpi-value">${inventory.length}</div><div class="kpi-foot">Configured items</div></article>
      <article class="kpi"><div class="kpi-label">Transactions</div><div class="kpi-value">${sales.length}</div><div class="kpi-foot">Sales log</div></article>
      <article class="kpi"><div class="kpi-label">Assets</div><div class="kpi-value">${assets.length}</div><div class="kpi-foot">Assigned assets</div></article>
    </section>
    <section class="panel" style="margin-top:16px"><div class="panel-header"><h2>${branch.name}</h2><span class="pill ok">${branch.code || "Branch"}</span></div><div class="panel-body detail-list">
      ${[["Location", branch.location || "Not set"], ["Region", branch.region || "Not set"], ["Manager", branch.manager || "Not assigned"], ["Contact", branch.contact || "Not set"], ["Transfers", transfers.length], ["Reconciliation", branch.finance?.reconciliation || "Configurable"]].map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div></section>
    <section class="grid two">
      <article class="panel"><div class="panel-header"><h2>Branch Staff</h2><a class="btn" href="branch-staff.html">Open</a></div><div class="panel-body">${staff.length ? staff.map((employee) => `<p><strong>${employee.name}</strong><br><span class="muted small">${employee.role || "Role not set"}</span></p>`).join("") : `<p class="muted">No staff assigned yet.</p>`}</div></article>
      <article class="panel"><div class="panel-header"><h2>Operational Links</h2></div><div class="panel-body toolbar"><a class="btn" href="branch-inventory.html">Inventory</a><a class="btn" href="branch-sales.html">Sales</a><a class="btn" href="branch-finance.html">Finance</a><a class="btn" href="branch-transfers.html">Transfers</a><a class="btn" href="branch-assets.html">Assets</a></div></article>
    </section>`;
  }

  function detail() {
    const branch = selectedBranch();
    shell("Branch Detail", "Single branch overview, staff, stock, sales, finance and performance");
    if (!branch) {
      document.querySelector("#view-root").innerHTML = `${requirementsPanel()}${window.MapphexData.emptyState(`No ${config.labels.branch.toLowerCase()} selected`, `Create a ${config.labels.branch.toLowerCase()} record first, then open it from the directory.`, "branch-directory.html", `Open ${config.labels.branch.toLowerCase()} directory`)}`;
      return;
    }
    document.querySelector("#view-root").innerHTML = `<section class="panel"><div class="panel-header"><h2>${branch.name}</h2><span class="pill ok">${branch.code}</span></div><div class="panel-body detail-list">
      ${[["Location", branch.location || "Not set"], ["Region", branch.region || "Not set"], ["Contact", branch.contact || "Not set"], ["Manager", branch.manager || "Not assigned"], ["Cash float", window.MapphexData.money(branch.finance?.cashFloat)], ["Daily takings", window.MapphexData.money(branch.finance?.dailyTakings)], ["Expenses", window.MapphexData.money(branch.finance?.expenses)], ["Reconciliation", branch.finance?.reconciliation || "Configurable"]].map(([l, v]) => `<div class="detail-item"><span>${l}</span><strong>${v}</strong></div>`).join("")}
    </div></section>`;
  }

  function tablePage(title, subtitle, headers, rows) {
    shell(title, subtitle);
    if (!window.MapphexAuth?.guard?.(["super_admin", "director", "branch", "hr", "finance"])) return;
    const body = rows.length ? `<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : window.MapphexData.emptyState(`No ${title.toLowerCase()} records yet`, "This view will populate after the organization enables this workflow and adds records.");
    document.querySelector("#view-root").innerHTML = `${requirementsPanel()}<section class="panel"><div class="panel-header"><h2>${title}</h2><div class="toolbar"><button id="csv" class="btn">Export CSV</button><button id="pdf" class="btn primary">Print PDF</button></div></div>${body}</section>`;
    document.querySelector("#csv")?.addEventListener("click", () => window.MapphexReports.exportCsv(`${title.toLowerCase().replaceAll(" ", "-")}.csv`, headers, rows));
    document.querySelector("#pdf")?.addEventListener("click", () => window.MapphexReports.printPdf(title, window.MapphexReports.tableHtml(headers, rows)));
  }

  const rows = {
    inventory: () => visibleBranches().flatMap((b) => (b.inventory || []).map((i) => [b.name, i.name, i.sku, i.quantity, i.unit, i.reorderLevel, i.quantity <= i.reorderLevel ? "Reorder" : "Healthy"])),
    sales: () => visibleBranches().flatMap((b) => (b.sales || []).map((s) => [b.name, s.date, s.item, s.quantity, window.MapphexData.money(s.price), s.paymentMethod, s.cashier])),
    staff: () => visibleBranches().flatMap((b) => (b.staff || []).map((id) => { const e = data.employees.find((x) => x.id === id); return [b.name, e?.name || id, e?.role || "-", e?.department || "-"]; })),
    finance: () => visibleBranches().map((b) => [b.name, window.MapphexData.money(b.finance?.cashFloat), window.MapphexData.money(b.finance?.dailyTakings), window.MapphexData.money(b.finance?.expenses), b.finance?.reconciliation || "Configurable"]),
    transfers: () => visibleBranches().flatMap((b) => (b.transfers || []).map((t) => [b.name, t.type, t.item, t.quantity, t.to, t.status])),
    assets: () => visibleBranches().flatMap((b) => (b.assets || []).map((a) => [b.name, a.name, a.tag, a.status]))
  };

  const routes = {
    "branch-directory": directory,
    "branch-dashboard": dashboard,
    "branch-detail": detail,
    "branch-inventory": () => tablePage("Branch Inventory", "Generic stock management by branch", ["Branch", "Item", "SKU", "Qty", "Unit", "Reorder level", "Status"], rows.inventory()),
    "branch-sales": () => tablePage("Branch Sales", "POS and sales log by branch", ["Branch", "Date", "Item", "Qty", "Price", "Payment", "Cashier"], rows.sales()),
    "branch-staff": () => tablePage("Branch Staff", "Staff roster by branch", ["Branch", "Employee", "Role", "Department"], rows.staff()),
    "branch-finance": () => tablePage("Branch Finance", "Float, takings, expenses and reconciliation", ["Branch", "Cash float", "Daily takings", "Expenses", "Reconciliation"], rows.finance()),
    "branch-transfers": () => tablePage("Branch Transfers", "Inter-branch stock and cash approval workflow", ["From", "Type", "Item", "Qty/Amount", "To", "Status"], rows.transfers()),
    "branch-assets": () => tablePage("Branch Assets", "Asset register per branch", ["Branch", "Asset", "Tag", "Status"], rows.assets())
  };

  routes[page]?.();
})();
