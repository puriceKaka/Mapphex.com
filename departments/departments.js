(function () {
  const data = window.MapphexData.load();
  const config = window.MapphexData.loadConfig();
  const page = document.body.dataset.page || "departments-hub";
  if (window.MapphexAuth && !window.MapphexAuth.guard()) return;
  const nav = [
    ["Hub", "departments-hub.html"],
    ["Detail", "departments-detail.html"],
    ["Admin", "departments-admin.html"],
    ["Finance", "departments-finance.html"],
    ["HR", "departments-hr.html"],
    ["Operations", "departments-operations.html"],
    ["Sales", "departments-sales.html"]
  ];

  function shell(title, subtitle) {
    const active = location.pathname.split("/").pop();
    document.body.innerHTML = `<header class="app-topbar"><a class="brand" href="../director/Director.html"><img src="../images/enterprise-logo.png" alt=""><div><div class="brand-title">MAPPHEX</div><div class="brand-subtitle">${subtitle}</div></div></a><div class="toolbar"><a class="btn" href="../hr/hr-dashboard.html">HR</a><a class="btn" href="../branches/branch-directory.html">Branches</a><a class="btn primary" href="../reports/reports-hub.html">Reports</a></div></header>
    <div class="module-shell"><aside class="module-sidebar"><div class="sidebar-label">${config.labels.department} Module</div>${nav.map(([label, href]) => `<a class="nav-link ${href === active ? "active" : ""}" href="${href}">${label}</a>`).join("")}</aside><main class="module-main"><div class="page-head"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div><div id="page-actions" class="toolbar"></div></div><div id="view-root"></div></main></div>`;
  }

  function requirementsPanel() {
    return `<section class="panel"><div class="panel-header"><h2>Setup requirements</h2><span class="pill">Configurable</span></div><div class="panel-body"><ul class="requirements-list">${window.MapphexData.requirements.departments.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
  }

  function schemaPanel() {
    return `<section class="panel"><div class="panel-header"><h2>Reusable data structure</h2><span class="pill">Business-type agnostic</span></div><div class="panel-body detail-list">${Object.entries(window.MapphexData.schemas.department).map(([group, fields]) => `<div class="detail-item"><span>${group}</span><strong>${fields.join(", ")}</strong></div>`).join("")}</div></section>`;
  }

  function hub() {
    shell(`${config.labels.department}s Hub`, `Universal directory of ${config.labels.department.toLowerCase()}s, managers, budgets, tasks and KPIs`);
    const cards = data.departments.length
      ? data.departments.map((d) => `<article class="card"><h3>${d.name}</h3><p class="muted small">${d.description || "No description set"}</p><div class="detail-list"><div class="detail-item"><span>Code</span><strong>${d.code || "Not set"}</strong></div><div class="detail-item"><span>Manager</span><strong>${d.manager || "Not assigned"}</strong></div><div class="detail-item"><span>Members</span><strong>${(d.members || []).length}</strong></div><div class="detail-item"><span>Remaining</span><strong>${window.MapphexData.money((d.budget?.allocated || 0) - (d.budget?.spent || 0))}</strong></div></div><p><a class="btn primary" href="departments-detail.html?id=${d.id}">Open ${config.labels.department.toLowerCase()}</a></p></article>`).join("")
      : window.MapphexData.emptyState(`No ${config.labels.department.toLowerCase()}s yet`, `Add ${config.labels.department.toLowerCase()}s that match the company structure. Suggested types are editable and should never force an industry-specific setup.`);
    document.querySelector("#view-root").innerHTML = `${requirementsPanel()}${schemaPanel()}<section class="grid four">
      <article class="kpi"><div class="kpi-label">${config.labels.department}s</div><div class="kpi-value">${data.departments.length}</div><div class="kpi-foot">Editable structure</div></article>
      <article class="kpi"><div class="kpi-label">Members</div><div class="kpi-value">${data.departments.reduce((t, d) => t + (d.members || []).length, 0)}</div><div class="kpi-foot">Linked employees</div></article>
      <article class="kpi"><div class="kpi-label">Budget allocated</div><div class="kpi-value">${window.MapphexData.money(window.MapphexData.sum(data.departments.map((d) => d.budget?.allocated)))}</div><div class="kpi-foot">All departments</div></article>
      <article class="kpi"><div class="kpi-label">Tasks</div><div class="kpi-value">${data.departments.reduce((t, d) => t + (d.tasks || []).length, 0)}</div><div class="kpi-foot">Open work items</div></article>
    </section><section class="grid three" style="margin-top:16px">${cards}</section>`;
  }

  function selected() {
    const id = new URLSearchParams(location.search).get("id");
    return data.departments.find((department) => department.id === id) || data.departments[0];
  }

  function detail() {
    const department = selected();
    shell("Department Detail", "Staff, budget, tasks, documents and configured KPIs");
    if (!department) {
      document.querySelector("#view-root").innerHTML = `${requirementsPanel()}${window.MapphexData.emptyState(`No ${config.labels.department.toLowerCase()} selected`, `Create a ${config.labels.department.toLowerCase()} record first, then open it from the hub.`, "departments-hub.html", `Open ${config.labels.department.toLowerCase()} hub`)}`;
      return;
    }
    const members = (department.members || []).map((id) => data.employees.find((e) => e.id === id)?.name || id).join(", ");
    document.querySelector("#view-root").innerHTML = `<section class="panel"><div class="panel-header"><h2>${department.name}</h2><span class="pill ok">${department.type}</span></div><div class="panel-body detail-list">
      ${[["Code", department.code || "Not set"], ["Manager", department.manager || "Not assigned"], ["Members", members || "No members"], ["Budget allocated", window.MapphexData.money(department.budget?.allocated)], ["Budget spent", window.MapphexData.money(department.budget?.spent)], ["Remaining", window.MapphexData.money((department.budget?.allocated || 0) - (department.budget?.spent || 0))], ["Tasks", (department.tasks || []).join(", ") || "No tasks"], ["Documents", (department.documents || []).join(", ") || "No documents"]].map(([l, v]) => `<div class="detail-item"><span>${l}</span><strong>${v}</strong></div>`).join("")}</div></section><section class="panel"><div class="panel-header"><h2>KPI targets vs actuals</h2></div><div class="panel-body"><div id="kpi-bars"></div></div></section>`;
    if ((department.kpis || []).length) window.MapphexCharts.renderBars("#kpi-bars", department.kpis.map((kpi) => ({ label: kpi.name, value: kpi.actual })), { format: (value) => `${value}%` });
    else document.querySelector("#kpi-bars").innerHTML = `<p class="muted">No KPIs configured yet.</p>`;
  }

  function tool(type, title) {
    const departments = type === "All" ? data.departments : data.departments.filter((department) => department.type === type);
    const rows = departments.flatMap((department) => (department.tasks || []).map((task) => [department.name, department.manager || "Not assigned", task, window.MapphexData.money(department.budget?.allocated), window.MapphexData.money(department.budget?.spent)]));
    shell(title, `${type} department tools, budget, tasks and KPI controls`);
    const body = rows.length ? `<div class="table-wrap"><table><thead><tr><th>Department</th><th>Manager</th><th>Task</th><th>Allocated</th><th>Spent</th></tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>` : window.MapphexData.emptyState(`No ${type.toLowerCase()} department records yet`, "This page is ready for companies that use this department type. Rename, add or ignore department types as needed.");
    document.querySelector("#view-root").innerHTML = `${requirementsPanel()}<section class="panel"><div class="panel-header"><h2>${title}</h2><button id="csv" class="btn primary">Export CSV</button></div>${body}</section>`;
    document.querySelector("#csv")?.addEventListener("click", () => window.MapphexReports.exportCsv(`${type.toLowerCase()}-department-tools.csv`, ["Department", "Manager", "Task", "Allocated", "Spent"], rows));
  }

  const routes = {
    "departments-hub": hub,
    "departments-detail": detail,
    "departments-admin": () => tool("Admin", "Admin Department Tools"),
    "departments-finance": () => tool("Finance", "Finance Department Tools"),
    "departments-hr": () => tool("HR", "HR Department Tools"),
    "departments-operations": () => tool("Operations", "Operations Department Tools"),
    "departments-sales": () => tool("Sales", "Sales Department Tools")
  };
  routes[page]?.();
})();
