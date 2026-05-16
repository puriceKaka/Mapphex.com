(function () {
  const data = window.MapphexData.load();
  const config = window.MapphexData.loadConfig();
  const page = document.body.dataset.page || "reports-hub";
  if (window.MapphexAuth && !window.MapphexAuth.guard()) return;
  const nav = [
    ["Hub", "reports-hub.html"],
    ["HR", "reports-hr.html"],
    ["Branches", "reports-branches.html"],
    ["Finance", "reports-finance.html"],
    ["Inventory", "reports-inventory.html"],
    ["Executive", "reports-executive.html"]
  ];

  function shell(title, subtitle) {
    const active = location.pathname.split("/").pop();
    document.body.innerHTML = `<header class="app-topbar"><a class="brand" href="../director/Director.html"><img src="../images/enterprise-logo.png" alt=""><div><div class="brand-title">MAPPHEX</div><div class="brand-subtitle">${subtitle}</div></div></a><div class="toolbar"><a class="btn" href="../hr/hr-dashboard.html">HR</a><a class="btn" href="../branches/branch-directory.html">Branches</a><a class="btn" href="../departments/departments-hub.html">Departments</a></div></header>
    <div class="module-shell"><aside class="module-sidebar"><div class="sidebar-label">Reports</div>${nav.map(([label, href]) => `<a class="nav-link ${href === active ? "active" : ""}" href="${href}">${label}</a>`).join("")}</aside><main class="module-main"><div class="page-head"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div><div id="page-actions" class="toolbar"></div></div><div id="view-root"></div></main></div>`;
  }

  function renderReport(title, subtitle, headers, rows) {
    shell(title, subtitle);
    const body = rows.length
      ? `<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`
      : window.MapphexData.emptyState(`No ${title.toLowerCase()} data yet`, "Reports stay empty until this organization adds records or connects live data sources.");
    document.querySelector("#view-root").innerHTML = `<section class="panel"><div class="panel-header"><h2>Setup requirements</h2><span class="pill">Universal engine</span></div><div class="panel-body"><ul class="requirements-list">${window.MapphexData.requirements.reports.map((item) => `<li>${item}</li>`).join("")}</ul></div></section><section class="panel"><div class="panel-header"><h2>${title}</h2><div class="toolbar"><button id="csv" class="btn">Export CSV</button><button id="pdf" class="btn primary">Print PDF</button></div></div>${body}</section><section class="panel"><div class="panel-header"><h2>Scheduled delivery</h2><span class="pill">Configurable</span></div><div class="panel-body"><form class="form-grid"><label class="field">Recipient group<select><option>Directors</option><option>Managers</option><option>Finance team</option><option>Operations team</option><option>Custom group</option></select></label><label class="field">Frequency<select><option>Daily</option><option>Weekly</option><option>Monthly</option><option>Custom</option></select></label><label class="field">Format<select><option>PDF</option><option>CSV</option><option>PDF + CSV</option></select></label><button class="btn primary" type="button">Save schedule</button></form></div></section>`;
    document.querySelector("#csv")?.addEventListener("click", () => window.MapphexReports.exportCsv(`${title.toLowerCase().replaceAll(" ", "-")}.csv`, headers, rows));
    document.querySelector("#pdf")?.addEventListener("click", () => window.MapphexReports.printPdf(title, window.MapphexReports.tableHtml(headers, rows)));
  }

  function hub() {
    shell("Reports Hub", "Universal report engine for HR, branches, finance, inventory and executive views");
    const cards = [
      ["HR Reports", "Headcount, attendance, leave, payroll, turnover and recruitment.", "reports-hr.html"],
      ["Branch Reports", "Branch comparison, revenue, stock, sales and transfer activity.", "reports-branches.html"],
      ["Finance Reports", "Income, expenses, payment breakdown, balances and budgets.", "reports-finance.html"],
      ["Inventory Reports", "Movement, low stock, dead stock and supplier history.", "reports-inventory.html"],
      ["Executive Reports", "Org dashboard, KPI scorecard, audit trail and custom builder.", "reports-executive.html"]
    ];
    document.querySelector("#view-root").innerHTML = `<section class="panel"><div class="panel-header"><h2>Reusable data structure</h2><span class="pill">Business-type agnostic</span></div><div class="panel-body detail-list">${Object.entries(window.MapphexData.schemas.report).map(([group, fields]) => `<div class="detail-item"><span>${group}</span><strong>${fields.join(", ")}</strong></div>`).join("")}</div></section><section class="grid three">${cards.map(([title, desc, href]) => `<article class="card report-card"><h3>${title}</h3><p class="muted">${desc}</p><a class="btn primary" href="${href}">Open</a></article>`).join("")}</section>`;
  }

  const grossPayroll = () => window.MapphexData.sum(data.employees.map((e) => (e.payroll?.salary || 0) + (e.payroll?.allowances || 0)));
  const netPayroll = () => window.MapphexData.sum(data.employees.map((e) => (e.payroll?.salary || 0) + (e.payroll?.allowances || 0) - (e.payroll?.deductions || 0)));
  const revenue = () => window.MapphexData.sum(data.branches.flatMap((b) => (b.sales || []).map((s) => (s.quantity || 0) * (s.price || 0))));
  const expenses = () => window.MapphexData.sum(data.branches.map((b) => b.finance?.expenses));
  const avgScore = () => data.employees.length ? Math.round(window.MapphexData.sum(data.employees.map((e) => e.performance?.score || 0)) / data.employees.length) : 0;
  const hasFinanceData = () => data.employees.length || data.branches.some((b) => (b.sales || []).length || b.finance) || data.departments.some((d) => d.budget);
  const hasExecutiveData = () => data.employees.length || data.branches.length || data.departments.length || data.audit.length;

  const routes = {
    "reports-hub": hub,
    "reports-hr": () => renderReport("HR Reports", "Headcount, attendance, leave, payroll and recruitment status", ["Report", "Value", "Scope"], data.employees.length || data.applicants.length ? [
      ["Headcount", data.employees.length, `All ${config.labels.staff.toLowerCase()} records`],
      ["Departments represented", new Set(data.employees.map((e) => e.department).filter(Boolean)).size, `${config.labels.department}s`],
      ["Average performance score", `${avgScore()}%`, "Performance"],
      ["Gross payroll", window.MapphexData.money(grossPayroll()), "Monthly"],
      ["Net payroll", window.MapphexData.money(netPayroll()), "Monthly"],
      ["Recruitment pipeline", data.applicants.length, "Applicants"]
    ] : []),
    "reports-branches": () => renderReport("Branch Reports", "Performance comparison, revenue, stock levels and transfer activity", ["Branch", "Revenue", "Stock lines", "Staff", "Transfers"], data.branches.map((b) => [b.name, window.MapphexData.money(window.MapphexData.sum((b.sales || []).map((s) => (s.quantity || 0) * (s.price || 0)))), (b.inventory || []).length, (b.staff || []).length, (b.transfers || []).length])),
    "reports-finance": () => renderReport("Finance Reports", "Income, expenses, payment methods and budget vs actuals", ["Metric", "Value", "Notes"], hasFinanceData() ? [
      ["Revenue", window.MapphexData.money(revenue()), "Sales transactions"],
      ["Expenses", window.MapphexData.money(expenses()), "Branch expenses"],
      ["Payroll net", window.MapphexData.money(netPayroll()), "HR payroll"],
      ["Payment method records", data.branches.flatMap((b) => b.sales || []).filter((s) => s.paymentMethod).length, "Grouped by configured methods"],
      ["Department budget spent", window.MapphexData.money(window.MapphexData.sum(data.departments.map((d) => d.budget?.spent))), "Actuals"]
    ] : []),
    "reports-inventory": () => renderReport("Inventory Reports", "Stock movement, reorder alerts and stock health", ["Branch", "Item", "SKU", "Qty", "Reorder level", "Status"], data.branches.flatMap((b) => (b.inventory || []).map((i) => [b.name, i.name, i.sku, i.quantity, i.reorderLevel, i.quantity <= i.reorderLevel ? "Low stock" : "Healthy"]))),
    "reports-executive": () => renderReport("Executive Reports", "Director dashboard, KPI scorecard, audit trail and custom builder", ["Area", "KPI", "Actual", "Target/Context"], hasExecutiveData() ? [
      ["Organization", "Revenue", window.MapphexData.money(revenue()), "All branches"],
      ["Organization", "Employees", data.employees.length, `All ${config.labels.staff.toLowerCase()} records`],
      ["Branches", "Daily takings", window.MapphexData.money(window.MapphexData.sum(data.branches.map((b) => b.finance?.dailyTakings))), "Today"],
      ["Departments", "Budget remaining", window.MapphexData.money(window.MapphexData.sum(data.departments.map((d) => (d.budget?.allocated || 0) - (d.budget?.spent || 0)))), `All ${config.labels.department.toLowerCase()}s`],
      ["Audit", "Events", data.audit.length, "Current log"]
    ] : [])
  };
  routes[page]?.();
})();
