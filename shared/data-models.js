(function () {
  const STORE_KEY = "mapphex.modules.v1";
  const CONFIG_KEY = "mapphex.org.config.v1";

  const defaultConfig = {
    businessType: "General Business",
    currency: "KES",
    locale: "en-KE",
    labels: {
      staff: "Employee",
      branch: "Branch",
      department: "Department",
      stockItem: "Item",
      transaction: "Transaction",
      customer: "Customer",
      supplier: "Supplier"
    },
    enabledModules: ["hr", "departments", "branches", "reports"],
    departmentTypes: [
      "Admin",
      "Finance",
      "HR",
      "Operations",
      "Sales",
      "IT",
      "Legal",
      "Procurement",
      "Customer Service",
      "Logistics",
      "Production",
      "Quality Assurance",
      "Marketing",
      "Security"
    ],
    configurableKpis: [
      "Revenue",
      "Attendance rate",
      "Task completion",
      "Budget utilization",
      "Customer response time"
    ],
    customFields: {
      employee: [],
      department: [],
      branch: [],
      inventoryItem: [],
      transaction: [],
      report: []
    }
  };

  const requirements = {
    hr: [
      "Define employee profile fields required by the organization.",
      "Create departments and branches before assigning employees.",
      "Set leave types, payroll fields, attendance rules and role permissions.",
      "Attach document categories such as contracts, IDs, certificates or any organization-specific records."
    ],
    departments: [
      "Define department types and codes.",
      "Assign department heads from the employee register.",
      "Configure budgets, KPI names, document categories and task stages.",
      "Connect departments to branches only when the organization operates across locations."
    ],
    branches: [
      "Create branch/location records with region, manager and contact fields.",
      "Choose whether each branch tracks stock, sales, cash, assets or only staff.",
      "Configure inventory item labels, units, transfer approvals and branch KPI names.",
      "Use generic item and transaction fields so different business types can reuse the module."
    ],
    reports: [
      "Select enabled modules as report sources.",
      "Configure report categories, filters, recipients and schedule frequency.",
      "Map custom fields into export columns.",
      "Use PDF/CSV export from the shared report engine."
    ]
  };

  const schemas = {
    employee: {
      profile: ["name", "identifier", "photo", "contact", "emergencyContact"],
      employment: ["departmentId", "branchId", "role", "contractType", "startDate", "endDate"],
      documents: ["category", "name", "url", "expiresAt"],
      payroll: ["salary", "allowances", "deductions", "bankDetails", "statutoryFields"],
      attendance: ["date", "checkIn", "checkOut", "overtime", "absenceReason"],
      leave: ["type", "balance", "startDate", "endDate", "status"],
      recruitment: ["jobPost", "applicant", "interview", "offer", "onboarding"],
      performance: ["kpi", "cycle", "score", "comments"],
      disciplinary: ["action", "date", "status", "evidence"]
    },
    department: {
      identity: ["name", "code", "type", "description"],
      people: ["managerId", "memberIds"],
      operations: ["budget", "tasks", "documents", "kpis"]
    },
    branch: {
      identity: ["name", "code", "location", "region", "contact", "managerId"],
      operations: ["staffIds", "inventory", "sales", "finance", "transfers", "assets", "performance"]
    },
    report: {
      identity: ["name", "category", "description"],
      source: ["module", "filters", "columns"],
      delivery: ["formats", "schedule", "recipients"]
    }
  };

  const emptyData = {
    employees: [],
    departments: [],
    branches: [],
    applicants: [],
    audit: []
  };

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalizeData(value) {
    const source = value && typeof value === "object" ? value : {};
    return {
      employees: Array.isArray(source.employees) ? source.employees : [],
      departments: Array.isArray(source.departments) ? source.departments : [],
      branches: Array.isArray(source.branches) ? source.branches : [],
      applicants: Array.isArray(source.applicants) ? source.applicants : [],
      audit: Array.isArray(source.audit) ? source.audit : []
    };
  }

  function isLegacyDemoData(value) {
    const legacyMarker = ["Seeded", "universal"].join(" ");
    return value?.audit?.some?.((entry) => String(entry.action || "").includes(legacyMarker));
  }

  function loadConfig() {
    try {
      const saved = JSON.parse(localStorage.getItem(CONFIG_KEY) || "null");
      return mergeConfig(defaultConfig, saved);
    } catch {
      return clone(defaultConfig);
    }
  }

  function mergeConfig(base, override) {
    const merged = clone(base);
    if (!override || typeof override !== "object") return merged;
    Object.assign(merged, override);
    merged.labels = Object.assign({}, base.labels, override.labels || {});
    merged.customFields = Object.assign({}, base.customFields, override.customFields || {});
    merged.departmentTypes = Array.isArray(override.departmentTypes) ? override.departmentTypes : base.departmentTypes;
    merged.configurableKpis = Array.isArray(override.configurableKpis) ? override.configurableKpis : base.configurableKpis;
    merged.enabledModules = Array.isArray(override.enabledModules) ? override.enabledModules : base.enabledModules;
    return merged;
  }

  function saveConfig(config) {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(mergeConfig(defaultConfig, config)));
  }

  function load() {
    const saved = localStorage.getItem(STORE_KEY);
    if (!saved) {
      localStorage.setItem(STORE_KEY, JSON.stringify(emptyData));
      return clone(emptyData);
    }
    try {
      const parsed = JSON.parse(saved);
      if (isLegacyDemoData(parsed)) {
        localStorage.setItem(STORE_KEY, JSON.stringify(emptyData));
        return clone(emptyData);
      }
      return normalizeData(parsed);
    } catch (error) {
      console.warn("MAPPHEX module data reset after invalid localStorage payload", error);
      localStorage.setItem(STORE_KEY, JSON.stringify(emptyData));
      return clone(emptyData);
    }
  }

  function save(data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(normalizeData(data)));
  }

  function resetData() {
    localStorage.setItem(STORE_KEY, JSON.stringify(emptyData));
    return clone(emptyData);
  }

  function money(value) {
    const config = loadConfig();
    return new Intl.NumberFormat(config.locale || "en-KE", {
      style: "currency",
      currency: config.currency || "KES",
      maximumFractionDigits: 0
    }).format(Number(value || 0));
  }

  function number(value) {
    const config = loadConfig();
    return new Intl.NumberFormat(config.locale || "en-KE").format(Number(value || 0));
  }

  function uid(prefix) {
    return `${prefix}-${Date.now().toString(36).toUpperCase()}`;
  }

  function employeesByDepartment(data, department) {
    return normalizeData(data).employees.filter((employee) => employee.department === department || employee.departmentId === department);
  }

  function employeesByBranch(data, branch) {
    return normalizeData(data).employees.filter((employee) => employee.branch === branch || employee.branchId === branch);
  }

  function sum(values) {
    return (Array.isArray(values) ? values : []).reduce((total, value) => total + Number(value || 0), 0);
  }

  function optionList(values, fallback) {
    const list = Array.isArray(values) && values.length ? values : fallback;
    return list.map((value) => `<option value="${String(value).replace(/"/g, "&quot;")}">${value}</option>`).join("");
  }

  function emptyState(title, message, actionHref, actionLabel) {
    return `<section class="empty-state"><h2>${title}</h2><p>${message}</p>${actionHref ? `<a class="btn primary" href="${actionHref}">${actionLabel || "Configure"}</a>` : ""}</section>`;
  }

  function collection(name) {
    return load()[name] || [];
  }

  function upsert(collectionName, record) {
    const data = load();
    const rows = Array.isArray(data[collectionName]) ? data[collectionName] : [];
    const next = Object.assign({}, record);
    if (!next.id) next.id = uid(collectionName.slice(0, 3).toUpperCase());
    const index = rows.findIndex((item) => item.id === next.id);
    if (index >= 0) rows[index] = Object.assign({}, rows[index], next);
    else rows.push(next);
    data[collectionName] = rows;
    save(data);
    return next;
  }

  function remove(collectionName, id) {
    const data = load();
    data[collectionName] = (data[collectionName] || []).filter((item) => item.id !== id);
    save(data);
  }

  window.MapphexData = {
    orgConfig: defaultConfig,
    requirements,
    schemas,
    loadConfig,
    saveConfig,
    load,
    save,
    resetData,
    money,
    number,
    uid,
    employeesByDepartment,
    employeesByBranch,
    sum,
    optionList,
    emptyState,
    getEmployees: () => collection("employees"),
    getBranches: () => collection("branches"),
    getDepartments: () => collection("departments"),
    addEmployee: (record) => upsert("employees", record),
    updateEmployee: (id, patch) => upsert("employees", Object.assign({}, patch, { id })),
    deleteEmployee: (id) => remove("employees", id),
    addBranch: (record) => upsert("branches", record),
    updateBranch: (id, patch) => upsert("branches", Object.assign({}, patch, { id })),
    deleteBranch: (id) => remove("branches", id),
    addDepartment: (record) => upsert("departments", record),
    updateDepartment: (id, patch) => upsert("departments", Object.assign({}, patch, { id })),
    deleteDepartment: (id) => remove("departments", id)
  };
})();
