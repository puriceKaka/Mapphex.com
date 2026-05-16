(function () {
  const ACCOUNTS_KEY = "mapphex.accounts.v1";
  const SESSION_KEY = "mapphex.auth.session.v1";

  const ROLE_HOME = {
    super_admin: "../admin/super-admin.html",
    director: "../director/Director.html",
    hr: "../hr/hr-dashboard.html",
    branch: "../branches/branch-dashboard.html",
    finance: "../departments/departments-finance.html",
    operations: "../departments/departments-operations.html",
    sales: "../departments/departments-sales.html",
    admin: "../departments/departments-admin.html",
    staff: "../staff/staff-portal.html"
  };

  const ROLE_LABELS = {
    super_admin: "Super Admin",
    director: "Director",
    hr: "HR",
    branch: "Branch Manager",
    finance: "Finance",
    operations: "Operations",
    sales: "Sales",
    admin: "Admin",
    staff: "Staff"
  };

  const RULES = [
    { test: /admin\/super-admin\.html$/, roles: ["super_admin"] },
    { test: /director\/Director\.html$/, roles: ["super_admin", "director"] },
    { test: /director\/director-accounts\.html$/, roles: ["super_admin", "director"] },
    { test: /hr\/hr-/, roles: ["super_admin", "director", "hr"] },
    { test: /branches\/branch-directory\.html$/, roles: ["super_admin", "director", "hr"] },
    { test: /branches\/branch-dashboard\.html$/, roles: ["super_admin", "director", "branch"] },
    { test: /branches\/branch-(staff|inventory|sales|finance|transfers|assets)\.html$/, roles: ["super_admin", "director", "branch"] },
    { test: /departments\/departments-hub\.html$/, roles: ["super_admin", "director"] },
    { test: /departments\/departments-hr\.html$/, roles: ["super_admin", "director", "hr"] },
    { test: /departments\/departments-finance\.html$/, roles: ["super_admin", "director", "finance"] },
    { test: /departments\/departments-operations\.html$/, roles: ["super_admin", "director", "operations"] },
    { test: /departments\/departments-sales\.html$/, roles: ["super_admin", "director", "sales"] },
    { test: /departments\/departments-admin\.html$/, roles: ["super_admin", "director", "admin"] },
    { test: /reports\/reports-/, roles: ["super_admin", "director", "hr", "finance"] },
    { test: /staff\/staff-portal\.html$/, roles: ["super_admin", "director", "hr", "branch", "finance", "operations", "sales", "admin", "staff"] }
  ];

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function hashPassword(value) {
    const text = String(value || "");
    let hash = 2166136261;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    }
    return `pw_${(hash >>> 0).toString(36)}`;
  }

  function id(prefix) {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  }

  function normalizeRole(role) {
    return String(role || "staff").trim().toLowerCase().replace(/\s+/g, "_");
  }

  function getAccounts() {
    return readJson(ACCOUNTS_KEY, []);
  }

  function saveAccounts(accounts) {
    writeJson(ACCOUNTS_KEY, Array.isArray(accounts) ? accounts : []);
  }

  function createAccount(input) {
    const accounts = getAccounts();
    const username = String(input.username || "").trim().toLowerCase();
    if (!username) return { ok: false, error: "Username is required." };
    if (accounts.some((account) => account.username === username)) return { ok: false, error: "Username already exists." };
    const account = {
      id: id("user"),
      username,
      passwordHash: hashPassword(input.password || ""),
      role: normalizeRole(input.role),
      name: String(input.name || username).trim(),
      email: String(input.email || "").trim(),
      phone: String(input.phone || "").trim(),
      orgId: String(input.orgId || "").trim(),
      branchId: String(input.branchId || "").trim(),
      departmentId: String(input.departmentId || "").trim(),
      employeeId: String(input.employeeId || "").trim(),
      status: input.status || "active",
      mustChangePassword: input.mustChangePassword !== false,
      createdAt: new Date().toISOString(),
      lastLogin: ""
    };
    accounts.push(account);
    saveAccounts(accounts);
    return { ok: true, account };
  }

  function updateAccount(accountId, patch) {
    const accounts = getAccounts();
    const index = accounts.findIndex((account) => account.id === accountId);
    if (index < 0) return { ok: false, error: "Account not found." };
    const next = { ...patch };
    if (next.password) {
      next.passwordHash = hashPassword(next.password);
      delete next.password;
    }
    if (next.role) next.role = normalizeRole(next.role);
    accounts[index] = { ...accounts[index], ...next };
    saveAccounts(accounts);
    return { ok: true, account: accounts[index] };
  }

  function deleteAccount(accountId) {
    saveAccounts(getAccounts().filter((account) => account.id !== accountId));
  }

  function authenticate(username, password) {
    const account = getAccounts().find((item) => item.username === String(username || "").trim().toLowerCase());
    if (!account || account.status !== "active" || account.passwordHash !== hashPassword(password)) {
      return { ok: false, error: "Invalid username or password." };
    }
    updateAccount(account.id, { lastLogin: new Date().toISOString() });
    return { ok: true, account: { ...account, lastLogin: new Date().toISOString() } };
  }

  function getSession() {
    return readJson(SESSION_KEY, null);
  }

  function setSession(account) {
    const session = {
      id: account.id,
      username: account.username,
      name: account.name,
      role: normalizeRole(account.role),
      orgId: account.orgId,
      branchId: account.branchId,
      departmentId: account.departmentId,
      employeeId: account.employeeId,
      loginAt: new Date().toISOString()
    };
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  function loginUrl() {
    return "../auth/login.html";
  }

  function roleHome(role) {
    return ROLE_HOME[normalizeRole(role)] || "../auth/login.html";
  }

  function guard(roles) {
    const session = getSession();
    const path = location.pathname.replace(/\\/g, "/");
    if (!session) {
      location.href = `${loginUrl()}?redirect=${encodeURIComponent(location.href)}`;
      return false;
    }
    const allowed = Array.isArray(roles) && roles.length
      ? roles.map(normalizeRole)
      : (RULES.find((rule) => rule.test.test(path))?.roles || null);
    if (allowed && !allowed.includes(session.role)) {
      location.href = roleHome(session.role);
      return false;
    }
    if (session.role === "staff" && !/staff\/staff-portal\.html$/.test(path)) {
      location.href = "../staff/staff-portal.html";
      return false;
    }
    return true;
  }

  function logout() {
    clearSession();
    location.href = loginUrl();
  }

  function bootstrap() {
    if (getAccounts().length) return;
    createAccount({ username: "director", password: "Mapphex@123", role: "director", name: "Director", mustChangePassword: false });
    createAccount({ username: "superadmin", password: "Super@Admin1", role: "super_admin", name: "Super Admin", mustChangePassword: false });
  }

  function currentRoleLabel() {
    const session = getSession();
    return ROLE_LABELS[session?.role] || "Guest";
  }

  function decorate() {
    const session = getSession();
    const name = document.querySelector("#user-name-display");
    const role = document.querySelector("#user-role-display");
    if (name && session) name.textContent = session.name || session.username;
    if (role) role.textContent = currentRoleLabel();
    document.querySelectorAll("[data-logout], #logout-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        logout();
      });
    });
  }

  window.MapphexAuth = {
    ROLE_HOME,
    ROLE_LABELS,
    getAccounts,
    saveAccounts,
    createAccount,
    updateAccount,
    deleteAccount,
    authenticate,
    hashPassword,
    getSession,
    setSession,
    clearSession,
    guard,
    logout,
    roleHome,
    bootstrap,
    decorate
  };

  document.addEventListener("DOMContentLoaded", () => {
    bootstrap();
    decorate();
  });
})();
