(function () {
  const data = window.MapphexData.load();
  const config = window.MapphexData.loadConfig();
  const page = document.body.dataset.page || "hr-dashboard";
  if (window.MapphexAuth && !window.MapphexAuth.guard()) return;

  const hrNav = [
    ["Dashboard", "hr-dashboard.html"],
    ["Employees", "hr-employees.html"],
    ["Employee Detail", "hr-employee-detail.html"],
    ["Attendance", "hr-attendance.html"],
    ["Leave", "hr-leave.html"],
    ["Payroll", "hr-payroll.html"],
    ["Recruitment", "hr-recruitment.html"],
    ["Performance", "hr-performance.html"],
    ["Disciplinary", "hr-disciplinary.html"]
  ];

  function initShell(title, subtitle) {
    const active = location.pathname.split("/").pop();
    document.body.innerHTML = `
      <header class="app-topbar">
        <a class="brand" href="../director/Director.html">
          <img src="../images/enterprise-logo.png" alt="">
          <div><div class="brand-title">MAPPHEX</div><div class="brand-subtitle">${subtitle}</div></div>
        </a>
        <div class="toolbar">
          <a class="btn" href="../director/Director.html">Director</a>
          <a class="btn" href="../departments/departments-hub.html">Departments</a>
          <a class="btn" href="../branches/branch-directory.html">Branches</a>
          <a class="btn primary" href="../reports/reports-hub.html">Reports</a>
        </div>
      </header>
      <div class="module-shell">
        <aside class="module-sidebar"><div class="sidebar-label">HR Module</div>${hrNav
          .map(([label, href]) => `<a class="nav-link ${href === active ? "active" : ""}" href="${href}">${label}</a>`)
          .join("")}</aside>
        <main class="module-main">
          <div class="page-head"><div><h1>${title}</h1><p class="muted">${subtitle}</p></div><div id="page-actions" class="toolbar"></div></div>
          <div id="view-root"></div>
        </main>
      </div>`;
  }

  function requirementsPanel(moduleId) {
    const items = window.MapphexData.requirements[moduleId] || [];
    return `<section class="panel"><div class="panel-header"><h2>Setup requirements</h2><span class="pill">Configurable</span></div><div class="panel-body"><ul class="requirements-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul></div></section>`;
  }

  function schemaPanel(schemaName) {
    const schema = window.MapphexData.schemas[schemaName] || {};
    const rows = Object.entries(schema).map(([group, fields]) => `<div class="detail-item"><span>${group}</span><strong>${fields.join(", ")}</strong></div>`).join("");
    return `<section class="panel"><div class="panel-header"><h2>Reusable data structure</h2><span class="pill">Business-type agnostic</span></div><div class="panel-body detail-list">${rows}</div></section>`;
  }

  function kpis() {
    const payroll = data.employees.map((employee) => employee.payroll || {});
    const gross = window.MapphexData.sum(payroll.map((item) => Number(item.salary || 0) + Number(item.allowances || 0)));
    const deductions = window.MapphexData.sum(payroll.map((item) => item.deductions));
    return `
      <section class="grid four">
        <article class="kpi"><div class="kpi-label">${config.labels.staff}s</div><div class="kpi-value">${data.employees.length}</div><div class="kpi-foot">Across enabled locations</div></article>
        <article class="kpi"><div class="kpi-label">${config.labels.department}s</div><div class="kpi-value">${new Set(data.employees.map((e) => e.department)).size}</div><div class="kpi-foot">Assigned teams</div></article>
        <article class="kpi"><div class="kpi-label">Monthly gross</div><div class="kpi-value">${window.MapphexData.money(gross)}</div><div class="kpi-foot">Salary plus allowances</div></article>
        <article class="kpi"><div class="kpi-label">Deductions</div><div class="kpi-value">${window.MapphexData.money(deductions)}</div><div class="kpi-foot">Payroll deductions</div></article>
      </section>`;
  }

  function employeeRows() {
    return data.employees
      .map(
        (employee) => `<tr>
          <td><strong>${employee.name}</strong><div class="muted small">${employee.id}</div></td>
          <td>${employee.role}</td>
          <td>${employee.department}</td>
          <td>${employee.branch}</td>
          <td>${employee.contractType}</td>
          <td><span class="pill ok">${employee.startDate}</span></td>
          <td><a class="btn" href="hr-employee-detail.html?id=${encodeURIComponent(employee.id)}">Open</a></td>
        </tr>`
      )
      .join("");
  }

  function employeeTable() {
    if (!data.employees.length) {
      return window.MapphexData.emptyState(
        "No employee records yet",
        "This HR register is empty for this organization. Add the first staff record after departments and branches are configured, or use the manual fields below while setting up.",
        "hr-employees.html",
        "Add employee"
      );
    }
    return `<div class="table-wrap"><table><thead><tr><th>Employee</th><th>Role</th><th>Department</th><th>Branch</th><th>Contract</th><th>Start</th><th></th></tr></thead><tbody>${employeeRows()}</tbody></table></div>`;
  }

  function addEmployeeForm() {
    const departmentField = data.departments.length
      ? `<label class="field">${config.labels.department}<select name="department">${data.departments.map((d) => `<option>${d.type || d.name}</option>`).join("")}</select></label>`
      : `<label class="field">${config.labels.department}<input name="department" placeholder="e.g. Operations"></label>`;
    const branchField = data.branches.length
      ? `<label class="field">${config.labels.branch}<select name="branch">${data.branches.map((b) => `<option>${b.name}</option>`).join("")}</select></label>`
      : `<label class="field">${config.labels.branch}<input name="branch" placeholder="Optional location"></label>`;
    return `<section class="panel"><div class="panel-header"><h2>Add employee</h2><span class="pill">Generic profile</span></div><div class="panel-body">
      <form id="employee-form" class="form-grid">
        <label class="field">Name<input name="name" required></label>
        <label class="field">Role<input name="role" required></label>
        ${departmentField}
        ${branchField}
        <label class="field">Contract type<select name="contractType"><option>Permanent</option><option>Fixed term</option><option>Casual</option><option>Consultant</option></select></label>
        <label class="field">Start date<input name="startDate" type="date" required></label>
        <label class="field">Contact<input name="contact"></label>
        <label class="field">Base salary<input name="salary" type="number" min="0" value="0"></label>
        <label class="field">Allowances<input name="allowances" type="number" min="0" value="0"></label>
        <button class="btn primary" type="submit">Save employee</button>
      </form></div></section>`;
  }

  function wireEmployeeForm() {
    const form = document.querySelector("#employee-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      data.employees.push({
        id: window.MapphexData.uid("EMP"),
        name: values.name,
        role: values.role,
        department: values.department,
        branch: values.branch,
        contractType: values.contractType,
        startDate: values.startDate,
        endDate: "",
        contact: values.contact,
        emergencyContact: "",
        documents: [],
        payroll: { salary: Number(values.salary), allowances: Number(values.allowances), deductions: 0, bank: "", statutoryFields: {} },
        attendance: { checkedIn: "", checkedOut: "", overtime: 0, absences: 0 },
        leave: { annual: 0, sick: 0, other: 0, unpaid: 0, history: [] },
        recruitment: { stage: "Onboarded", source: "Direct" },
        performance: { kpi: config.configurableKpis[0] || "Role KPI", score: 0, comments: "" },
        disciplinary: []
      });
      window.MapphexData.save(data);
      location.reload();
    });
  }

  function dashboard() {
    initShell("HR Dashboard", "Universal staff, attendance, leave, payroll and performance control");
    document.querySelector("#view-root").innerHTML = `${requirementsPanel("hr")}${schemaPanel("employee")}${kpis()}
      <section class="grid two" style="margin-top:16px">
        <article class="panel"><div class="panel-header"><h2>Headcount by department</h2></div><div class="panel-body"><div id="dept-bars"></div></div></article>
        <article class="panel"><div class="panel-header"><h2>Headcount by branch</h2></div><div class="panel-body"><div id="branch-bars"></div></div></article>
      </section>
      <section class="panel"><div class="panel-header"><h2>Recent ${config.labels.staff.toLowerCase()} records</h2><a class="btn primary" href="hr-employees.html">Manage</a></div>${employeeTable()}</section>`;
    const deptItems = data.departments.map((department) => ({ label: department.type, value: window.MapphexData.employeesByDepartment(data, department.type).length }));
    const branchItems = data.branches.map((branch) => ({ label: branch.name, value: window.MapphexData.employeesByBranch(data, branch.name).length }));
    if (deptItems.length) window.MapphexCharts.renderBars("#dept-bars", deptItems);
    else document.querySelector("#dept-bars").innerHTML = `<p class="muted">No departments configured yet.</p>`;
    if (branchItems.length) window.MapphexCharts.renderBars("#branch-bars", branchItems);
    else document.querySelector("#branch-bars").innerHTML = `<p class="muted">No branches configured yet.</p>`;
  }

  function employees() {
    initShell("Employees", "Employee CRUD, profiles, documents and employment data");
    document.querySelector("#view-root").innerHTML = `${requirementsPanel("hr")}${addEmployeeForm()}<section class="panel"><div class="panel-header"><h2>${config.labels.staff} register</h2><button id="employees-csv" class="btn">Export CSV</button></div>${employeeTable()}</section>`;
    wireEmployeeForm();
    document.querySelector("#employees-csv")?.addEventListener("click", () => {
      window.MapphexReports.exportCsv("hr-employees.csv", ["ID", "Name", "Role", "Department", "Branch", "Contract"], data.employees.map((e) => [e.id, e.name, e.role, e.department, e.branch, e.contractType]));
    });
  }

  function detail() {
    initShell("Employee Detail", "Profile, employment, documents, payroll, leave and evidence trail");
    const id = new URLSearchParams(location.search).get("id");
    const employee = data.employees.find((item) => item.id === id) || data.employees[0];
    if (!employee) {
      document.querySelector("#view-root").innerHTML = `${requirementsPanel("hr")}${window.MapphexData.emptyState("No employee selected", "Add employee records first, then open a profile from the register.", "hr-employees.html", "Open employee register")}`;
      return;
    }
    document.querySelector("#view-root").innerHTML = `<section class="panel"><div class="panel-header"><h2>${employee.name}</h2><span class="pill ok">${employee.id}</span></div><div class="panel-body detail-list">
      ${[
        ["Role", employee.role],
        ["Department", employee.department],
        ["Branch", employee.branch],
        ["Contract", employee.contractType],
        ["Contact", employee.contact || "Not set"],
        ["Emergency contact", employee.emergencyContact || "Not set"],
        ["Documents", (employee.documents || []).join(", ") || "No documents"],
        ["Payroll", `${window.MapphexData.money(employee.payroll?.salary)} salary, ${window.MapphexData.money(employee.payroll?.allowances)} allowances`],
        ["Leave balances", `Annual ${employee.leave?.annual || 0}, Sick ${employee.leave?.sick || 0}, Other ${employee.leave?.other || 0}, Unpaid ${employee.leave?.unpaid || 0}`],
        ["Performance", `${employee.performance?.kpi || "Not set"}: ${employee.performance?.score || 0}%`],
        ["Disciplinary", employee.disciplinary?.length ? employee.disciplinary.map((d) => `${d.type} ${d.date}`).join(", ") : "Clear"],
        ["Recruitment", employee.recruitment?.stage || "Not set"]
      ].map(([label, value]) => `<div class="detail-item"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div></section>`;
  }

  function simpleTable(title, headers, rows, extra = "") {
    initShell(title, extra || title);
    const body = rows.length
      ? `<div class="table-wrap"><table><thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`
      : window.MapphexData.emptyState(`No ${title.toLowerCase()} records yet`, "This view will populate after the organization adds records or connects a live data source.");
    document.querySelector("#view-root").innerHTML = `<section class="panel"><div class="panel-header"><h2>${title}</h2><div class="toolbar"><button id="csv" class="btn">Export CSV</button><button id="pdf" class="btn primary">Print PDF</button></div></div>
      ${body}</section>`;
    document.querySelector("#csv")?.addEventListener("click", () => window.MapphexReports.exportCsv(`${title.toLowerCase().replaceAll(" ", "-")}.csv`, headers, rows));
    document.querySelector("#pdf")?.addEventListener("click", () => window.MapphexReports.printPdf(title, window.MapphexReports.tableHtml(headers, rows)));
  }

  function attendance() {
    simpleTable("Attendance", ["Employee", "Branch", "Check-in", "Check-out", "Overtime", "Absences"], data.employees.map((e) => [e.name, e.branch, e.attendance?.checkedIn || "-", e.attendance?.checkedOut || "-", e.attendance?.overtime || 0, e.attendance?.absences || 0]), "Daily check-in/out, overtime and absences");
  }

  function leave() {
    simpleTable("Leave", ["Employee", "Annual", "Sick", "Other", "Unpaid", "History"], data.employees.map((e) => [e.name, e.leave?.annual || 0, e.leave?.sick || 0, e.leave?.other || 0, e.leave?.unpaid || 0, (e.leave?.history || []).join("; ") || "-"]), "Self-service leave balances and history");
  }

  function payroll() {
    simpleTable("Payroll", ["Employee", "Salary", "Allowances", "Deductions", "Net", "Statutory fields"], data.employees.map((e) => {
      const payroll = e.payroll || {};
      return [e.name, window.MapphexData.money(payroll.salary), window.MapphexData.money(payroll.allowances), window.MapphexData.money(payroll.deductions), window.MapphexData.money((payroll.salary || 0) + (payroll.allowances || 0) - (payroll.deductions || 0)), Object.keys(payroll.statutoryFields || {}).join(", ") || "Configurable"];
    }), "Salary, allowances, deductions and configurable statutory fields");
  }

  function recruitment() {
    simpleTable("Recruitment", ["Applicant", "Role", "Stage", "Branch", "Score"], data.applicants.map((a) => [a.name, a.role, a.stage, a.branch, `${a.score}%`]), "Job post to applicant, interview, offer and onboarding");
  }

  function performance() {
    simpleTable("Performance", ["Employee", "KPI", "Score", "Comments"], data.employees.map((e) => [e.name, e.performance?.kpi || "Not set", `${e.performance?.score || 0}%`, e.performance?.comments || ""]), "KPI review cycles, scores and comments");
  }

  function disciplinary() {
    const rows = data.employees.flatMap((e) => (e.disciplinary?.length ? e.disciplinary.map((d) => [e.name, d.type, d.date, d.note, d.evidence]) : [[e.name, "Clear", "-", "-", "-"]]));
    simpleTable("Disciplinary", ["Employee", "Action", "Date", "Note", "Evidence"], rows, "Warnings, suspensions, terminations and evidence trail");
  }

  const routes = { "hr-dashboard": dashboard, "hr-employees": employees, "hr-employee-detail": detail, "hr-attendance": attendance, "hr-leave": leave, "hr-payroll": payroll, "hr-recruitment": recruitment, "hr-performance": performance, "hr-disciplinary": disciplinary };
  routes[page]?.();
})();
