const metricSets = {
  admin: [
    ["Total Revenue", "KSh 42.8M", "+12.4% month over month", "positive"],
    ["Active Branches", "47", "44 healthy, 3 watching", "positive"],
    ["Pending Approvals", "18", "6 high priority", "warning"],
    ["ERP Health", "97.2%", "Integration latency elevated", "warning"],
  ],
  staff: [
    ["Profile Status", "Open", "Your HR record", "positive"],
    ["Leave Balance", "18 days", "Personal entitlement", "positive"],
    ["Attendance", "QR/Bio", "Self check-in ready", "positive"],
    ["Personal File", "Private", "Only your information", "positive"],
  ],
  customer: [
    ["Open Orders", "4", "2 arriving this week", "positive"],
    ["Payments Due", "KSh 680K", "Due May 28", "warning"],
    ["Reward Points", "18,420", "+1,240 this quarter", "positive"],
    ["Support Tickets", "2", "1 awaiting reply", "warning"],
  ],
};

const staffFeatureGroups = [
  ["Access & Identity", [
    "Smart Self-Registration",
    "Secure Login with OTP/2FA",
    "Digital ID/Profile Card",
    "Face Recognition Login (Optional)",
    "Digital Signature Support",
  ]],
  ["Personal HR", [
    "Personal Dashboard",
    "Profile Management",
    "Emergency Contact Management",
    "Profile Completion Progress",
    "Activity History/Logs",
  ]],
  ["Documents & Policies", [
    "Upload CV, Certificates & Documents",
    "Cloud Document Storage",
    "Download Employment Letters",
    "View Company Policies",
    "Multi-Language Support",
  ]],
  ["Attendance, Time & Leave", [
    "Worker Sign-In",
    "Biometric Attendance Check-In",
    "QR Code Attendance",
    "Online Leave Application",
    "Leave Balance Tracking",
    "Work Schedule/Calendar Access",
    "Overtime Request Submission",
  ]],
  ["Pay, Tax & Expenses", [
    "Payslip Download",
    "Tax and Deduction Viewing",
    "Expense Reimbursement Requests",
  ]],
  ["Work, Growth & Performance", [
    "Task and Assignment Tracking",
    "Performance Review Tracking",
    "Training and E-Learning Access",
    "Skill and Certification Management",
    "Career Development Tracking",
    "Goal/KPI Tracking",
    "Promotion Application Tracking",
    "Staff Achievements/Badges",
  ]],
  ["Communication & Support", [
    "Internal Messaging/Chat with HR",
    "Staff Support Ticket System",
    "AI Chatbot Support/Help Desk",
    "Team Collaboration Tools",
    "Staff Survey Participation",
  ]],
  ["Notifications & Experience", [
    "Company News Feed",
    "Push/Email Notifications",
    "Meeting Reminders",
    "Birthday/Work Anniversary Notifications",
    "Notification Center",
    "Dark Mode/Light Mode Settings",
    "Mobile App Access",
    "Employee Wellness Resources",
    "Personalized Dashboard Widgets",
  ]],
];

const staffRestrictions = [
  "Access only their own information",
  "Not view other employees' records",
  "Not manage payroll or HR settings",
  "Not approve administrative actions",
  "Not delete company records",
  "Not access admin dashboards",
];

const customerFeatureGroups = [
  ["Customer Dashboard", [
    "Customer Dashboard",
    "Personalized Dashboard",
    "Account Overview",
    "Activity Tracking",
    "Personalized Recommendations",
    "Personalized Homepage",
    "Personalized Widgets for Customers",
    "Dark/Light Mode",
  ]],
  ["Product & Service Features", [
    "Browse Available Products",
    "Search for Products",
    "Filter Products",
    "Product Details & Specifications",
    "Product Images/Videos",
    "Real-Time Product Availability",
    "Stock Status",
    "Compare Products",
    "Wishlist",
    "Cart",
    "Buy/Order Products Online",
  ]],
  ["Order & Payment Features", [
    "Secure Online Payments",
    "Order Tracking",
    "Order History",
    "Download Invoices/Receipts",
    "Payment History",
    "Subscription Management",
    "Booking & Appointment Scheduling",
  ]],
  ["Smart Modern Features", [
    "AI Product Recommendations",
    "Smart Search Suggestions",
    "Voice Search",
    "Mobile-Friendly Design",
    "QR Code Support",
    "Real-Time Updates",
  ]],
  ["Communication & Support", [
    "Live Chat Support",
    "AI Chatbot Assistant",
    "Support Ticket System",
    "Customer Feedback/Reviews",
    "FAQ/Help Center",
    "Messaging with Support Team",
  ]],
  ["Premium User Experience", [
    "Mobile App Integration",
    "Responsive Modern Design",
    "Multi-Language Support",
    "Cloud Document Storage",
    "Digital Signatures",
    "Fast Loading Dashboard",
  ]],
];

const portalConfig = {
  admin: {
    eyebrow: "HQ Management System",
    title: "Enterprise operations command platform",
    description: "Executive control, branch intelligence, financial governance, security, approvals, inventory, and predictive analytics across the whole ERP.",
    search: "Search approvals, branches, users, invoices, inventory...",
    pins: ["Operations Command Center", "Interactive Branch Map", "Approval Workflow", "Security Center", "Biometric Registration"],
    groups: [
      ["Dashboards", ["Executive Dashboard", "Revenue Analytics", "Branch Performance", "Financial Overview", "Real-Time Activity Center"]],
      ["Branch Management", ["All Branches", "Branch Details", "Branch Transfers", "Branch Comparison", "Branch Analytics Map"]],
      ["User & Staff", ["All Employees", "Departments", "Roles & Permissions", "Biometric Registration", "Staff Activity Logs", "Attendance Monitoring", "Staff Performance"]],
      ["Financial", ["Revenue Reports", "Expenses", "Payroll Overview", "Tax Reports", "Transactions", "Budget Planning"]],
      ["Inventory & Logistics", ["Global Inventory", "Stock Monitoring", "Warehouse Tracking", "Inter-Branch Transfers", "Supplier Management"]],
      ["Approvals", ["Pending Approvals", "Procurement Requests", "Leave Approvals", "Expense Approvals", "Workflow History"]],
      ["System Admin", ["ERP Settings", "API Integrations", "Security Center", "Biometric Registration", "Audit Logs", "Backup & Recovery"]],
      ["Analytics & Reports", ["Interactive Charts", "KPI Reports", "Forecasting", "Branch Heatmaps", "Export Center", "Heatmap Analytics", "KPI Trends", "Forecast Cards", "Custom Widget Board", "AI Assistant"]],
      ["Collaboration", ["Team Chat", "Shared Dashboard"]],
    ],
  },
  staff: {
    eyebrow: "Staff Portal",
    title: "Your private staff self-service center",
    description: "Self-registration, secure login, attendance, leave, payroll documents, HR support, learning, performance, and private profile management. Staff only see their own record.",
    search: "Search your profile, attendance, leave, payslips, documents, tickets...",
    pins: ["Personal Dashboard", "Worker Sign-In", "Digital ID/Profile Card", "QR Code Attendance", "Online Leave Application", "Payslip Download", "Staff Restrictions", "Team Chat", "AI Assistant"],
    groups: [
      ["Dashboard", ["Personal Dashboard", "My Staff Card", "My HR Information", "Profile Management", "Profile Completion Progress"]],
      ...staffFeatureGroups,
      ["Collaboration", ["Team Chat", "Shared Dashboard", "AI Assistant"]],
      ["Access Rules", ["Staff Restrictions"]],
    ],
  },
  customer: {
    eyebrow: "Client Self-Service System",
    title: "Personalized customer dashboard and product portal",
    description: "A complete customer hub for account overview, product browsing, smart recommendations, orders, payments, subscriptions, support, reviews, and premium self-service features.",
    search: "Search products, orders, invoices, payments, tickets, rewards...",
    pins: ["Customer Dashboard", "Browse Available Products", "Search for Products", "Order Tracking", "Secure Online Payments", "AI Chatbot Assistant"],
    groups: [
      ...customerFeatureGroups,
      ["Loyalty & Rewards", ["Loyalty Dashboard", "Reward Points", "Promotions", "Referral Program", "Redeem Rewards"]],
      ["Profile Management", ["Personal Info", "Addresses", "Preferences", "Security Settings"]],
      ["Search", ["Search Center"]],
      ["Legacy Orders", ["Active Orders", "Invoices", "Payment Methods", "Billing History", "Receipts", "Transactions", "Smart Recommendations", "Support Tickets", "Live Chat", "FAQ", "Knowledge Base", "AI Chatbot"]],
    ],
  },
};

const globalPages = ["Messages", "Activity Feed", "Activity Dashboard", "Settings", "Theme Customization", "Search Center"];

let notifications = [
  ["high", "Purchase approval waiting", "Nakuru branch requested KSh 1.8M inventory replenishment.", false],
  ["medium", "Stock threshold reached", "Medical supplies category is below 18% in Eldoret.", false],
  ["low", "Customer ticket updated", "Enterprise client AlphaChem added a payment document.", false],
  ["high", "ERP health warning", "Integration queue latency rose above normal limits.", false],
  ["medium", "HR request", "3 leave requests need review before payroll cutoff.", true],
  ["low", "Payment received", "Vendor invoice INV-9082 reconciled automatically.", true],
];

const searchIndex = [
  ["Invoice INV-9082", "Finance", "Paid vendor invoice from Kisumu branch"],
  ["AlphaChem Industries", "Customer", "Enterprise account with monthly reports"],
  ["Amina Njoroge", "Staff", "Branch operations lead, Mombasa"],
  ["Nakuru Branch", "Branch", "Inventory alert and high sales velocity"],
  ["Protective Gloves", "Product", "Fast moving stock item"],
  ["Q2 Revenue Forecast", "Report", "Executive analytics model"],
  ["Transfer TR-4401", "Inventory", "Warehouse to branch movement"],
  ["Ticket #5021", "Support", "Payment allocation review"],
  ["Branch Heatmaps", "Analytics", "Live branch performance map"],
  ["ORD-7719", "Order", "Tracked shipment dispatched from Nairobi hub"],
  ["Reward Points", "Loyalty", "Customer loyalty tier and redemption status"],
  ["Payment Receipt RCT-3344", "Payments", "Paid invoice for last delivery"],
  ["Live Chat", "Support", "Open a chat with a support agent"],
  ["Delivery ETA", "Tracking", "Order expected to arrive tomorrow"],
  ["Customer Analytics", "Dashboard", "Monthly spend and order frequency"],
  ["Security Center", "Admin", "Audit, sessions, and access policies"],
];

const liveActivityData = [
  { type: "sale", icon: "📊", title: "Sale Completed", description: "Mombasa branch closed KSh 2.4M customer deal", branch: "Mombasa", timestamp: "now", tone: "positive" },
  { type: "approval", icon: "✓", title: "Approval Granted", description: "Procurement request for medical supplies approved", branch: "Kisumu", timestamp: "2m ago", tone: "positive" },
  { type: "inventory", icon: "📦", title: "Stock Alert", description: "Protective gloves inventory below 300 units", branch: "Nakuru", timestamp: "5m ago", tone: "warning" },
  { type: "transfer", icon: "🔄", title: "Transfer Initiated", description: "500 units transferred from HQ to Eldoret", branch: "HQ", timestamp: "8m ago", tone: "info" },
  { type: "customer", icon: "👤", title: "New Customer", description: "AlphaChem Industries registered as enterprise account", branch: "Online", timestamp: "14m ago", tone: "positive" },
  { type: "hr", icon: "👥", title: "Leave Request", description: "5 new leave requests pending review", branch: "All", timestamp: "22m ago", tone: "warning" },
  { type: "payment", icon: "💰", title: "Payment Received", description: "KSh 850K payment from vendor reconciled", branch: "Finance", timestamp: "31m ago", tone: "positive" },
  { type: "system", icon: "⚙", title: "Health Check", description: "ERP system health is 97.2%, all systems nominal", branch: "System", timestamp: "45m ago", tone: "positive" },
];

const appShell = document.querySelector(".app-shell");
const dashboard = document.querySelector("#dashboard");
const navStack = document.querySelector("#navStack");
const pinList = document.querySelector("#pinList");
const sidebar = document.querySelector(".sidebar");
const pageDrawer = document.querySelector("#pageDrawer");
const pageDrawerList = document.querySelector("#pageDrawerList");
const portal = document.body.dataset.portal || "admin";
let currentView = firstPage(portal);
let revenueChart;
let comparisonChart;
let activeEmailCode = "";
let liveNotificationTimer;
let latestRegistration = null;
let loginAttempts = 0;
let loginCooldownEnd = 0;

const roleAccess = {
  admin: {
    Executive: [/./],
    Finance: [/Dashboard|Revenue|Financial|Expense|Payroll|Tax|Transaction|Budget|Approval|Reports|KPI|Forecasting|Settings|Notifications|Search/],
    HR: [/Dashboard|Employee|Departments|Roles|Staff|Attendance|Performance|Leave|Payroll|Approval|Biometric|Registration|Settings|Notifications|Search/],
    Operations: [/Dashboard|Branch|Inventory|Stock|Warehouse|Transfers|Supplier|Activity|Reports|Settings|Notifications|Search/],
    Security: [/Dashboard|Security|Audit|Session|OTP|API|Backup|Biometric|Registration|Settings|Notifications|Search/],
  },
  staff: {
    "Records Officer": [/./],
    Supervisor: [/./],
    "Admin Assistant": [/./],
  },
  customer: {
    Buyer: [/./],
    Finance: [/./],
    Support: [/./],
    "Admin Contact": [/./],
  },
};

// PREMIUM FEATURES SYSTEM
const premiumFeatures = {
  twoFactorAuth: true,
  auditLogging: true,
  sessionManagement: true,
  passwordPolicies: true,
  ipWhitelisting: true,
  accountLockout: true,
  activityDashboard: true,
  dataEncryption: true,
  backupRecovery: true,
  roleBasedAccess: true,
};

// Basic encryption/decryption (caesar cipher for demo)
function encryptData(data, shift = 7) {
  return String(data).split('').map(c => String.fromCharCode(c.charCodeAt(0) + shift)).join('');
}

function decryptData(data, shift = 7) {
  return String(data).split('').map(c => String.fromCharCode(c.charCodeAt(0) - shift)).join('');
}

// Audit logging
function auditLog(userId, action, details = {}) {
  const key = `mapphex-${portal}-audit-logs`;
  const logs = JSON.parse(localStorage.getItem(key)) || [];
  logs.push({
    timestamp: new Date().toISOString(),
    userId,
    action,
    details,
    ip: getUserIP(),
  });
  localStorage.setItem(key, JSON.stringify(logs.slice(-500)));
}

// Session management
function createSession(userId, userEmail) {
  const sessionId = Math.random().toString(36).substring(2, 15) + Date.now();
  const key = `mapphex-${portal}-sessions`;
  const sessions = JSON.parse(localStorage.getItem(key)) || [];
  const session = {
    id: sessionId,
    userId,
    userEmail,
    createdAt: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
    ip: getUserIP(),
    userAgent: navigator.userAgent.substring(0, 100),
  };
  sessions.push(session);
  localStorage.setItem(key, JSON.stringify(sessions.slice(-50)));
  sessionStorage.setItem(`mapphex-${portal}-session-id`, sessionId);
  return sessionId;
}

function updateSessionActivity() {
  const key = `mapphex-${portal}-sessions`;
  const sessionId = sessionStorage.getItem(`mapphex-${portal}-session-id`);
  const sessions = JSON.parse(localStorage.getItem(key)) || [];
  const session = sessions.find(s => s.id === sessionId);
  if (session) {
    session.lastActivity = new Date().toISOString();
    localStorage.setItem(key, JSON.stringify(sessions));
  }
}

// Get user IP (simulated)
function getUserIP() {
  const ips = ["192.168.1.100", "10.0.0.50", "172.16.0.25", "203.0.113.42"];
  return ips[Math.floor(Math.random() * ips.length)];
}

// Password policy enforcement
function validatePasswordPolicy(password) {
  const errors = [];
  if (password.length < 8) errors.push("Password must be at least 8 characters");
  if (!/[A-Z]/.test(password)) errors.push("Password must contain uppercase letter");
  if (!/[a-z]/.test(password)) errors.push("Password must contain lowercase letter");
  if (!/[0-9]/.test(password)) errors.push("Password must contain number");
  if (!/[!@#$%^&*]/.test(password)) errors.push("Password must contain special character (!@#$%^&*)");
  return { valid: errors.length === 0, errors };
}

// Check password history (prevent reuse)
function isPasswordReused(userId, password) {
  const key = `mapphex-${portal}-password-history-${userId}`;
  const history = JSON.parse(localStorage.getItem(key)) || [];
  return history.some(h => h.password === encryptData(password));
}

function addToPasswordHistory(userId, password) {
  const key = `mapphex-${portal}-password-history-${userId}`;
  const history = JSON.parse(localStorage.getItem(key)) || [];
  history.push({
    password: encryptData(password),
    changedAt: new Date().toISOString(),
  });
  localStorage.setItem(key, JSON.stringify(history.slice(-5)));
}

// IP Whitelisting
function addWhitelistedIP(userId, ip) {
  const key = `mapphex-${portal}-whitelist-${userId}`;
  const ips = JSON.parse(localStorage.getItem(key)) || [];
  if (!ips.find(entry => entry.ip === ip)) {
    ips.push({ ip, addedAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(ips));
  }
}

function isIPWhitelisted(userId, ip) {
  const key = `mapphex-${portal}-whitelist-${userId}`;
  const ips = JSON.parse(localStorage.getItem(key)) || [];
  return ips.length === 0 || ips.some(entry => entry.ip === ip);
}

// 2FA Code generation and verification
function generate2FACode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function save2FACode(userId, code) {
  const key = `mapphex-${portal}-2fa-${userId}`;
  localStorage.setItem(key, JSON.stringify({
    code,
    createdAt: Date.now(),
    expiresAt: Date.now() + 10 * 60 * 1000, // 10 minutes
  }));
}

function verify2FACode(userId, code) {
  const key = `mapphex-${portal}-2fa-${userId}`;
  const stored = JSON.parse(localStorage.getItem(key) || "null");
  if (!stored) return { valid: false, message: "No 2FA code sent" };
  if (Date.now() > stored.expiresAt) {
    localStorage.removeItem(key);
    return { valid: false, message: "2FA code expired" };
  }
  if (stored.code !== code) return { valid: false, message: "Invalid 2FA code" };
  localStorage.removeItem(key);
  return { valid: true };
}

// Account lockout (enhanced)
function recordFailedLogin(userId) {
  const key = `mapphex-${portal}-failed-${userId}`;
  const attempts = JSON.parse(localStorage.getItem(key) || "[]");
  attempts.push(Date.now());
  const recentAttempts = attempts.filter(t => Date.now() - t < 15 * 60 * 1000);
  localStorage.setItem(key, JSON.stringify(recentAttempts));
  return recentAttempts.length;
}

function isAccountLocked(userId) {
  const key = `mapphex-${portal}-failed-${userId}`;
  const attempts = JSON.parse(localStorage.getItem(key) || "[]");
  const recentAttempts = attempts.filter(t => Date.now() - t < 15 * 60 * 1000);
  return recentAttempts.length >= 5;
}

function resetFailedLogins(userId) {
  const key = `mapphex-${portal}-failed-${userId}`;
  localStorage.removeItem(key);
}

// Activity log (for dashboard)
function logActivity(userId, type, description) {
  const key = `mapphex-${portal}-activity-${userId}`;
  const activities = JSON.parse(localStorage.getItem(key)) || [];
  activities.unshift({
    timestamp: new Date().toISOString(),
    type,
    description,
  });
  localStorage.setItem(key, JSON.stringify(activities.slice(0, 100)));
}

// Backup system
function backupPortalData() {
  const backup = {
    exportedAt: new Date().toISOString(),
    portal,
    users: getAllRegisteredUsersForPortal(),
    profiles: localStorage.getItem(`mapphex-${portal}-profile`),
    auditLogs: JSON.parse(localStorage.getItem(`mapphex-${portal}-audit-logs`) || "[]"),
    sessions: JSON.parse(localStorage.getItem(`mapphex-${portal}-sessions`) || "[]"),
  };
  return JSON.stringify(backup, null, 2);
}

function downloadBackup() {
  const backup = backupPortalData();
  const blob = new Blob([backup], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `mapphex-${portal}-backup-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  auditLog("system", "backup_exported", { backupSize: backup.length });
}

// Activity dashboard data
function getActivityDashboard(userId = null) {
  const key = `mapphex-${portal}-activity-${userId || getStoredProfile().companyEmail}`;
  const activities = JSON.parse(localStorage.getItem(key)) || [];
  const auditLogs = JSON.parse(localStorage.getItem(`mapphex-${portal}-audit-logs`) || "[]");
  const sessions = JSON.parse(localStorage.getItem(`mapphex-${portal}-sessions`) || "[]");
  
  return {
    recentActivities: activities.slice(0, 20),
    auditTrail: auditLogs.filter(log => log.userId === (userId || getStoredProfile().companyEmail)).slice(0, 20),
    activeSessions: sessions.filter(s => Date.now() - new Date(s.lastActivity).getTime() < 30 * 60 * 1000),
  };
}

if (appShell && dashboard) {

  bootPortal();
  registerServiceWorker();
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(() => {
      console.log('MAPPHEX service worker registered.');
    }).catch(() => {
      console.log('Service worker registration failed.');
    });
  });
}

function bootPortal() {
  const config = portalConfig[portal];
  bindAuthGate();
  loadPersistedState();
  document.title = `MAPPHEX ERP - ${config.eyebrow}`;
  document.querySelector("#portalEyebrow").textContent = config.eyebrow;
  document.querySelector("#portalTitle").textContent = config.title;
  document.querySelector("#portalDescription").textContent = config.description;
  document.querySelector("#globalSearch").placeholder = config.search;

  renderNavigation();
  pinList.innerHTML = config.pins.map((pin) => `<button class="pin" type="button" data-pin="${pin}"><span>${pin}</span><span>Open</span></button>`).join("");
  renderNotifications();
  renderView(firstPage(portal));
  bindShellEvents();
  startLiveNotifications();
}

function firstPage(activePortal) {
  if (activePortal === "staff") return portalConfig.staff.groups[0][1][0];
  if (activePortal === "customer") return portalConfig.customer.groups[0][1][0];
  return portalConfig[activePortal].groups[1][1][0];
}

function renderGroupedNav(groups, drawerMode = false) {
  const role = getStoredProfile().role;
  const renderedPages = new Set();
  const portalGroups = groups.map(([group, pages], groupIndex) => {
    const visiblePages = pages.filter((page) => {
      if (!canRoleOpen(page, role) || renderedPages.has(page)) return false;
      renderedPages.add(page);
      return true;
    });
    if (!visiblePages.length) return "";
    return `
    <div class="nav-group ${groupIndex > 1 ? "collapsed" : ""}">
      <button class="nav-group-title" type="button">${group}<span>${visiblePages.length}</span></button>
      <div class="nav-group-items">
        ${visiblePages.map((page) => `
          <button class="nav-item ${drawerMode ? "drawer-nav-item" : ""}" type="button" data-view="${page}">
            <span><span class="nav-icon"></span><span class="nav-text">${page}</span></span>
            <span class="nav-badge">${pageBadge(page)}</span>
          </button>
        `).join("")}
      </div>
    </div>`;
  }).join("");

  if (portal === "staff") return portalGroups;
  const visibleGlobalPages = globalPages.filter((page) => !renderedPages.has(page));

  return portalGroups + `
    <div class="nav-group collapsed">
      <button class="nav-group-title" type="button">Global Pages<span>${visibleGlobalPages.length}</span></button>
      <div class="nav-group-items">
        ${visibleGlobalPages.map((page) => `
          <button class="nav-item ${drawerMode ? "drawer-nav-item" : ""}" type="button" data-view="${page}">
            <span><span class="nav-icon"></span><span class="nav-text">${page}</span></span>
            <span class="nav-badge">Global</span>
          </button>
        `).join("")}
      </div>
    </div>`;
}

function renderNavigation() {
  const groups = portalConfig[portal].groups;
  navStack.innerHTML = renderGroupedNav(groups);
  pageDrawerList.innerHTML = renderGroupedNav(groups, true);
}

function canRoleOpen(page, role = getStoredProfile().role) {
  const patterns = roleAccess[portal]?.[role] || [/./];
  return patterns.some((pattern) => pattern.test(page));
}

function bindAuthGate() {
  const authScreen = document.querySelector("#authScreen");
  if (!authScreen) return;

  prepareGeneratedRegistrationIds();
  bindPasswordToggles(authScreen);

  if (sessionStorage.getItem(`mapphex-${portal}-authenticated`) === "true") {
    document.body.classList.add("authenticated");
  }

  authScreen.addEventListener("click", (event) => {
    const sendButton = event.target.closest("[data-send-code]");
    if (sendButton) {
      const form = sendButton.closest("form");
      if (!validateRecoveryEmail(form)) return;
      activeEmailCode = generateEmailCode();
      form.dataset.expectedCode = activeEmailCode;
      showToast(`Verification code sent to your personal email. Demo code: ${activeEmailCode}`);
      return;
    }

    const tab = event.target.closest("[data-auth-tab]")?.dataset.authTab;
    if (!tab) return;
    setAuthForm(tab);
  });

  authScreen.querySelectorAll(".auth-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (form.dataset.authForm === "register") {
        const validationResult = validateRegistrationForm(form);
        if (!validationResult.valid) {
          showRegistrationResult(false, validationResult.error);
          return;
        }
        try {
          const companyEmail = normalizeIdentifier(form.querySelector("[data-company-email]")?.value || "");
          const password = form.querySelector("input[type='password']")?.value || "";
          
          saveProfileFromForm(form);
          
          // Premium: Audit logging & password history
          if (premiumFeatures.auditLogging) {
            auditLog(companyEmail, "user_registered", { portal });
          }
          if (premiumFeatures.passwordPolicies) {
            addToPasswordHistory(companyEmail, password);
          }
          // Premium: IP Whitelisting
          if (premiumFeatures.ipWhitelisting) {
            addWhitelistedIP(companyEmail, getUserIP());
          }
          
          latestRegistration = registrationDetails();
          loadPersistedState();
          renderNavigation();
          renderView(currentView);
          sessionStorage.setItem(`mapphex-${portal}-authenticated`, "true");
          document.body.classList.add("authenticated");
          
          // Premium: Session management
          if (premiumFeatures.sessionManagement) {
            createSession(companyEmail, companyEmail);
          }
          
          showToast(registrationSuccessMessage());
          showRegistrationResult(true, registrationSuccessMessage());
        } catch {
          showRegistrationResult(false, "Registration was not completed. Please check the form and try again.");
        }
        return;
      }
      if (form.dataset.authForm === "forgot") {
        if (!verifyPasswordCodeForm(form)) return;
        const email = form.querySelector("[data-recovery-email]")?.value || "";
        savePasswordFromForm(form);
        
        // Premium: Audit logging & password history
        if (premiumFeatures.auditLogging) {
          auditLog(email, "password_reset", {});
        }
        if (premiumFeatures.passwordPolicies) {
          addToPasswordHistory(email, form.querySelector("input[type='password']")?.value || "");
        }
        
        showToast("Password changed. Login with the new password.");
        setAuthForm("login");
        form.reset();
        return;
      }
      
      const loginEmail = form.querySelector("[data-login-email]")?.value || "";
      
      // Premium: Account lockout check
      if (premiumFeatures.accountLockout && isAccountLocked(loginEmail)) {
        showToast("Account temporarily locked due to too many failed login attempts. Try again in 15 minutes.");
        showLoginResult(false, "Account locked");
        return;
      }
      
      // Premium: IP Whitelisting check
      if (premiumFeatures.ipWhitelisting && !isIPWhitelisted(loginEmail, getUserIP())) {
        showToast("Login from this IP address not authorized. Please add to whitelist in security settings.");
        auditLog(loginEmail, "unauthorized_ip_login", { ip: getUserIP() });
        recordFailedLogin(loginEmail);
        return;
      }
      
      const loginResult = validateCompanyLogin(form);
      if (!loginResult.valid) {
        // Premium: Record failed login
        if (premiumFeatures.accountLockout) {
          const attempts = recordFailedLogin(loginEmail);
          if (attempts >= 5) {
            auditLog(loginEmail, "account_locked", { attempts });
            showToast("Account locked after 5 failed attempts. Try again in 15 minutes.");
          }
        }
        
        if (["missing-account", "unknown-account"].includes(loginResult.reason)) {
          showLoginResult(false, loginResult.message);
          return;
        }
        loginAttempts++;
        if (loginAttempts >= 3) {
          loginCooldownEnd = Date.now() + 10000;
          showToast("Too many failed attempts. Wait 10 seconds before trying again.");
          disableLoginForm(form, 10);
        } else {
          const remaining = 3 - loginAttempts;
          showToast(`Invalid credentials. ${remaining} attempt${remaining === 1 ? "" : "s"} remaining before 10-second lockout.`);
        }
        return;
      }
      
      // Premium: 2FA Flow
      if (premiumFeatures.twoFactorAuth) {
        const code2fa = generate2FACode();
        save2FACode(loginEmail, code2fa);
        showToast(`2FA code sent. Demo code: ${code2fa}`);
        
        document.querySelector(".result-overlay")?.remove();
        const overlay = document.createElement("section");
        overlay.className = "result-overlay";
        overlay.innerHTML = `
          <div class="result-card">
            <small>Two-Factor Authentication</small>
            <h2>Enter verification code</h2>
            <p class="result-message">We sent a code to your email. Enter it below.</p>
            <input type="text" maxlength="6" inputmode="numeric" id="twoFACode" placeholder="000000" style="min-height:42px;padding:10px;border:1px solid var(--line);border-radius:var(--radius);background:rgba(255,255,255,0.05);color:var(--text);margin:12px 0;font-size:1.2em;text-align:center;letter-spacing:2px">
            <div class="filter-row">
              <button class="primary-action" type="button" id="verify2FA">Verify</button>
              <button class="auth-link" type="button" id="cancel2FA">Cancel</button>
            </div>
          </div>`;
        document.body.appendChild(overlay);
        
        document.getElementById("verify2FA").addEventListener("click", () => {
          const code = document.getElementById("twoFACode").value;
          const codeVerification = verify2FACode(loginEmail, code);
          if (!codeVerification.valid) {
            showToast(codeVerification.message);
            return;
          }
          
          overlay.remove();
          completLogin(loginEmail, form);
        });
        
        document.getElementById("cancel2FA").addEventListener("click", () => overlay.remove());
        return;
      }
      
      completLogin(loginEmail, form);
    });
  });
  
  function completLogin(email, form) {
    loginAttempts = 0;
    loginCooldownEnd = 0;
    
    // Premium: Reset failed login attempts
    if (premiumFeatures.accountLockout) {
      resetFailedLogins(email);
    }
    
    sessionStorage.setItem(`mapphex-${portal}-authenticated`, "true");
    document.body.classList.add("authenticated");
    loadPersistedState();
    
    // Premium: Session management
    if (premiumFeatures.sessionManagement) {
      createSession(email, email);
    }
    
    // Premium: Audit logging & activity
    if (premiumFeatures.auditLogging) {
      auditLog(email, "user_login", { ip: getUserIP() });
    }
    if (premiumFeatures.activityDashboard) {
      logActivity(email, "login", "User logged in");
    }
    
    showToast(`${portalLabel()} portal unlocked.`);
    showLoginResult(true, `${portalLabel()} login successful.`);
  }
}

function emailKey(type) {
  return `mapphex-${portal}-${type}-email`;
}

function passwordKey() {
  return `mapphex-${portal}-password`;
}

function profileKey() {
  return `mapphex-${portal}-profile`;
}

function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

function getAllRegisteredUsersForPortal() {
  try {
    const key = `mapphex-${portal}-registered-users`;
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

function saveAllRegisteredUsers(users) {
  const key = `mapphex-${portal}-registered-users`;
  localStorage.setItem(key, JSON.stringify(users));
}

function isEmailTakenInPortal(email) {
  const normalized = normalizeLoginIdentifier(email);
  const users = getAllRegisteredUsersForPortal();
  return users.some((u) => normalizeLoginIdentifier(u.companyEmail) === normalized);
}

function isPasswordTakenByDifferentEmail(password, excludeEmail = "") {
  const users = getAllRegisteredUsersForPortal();
  const normalized = normalizeLoginIdentifier(excludeEmail);
  return users.some((u) => u.password === password && normalizeLoginIdentifier(u.companyEmail) !== normalized);
}

function findUserByLogin(identifier, password) {
  const users = getAllRegisteredUsersForPortal();
  const normalized = normalizeLoginIdentifier(identifier);
  return users.find((u) => {
    const emailMatch = normalizeLoginIdentifier(u.companyEmail) === normalized;
    const idMatch = portal === "staff" ? u.staffId === identifier : portal === "customer" ? u.customerId === identifier : false;
    return (emailMatch || idMatch) && u.password === password;
  });
}

function normalizeIdentifier(value) {

  return portal === "customer" ? value.trim().toUpperCase() : normalizeEmail(value);
}

function normalizeLoginIdentifier(value) {
  return ["staff", "customer"].includes(portal) ? value.trim().toUpperCase() : normalizeEmail(value);
}

function getStoredProfile() {
  const fallbackRole = { admin: "Executive", staff: "Records Officer", customer: "Admin Contact" }[portal];
  const fallbackProfile = {
    name: "",
    companyEmail: localStorage.getItem(emailKey("company")) || "",
    recoveryEmail: localStorage.getItem(emailKey("recovery")) || "",
    branch: "",
    staffId: localStorage.getItem(`mapphex-${portal}-staff-id`) || "",
    customerId: localStorage.getItem(`mapphex-${portal}-customer-id`) || "",
    approvalStatus: portal === "staff" ? "Pending HR Approval" : "Active",
    role: fallbackRole,
    language: "English",
    accent: "Blue",
    twoFactor: false,
  };
  try {
    return { ...fallbackProfile, ...(JSON.parse(localStorage.getItem(profileKey())) || {}) };
  } catch {
    return fallbackProfile;
  }
}

function saveProfile(profile) {
  localStorage.setItem(profileKey(), JSON.stringify(profile));
  const loginId = portal === "staff" ? profile.staffId : portal === "customer" ? profile.customerId : profile.companyEmail;
  localStorage.setItem(emailKey("company"), normalizeLoginIdentifier(loginId || profile.companyEmail));
  localStorage.setItem(emailKey("recovery"), normalizeEmail(profile.recoveryEmail));
  if (profile.staffId) localStorage.setItem(`mapphex-${portal}-staff-id`, profile.staffId);
  if (profile.customerId) localStorage.setItem(`mapphex-${portal}-customer-id`, profile.customerId);
}

function staffOwnInfoKey() {
  const profile = getStoredProfile();
  return `mapphex-staff-own-info-${normalizeEmail(profile.companyEmail || "new-staff")}`;
}

function getStaffOwnInfo() {
  const fallback = {
    phone: "",
    position: "",
    emergencyName: "",
    emergencyPhone: "",
    homeAddress: "",
    skills: "",
    preferredShift: "Day",
    status: "Active",
  };
  try {
    return { ...fallback, ...(JSON.parse(localStorage.getItem(staffOwnInfoKey())) || {}) };
  } catch {
    localStorage.removeItem(staffOwnInfoKey());
    return fallback;
  }
}

function saveStaffOwnInfo(info) {
  localStorage.setItem(staffOwnInfoKey(), JSON.stringify(info));
}

function attendanceLogKey() {
  return "mapphex-worker-attendance-log";
}

function getAttendanceLog() {
  try {
    return JSON.parse(localStorage.getItem(attendanceLogKey())) || [];
  } catch {
    localStorage.removeItem(attendanceLogKey());
    return [];
  }
}

function saveAttendanceRecord(record) {
  const log = [record, ...getAttendanceLog()].slice(0, 50);
  localStorage.setItem(attendanceLogKey(), JSON.stringify(log));
}

function updateAttendanceSignOut(staffId, signOut) {
  const log = getAttendanceLog();
  const record = log.find((item) => item.staffId === staffId && !item.signOutTime);
  if (!record) return null;
  Object.assign(record, signOut);
  localStorage.setItem(attendanceLogKey(), JSON.stringify(log));
  return record;
}

function resetAllPortalData() {
  ["admin", "staff", "customer"].forEach((p) => {
    // Regular data
    localStorage.removeItem(`mapphex-${p}-profile`);
    localStorage.removeItem(`mapphex-${p}-company-email`);
    localStorage.removeItem(`mapphex-${p}-recovery-email`);
    localStorage.removeItem(`mapphex-${p}-password`);
    localStorage.removeItem(`mapphex-${p}-staff-id`);
    localStorage.removeItem(`mapphex-${p}-customer-id`);
    localStorage.removeItem(`mapphex-${p}-notifications`);
    localStorage.removeItem(`mapphex-${p}-registered-users`);
    // Premium features data
    localStorage.removeItem(`mapphex-${p}-audit-logs`);
    localStorage.removeItem(`mapphex-${p}-sessions`);
    localStorage.removeItem(`mapphex-${p}-2fa`);
    localStorage.removeItem(`mapphex-${p}-failed-logins`);
    sessionStorage.removeItem(`mapphex-${p}-authenticated`);
    sessionStorage.removeItem(`mapphex-${p}-session-id`);
  });
  localStorage.removeItem("mapphex-staff-id-sequence");
  localStorage.removeItem("mapphex-customer-id-sequence");
  localStorage.removeItem("mapphex-worker-attendance-log");
  
  // Clear all dynamic keys
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    if (key.startsWith("mapphex-staff-own-info-") ||
        key.startsWith("mapphex-password-history-") ||
        key.startsWith("mapphex-whitelist-") ||
        key.startsWith("mapphex-2fa-") ||
        key.startsWith("mapphex-failed-") ||
        key.startsWith("mapphex-activity-") ||
        key.includes("-audit-") ||
        key.includes("-sessions")) {
      localStorage.removeItem(key);
    }
  });
  
  window.location.reload();
}

window.resetMAP = resetAllPortalData;

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function saveProfileFromForm(form) {
  const passwordFields = [...form.querySelectorAll("input[type='password']")];
  const password = passwordFields[0]?.value || "";
  
  const newUser = {
    name: form.querySelector("[data-full-name]")?.value.trim() || "",
    companyEmail: normalizeIdentifier(form.querySelector("[data-company-email]")?.value || ""),
    recoveryEmail: normalizeEmail(form.querySelector("[data-recovery-email]")?.value || ""),
    branch: form.querySelector("[data-branch]")?.value.trim() || "",
    role: form.querySelector("[data-user-role]")?.value || { admin: "Executive", staff: "Records Officer", customer: "Admin Contact" }[portal],
    password: password,
    approvalStatus: portal === "staff" ? "Pending HR Approval" : "Active",
    language: "English",
    accent: "Blue",
    twoFactor: false,
  };
  
  if (portal === "staff") {
    newUser.staffId = generateStaffId();
  }
  
  if (portal === "customer") {
    newUser.customerId = generateCustomerId();
    newUser.companyEmail = newUser.customerId;
  }
  
  const users = getAllRegisteredUsersForPortal();
  users.push(newUser);
  saveAllRegisteredUsers(users);
  
  localStorage.setItem(profileKey(), JSON.stringify(newUser));
  localStorage.setItem(emailKey("company"), normalizeLoginIdentifier(newUser.companyEmail));
  localStorage.setItem(emailKey("recovery"), newUser.recoveryEmail);
  localStorage.setItem(passwordKey(), password);
  if (newUser.staffId) localStorage.setItem(`mapphex-${portal}-staff-id`, newUser.staffId);
  if (newUser.customerId) localStorage.setItem(`mapphex-${portal}-customer-id`, newUser.customerId);
}

function loadPersistedState() {
  const profile = getStoredProfile();
  if (portal === "staff" && profile.companyEmail && !profile.staffId) {
    profile.staffId = generateStaffId();
    profile.approvalStatus = profile.approvalStatus || "Pending HR Approval";
    saveProfile(profile);
  }
  if (portal === "customer" && !profile.customerId && profile.companyEmail) {
    profile.customerId = profile.companyEmail;
    saveProfile(profile);
  }
  document.body.dataset.role = profile.role;
  const savedNotifications = localStorage.getItem(`mapphex-${portal}-notifications`);
  if (savedNotifications) {
    try {
      notifications = JSON.parse(savedNotifications);
    } catch {
      localStorage.removeItem(`mapphex-${portal}-notifications`);
    }
  }
  document.querySelectorAll("[data-profile-name]").forEach((item) => item.textContent = profile.name || portalLabel());
}

function persistNotifications() {
  localStorage.setItem(`mapphex-${portal}-notifications`, JSON.stringify(notifications));
}

function startLiveNotifications() {
  window.clearInterval(liveNotificationTimer);
  liveNotificationTimer = window.setInterval(() => {
    const liveItems = {
      admin: ["Live branch sync completed", "New audit event captured", "Budget variance reviewed"],
      staff: ["Your staff file was updated", "Approval status checked", "Profile completion refreshed"],
      customer: ["Order status refreshed", "Payment receipt generated", "Support ticket checked"],
    };
    const text = liveItems[portal][Math.floor(Math.random() * liveItems[portal].length)];
    notifications.unshift(["low", text, "Live ERP notification stream updated this portal.", false]);
    notifications = notifications.slice(0, 9);
    persistNotifications();
    renderNotifications();
  }, 20000);
}

function saveRegisteredEmails(form) {
  const companyEmail = form.querySelector("[data-company-email]");
  const recoveryEmail = form.querySelector("[data-recovery-email]");
  const password = form.querySelector("input[type='password']");
  const profile = getStoredProfile();
  if (portal === "staff" && profile.staffId) {
    localStorage.setItem(emailKey("company"), normalizeLoginIdentifier(profile.staffId));
  } else if (portal === "customer" && profile.customerId) {
    localStorage.setItem(emailKey("company"), normalizeLoginIdentifier(profile.customerId));
  } else if (companyEmail) {
    localStorage.setItem(emailKey("company"), normalizeLoginIdentifier(companyEmail.value));
  }
  localStorage.setItem(emailKey("recovery"), normalizeEmail(recoveryEmail.value));
  localStorage.setItem(passwordKey(), password.value);
}

function validateCompanyLogin(form) {
  const loginEmail = form.querySelector("[data-login-email]");
  const loginPassword = form.querySelector("input[type='password']");
  const loginIdentifier = normalizeLoginIdentifier(loginEmail.value);
  const users = getAllRegisteredUsersForPortal();
  
  if (users.length === 0) {
    const message = portal === "customer" ? "No customer account found. Please register first so this portal can create your customer ID and password." : portal === "staff" ? "No staff account found. Please register first so this portal can create your staff ID and password." : "No admin account found. Please register first so this portal can save your company email and password.";
    showToast(message);
    return { valid: false, reason: "missing-account", message };
  }
  
  const user = findUserByLogin(loginIdentifier, loginPassword.value);
  if (!user) {
    const emailExists = users.some((u) => normalizeLoginIdentifier(u.companyEmail) === loginIdentifier || u.staffId === loginIdentifier || u.customerId === loginIdentifier);
    if (!emailExists) {
      const message = portal === "customer" ? "This customer account is not registered. Use your customer ID or personal email from registration." : portal === "staff" ? "This staff account is not registered. Use your staff ID or company email from registration." : "This admin email is not registered. Use the company email created during registration.";
      showToast(message);
      return { valid: false, reason: "unknown-account", message };
    } else {
      const message = "Incorrect password. Use the password you created during registration.";
      showToast(message);
      return { valid: false, reason: "wrong-password", message };
    }
  }
  
  localStorage.setItem(profileKey(), JSON.stringify(user));
  localStorage.setItem(emailKey("company"), normalizeLoginIdentifier(user.companyEmail));
  if (user.staffId) localStorage.setItem(`mapphex-${portal}-staff-id`, user.staffId);
  if (user.customerId) localStorage.setItem(`mapphex-${portal}-customer-id`, user.customerId);
  
  return { valid: true };
}

function loginIdentifiersForPortal() {
  const profile = getStoredProfile();
  const identifiers = [
    localStorage.getItem(emailKey("company")),
    profile.companyEmail,
  ];
  if (portal === "staff") {
    identifiers.push(profile.staffId);
  }
  if (portal === "customer") {
    identifiers.push(profile.customerId, profile.recoveryEmail, localStorage.getItem(emailKey("recovery")));
  }
  return [...new Set(identifiers.filter(Boolean).map((value) => normalizeLoginIdentifier(value)))];
}

function validateRecoveryEmail(form) {
  const registeredRecoveryEmail = localStorage.getItem(emailKey("recovery"));
  const recoveryEmail = form.querySelector("[data-recovery-email]");
  if (!registeredRecoveryEmail) {
    showToast("Register first so MAPPHEX can save your personal recovery email.");
    return false;
  }
  if (!recoveryEmail || normalizeEmail(recoveryEmail.value) !== registeredRecoveryEmail) {
    showToast("Use the personal recovery email you registered with.");
    return false;
  }
  return true;
}

function validateRegistrationForm(form) {
  const companyField = form.querySelector("[data-company-email]");
  const companyEmail = normalizeIdentifier(companyField?.value || "");
  const recoveryEmail = normalizeEmail(form.querySelector("[data-recovery-email]").value);
  const passwordFields = [...form.querySelectorAll("input[type='password']")];
  const password = passwordFields[0]?.value || "";

  if (["admin", "staff"].includes(portal) && !companyEmail.endsWith("@mapphex.com")) {
    return { valid: false, error: "Company email must end with @mapphex.com." };
  }
  if (passwordFields.length > 1 && passwordFields[0].value !== passwordFields[1].value) {
    return { valid: false, error: "Password and confirmation do not match." };
  }
  if (portal !== "customer" && companyEmail === recoveryEmail) {
    return { valid: false, error: "Personal email must be different from the company email." };
  }
  if (!isStrongPassword(password)) {
    return { valid: false, error: "Enter a password to register." };
  }
  
  // Premium: Password Policy Enforcement
  if (premiumFeatures.passwordPolicies) {
    const policyCheck = validatePasswordPolicy(password);
    if (!policyCheck.valid) {
      return { valid: false, error: policyCheck.errors.join(" • ") };
    }
  }
  
  if (isEmailTakenInPortal(companyEmail)) {
    return { valid: false, error: `This email is already registered in the ${portalLabel()} portal.` };
  }
  if (isPasswordTakenByDifferentEmail(password, companyEmail)) {
    return { valid: false, error: `This password is already in use by another ${portalLabel()} user. Choose a unique password.` };
  }
  return { valid: true };
}

function prepareGeneratedRegistrationIds() {
}

function generateStaffId() {
  const next = Number(localStorage.getItem("mapphex-staff-id-sequence") || "0") + 1;
  localStorage.setItem("mapphex-staff-id-sequence", String(next));
  return `MX-STF-2026-${String(next).padStart(3, "0")}`;
}

function generateCustomerId() {
  const next = Number(localStorage.getItem("mapphex-customer-id-sequence") || "0") + 1;
  localStorage.setItem("mapphex-customer-id-sequence", String(next));
  return `MX-CUST-2026-${String(next).padStart(4, "0")}`;
}

function registrationSuccessMessage() {
  const profile = getStoredProfile();
  if (portal === "staff") return `Staff registered. Your ID is ${profile.staffId}. Status: pending HR approval.`;
  if (portal === "customer") return `Customer registered. Your login ID is ${profile.customerId}.`;
  return `${portalLabel()} account registered and portal unlocked.`;
}

function registrationDetails() {
  const profile = getStoredProfile();
  if (portal === "staff") return { label: "Staff ID", id: profile.staffId, status: "Pending HR Approval" };
  if (portal === "customer") return { label: "Customer ID", id: profile.customerId, status: "New Account" };
  return { label: "Admin Email", id: profile.companyEmail, status: "Active" };
}

function showRegistrationResult(success, message) {
  document.querySelector(".result-overlay")?.remove();
  const overlay = document.createElement("section");
  overlay.className = "result-overlay";
  
  if (success) {
    overlay.classList.add("success");
    overlay.innerHTML = `
      <div class="result-card">
        <div class="result-icon success-icon">✓</div>
        <small>Registration Complete</small>
        <h2>${latestRegistration.label}</h2>
        <div class="generated-id">${escapeHtml(latestRegistration.id)}</div>
        <span class="status-badge">${escapeHtml(latestRegistration.status)}</span>
        <p class="result-message">${escapeHtml(message)}</p>
        <div class="filter-row">
          <button class="mini-button" type="button" data-copy-value="${escapeHtml(latestRegistration.id)}">Copy ID</button>
          <button class="primary-action" type="button" data-close-result>Continue to Portal</button>
        </div>
      </div>`;
    overlay.querySelector("[data-copy-value]").addEventListener("click", (event) => copyToClipboard(event.currentTarget.dataset.copyValue));
    overlay.querySelector("[data-close-result]").addEventListener("click", () => overlay.remove());
  } else {
    overlay.classList.add("error");
    overlay.innerHTML = `
      <div class="result-card">
        <div class="result-icon error-icon">✕</div>
        <small>Registration Failed</small>
        <h2>Unable to Register</h2>
        <p class="result-message">${escapeHtml(message)}</p>
        <div class="result-hint">Please check your information and try again.</div>
        <div class="filter-row">
          <button class="primary-action" type="button" data-close-result>Back to Form</button>
        </div>
      </div>`;
    overlay.querySelector("[data-close-result]").addEventListener("click", () => overlay.remove());
  }
  
  document.body.appendChild(overlay);
}

function showLoginResult(success, message) {
  document.querySelector(".result-overlay")?.remove();
  const overlay = document.createElement("section");
  overlay.className = `result-overlay ${success ? "success" : "error"}`;
  overlay.innerHTML = `
    <div class="result-card">
      <div class="result-icon ${success ? "success-icon" : "error-icon"}">${success ? "OK" : "!"}</div>
      <small>${success ? "Login Successful" : "Login Failed"}</small>
      <h2>${success ? "Access Granted" : "Account Not Found"}</h2>
      <p class="result-message">${escapeHtml(message)}</p>
      <div class="filter-row">
        <button class="primary-action" type="button" data-close-result>${success ? "Continue" : "Back to Login"}</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close-result]").addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}

function showActionDetails(title, message, details = []) {
  document.querySelector(".result-overlay")?.remove();
  const overlay = document.createElement("section");
  overlay.className = "result-overlay success";
  overlay.innerHTML = `
    <div class="result-card">
      <div class="result-icon success-icon">OK</div>
      <small>Action Details</small>
      <h2>${escapeHtml(title)}</h2>
      <p class="result-message">${escapeHtml(message)}</p>
      ${details.length ? `<div class="search-results">${details.map((detail) => `<div class="activity"><span>${escapeHtml(detail[0])}</span><small>${escapeHtml(detail[1])}</small></div>`).join("")}</div>` : ""}
      <div class="filter-row">
        <button class="primary-action" type="button" data-close-result>Close</button>
      </div>
    </div>`;
  overlay.querySelector("[data-close-result]").addEventListener("click", () => overlay.remove());
  document.body.appendChild(overlay);
}

function showRegistrationSuccess() {
  if (!latestRegistration?.id) return;
  showRegistrationResult(true, registrationSuccessMessage());
}

function isStrongPassword(value) {
  return value.trim().length > 0;
}

function generateEmailCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function savePasswordFromForm(form) {
  const passwordFields = [...form.querySelectorAll("input[type='password']")];
  const newPassword = passwordFields[0]?.value || "";
  if (newPassword) localStorage.setItem(passwordKey(), newPassword);
}

function bindPasswordToggles(root = document) {
  root.querySelectorAll("input[type='password']").forEach((input) => {
    if (input.parentElement.querySelector(".password-toggle")) return;
    const toggle = document.createElement("button");
    toggle.className = "password-toggle";
    toggle.type = "button";
    toggle.textContent = "Show";
    toggle.addEventListener("click", () => {
      input.type = input.type === "password" ? "text" : "password";
      toggle.textContent = input.type === "password" ? "Show" : "Hide";
    });
    input.insertAdjacentElement("afterend", toggle);
  });
  bindPasswordStrength(root);
}

function bindPasswordStrength(root = document) {
  root.querySelectorAll(".auth-form[data-auth-form='register'] input[type='password'], .auth-form[data-auth-form='forgot'] input[type='password'], .password-change-form input[type='password']").forEach((input) => {
    if (input.dataset.strengthBound) return;
    input.dataset.strengthBound = "true";
    const meter = document.createElement("div");
    meter.className = "password-strength inline-strength";
    meter.innerHTML = "<span></span>";
    input.parentElement.appendChild(meter);
    input.addEventListener("input", () => updatePasswordStrength(input.closest("form")));
  });
}

function copyToClipboard(value) {
  if (!value) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(value).then(() => showToast("ID copied."));
    return;
  }
  const input = document.createElement("input");
  input.value = value;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
  showToast("ID copied.");
}

function verifyPasswordCodeForm(form) {
  const fields = [...form.querySelectorAll("input")];
  const codeField = fields.find((field) => field.inputMode === "numeric" || field.maxLength === 6);
  const passwordFields = fields.filter((field) => field.type === "password");
  const expectedCode = form.dataset.expectedCode || activeEmailCode;

  if (!validateRecoveryEmail(form)) {
    return false;
  }
  if (!expectedCode) {
    showToast("Send the email code first.");
    return false;
  }
  if (!codeField || codeField.value.trim() !== expectedCode) {
    showToast("Verification code is incorrect.");
    return false;
  }
  if (passwordFields.length >= 2 && passwordFields[0].value !== passwordFields[1].value) {
    showToast("New password and confirmation do not match.");
    return false;
  }
  if (passwordFields[0] && !isStrongPassword(passwordFields[0].value)) {
    showToast("Enter a password.");
    return false;
  }
  return true;
}

function setAuthForm(name) {
  document.querySelectorAll(".auth-tab").forEach((button) => {
    button.classList.toggle("active", button.dataset.authTab === name);
  });
  document.querySelectorAll(".auth-form").forEach((form) => {
    form.classList.toggle("active", form.dataset.authForm === name);
  });
  if (name === "login" && Date.now() >= loginCooldownEnd) {
    const loginForm = document.querySelector(".auth-form[data-auth-form='login']");
    const loginButton = loginForm?.querySelector("button[type='submit']");
    if (loginButton) {
      loginButton.disabled = false;
      loginButton.setAttribute("aria-disabled", "false");
      loginButton.textContent = portal === "customer" ? "Access Customer Portal" : portal === "staff" ? "Access Staff Portal" : "Access Admin Portal";
    }
  }
}

function disableLoginForm(form, seconds) {
  const button = form.querySelector("button[type='submit']");
  if (!button) return;
  
  button.disabled = true;
  button.setAttribute("aria-disabled", "true");
  let remaining = seconds;
  const originalText = button.textContent;
  
  const countdownInterval = setInterval(() => {
    remaining--;
    button.textContent = `Wait ${remaining}s`;
    
    if (remaining <= 0) {
      clearInterval(countdownInterval);
      button.disabled = false;
      button.setAttribute("aria-disabled", "false");
      button.textContent = originalText;
      loginAttempts = 0;
    }
  }, 1000);
  
  button.textContent = `Wait ${remaining}s`;
}

function portalLabel() {
  return portal.charAt(0).toUpperCase() + portal.slice(1);
}

function pageBadge(page) {
  if (/Dashboard|Analytics|Forecasting|Charts|Heatmaps|Map|Tracking/.test(page)) return "Live";
  if (/Approvals|Requests|Security|Audit|OTP|Session/.test(page)) return "Risk";
  if (/Workspace|Kanban|Tasks|Chat|POS|Scanning/.test(page)) return "Work";
  return "ERP";
}

function bindShellEvents() {
  navStack.addEventListener("click", (event) => {
    const groupTitle = event.target.closest(".nav-group-title");
    if (groupTitle) {
      groupTitle.closest(".nav-group").classList.toggle("collapsed");
      return;
    }

    const button = event.target.closest(".nav-item");
    if (!button) return;
    renderView(button.dataset.view);
  });

  pageDrawerList.addEventListener("click", (event) => {
    const groupTitle = event.target.closest(".nav-group-title");
    if (groupTitle) {
      groupTitle.closest(".nav-group").classList.toggle("collapsed");
      return;
    }

    const button = event.target.closest(".nav-item");
    if (!button) return;
    renderView(button.dataset.view);
    closePageDrawer();
  });

  pinList.addEventListener("click", (event) => {
    const pin = event.target.closest(".pin");
    if (!pin) return;
    renderView(pin.dataset.pin);
  });

  document.querySelector("#themeToggle").addEventListener("click", (event) => {
    const next = appShell.dataset.theme === "dark" ? "light" : "dark";
    appShell.dataset.theme = next;
    event.currentTarget.textContent = next === "dark" ? "Light" : "Dark";
    mountCharts();
  });

  document.querySelector("#globalSearch").addEventListener("input", (event) => showSuggestions(event.target.value));
  document.querySelector("#globalSearch").addEventListener("keydown", handleSearchKeys);
  document.querySelector("#suggestions").addEventListener("click", (event) => {
    const suggestion = event.target.closest(".suggestion");
    if (suggestion) selectSuggestion(suggestion);
  });
  document.querySelector("#voiceButton").addEventListener("click", () => {
    document.querySelector("#globalSearch").placeholder = "Voice search ready: try 'show branch alerts'";
    showToast("Voice search prompt enabled.");
  });

  const markReadButton = document.querySelector("#markRead");

  if (markReadButton) {
    markReadButton.addEventListener("click", () => {
      notifications.forEach((item) => item[3] = true);
      persistNotifications();
      renderNotifications();
    });
  }

  document.querySelector(".sidebar-toggle").addEventListener("click", () => sidebar.classList.toggle("collapsed"));
  document.querySelector(".mobile-menu").addEventListener("click", (event) => {
    sidebar.classList.toggle("open");
    event.currentTarget.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(sidebar.classList.contains("open")));
  });
  document.querySelector("#pagesButton").addEventListener("click", togglePageDrawer);
  document.querySelector("#closePageDrawer").addEventListener("click", closePageDrawer);
  document.querySelector("#passwordButton").addEventListener("click", () => renderView("Security Settings"));
  const resetButton = document.querySelector("#resetButton");
  if (resetButton) {
    resetButton.addEventListener("click", () => {
      if (confirm("Delete all registered accounts and reset the ERP system? This will clear all portal profiles, sessions, audit logs, and local data.")) {
        resetAllPortalData();
      }
    });
  }
  document.querySelector("#logoutButton").addEventListener("click", () => {
    const profile = getStoredProfile();
    
    // Premium: Audit logging & activity
    if (premiumFeatures.auditLogging) {
      auditLog(profile.companyEmail, "user_logout", {});
    }
    if (premiumFeatures.activityDashboard) {
      logActivity(profile.companyEmail, "logout", "User logged out");
    }
    
    sessionStorage.removeItem(`mapphex-${portal}-authenticated`);
    sessionStorage.removeItem(`mapphex-${portal}-session-id`);
    document.body.classList.remove("authenticated");
    closePageDrawer();
    showToast(`${portalLabel()} portal locked.`);
  });
  document.querySelector(".hero-actions .primary-action").addEventListener("click", () => {
    // Premium: Audit logging for export
    if (premiumFeatures.auditLogging) {
      auditLog(getStoredProfile().companyEmail, "report_exported", {});
    }
    showToast("Enterprise report export queued.");
  });
  document.querySelector(".ghost-action").addEventListener("click", () => {
    renderView("Activity Dashboard");
  });
  
  // Add backup button to theme section if premium features enabled
  if (premiumFeatures.backupRecovery) {
    const topbar = document.querySelector(".topbar");
    const backupBtn = document.createElement("button");
    backupBtn.type = "button";
    backupBtn.textContent = "Backup";
    backupBtn.className = "topbar__button";
    backupBtn.addEventListener("click", () => {
      downloadBackup();
      showToast("Backup downloaded successfully.");
    });
    topbar.insertBefore(backupBtn, document.querySelector("#passwordButton"));
  }
  
  // Premium: Periodic session activity update
  if (premiumFeatures.sessionManagement) {
    setInterval(updateSessionActivity, 60000);
  }

  const palette = document.querySelector("#commandPalette");
  document.querySelector("#commandButton").addEventListener("click", () => openPalette(palette));
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openPalette(palette);
    }
  });

  document.querySelector("#commandInput").addEventListener("input", (event) => renderCommands(event.target.value));
  document.querySelector("#commandResults").addEventListener("click", handleCommandClick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const palette = document.querySelector("#commandPalette");
      if (palette?.open) palette.close();
      closePageDrawer();
    }
  });
}

function togglePageDrawer() {
  const isOpen = pageDrawer.classList.toggle("open");
  const pagesButton = document.querySelector("#pagesButton");
  pagesButton.classList.toggle("open", isOpen);
  pagesButton.setAttribute("aria-expanded", String(isOpen));
}

function closePageDrawer() {
  pageDrawer.classList.remove("open");
  const pagesButton = document.querySelector("#pagesButton");
  pagesButton.classList.remove("open");
  pagesButton.setAttribute("aria-expanded", "false");
}

function renderView(view) {
  if (portal === "staff" && globalPages.includes(view)) {
    showToast("Staff portal is only for worker capture.");
    return;
  }
  if (!globalPages.includes(view) && !canRoleOpen(view)) {
    showToast(`${getStoredProfile().role} does not have access to ${view}.`);
    return;
  }
  currentView = view;
  destroyCharts();
  document.querySelectorAll(".nav-item").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });

  dashboard.innerHTML = pageTemplate(view);
  window.requestAnimationFrame(mountCharts);
  bindDashboardEvents();
}

function pageTemplate(view) {
  if (globalPages.includes(view)) return globalTemplate(view);
  if (portal === "admin") return adminTemplate(view);
  if (portal === "staff") return staffTemplate(view);
  return customerTemplate(view);
}

function adminTemplate(view) {
  if (view === "AI Assistant") return aiAssistantPage();
  if (["Team Chat", "Shared Dashboard"].includes(view)) return collaborationPage(view);
  if (view === "Heatmap Analytics") return heatmapAnalyticsPage(view);
  if (view === "KPI Trends") return kpiTrendsPage(view);
  if (view === "Forecast Cards") return forecastCardsPage();
  if (view === "Custom Widget Board") return widgetBoardPage();
  if (view === "Executive Dashboard" || view === "Operations Command Center") return commandCenter();
  if (view === "Biometric Registration") return biometricRegistrationPage();
  if (view === "Attendance Monitoring") return adminAttendanceMonitoringPage();
  if (/Branch|Map/.test(view)) return branchMap(view);
  if (/Analytics|Charts|KPI|Forecasting|Heatmaps|Revenue|Performance|Overview|Reports/.test(view)) return analyticsPage(view, "Executive analytics, forecasting, ranking, and financial intelligence");
  if (/Approval|Requests|Workflow/.test(view)) return approvalCenter(view);
  if (/Inventory|Stock|Warehouse|Supplier|Transfers/.test(view)) return inventoryPage(view);
  if (/Security|Audit|Backup|API|Settings|Notifications|Session|OTP|Login|Password/.test(view)) return managementPage(view, "Policy controls, access governance, session visibility, integrations, and recovery tooling.");
  if (/Employee|Departments|Roles|Staff|Attendance|Payroll|Tax|Transactions|Budget|Expenses/.test(view)) return tablePage(view);
  return managementPage(view, "Enterprise configuration workspace with forms, states, permissions, and operational history.");
}

function staffTemplate(view) {
  if (["Worker Sign-In", "Biometric Attendance Check-In", "QR Code Attendance"].includes(view)) return staffAttendanceSignInPage(view);
  if (view === "AI Assistant") return aiAssistantPage();
  if (["Team Chat", "Shared Dashboard"].includes(view)) return collaborationPage(view);
  if (["Personal Dashboard", "My Staff Card", "My HR Information", "Profile Management", "Profile Completion Progress", "Emergency Contact"].includes(view)) {
    return staffOwnProfilePage(view);
  }
  return staffFeaturePage(view);
}

function customerTemplate(view) {
  if (/Account Summary|Account Overview|Customer Analytics|Customer Dashboard|Personalized Dashboard|Activity Tracking|Personalized Homepage|Personalized Widgets|Dark\/Light Mode/.test(view)) return customerDashboard(view);
  if (/Browse Available Products|Search for Products|Filter Products|Product Details|Product Images|Availability|Stock Status|Compare Products|Wishlist|Cart|Buy\/Order/.test(view)) return customerProductPage(view);
  if (/Loyalty Dashboard/.test(view)) return loyaltyPage(view);
  if (/Order Tracking|Active Orders|Order History|Orders|Invoices|Download Invoices|Booking|Appointment|Subscription/.test(view)) return orderTimeline(view);
  if (/Smart Recommendations|Personalized Recommendations|AI Product Recommendations|Reward Points|Promotions|Referral Program|Redeem Rewards/.test(view)) return recommendationsPage(view);
  if (/Payment Methods|Billing History|Receipts|Transactions|Payment History|Secure Online Payments/.test(view)) return paymentsPage(view);
  if (/Support Tickets|Support Ticket|Live Chat|Live Chat Support|AI Chatbot|AI Chatbot Assistant|FAQ|Help Center|Knowledge Base|Messaging with Support|Feedback|Reviews/.test(view)) return supportPage(view);
  if (/Search Center/.test(view)) return searchCenterPage(view);
  if (/Smart Search|Voice Search|Mobile-Friendly|QR Code|Real-Time Updates|Mobile App|Responsive Modern|Multi-Language|Cloud Document|Digital Signatures|Fast Loading/.test(view)) return customerFeaturePage(view);
  if (/Profile|Personal|Addresses|Preferences|Security|Login|Registration|Password/.test(view)) return managementPage(view, "Customer identity, security, preferences, address book, and self-service account configuration.");
  return customerFeaturePage(view);
}

function metricCard(title, value, meta, tone = "positive") {
  return `<article class="card span-3 metric-card">
    <small>${title}</small>
    <div class="metric-value">${value}</div>
    <div class="metric-meta ${tone}">${meta}</div>
  </article>`;
}

function metricsFor(activePortal = portal) {
  return metricSets[activePortal].map((item) => metricCard(...item)).join("");
}

function statusBadge(text, tone = "positive") {
  return `<span class="status-badge ${tone}">${escapeHtml(text)}</span>`;
}

function idAction(value, label = "Copy ID") {
  if (!value) return "";
  return `<button class="mini-button" type="button" data-copy-value="${escapeHtml(value)}">${label}</button>`;
}

function modernIdentityCard({ title, subtitle, idLabel, idValue, status, statusTone = "positive", details = [], actions = [] }) {
  return `<article class="card span-5 premium-panel identity-card">
    <small>${escapeHtml(title)}</small>
    <h2>${escapeHtml(subtitle)}</h2>
    <div class="generated-id">${escapeHtml(idValue || "Not generated")}</div>
    <div class="identity-actions">
      ${statusBadge(status, statusTone)}
      ${idAction(idValue)}
    </div>
    <div class="identity-details">
      ${details.map(([label, value]) => `<div><span>${escapeHtml(label)}</span><strong>${escapeHtml(value || "Not captured")}</strong></div>`).join("")}
    </div>
    <div class="filter-row">${actions.map((action) => `<button class="filter-chip" type="button" data-open-view="${escapeHtml(action.view)}">${escapeHtml(action.label)}</button>`).join("")}</div>
  </article>`;
}

function activityTimeline(items) {
  return `<article class="card span-7 premium-panel">
    <small>Activity Timeline</small>
    <h2>Recent account activity</h2>
    <div class="timeline-list">
      ${items.map(([title, meta]) => `<div class="timeline-item"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(meta)}</span></div>`).join("")}
    </div>
  </article>`;
}

function emptyState(title, text, action, view) {
  return `<article class="card span-6 empty-state">
    <small>Empty State</small>
    <h2>${escapeHtml(title)}</h2>
    <p>${escapeHtml(text)}</p>
    <button class="mini-button" type="button" data-open-view="${escapeHtml(view)}">${escapeHtml(action)}</button>
  </article>`;
}

function commandCenter() {
  const profile = getStoredProfile();
  return `
    ${metricsFor("admin")}
    ${modernIdentityCard({
      title: "Admin Identity",
      subtitle: profile.name || "Admin Account",
      idLabel: "Admin Email",
      idValue: profile.companyEmail,
      status: "Active",
      details: [["Role", profile.role], ["Recovery", profile.recoveryEmail], ["Access", "Enterprise control"]],
      actions: [{ label: "Security", view: "Security Center" }, { label: "Approvals", view: "Pending Approvals" }, { label: "Reports", view: "KPI Reports" }],
    })}
    ${chartCard("Executive Dashboard", "Revenue movement, forecast, and branch contribution", "revenueChart", "span-7")}
    ${activityTimeline([
      ["Admin account active", profile.companyEmail || "Company email pending"],
      ["Security center ready", "Audit, sessions, and recovery tools available"],
      ["Reports available", "Exports and KPI reports can be opened from quick actions"],
    ])}
    <article class="card span-5 premium-panel">
      <small>Operations Command Center</small>
      <h2>Live activity, health, and notifications</h2>
      <div class="signal-grid">
        <div><strong>97.2%</strong><span>System health</span></div>
        <div><strong>312</strong><span>Live users</span></div>
        <div><strong>18</strong><span>Approvals</span></div>
        <div><strong>4</strong><span>Alerts</span></div>
      </div>
      ${activityList(["Mombasa updated stock counts", "Kisumu closed 12 customer tickets", "HQ changed role policy", "Nakuru exceeded sales target"])}
    </article>
    ${featureLauncher("Interactive Branch Map", "47 animated branch markers with hover statistics and live performance.", "Branch Analytics Map")}
    ${featureLauncher("Approval Workflow Page", "Procurement, HR, transfers, expenses, and workflow history stay hidden until opened.", "Pending Approvals")}
  `;
}

function biometricRegistrationPage() {
  return `
    ${metricsFor("admin")}
    <article class="card span-7 premium-panel">
      <small>Admin Biometric Registration</small>
      <h2>Enroll staff biometric identity</h2>
      <p>Register fingerprint, face, or iris templates for attendance and secure staff verification. Enrollment stays under admin HR/security control.</p>
      <div class="inventory-scanner">
        <div class="scan-frame"></div>
        <div class="feature-launcher">
          <strong>Capture station ready</strong>
          <p>Connect a biometric device or camera, select the staff member, capture the template, then submit for secure enrollment.</p>
          <div class="filter-row">
            <button class="mini-button" type="button" data-biometric-action="capture">Start Capture</button>
            <button class="mini-button" type="button" data-biometric-action="retake">Retake Scan</button>
            <button class="mini-button" type="button" data-biometric-action="verify">Verify Match</button>
          </div>
        </div>
      </div>
    </article>
    <article class="card span-5 premium-panel">
      <small>Enrollment Form</small>
      <h2>Staff biometric profile</h2>
      <div class="form-grid">
        <label>Staff ID<input value="MX-STF-2026-001" placeholder="MX-STF-2026-001"></label>
        <label>Biometric Type<select><option>Fingerprint</option><option>Face Recognition</option><option>Iris Scan</option></select></label>
        <label>Device<select><option>Main HR Scanner</option><option>Reception Kiosk</option><option>Mobile Admin App</option></select></label>
        <label>Consent Status<select><option>Consent Confirmed</option><option>Pending Consent</option><option>Consent Revoked</option></select></label>
      </div>
      <button class="primary-action" type="button" data-biometric-action="register">Register Biometric</button>
    </article>
    <article class="card span-12">
      <small>Biometric Controls</small>
      <h2>Registration safeguards</h2>
      <div class="security-grid">
        <div class="security-box"><strong>Template Security</strong><span>Encrypted biometric template only</span></div>
        <div class="security-box"><strong>Admin Approval</strong><span>HR or Security role required</span></div>
        <div class="security-box"><strong>Attendance Link</strong><span>Enabled after verification</span></div>
        <div class="security-box"><strong>Audit Trail</strong><span>Every enrollment is logged</span></div>
      </div>
    </article>
    ${tableModule("Biometric Enrollment Log", ["Staff", "Type", "Status", "Updated"], [
      ["Amina Njoroge", "Fingerprint", "Registered", "Today 09:12"],
      ["Brian Otieno", "Face Recognition", "Pending Consent", "Today 10:04"],
      ["Mercy Wanjiku", "Fingerprint", "Verification Needed", "Yesterday"],
      ["David Mwangi", "Iris Scan", "Registered", "May 14"],
    ])}
  `;
}

function adminAttendanceMonitoringPage() {
  const log = getAttendanceLog();
  const rows = log.length ? log.map((item) => [
    item.name || "Staff Member",
    item.staffId || "Not captured",
    `${item.date} ${item.time} - ${item.signOutTime || "Still in"}`,
    `${item.shift} / ${item.method} / ${item.signOutTime ? "Signed out" : "Active"}`,
  ]) : [
    ["No sign-ins yet", "Waiting", "No date captured", "No shift captured"],
  ];
  return `
    ${metricsFor("admin")}
    <article class="card span-12 premium-panel">
      <small>HR Attendance Capture</small>
      <h2>Worker sign-in and sign-out monitoring</h2>
      <div class="security-grid">
        <div class="security-box"><strong>Captured Fields</strong><span>Year, date, sign-in, sign-out, shift, method</span></div>
        <div class="security-box"><strong>Shift Types</strong><span>Day, Night, Part Time, Flexible</span></div>
        <div class="security-box"><strong>Latest Records</strong><span>${log.length} stored locally</span></div>
        <div class="security-box"><strong>HR Visibility</strong><span>Admin attendance monitoring</span></div>
      </div>
    </article>
    ${tableModule("Worker Attendance Log", ["Worker", "Staff ID", "Date / In-Out", "Shift / Method / Status"], rows)}
  `;
}

function branchMap(view) {
  return `
    ${metricCard("Mapped Branches", "47", "Animated live markers")}
    ${metricCard("Top Branch", "Mombasa", "+18.2% revenue lift")}
    ${metricCard("Risk Markers", "4", "Stock or SLA attention", "warning")}
    ${metricCard("Transfers", "12", "5 arriving today")}
    <article class="card span-12 premium-panel">
      <small>${view}</small>
      <h2>Interactive branch performance map</h2>
      <div class="map-layout">
        <div class="branch-map">
          ${Array.from({ length: 47 }, (_, i) => `<button type="button" class="branch-dot ${[7, 16, 29, 42].includes(i) ? "alert" : ""}" data-branch="${i + 1}" title="Branch ${i + 1}">${i + 1}</button>`).join("")}
        </div>
        <div class="map-detail">
          <small>Hover Statistics</small>
          <h3>Nairobi Central</h3>
          <p>Revenue is up 14.6%, stock health is 89%, queue latency is normal, and staffing coverage is 94%.</p>
          <div class="mini-bars">
            <span style="--v:82%"></span><span style="--v:64%"></span><span style="--v:91%"></span><span style="--v:48%"></span>
          </div>
        </div>
      </div>
    </article>
  `;
}

function analyticsPage(view, subtitle) {
  return `
    ${metricsFor()}
    ${chartCard(view, subtitle, "revenueChart", "span-8")}
    ${chartCard("Comparative Performance", "Targets, completion rate, and category mix", "comparisonChart", "span-4")}
    ${tableModule("Forecast Signals", ["Model", "Confidence", "Impact", "Owner"], [
      ["Revenue forecast", "91%", "+12.4%", "Finance"],
      ["Stock risk", "78%", "Medium", "Logistics"],
      ["Branch staffing", "86%", "Stable", "HR"],
      ["Customer churn", "74%", "Low", "Support"],
    ])}
  `;
}

function heatmapAnalyticsPage(view) {
  return `
    ${metricsFor()}
    ${chartCard(view, "Branch peak performance, alerts and resource allocation across the network", "revenueChart", "span-8")}
    <article class="card span-4 premium-panel">
      <small>Heatmap Insights</small>
      <h2>${view}</h2>
      <div class="signal-grid">
        <div><strong>12</strong><span>High-priority branches</span></div>
        <div><strong>4</strong><span>Supply alerts</span></div>
        <div><strong>8</strong><span>Logistics hotspots</span></div>
        <div><strong>96%</strong><span>Coverage accuracy</span></div>
      </div>
      <div class="activity-list">
        ${["Nakuru zone overperforming", "Eldoret stock warning", "Mombasa delivery window tight", "Kisumu SLA risk"].map((item) => `<div class="activity"><span>${item}</span></div>`).join("")}
      </div>
    </article>
    <article class="card span-12 premium-panel">
      <small>Heatmap Overview</small>
      <h2>Branch performance hotspots</h2>
      <div class="map-layout" style="min-height:320px;">
        <div class="branch-map">
          ${Array.from({ length: 16 }, (_, i) => `<button type="button" class="branch-dot ${i % 5 === 0 ? "alert" : i % 3 === 0 ? "active" : ""}" data-branch="${i + 1}" title="Branch ${i + 1}">${i + 1}</button>`).join("")}
        </div>
        <div class="map-detail">
          <small>Legend</small>
          <p>Heatmaps show branch activity, stock intensity, customer demand, and service quality trends.</p>
        </div>
      </div>
    </article>
  `;
}

function kpiTrendsPage(view) {
  return `
    ${metricsFor()}
    ${chartCard(view, "KPI trajectories, monthly cadence, and performance variance", "revenueChart", "span-8")}
    <article class="card span-4 premium-panel">
      <small>Trend Summary</small>
      <h2>Key Indicators</h2>
      <div class="signal-grid">
        <div><strong>+14.8%</strong><span>Revenue trend</span></div>
        <div><strong>-3.2%</strong><span>Cost variance</span></div>
        <div><strong>92%</strong><span>Service uptime</span></div>
        <div><strong>4.5</strong><span>Average customer rating</span></div>
      </div>
      <div class="activity-list">
        ${["Branch service improved", "Forecast accuracy stable", "Customer response time down", "Risk alert resolved"].map((item) => `<div class="activity"><span>${item}</span></div>`).join("")}
      </div>
    </article>
  `;
}

function forecastCardsPage() {
  return `
    ${metricsFor()}
    <article class="card span-12 premium-panel forecast-cards">
      <small>Forecast Cards</small>
      <h2>Predictive signals for resource planning</h2>
      <div class="signal-grid">
        ${[
          ["Demand Surge", "+24% next week", "warning"],
          ["Stock Reorder", "4 branches", "positive"],
          ["Staff Capacity", "72% utilization", "positive"],
          ["Payment Velocity", "+18%", "positive"],
        ].map(([title, value, tone]) => `<div class="security-box ${tone}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(value)}</span></div>`).join("")}
      </div>
    </article>
    ${tableModule("Forecast Summary", ["Area", "Prediction", "Priority", "Owner"], [
      ["Sales", "Higher demand", "High", "Sales"],
      ["Inventory", "Reorder needed", "Medium", "Logistics"],
      ["Customer Support", "Load spike", "High", "Support"],
      ["HR", "Overtime risk", "Low", "HR"],
    ], "span-12")}
  `;
}

function widgetBoardPage() {
  return `
    ${metricsFor()}
    <article class="card span-12 premium-panel">
      <small>Custom Widget Board</small>
      <h2>Build your own executive dashboard</h2>
      <div class="filter-row" style="flex-wrap:wrap; gap:10px;">
        ${["Revenue", "Inventory", "HR", "Support", "Logistics", "Forecast"].map((widget) => `<button class="mini-button" type="button" data-widget-toggle="${widget}">${widget}</button>`).join("")}
      </div>
      <div class="widget-grid">
        ${["Revenue Trend", "Branch Status", "Live Orders", "Alert Feed"].map((widget) => `<div class="widget-card"><strong>${widget}</strong><span>Drag to reposition</span></div>`).join("")}
      </div>
    </article>
  `;
}

function aiAssistantPage() {
  return `
    ${metricsFor()}
    <article class="card span-8 premium-panel">
      <small>AI Assistant</small>
      <h2>Ask the portal anything</h2>
      <p>Use natural language to query reports, workflows, inventory, team updates, or customer insights.</p>
      <form id="assistantPromptForm" class="assistant-form">
        <label>Query<input id="assistantPrompt" placeholder="e.g. Show me branch heatmap trends" autocomplete="off"></label>
        <button class="primary-action" type="submit">Ask Assistant</button>
      </form>
      <div id="assistantConversation" class="assistant-conversation">
        <div class="assistant-message assistant">
          <strong>AI Assistant</strong>
          <p>Ask about KPI trends, forecast outlooks, team updates, or system recommendations.</p>
        </div>
      </div>
    </article>
    <article class="card span-4 premium-panel">
      <small>Suggested prompts</small>
      <h2>Try one of these</h2>
      <div class="assistant-suggestions">
        ${["What is the revenue forecast for next quarter?", "Show me branches with stock alerts.", "Summarize today's support ticket trends.", "List high-risk approvals needing attention."].map((suggestion) => `<button class="assistant-suggestion" type="button">${escapeHtml(suggestion)}</button>`).join("")}
      </div>
    </article>
  `;
}

function collaborationPage(view) {
  const messages = [
    { sender: "Team", text: "New approval request is ready for review.", time: "2m ago" },
    { sender: "You", text: "Confirm the stock transfer for Eldoret.", time: "5m ago" },
    { sender: "Team", text: "Customer ticket #5021 is marked urgent.", time: "7m ago" },
  ];
  return `
    ${metricsFor()}
    <article class="card span-7 premium-panel">
      <small>${escapeHtml(view)}</small>
      <h2>${escapeHtml(view)} Workspace</h2>
      <div class="support-messages" style="max-height:400px; overflow:auto;">
        ${messages.map((message) => `<div class="message ${message.sender === "You" ? "outgoing" : "incoming"}"><p>${escapeHtml(message.text)}</p><small>${escapeHtml(message.sender)} · ${escapeHtml(message.time)}</small></div>`).join("")}
      </div>
      <form id="collaborationChatForm" class="support-compose">
        <textarea id="collaborationChatInput" placeholder="Type a message to the team"></textarea>
        <button class="primary-action" type="submit">Send Message</button>
      </form>
    </article>
    <article class="card span-5 premium-panel">
      <small>Live Presence</small>
      <h2>Team status</h2>
      <div class="security-grid">
        ${["Amina - Online", "Brian - Online", "Mercy - Away", "David - Online"].map((status) => `<div class="security-box"><strong>${status}</strong><span>Realtime collaboration</span></div>`).join("")}
      </div>
      <div class="filter-row" style="flex-wrap:wrap; gap:10px; margin-top:12px;">
        <button class="mini-button" type="button" data-open-view="Activity Dashboard">View Activity</button>
        <button class="mini-button" type="button" data-open-view="Search Center">Search Records</button>
      </div>
    </article>
  `;
}

function approvalCenter(view) {
  return `<article class="card span-12 premium-panel">
    <small>${view}</small>
    <h2>Purchases, HR, transfers, and expense approvals</h2>
    <div class="approval-board">
      ${["Procurement Requests", "Leave Approvals", "Expense Approvals", "Workflow History"].map((lane, laneIndex) => `
        <div class="approval-lane">
          <strong>${lane}</strong>
          ${["Purchase order KSh 1.8M", "HR overtime batch", "Inter-branch transfer", "Vendor contract renewal"].slice(laneIndex, laneIndex + 3).map((text) => `
            <div class="approval">
              <span>${text}<small> Routed by policy engine</small></span>
              <span class="approval-actions"><button class="mini-button" data-action="preview">Preview</button><button class="mini-button" data-action="approve">Approve</button></span>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  </article>`;
}

function inventoryPage(view) {
  return `
    ${metricCard("Global Stock Health", "88%", "4 categories below threshold", "warning")}
    ${metricCard("Warehouses", "9", "Live movement tracking")}
    ${metricCard("Transfers", "31", "12 in transit")}
    ${metricCard("Suppliers", "128", "11 preferred partners")}
    <article class="card span-7 premium-panel">
      <small>${view}</small>
      <h2>Inventory and logistics workspace</h2>
      <div class="inventory-scanner">
        <div class="scan-frame"></div>
        <div>
          <strong>Product Scanning</strong>
          <p>Protective Gloves matched SKU PG-4401. Branch stock: 312 units. Reorder threshold: 500.</p>
          <button class="mini-button">Create Transfer Request</button>
        </div>
      </div>
      ${activityList(["Warehouse dispatched TR-4401", "Low stock threshold acknowledged", "Supplier ETA updated", "Cycle count variance resolved"])}
    </article>
    ${tableModule("Stock Monitoring", ["Item", "Branch", "Available", "Status"], [
      ["Protective Gloves", "Eldoret", "312", "Low"],
      ["Lab Reagents", "Nakuru", "894", "Healthy"],
      ["Safety Goggles", "Mombasa", "522", "Watch"],
      ["Storage Containers", "Kisumu", "1,120", "Healthy"],
    ], "span-5")}
  `;
}

function staffFeaturePage(view) {
  if (view === "Staff Restrictions") {
    return `
      ${metricsFor("staff")}
      ${staffRestrictionsPanel()}
      ${emptyState("Admin areas are restricted", "Staff members cannot view other employee records, manage payroll or HR settings, approve administrative actions, delete company records, or access admin dashboards.", "Open Personal Dashboard", "Personal Dashboard")}
    `;
  }

  const profile = getStoredProfile();
  const featureGroup = staffFeatureGroups.find(([, features]) => features.includes(view));
  const groupName = featureGroup?.[0] || "Staff Self-Service";
  const relatedFeatures = featureGroup?.[1] || staffFeatureGroups.flatMap(([, features]) => features);
  const featureMeta = staffFeatureMeta(view);
  return `
    ${metricsFor("staff")}
    ${modernIdentityCard({
      title: featureMeta.title,
      subtitle: profile.name || "Staff Member",
      idLabel: "Staff ID",
      idValue: profile.staffId,
      status: featureMeta.status,
      statusTone: featureMeta.tone,
      details: [["Module", groupName], ["Privacy", "Own record only"], ["Access", "Staff self-service"]],
      actions: [{ label: "Open Dashboard", view: "Personal Dashboard" }, { label: "My Staff Card", view: "My Staff Card" }],
    })}
    <article class="card span-7 premium-panel">
      <small>${escapeHtml(groupName)}</small>
      <h2>${escapeHtml(view)}</h2>
      <p>${escapeHtml(featureMeta.description)}</p>
      <div class="security-grid">
        ${featureMeta.tiles.map((tile) => `<div class="security-box"><strong>${escapeHtml(tile[0])}</strong><span>${escapeHtml(tile[1])}</span></div>`).join("")}
      </div>
      <div class="filter-row">
        ${featureMeta.actions.map((action) => `<button class="filter-chip" type="button">${escapeHtml(action)}</button>`).join("")}
      </div>
    </article>
    ${activityTimeline(featureMeta.timeline)}
    <article class="card span-5">
      <small>Related Staff Tools</small>
      <h2>${escapeHtml(groupName)}</h2>
      <div class="channel-list">
        ${relatedFeatures.map((feature) => `<button class="task ${feature === view ? "active" : ""}" type="button" data-view="${escapeHtml(feature)}"><strong>${escapeHtml(feature)}</strong><small>Staff-only self-service module</small></button>`).join("")}
      </div>
    </article>
    ${staffRestrictionsPanel()}
  `;
}

function staffAttendanceSignInPage(view) {
  const profile = getStoredProfile();
  const info = getStaffOwnInfo();
  const now = new Date();
  const date = now.toISOString().slice(0, 10);
  const time = now.toTimeString().slice(0, 5);
  const year = now.getFullYear();
  const recent = getAttendanceLog().filter((item) => item.staffId === profile.staffId).slice(0, 5);
  const openRecord = recent.find((item) => !item.signOutTime);
  return `
    ${metricsFor("staff")}
    <article class="card span-7 premium-panel">
      <small>${escapeHtml(view)}</small>
      <h2>Worker sign-in and sign-out</h2>
      <p>Sign in when you arrive and sign out when you leave so HR can capture year, date, shift, branch, sign-in time, sign-out time, and verification method.</p>
      <form class="attendance-sign-form">
        <div class="form-grid">
          <label>Staff ID<input readonly name="staffId" value="${escapeHtml(profile.staffId || "")}" placeholder="Generated after registration"></label>
          <label>Name<input readonly name="name" value="${escapeHtml(profile.name || "Staff Member")}"></label>
          <label>Year<input readonly name="year" value="${year}"></label>
          <label>Date<input type="date" required name="date" value="${date}"></label>
          <label>Time<input type="time" required name="time" value="${time}"></label>
          <label>Shift<select required name="shift">${shiftOptions(info.preferredShift)}</select></label>
          <label>Branch<input required name="branch" value="${escapeHtml(profile.branch || "")}" placeholder="Branch or work site"></label>
          <label>Method<select name="method"><option ${/Biometric/.test(view) ? "selected" : ""}>Biometric</option><option ${/QR/.test(view) ? "selected" : ""}>QR Code</option><option>Manual Staff Sign-In</option><option>Mobile App</option></select></label>
          <label>Work Type<select name="workType"><option>Full Time</option><option>Part Time</option><option>Contract</option><option>Remote</option></select></label>
          <label>Device/Kiosk<input name="device" value="Staff Portal" placeholder="Reception kiosk, mobile app, or device"></label>
        </div>
        <button class="primary-action" type="submit">Sign In for Shift</button>
      </form>
    </article>
    <article class="card span-5 premium-panel">
      <small>Modern Attendance</small>
      <h2>Fast attendance capture</h2>
      <div class="inventory-scanner">
        <div class="scan-frame"></div>
        <div class="feature-launcher">
          <strong>${escapeHtml(view)}</strong>
          <p>Use biometric, QR code, mobile app, or manual staff verification. HR sees only the captured attendance record.</p>
          <div class="filter-row">
            <button class="mini-button" type="button" data-attendance-signout ${openRecord ? "" : "disabled"}>${openRecord ? "Sign Out Now" : "No Active Shift"}</button>
          </div>
        </div>
      </div>
    </article>
    ${tableModule("My Recent Attendance", ["Year", "Date", "In / Out", "Shift"], recent.length ? recent.map((item) => [item.year, item.date, `${item.time} - ${item.signOutTime || "Still in"}`, item.shift]) : [["No records", "Sign in", "To capture", "Your shift"]])}
  `;
}

function shiftOptions(selected = "Day") {
  return ["Day", "Night", "Part Time", "Flexible"].map((shift) => `<option ${selected === shift ? "selected" : ""}>${shift}</option>`).join("");
}

function staffFeatureMeta(view) {
  const presets = [
    [/Registration/, "Smart onboarding", "Registration captures identity, department, branch, company email, personal recovery email, and generated Staff ID before HR approval.", "Pending HR Approval", "warning", ["Capture details", "Send verification", "Track approval"]],
    [/OTP|2FA|Login|Face Recognition/, "Secure staff access", "Staff sign in with protected credentials and optional stronger checks such as OTP, two-factor prompts, and face recognition.", "Protected", "positive", ["Send OTP", "Review device", "Update login method"]],
    [/Attendance|QR Code/, "Attendance check-in", "Staff can record attendance through biometric or QR workflows while attendance history remains scoped to the signed-in employee.", "Ready", "positive", ["Start check-in", "Scan QR", "View today's log"]],
    [/Leave|Overtime/, "Leave and overtime", "Submit leave or overtime requests, track personal balances, and follow status without seeing other employees' requests.", "Self-service", "positive", ["New request", "Check balance", "View history"]],
    [/Payslip|Tax|Deduction|Expense/, "Pay and expense center", "Download personal payslips, review tax and deduction lines, and submit expense reimbursement requests.", "Private payroll view", "warning", ["Download", "Submit claim", "View deductions"]],
    [/Document|CV|Certificate|Letters|Policies|Cloud/, "Document hub", "Upload staff documents, store certificates, download employment letters, and read company policies from a private cloud file area.", "Available", "positive", ["Upload file", "Download letter", "Open policy"]],
    [/Task|Assignment|Performance|Training|Learning|Skill|Certification|Career|Goal|KPI|Promotion|Achievements|Badges/, "Growth workspace", "Track tasks, reviews, training, certifications, career goals, KPIs, promotion applications, and staff achievements.", "In progress", "positive", ["Update goal", "Open training", "Review progress"]],
    [/Messaging|Chat|Support|Chatbot|Collaboration|Survey/, "HR support channel", "Message HR, open staff tickets, use AI help desk support, collaborate with the team, and participate in surveys.", "Online", "positive", ["Message HR", "Open ticket", "Ask chatbot"]],
    [/News|Notification|Reminder|Birthday|Anniversary|Theme|Mobile|Wellness|Widgets|Language/, "Staff experience", "Personalize notifications, dashboard widgets, theme, language, mobile access, wellness resources, and reminders.", "Personalized", "positive", ["Customize", "Review alerts", "Open resources"]],
  ];
  const preset = presets.find(([pattern]) => pattern.test(view)) || [null, "Staff self-service", `${view} is available as a private staff module for the signed-in employee.`, "Available", "positive", ["Open tool", "Save update", "View history"]];
  return {
    title: preset[1],
    description: preset[2],
    status: preset[3],
    tone: preset[4],
    actions: preset[5],
    tiles: [
      ["Scope", "Only your record"],
      ["Security", "Staff authenticated"],
      ["Audit", "Activity logged"],
      ["HR Link", "Request routed"],
    ],
    timeline: [
      [`${view} opened`, "Personal staff workspace loaded"],
      ["Access rule applied", "Other employee records hidden"],
      ["Activity log updated", "Staff self-service event recorded"],
    ],
  };
}

function staffRestrictionsPanel() {
  return `
    <article class="card span-12">
      <small>Staff Restrictions</small>
      <h2>Staff access boundaries</h2>
      <div class="erp-table">
        <div class="table-row table-head"><span>Rule</span><span>Status</span></div>
        ${staffRestrictions.map((rule) => `<div class="table-row"><span>${escapeHtml(rule)}</span><span>Enforced</span></div>`).join("")}
      </div>
    </article>
  `;
}

function staffOwnProfilePage(view) {
  const profile = getStoredProfile();
  const info = getStaffOwnInfo();
  const department = profile.role || "Not set";
  const branch = profile.branch || "Not set";
  const completedFields = [profile.name, profile.companyEmail, profile.recoveryEmail, department, branch, info.phone, info.position, info.emergencyName, info.emergencyPhone, info.homeAddress].filter(Boolean).length;
  const completion = Math.round((completedFields / 10) * 100);
  const initials = (profile.name || "Staff Member").split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  return `
    ${metricsFor("staff")}
    ${modernIdentityCard({
      title: "Private Staff Identity",
      subtitle: profile.name || "Staff Member",
      idLabel: "Staff ID",
      idValue: profile.staffId,
      status: profile.approvalStatus || "Pending HR Approval",
      statusTone: "warning",
      details: [["Department", department], ["Branch", branch], ["Company Email", profile.companyEmail]],
      actions: [{ label: "Update My Info", view: "My HR Information" }, { label: "Change Password", view: "Security Settings" }],
    })}
    <article class="card span-7 premium-panel">
      <small>${view}</small>
      <h2>Private staff card</h2>
      <div class="staff-card">
        <div class="staff-avatar">${escapeHtml(initials)}</div>
        <div>
          <strong>${escapeHtml(profile.name || "Staff Member")}</strong>
          <span>${escapeHtml(info.position || "Position not captured")}</span>
          <small>${escapeHtml(profile.companyEmail || "Company email not set")}</small>
        </div>
      </div>
      <div class="security-grid">
        <div class="security-box"><strong>Department</strong><span>${escapeHtml(department)}</span></div>
        <div class="security-box"><strong>Branch</strong><span>${escapeHtml(branch)}</span></div>
        <div class="security-box"><strong>Approval</strong><span>${escapeHtml(profile.approvalStatus || "Pending HR Approval")}</span></div>
        <div class="security-box"><strong>Completion</strong><span>${completion}% captured</span></div>
      </div>
      <div class="completion-meter" aria-label="Profile completion"><span style="width:${completion}%"></span></div>
    </article>
    ${activityTimeline([
      ["Account registered", profile.staffId || "Staff ID pending"],
      ["Approval status checked", profile.approvalStatus || "Pending HR Approval"],
      ["Profile completion updated", `${completion}% captured`],
    ])}
    <article class="card span-7 premium-panel">
      <small>HR Capture</small>
      <h2>Your staff information</h2>
      <form class="staff-self-form">
        <div class="form-grid">
          <label>Name<input required name="name" value="${escapeHtml(profile.name || "")}" placeholder="Your full name"></label>
          <label>Staff ID<input readonly name="staffId" value="${escapeHtml(profile.staffId || "")}" placeholder="Generated after registration"></label>
          <label>Department<input required name="department" value="${escapeHtml(department === "Not set" ? "" : department)}" placeholder="Department"></label>
          <label>Branch<input required name="branch" value="${escapeHtml(branch === "Not set" ? "" : branch)}" placeholder="Branch"></label>
          <label>Company Email<input type="email" required name="companyEmail" value="${escapeHtml(profile.companyEmail || "")}" placeholder="name@mapphex.com"></label>
          <label>Personal Email<input type="email" required name="recoveryEmail" value="${escapeHtml(profile.recoveryEmail || "")}" placeholder="personal email"></label>
          <label>Phone Number<input name="phone" value="${escapeHtml(info.phone)}" placeholder="+254..."></label>
          <label>Position<input name="position" value="${escapeHtml(info.position)}" placeholder="Your position"></label>
          <label>Emergency Contact<input name="emergencyName" value="${escapeHtml(info.emergencyName)}" placeholder="Contact name"></label>
          <label>Emergency Phone<input name="emergencyPhone" value="${escapeHtml(info.emergencyPhone)}" placeholder="+254..."></label>
          <label>Preferred Shift<select name="preferredShift">${shiftOptions(info.preferredShift)}</select></label>
          <label>Status<select name="status"><option ${info.status === "Active" ? "selected" : ""}>Active</option><option ${info.status === "On Leave" ? "selected" : ""}>On Leave</option><option ${info.status === "Inactive" ? "selected" : ""}>Inactive</option></select></label>
          <label>Home Address<input name="homeAddress" value="${escapeHtml(info.homeAddress)}" placeholder="Home address"></label>
          <label>Skills<input name="skills" value="${escapeHtml(info.skills)}" placeholder="Skills or certifications"></label>
        </div>
        <button class="primary-action" type="submit">Save My Information</button>
      </form>
    </article>
    ${emptyState("No shared staff records", "This portal only shows your own HR information. Other staff records stay private.", "View My Staff Card", "My Staff Card")}
    ${staffFeatureOverview()}
    ${staffRestrictionsPanel()}
    <article class="card span-12">
      <small>Private Record</small>
      <h2>Only your information is shown</h2>
      <div class="erp-table">
        <div class="table-row table-head"><span>Field</span><span>Your Information</span></div>
        ${[
          ["Name", profile.name || "Not captured"],
          ["Staff ID", profile.staffId || "Not captured"],
          ["Department", department],
          ["Branch", branch],
          ["Company Email", profile.companyEmail || "Not captured"],
          ["Personal Email", profile.recoveryEmail || "Not captured"],
          ["Phone", info.phone || "Not captured"],
          ["Position", info.position || "Not captured"],
          ["Emergency Contact", info.emergencyName || "Not captured"],
          ["Emergency Phone", info.emergencyPhone || "Not captured"],
          ["Skills", info.skills || "Not captured"],
          ["Approval", profile.approvalStatus || "Pending HR Approval"],
        ].map((row) => `<div class="table-row"><span>${escapeHtml(row[0])}</span><span>${escapeHtml(row[1])}</span></div>`).join("")}
      </div>
    </article>
  `;
}

function staffFeatureOverview() {
  return `
    <article class="card span-12">
      <small>Staff/Employee Features</small>
      <h2>Self-service modules</h2>
      <div class="security-grid">
        ${staffFeatureGroups.slice(0, 4).map(([group, features]) => `<div class="security-box"><strong>${escapeHtml(group)}</strong><span>${features.length} tools enabled</span></div>`).join("")}
      </div>
      <div class="filter-row">
        ${staffFeatureGroups.flatMap(([, features]) => features).map((feature) => `<button class="filter-chip" type="button" data-view="${escapeHtml(feature)}">${escapeHtml(feature)}</button>`).join("")}
      </div>
    </article>
  `;
}

function customerDashboard(view) {
  const profile = getStoredProfile();
  return `
    ${metricsFor("customer")}
    ${modernIdentityCard({
      title: "Customer Identity",
      subtitle: profile.name || "Customer Account",
      idLabel: "Customer ID",
      idValue: profile.customerId || profile.companyEmail,
      status: profile.customerId ? "Verified" : "New Account",
      details: [["Account Type", profile.role], ["Personal Email", profile.recoveryEmail], ["Login", "Customer ID + password"]],
      actions: [{ label: "Track Order", view: "Order Tracking" }, { label: "Open Support", view: "Support Tickets" }, { label: "View Receipts", view: "Receipts" }],
    })}
    ${chartCard(view, "Spend trend, payment behavior, and self-service activity", "revenueChart", "span-7")}
    ${activityTimeline([
      ["Account created", profile.customerId || "Customer ID pending"],
      ["Profile secured", profile.recoveryEmail || "Personal email pending"],
      ["Self-service ready", "Orders, receipts, and support available"],
    ])}
    ${featureLauncher("Animated Order Timeline", "Processing, packaging, dispatch, and delivery tracking.", "Order Tracking", "span-5")}
    ${featureLauncher("Smart Recommendation System", "Suggested products, frequently ordered items, and purchase insights.", "Smart Recommendations")}
    ${customerFeatureOverview()}
    ${emptyState("No active support ticket", "When you open a support request, it will appear here with status and response time.", "Open Support", "Support Tickets")}
  `;
}

function customerFeatureOverview() {
  return `
    <article class="card span-12">
      <small>Customer Features</small>
      <h2>Personalized self-service modules</h2>
      <div class="security-grid">
        ${customerFeatureGroups.slice(0, 4).map(([group, features]) => `<div class="security-box"><strong>${escapeHtml(group)}</strong><span>${features.length} tools enabled</span></div>`).join("")}
      </div>
      <div class="filter-row">
        ${customerFeatureGroups.flatMap(([, features]) => features).map((feature) => `<button class="filter-chip" type="button" data-view="${escapeHtml(feature)}">${escapeHtml(feature)}</button>`).join("")}
      </div>
    </article>
  `;
}

function customerProductPage(view) {
  const products = [
    ["Protective Gloves", "Safety", "MediCore - KSh 2,400", "In Stock"],
    ["Lab Reagents", "Laboratory", "ChemPlus - KSh 18,500", "Low Stock"],
    ["Safety Goggles", "Safety", "ClearGuard - KSh 1,250", "Out of Stock"],
    ["Storage Containers", "Logistics", "StorePro - KSh 4,800", "Coming Soon"],
    ["Smart Dispenser", "Equipment", "MAPPHEX - KSh 42,000", "Pre-order Available"],
  ];
  return `
    ${metricsFor("customer")}
    <article class="card span-7 premium-panel">
      <small>${escapeHtml(view)}</small>
      <h2>Product and service catalog</h2>
      <p>Browse products, search by keyword, filter by category, price, brand, and availability, compare options, save wishlist items, and order online.</p>
      <div class="form-grid">
        <label>Search<input value="${/Search/.test(view) ? "Protective" : ""}" placeholder="Search products or services"></label>
        <label>Category<select><option>All categories</option><option>Safety</option><option>Laboratory</option><option>Logistics</option><option>Equipment</option></select></label>
        <label>Price<select><option>Any price</option><option>Under KSh 5,000</option><option>KSh 5,000 - 20,000</option><option>Above KSh 20,000</option></select></label>
        <label>Availability<select><option>Any status</option><option>In Stock</option><option>Low Stock</option><option>Out of Stock</option><option>Coming Soon</option><option>Pre-order Available</option></select></label>
      </div>
      <div class="filter-row">
        <button class="mini-button" type="button">Search</button>
        <button class="mini-button" type="button">Compare Selected</button>
        <button class="mini-button" type="button">Open Cart</button>
      </div>
    </article>
    <article class="card span-5 premium-panel">
      <small>Media Preview</small>
      <h2>Images, videos, and specifications</h2>
      <div class="recommendation-grid">
        ${["Image Gallery", "Product Video", "Specifications", "Availability Feed"].map((item) => `<button class="recommendation"><strong>${item}</strong><span>Open preview</span></button>`).join("")}
      </div>
    </article>
    ${tableModule("Available Products", ["Product", "Category", "Brand & Price", "Stock"], products, "span-12")}
  `;
}

function customerFeaturePage(view) {
  const profile = getStoredProfile();
  const featureGroup = customerFeatureGroups.find(([, features]) => features.includes(view));
  const groupName = featureGroup?.[0] || "Customer Self-Service";
  const relatedFeatures = featureGroup?.[1] || customerFeatureGroups.flatMap(([, features]) => features);
  const featureMeta = customerFeatureMeta(view);
  return `
    ${metricsFor("customer")}
    ${modernIdentityCard({
      title: featureMeta.title,
      subtitle: profile.name || "Customer Account",
      idLabel: "Customer ID",
      idValue: profile.customerId || profile.companyEmail,
      status: featureMeta.status,
      statusTone: featureMeta.tone,
      details: [["Module", groupName], ["Experience", "Personalized"], ["Access", "Customer self-service"]],
      actions: [{ label: "Open Dashboard", view: "Customer Dashboard" }, { label: "Browse Products", view: "Browse Available Products" }],
    })}
    <article class="card span-7 premium-panel">
      <small>${escapeHtml(groupName)}</small>
      <h2>${escapeHtml(view)}</h2>
      <p>${escapeHtml(featureMeta.description)}</p>
      <div class="security-grid">
        ${featureMeta.tiles.map((tile) => `<div class="security-box"><strong>${escapeHtml(tile[0])}</strong><span>${escapeHtml(tile[1])}</span></div>`).join("")}
      </div>
      <div class="filter-row">
        ${featureMeta.actions.map((action) => `<button class="filter-chip" type="button">${escapeHtml(action)}</button>`).join("")}
      </div>
    </article>
    ${activityTimeline(featureMeta.timeline)}
    <article class="card span-5">
      <small>Related Customer Tools</small>
      <h2>${escapeHtml(groupName)}</h2>
      <div class="channel-list">
        ${relatedFeatures.map((feature) => `<button class="task ${feature === view ? "active" : ""}" type="button" data-view="${escapeHtml(feature)}"><strong>${escapeHtml(feature)}</strong><small>Customer self-service module</small></button>`).join("")}
      </div>
    </article>
  `;
}

function customerFeatureMeta(view) {
  const presets = [
    [/Dashboard|Account Overview|Activity|Homepage|Widgets|Dark\/Light/, "Personalized dashboard", "A fast dashboard with account overview, activity tracking, recommendations, theme controls, and customer-specific widgets.", "Personalized", "positive", ["Customize widgets", "Review activity", "Switch theme"]],
    [/Smart Search|Voice Search|QR Code|Real-Time Updates|Mobile-Friendly/, "Smart modern access", "Search with suggestions or voice, use QR code support, receive real-time updates, and keep the portal mobile-friendly.", "Live", "positive", ["Try search", "Scan QR", "Refresh feed"]],
    [/Mobile App|Responsive|Multi-Language|Cloud Document|Digital Signatures|Fast Loading/, "Premium customer experience", "Enable mobile app integration, responsive layouts, multi-language access, cloud documents, digital signatures, and fast-loading dashboards.", "Premium", "positive", ["Open app", "Upload document", "Sign digitally"]],
  ];
  const preset = presets.find(([pattern]) => pattern.test(view)) || [null, "Customer self-service", `${view} is available as a modern customer portal feature.`, "Available", "positive", ["Open tool", "Save preference", "View history"]];
  return {
    title: preset[1],
    description: preset[2],
    status: preset[3],
    tone: preset[4],
    actions: preset[5],
    tiles: [
      ["Personalized", "Account-aware"],
      ["Responsive", "Mobile-ready"],
      ["Updates", "Real-time"],
      ["Support", "Connected"],
    ],
    timeline: [
      [`${view} opened`, "Customer workspace loaded"],
      ["Preferences applied", "Personalized experience refreshed"],
      ["Activity tracked", "Customer event added to history"],
    ],
  };
}

function featureLauncher(title, description, view, span = "span-6") {
  return `<article class="card ${span} premium-panel feature-launcher">
    <small>Hidden Feature</small>
    <h2>${title}</h2>
    <p>${description}</p>
    <button class="mini-button" type="button" data-open-view="${view}">Open Feature</button>
  </article>`;
}

function orderTimeline(view) {
  return `<article class="card span-7 premium-panel">
    <small>${view}</small>
    <h2>Animated order timeline for ORD-7719</h2>
    <div class="order-timeline">
      ${["Processing", "Packaging", "Dispatch", "Delivery"].map((step, index) => `<div class="order-step ${index < 3 ? "complete" : ""}"><strong>${step}</strong><span>${index < 3 ? "Completed" : "Expected tomorrow"}</span></div>`).join("")}
    </div>
  </article>
  <article class="card span-5">
    <small>Tracking Intelligence</small>
    <h2>Delivery confidence 94%</h2>
    ${activityList(["Package scanned at Nairobi hub", "Route optimized for morning delivery", "Invoice attached to account", "Support SLA still green"])}
  </article>
  ${/Booking|Appointment/.test(view) ? customerBookingShiftPanel() : ""}`;
}

function customerBookingShiftPanel() {
  return `<article class="card span-12 premium-panel">
    <small>Booking & Appointment Scheduling</small>
    <h2>Choose appointment shift</h2>
    <div class="form-grid">
      <label>Appointment Date<input type="date" value="${new Date().toISOString().slice(0, 10)}"></label>
      <label>Appointment Time<input type="time" value="09:00"></label>
      <label>Preferred Shift<select>${shiftOptions("Day")}</select></label>
      <label>Service Type<select><option>Product demo</option><option>Delivery support</option><option>Account review</option><option>Technical visit</option></select></label>
    </div>
    <button class="primary-action" type="button">Schedule Appointment</button>
  </article>`;
}

function recommendationsPage(view) {
  return `<article class="card span-12 premium-panel">
    <small>${view}</small>
    <h2>Suggested products and purchase insights</h2>
    <div class="recommendation-grid">
      ${["Protective Gloves", "Lab Reagents", "Safety Goggles", "Storage Containers"].map((item, index) => `
        <button class="recommendation">
          <strong>${item}</strong>
          <span>${["Frequently ordered", "Demand rising", "Pairs with last order", "Bulk discount"][index]}</span>
        </button>
      `).join("")}
    </div>
  </article>`;
}

function supportPage(view) {
  return `<article class="card span-7 premium-panel">
    <small>${view}</small>
    <h2>Support center with live chat and knowledge base</h2>
    <div class="support-summary">
      <div><strong>Open tickets</strong><span>2 active requests</span></div>
      <div><strong>Average reply</strong><span>6 min</span></div>
      <div><strong>Agent status</strong><span>Available</span></div>
    </div>
    <div class="support-messages">
      ${["Hi, I need help with my latest invoice.", "Your delivery was delayed by the carrier.", "Can I change shipping instructions?", "Payment confirmation needed for RCT-3344."].map((message, index) => `<div class="message ${index % 2 === 0 ? "incoming" : "outgoing"}"><p>${escapeHtml(message)}</p><small>${index % 2 === 0 ? "Support" : "You"} · ${5 + index * 2} min ago</small></div>`).join("")}
    </div>
  </article>
  <article class="card span-5 premium-panel">
    <small>Quick help topics</small>
    <h2>Get instant answers</h2>
    <div class="filter-row">
      <button class="mini-button" type="button" data-support-topic="invoice">📄 Invoice Help</button>
      <button class="mini-button" type="button" data-support-topic="delivery">📦 Track Delivery</button>
      <button class="mini-button" type="button" data-support-topic="payment">💳 Payment Issues</button>
      <button class="mini-button" type="button" data-support-topic="faq">❓ View FAQ</button>
    </div>
  </article>
  <article class="card span-5 premium-panel">
    <small>Compose message</small>
    <h2>Send a support request</h2>
    <div class="support-compose">
      <textarea placeholder="Describe your issue or request"></textarea>
      <button class="primary-action" type="button" id="supportSendButton">Send Message</button>
    </div>
  </article>`;
}

function paymentsPage(view) {
  return `<article class="card span-5 premium-panel">
    <small>${view}</small>
    <h2>Customer payment center</h2>
    <div class="signal-grid">
      <div><strong>KSh 680K</strong><span>Outstanding balance</span></div>
      <div><strong>4</strong><span>Due invoices</span></div>
      <div><strong>98%</strong><span>On-time payments</span></div>
      <div><strong>2</strong><span>Saved methods</span></div>
    </div>
    <div class="filter-row">
      <button class="mini-button" type="button">Pay Now</button>
      <button class="mini-button" type="button">Add Payment Method</button>
    </div>
  </article>
  ${tableModule("Recent Transactions", ["Date", "Reference", "Amount", "Status"], [
    ["May 12", "RCT-3344", "KSh 220K", "Paid"],
    ["May 03", "RCT-3291", "KSh 190K", "Paid"],
    ["Apr 28", "INV-9082", "KSh 103K", "Due"],
    ["Apr 19", "INV-9017", "KSh 167K", "Paid"],
  ], "span-7")}`;
}

function loyaltyPage(view) {
  return `<article class="card span-5 premium-panel">
    <small>${view}</small>
    <h2>Loyalty and rewards</h2>
    <div class="signal-grid">
      <div><strong>18,420</strong><span>Reward points</span></div>
      <div><strong>Gold</strong><span>Tier status</span></div>
      <div><strong>120</strong><span>Days until renewal</span></div>
      <div><strong>12</strong><span>Available offers</span></div>
    </div>
    <div class="completion-meter" aria-label="Loyalty progress"><span style="width:72%"></span></div>
    <p class="result-message">Spend KSh 180K more to upgrade to Platinum and unlock priority delivery.</p>
  </article>
  <article class="card span-7 premium-panel">
    <small>Loyalty rewards</small>
    <h2>Redeem your exclusive offers</h2>
    <div class="recommendation-grid">
      ${["🎁 10% off next order", "🚚 Free express delivery", "💰 KSh 2,500 back", "⭐ Priority support"].map((item) => `<button class="recommendation" type="button" data-redeem-offer="${item}"><strong>${item}</strong><span>Redeem now</span></button>`).join("")}
    </div>
  </article>
  <article class="card span-5 premium-panel">
    <small>Membership</small>
    <h2>Tier progress</h2>
    <div class="filter-row">
      <button class="mini-button" type="button" data-loyalty-action="history">📊 Points History</button>
      <button class="mini-button" type="button" data-loyalty-action="tierinfo">🏆 Tier Benefits</button>
    </div>
  </article>`;
}

function searchCenterPage(view) {
  return `<article class="card span-12 premium-panel"><small>${view}</small><h2>Global search for your customer portal</h2><div class="search-results">${searchIndex.filter((item) => item[1] !== "System").map((item) => `<div class="activity"><span><strong>${item[0]}</strong><br><small>${item[2]}</small></span><small>${item[1]}</small></div>`).join("")}</div></article>`;
}

function managementPage(view, subtitle) {
  return `
    ${metricsFor()}
    <article class="card span-5 premium-panel">
      <small>${view}</small>
      <h2>${subtitle}</h2>
      <div class="form-grid">
        <label>Policy Name<input value="${view} Policy"></label>
        <label>Status<select><option>Active</option><option>Draft</option><option>Paused</option></select></label>
        <label>Owner<input value="${portal === "admin" ? "HQ Operations" : "Account Owner"}"></label>
        <label>Risk Level<select><option>Normal</option><option>Elevated</option><option>Critical</option></select></label>
      </div>
      <button class="mini-button">Save Configuration</button>
    </article>
    ${tableModule("Recent Activity", ["Record", "Type", "Status", "Updated"], [
      ["Session SG-901", "Security", "Active", "2m ago"],
      ["Policy Update", "Workflow", "Published", "14m ago"],
      ["Profile Change", "Identity", "Reviewed", "1h ago"],
      ["Backup Snapshot", "System", "Complete", "3h ago"],
    ], "span-7")}
    ${profileSettingsPanel()}
    ${passwordSecurityPanel()}
  `;
}

function profileSettingsPanel() {
  const profile = getStoredProfile();
  const roleOptions = Object.keys(roleAccess[portal]).map((role) => `<option ${role === profile.role ? "selected" : ""}>${role}</option>`).join("");
  const identityLabel = portal === "customer" ? "Customer ID" : "Company Email";
  const identityPlaceholder = portal === "customer" ? "MX-CUST-2026-0001" : "company email";
  const recoveryLabel = portal === "customer" ? "Personal Email" : "Personal Recovery Email";
  return `<article class="card span-12 premium-panel">
    <small>Persistent Profile</small>
    <h2>Profile, role, language, theme, and preferences</h2>
    <form class="profile-settings-form">
      <div class="form-grid">
        <label>Full Name<input required name="name" value="${profile.name || ""}" placeholder="Your name"></label>
        <label>${identityLabel}<input ${portal === "customer" ? "" : "type=\"email\""} required name="companyEmail" value="${profile.companyEmail || ""}" placeholder="${identityPlaceholder}"></label>
        <label>${recoveryLabel}<input type="email" required name="recoveryEmail" value="${profile.recoveryEmail || ""}" placeholder="personal email"></label>
        <label>Role<select required name="role">${roleOptions}</select></label>
        <label>Language<select name="language"><option ${profile.language === "English" ? "selected" : ""}>English</option><option ${profile.language === "Swahili" ? "selected" : ""}>Swahili</option><option ${profile.language === "French" ? "selected" : ""}>French</option></select></label>
        <label>Accent Color<select name="accent"><option ${profile.accent === "Blue" ? "selected" : ""}>Blue</option><option ${profile.accent === "Green" ? "selected" : ""}>Green</option><option ${profile.accent === "Violet" ? "selected" : ""}>Violet</option></select></label>
      </div>
      <button class="primary-action" type="submit">Save Profile</button>
    </form>
  </article>`;
}

function passwordSecurityPanel() {
  const profile = getStoredProfile();
  return `<article class="card span-12 premium-panel">
    <small>Account Security</small>
    <h2>Change password with email verification</h2>
    <form class="password-change-form">
      <div class="form-grid">
        <label>Personal Recovery Email<input type="email" required data-recovery-email placeholder="Enter your registered personal email"></label>
        <label>Verification Code<input required inputmode="numeric" maxlength="6" placeholder="Enter code from email"></label>
        <label>New Password<input type="password" required placeholder="Create new password"></label>
        <label>Confirm Password<input type="password" required placeholder="Confirm new password"></label>
      </div>
      <div class="password-strength"><span></span></div>
      <div class="filter-row">
        <button class="mini-button" type="button" data-send-code="portal">Send Email Code</button>
        <button class="primary-action" type="submit">Update Password</button>
      </div>
    </form>
    <div class="security-grid">
      <label class="toggle-row"><input type="checkbox" class="security-toggle" ${profile.twoFactor ? "checked" : ""}> Two-factor email code on login</label>
      <div class="security-box"><strong>Trusted Device</strong><span>This browser, verified today</span></div>
      <div class="security-box"><strong>Active Session</strong><span>${portalLabel()} portal, current device</span></div>
      <div class="security-box"><strong>Login History</strong><span>Last successful login just now</span></div>
    </div>
  </article>`;
}

function tablePage(view) {
  return `
    ${metricsFor()}
    ${tableModule(view, ["Name", "Category", "Status", "Value"], [
      ["Nakuru Branch", "Branch", "Active", "KSh 3.2M"],
      ["AlphaChem Industries", "Customer", "Priority", "KSh 680K"],
      ["Payroll Batch", "Finance", "Queued", "KSh 12.4M"],
      ["INV-9082", "Invoice", "Paid", "KSh 418K"],
      ["Amina Njoroge", "Staff", "Online", "94%"],
      ["TR-4401", "Transfer", "In Transit", "522 units"],
    ])}
  `;
}

function globalTemplate(view) {
  if (view === "Activity Feed" || view === "Real-Time Activity Center") {
    return `
      ${metricsFor()}
      <article class="card span-12 premium-panel">
        <small>${view}</small>
        <h2>Live organizational operations and transactions</h2>
        <div class="live-activity-feed">
          ${liveActivityData.map((item, index) => `
            <div class="activity-feed-item" style="--delay: ${index * 30}ms;">
              <div class="activity-marker ${item.type}"></div>
              <div class="activity-content">
                <div class="activity-header">
                  <span class="activity-icon">${item.icon}</span>
                  <div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <span class="activity-branch">${escapeHtml(item.branch)}</span>
                  </div>
                </div>
                <p>${escapeHtml(item.description)}</p>
                <small class="activity-time ${item.tone}">${item.timestamp}</small>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }
  
  if (view === "Activity Dashboard") {
    const dashboard = getActivityDashboard();
    const profile = getStoredProfile();
    const sessions = JSON.parse(localStorage.getItem(`mapphex-${portal}-sessions`) || "[]").filter(s => Date.now() - new Date(s.lastActivity).getTime() < 30 * 60 * 1000);
    
    return `
      ${metricsFor()}
      <article class="card span-12 premium-panel">
        <small>Premium: Activity Dashboard</small>
        <h2>Your security & activity overview</h2>
        <div class="filter-row" style="gap:10px;">
          <button type="button" id="downloadAuditBtn" class="primary-action">Download Audit Log</button>
          <button type="button" id="downloadBackupBtn" class="primary-action">Download Backup</button>
          <button type="button" id="enableIPWhitelistBtn" class="mini-button">Whitelist IP: ${getUserIP()}</button>
        </div>
      </article>
      
      <article class="card span-6 premium-panel">
        <small>Recent Activities</small>
        <h3>Your Account Activity</h3>
        <div class="search-results" style="max-height:400px;overflow:auto;">
          ${dashboard.recentActivities.length > 0 ? dashboard.recentActivities.map(a => `
            <div class="activity" style="padding:10px;border-bottom:1px solid var(--line);">
              <span>
                <strong>${a.type}</strong><br>
                <small>${a.description}</small>
              </span>
              <small style="white-space:nowrap;">${new Date(a.timestamp).toLocaleString()}</small>
            </div>
          `).join("") : "<div class='activity'><span>No activities recorded</span></div>"}
        </div>
      </article>
      
      <article class="card span-6 premium-panel">
        <small>Active Sessions</small>
        <h3>Your logged-in devices</h3>
        <div class="search-results" style="max-height:400px;overflow:auto;">
          ${sessions.length > 0 ? sessions.map(s => `
            <div class="activity" style="padding:10px;border-bottom:1px solid var(--line);">
              <span>
                <strong>${s.userAgent.substring(0, 30)}...</strong><br>
                <small>IP: ${s.ip}</small>
              </span>
              <small>${new Date(s.lastActivity).toLocaleTimeString()}</small>
            </div>
          `).join("") : "<div class='activity'><span>1 active session</span></div>"}
        </div>
      </article>
      
      <article class="card span-12 premium-panel">
        <small>Security Status</small>
        <h3>Account Protection</h3>
        <div class="filter-row" style="flex-wrap:wrap;gap:12px;">
          <div style="padding:12px;border:1px solid var(--line);border-radius:var(--radius);">
            <strong>✓ 2FA Enabled</strong><br>
            <small>Two-factor authentication is active</small>
          </div>
          <div style="padding:12px;border:1px solid var(--line);border-radius:var(--radius);">
            <strong>✓ Password Policy</strong><br>
            <small>Strong password requirements enforced</small>
          </div>
          <div style="padding:12px;border:1px solid var(--line);border-radius:var(--radius);">
            <strong>✓ Session Monitoring</strong><br>
            <small>${sessions.length} active session${sessions.length !== 1 ? 's' : ''}</small>
          </div>
          <div style="padding:12px;border:1px solid var(--line);border-radius:var(--radius);">
            <strong>✓ Audit Logging</strong><br>
            <small>All activities recorded</small>
          </div>
        </div>
      </article>
    `;
  }
  
  if (view === "Search Center") {
    return `<article class="card span-12 premium-panel"><small>${view}</small><h2>Global search across users, reports, orders, inventory, and branches</h2><div class="search-results">${searchIndex.map((item) => `<div class="activity"><span><strong>${item[0]}</strong><br><small>${item[2]}</small></span><small>${item[1]}</small></div>`).join("")}</div></article>`;
  }
  return managementPage(view, "Global ERP preferences for alerts, messages, activity, theme customization, language, accent colors, and shared account settings.");
}

function chartCard(label, title, canvasId, span) {
  return `<article class="card ${span} premium-panel">
    <small>${label}</small>
    <h2>${title}</h2>
    <div class="filter-row">
      <button class="filter-chip active">Revenue</button>
      <button class="filter-chip">Productivity</button>
      <button class="filter-chip">Branch Ranking</button>
      <button class="filter-chip">Heatmap</button>
    </div>
    <div class="chart-box"><canvas id="${canvasId}"></canvas></div>
  </article>`;
}

function tableModule(title, headers, rows, span = "span-12") {
  return `<article class="card ${span}">
    <small>Enterprise Table</small>
    <h2>${title}</h2>
    <div class="table-tools">
      <input class="table-filter" placeholder="Filter table">
      <button class="mini-button table-export" type="button">Export CSV</button>
      <button class="mini-button table-reset" type="button">Reset</button>
    </div>
    <div class="erp-table">
      <div class="table-row table-head">${headers.map((head) => `<span>${head}</span>`).join("")}</div>
      ${rows.map((row) => `<div class="table-row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}
    </div>
  </article>`;
}

function activityList(items) {
  return `<div class="activity-list">
    ${items.map((text, index) => `<div class="activity"><span>${text}</span><small>${index + 2}m ago</small></div>`).join("")}
  </div>`;
}

function assistantPanel() {
  if (portal !== "staff") return "";
  return `<section class="assistant-panel">
    <small>Smart Assistant Panel</small>
    <h3>Suggested next actions</h3>
    <div class="filter-row">
      <button class="filter-chip">Open scanner</button>
      <button class="filter-chip">Message team</button>
      <button class="filter-chip">Resolve alert</button>
      <button class="filter-chip">Automate workflow</button>
    </div>
  </section>`;
}

function bindDashboardEvents() {
  bindPasswordToggles(dashboard);
  
  // Premium: Activity Dashboard handlers
  document.getElementById("downloadAuditBtn")?.addEventListener("click", () => {
    const profile = getStoredProfile();
    const auditLogs = JSON.parse(localStorage.getItem(`mapphex-${portal}-audit-logs`) || "[]");
    const userLogs = auditLogs.filter(log => log.userId === profile.companyEmail);
    const data = JSON.stringify(userLogs, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `audit-log-${profile.companyEmail}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("Audit log downloaded.");
  });
  
  document.getElementById("downloadBackupBtn")?.addEventListener("click", () => {
    downloadBackup();
    showToast("Backup downloaded successfully.");
  });
  
  document.getElementById("enableIPWhitelistBtn")?.addEventListener("click", () => {
    const profile = getStoredProfile();
    const ip = getUserIP();
    addWhitelistedIP(profile.companyEmail, ip);
    showToast(`IP ${ip} added to whitelist.`);
  });

  document.querySelectorAll("[data-copy-value]").forEach((button) => {
    button.addEventListener("click", () => copyToClipboard(button.dataset.copyValue));
  });

  dashboard.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => renderView(button.dataset.view));
  });

  document.querySelectorAll("[data-close-success]").forEach((button) => {
    button.addEventListener("click", () => button.closest(".success-overlay")?.remove());
  });

  document.querySelectorAll(".staff-self-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      const companyEmail = normalizeEmail(values.companyEmail || "");
      const recoveryEmail = normalizeEmail(values.recoveryEmail || "");

      if (!companyEmail.endsWith("@mapphex.com")) {
        showToast("Company email must end with @mapphex.com.");
        return;
      }
      if (companyEmail === recoveryEmail) {
        showToast("Personal email must be different from company email.");
        return;
      }

      saveProfile({
        ...getStoredProfile(),
        name: values.name,
        companyEmail,
        recoveryEmail,
        branch: values.branch,
        role: values.department,
      });
      saveStaffOwnInfo({
        phone: values.phone,
        position: values.position,
        emergencyName: values.emergencyName,
        emergencyPhone: values.emergencyPhone,
        homeAddress: values.homeAddress,
        skills: values.skills,
        preferredShift: values.preferredShift,
        status: values.status,
      });
      loadPersistedState();
      renderNavigation();
      renderView(currentView);
      showToast("Your staff information was saved.");
    });
  });

  document.querySelectorAll(".attendance-sign-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const values = Object.fromEntries(new FormData(form).entries());
      const record = {
        ...values,
        signInTime: values.time,
        signOutTime: "",
        capturedAt: new Date().toISOString(),
      };
      saveAttendanceRecord(record);
      renderView(currentView);
      showActionDetails("Shift sign-in successful", "Your attendance has been captured for HR monitoring.", [
        ["Year", record.year],
        ["Date", record.date],
        ["Time", record.time],
        ["Shift", record.shift],
        ["Method", record.method],
      ]);
    });
  });

  document.querySelectorAll("[data-attendance-signout]").forEach((button) => {
    button.addEventListener("click", () => {
      const now = new Date();
      const profile = getStoredProfile();
      const signedOut = updateAttendanceSignOut(profile.staffId, {
        signOutDate: now.toISOString().slice(0, 10),
        signOutTime: now.toTimeString().slice(0, 5),
        signOutCapturedAt: now.toISOString(),
      });
      if (!signedOut) {
        showToast("No active shift found to sign out.");
        return;
      }
      renderView(currentView);
      showActionDetails("Shift sign-out successful", "Your sign-out has been captured for HR monitoring.", [
        ["Date", signedOut.signOutDate],
        ["Sign In", signedOut.signInTime || signedOut.time],
        ["Sign Out", signedOut.signOutTime],
        ["Shift", signedOut.shift],
      ]);
    });
  });

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => chip.classList.toggle("active"));
  });

  document.querySelectorAll(".recommendation").forEach((card) => {
    card.addEventListener("click", () => {
      const item = card.querySelector("strong")?.textContent || "Recommendation";
      showActionDetails(item, "Recommendation details opened with availability, price guidance, and the next available action.", [["Status", "Ready"], ["Action", "Add to wishlist or order online"]]);
    });
  });

  document.querySelectorAll(".support-compose button").forEach((button) => {
    button.addEventListener("click", () => {
      const form = button.closest(".support-compose");
      const textarea = form?.querySelector("textarea");
      if (!textarea || !textarea.value.trim()) {
        showToast("Enter a message before sending.");
        return;
      }
      showToast("Support request submitted. An agent will respond shortly.");
      textarea.value = "";
    });
  });

  const assistantForm = document.querySelector("#assistantPromptForm");
  if (assistantForm) {
    assistantForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const prompt = document.querySelector("#assistantPrompt")?.value.trim();
      if (!prompt) {
        showToast("Enter a question for the assistant.");
        return;
      }
      const conversation = document.querySelector("#assistantConversation");
      if (!conversation) return;
      conversation.insertAdjacentHTML("beforeend", `<div class="assistant-message user"><strong>You</strong><p>${escapeHtml(prompt)}</p></div>`);
      const answer = simulateAssistantResponse(prompt);
      conversation.insertAdjacentHTML("beforeend", `<div class="assistant-message assistant"><strong>AI Assistant</strong><p>${escapeHtml(answer)}</p></div>`);
      document.querySelector("#assistantPrompt").value = "";
      conversation.scrollTop = conversation.scrollHeight;
    });
  }

  document.querySelectorAll(".assistant-suggestion").forEach((button) => {
    button.addEventListener("click", () => {
      const prompt = button.textContent.trim();
      const input = document.querySelector("#assistantPrompt");
      if (input) input.value = prompt;
      document.querySelector("#assistantPromptForm")?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
    });
  });

  const collaborationForm = document.querySelector("#collaborationChatForm");
  if (collaborationForm) {
    collaborationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const textarea = document.querySelector("#collaborationChatInput");
      if (!textarea || !textarea.value.trim()) {
        showToast("Enter a team message before sending.");
        return;
      }
      const chatArea = textarea.closest(".card")?.querySelector(".support-messages");
      if (chatArea) {
        chatArea.insertAdjacentHTML("beforeend", `<div class="message outgoing"><p>${escapeHtml(textarea.value.trim())}</p><small>You · Now</small></div>`);
        chatArea.scrollTop = chatArea.scrollHeight;
      }
      showToast("Message sent to team.");
      textarea.value = "";
    });
  }

  document.querySelectorAll("[data-widget-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const widget = button.dataset.widgetToggle;
      showToast(`${widget} widget toggled on your board.`);
      button.classList.toggle("active");
    });
  });

  document.querySelectorAll(".order-step").forEach((step) => {
    step.addEventListener("click", () => {
      const stage = step.querySelector("strong")?.textContent || "Stage";
      showToast(`${stage} stage selected. Live ETA and status updated.`);
    });
  });

  document.querySelectorAll(".branch-dot").forEach((branch) => {
    branch.addEventListener("click", () => showToast(`Branch ${branch.dataset.branch} opened with live statistics.`));
  });

  document.querySelectorAll("[data-action='approve']").forEach((button) => {
    button.addEventListener("click", () => {
      button.closest(".approval").classList.add("read");
      showToast("Request approved.");
    });
  });

  document.querySelectorAll("[data-action='preview']").forEach((button) => {
    button.addEventListener("click", () => showToast("Quick preview opened."));
  });

  document.querySelectorAll("[data-biometric-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const messages = {
        capture: "Biometric capture started.",
        retake: "Biometric scan reset for retake.",
        verify: "Biometric match verification queued.",
        register: "Biometric registration submitted for audit logging.",
      };
      showToast(messages[button.dataset.biometricAction] || "Biometric action queued.");
    });
  });

  document.querySelectorAll("[data-open-view]").forEach((button) => {
    button.addEventListener("click", () => renderView(button.dataset.openView));
  });

  document.querySelectorAll(".password-change-form").forEach((form) => {
    form.addEventListener("click", (event) => {
      const sendButton = event.target.closest("[data-send-code]");
      if (!sendButton) return;
      if (!validateRecoveryEmail(form)) return;
      activeEmailCode = generateEmailCode();
      form.dataset.expectedCode = activeEmailCode;
      showToast(`Verification code sent to your personal email. Demo code: ${activeEmailCode}`);
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!verifyPasswordCodeForm(form)) return;
      savePasswordFromForm(form);
      form.reset();
      form.dataset.expectedCode = "";
      showToast("Password changed successfully.");
    });

    form.querySelectorAll("input[type='password']").forEach((input) => {
      input.addEventListener("input", () => updatePasswordStrength(form));
    });
  });

  document.querySelectorAll(".profile-settings-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const profile = Object.fromEntries(new FormData(form).entries());
      if (["admin", "staff"].includes(portal) && !normalizeEmail(profile.companyEmail).endsWith("@mapphex.com")) {
        showToast("Company email must end with @mapphex.com.");
        return;
      }
      if (portal !== "customer" && normalizeEmail(profile.companyEmail) === normalizeEmail(profile.recoveryEmail)) {
        showToast("Recovery email must be personal and different from company email.");
        return;
      }
      saveProfile({ ...getStoredProfile(), ...profile, companyEmail: normalizeEmail(profile.companyEmail), recoveryEmail: normalizeEmail(profile.recoveryEmail) });
      loadPersistedState();
      renderNavigation();
      renderView(currentView);
      showToast("Profile settings saved.");
    });
  });

  document.querySelectorAll(".security-toggle").forEach((toggle) => {
    toggle.addEventListener("change", () => {
      const profile = getStoredProfile();
      profile.twoFactor = toggle.checked;
      saveProfile(profile);
      showToast(toggle.checked ? "Email code on login enabled." : "Email code on login disabled.");
    });
  });

  document.querySelectorAll(".table-filter").forEach((input) => {
    input.addEventListener("input", () => filterTable(input));
  });

  document.querySelectorAll(".table-reset").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      card.querySelector(".table-filter").value = "";
      card.querySelectorAll(".table-row").forEach((row) => row.hidden = false);
    });
  });

  document.querySelectorAll(".table-export").forEach((button) => {
    button.addEventListener("click", () => exportTableCsv(button.closest(".card")));
  });

  document.querySelectorAll(".task").forEach((task) => {
    task.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", task.outerHTML));
  });

  document.querySelectorAll(".kanban-column").forEach((column) => {
    column.addEventListener("dragover", (event) => event.preventDefault());
    column.addEventListener("drop", (event) => {
      event.preventDefault();
      column.insertAdjacentHTML("beforeend", event.dataTransfer.getData("text/plain"));
      bindDashboardEvents();
    });
  });

  removeRepeatedButtons();
  bindGenericDashboardButtons();
}

function removeRepeatedButtons() {
  const scopes = [
    dashboard,
    document.querySelector(".assistant-panel"),
  ].filter(Boolean);

  scopes.forEach((scope) => {
    const seen = new Set();
    scope.querySelectorAll("button").forEach((button) => {
      if (button.closest(".nav-stack, .page-drawer")) return;
      const signature = buttonSignature(button);
      if (!signature) return;
      if (seen.has(signature)) {
        button.remove();
        return;
      }
      seen.add(signature);
    });
  });
}

function buttonSignature(button) {
  const action = buttonActionText(button).toLowerCase();
  const target = button.dataset.view || button.dataset.openView || button.dataset.action || button.dataset.biometricAction || "";
  const context = button.closest(".card, .assistant-panel")?.querySelector("h2, h3")?.textContent?.trim().toLowerCase() || currentView.toLowerCase();
  return `${context}|${target}|${action}`;
}

function bindGenericDashboardButtons() {
  document.querySelectorAll("#dashboard button, .assistant-panel button").forEach((button) => {
    if (button.dataset.genericBound === "true" || shouldSkipGenericAction(button)) return;
    button.dataset.genericBound = "true";
    button.addEventListener("click", () => handleGenericButtonAction(button));
  });
}

function shouldSkipGenericAction(button) {
  return Boolean(
    button.closest("form") ||
    button.matches("[data-copy-value], [data-view], [data-close-result], [data-close-success], [data-biometric-action], [data-open-view], [data-send-code], [data-action], .table-export, .table-reset, .recommendation") ||
    button.id === "supportSendButton" ||
    button.type === "submit"
  );
}

function handleGenericButtonAction(button) {
  const action = buttonActionText(button);
  const context = button.closest(".card, .assistant-panel")?.querySelector("h2, h3, strong")?.textContent?.trim() || currentView;
  if (requiresUpload(action, context)) {
    requestActionUpload(action, context);
    return;
  }
  if (/download|receipt|invoice|letter/i.test(action)) {
    showActionDetails(action, `${context} is ready to download. In this demo workspace the document is generated as an available portal record.`, [["Document", context], ["Status", "Ready"]]);
    return;
  }
  if (/save|submit|register|send|pay|order|buy|book|schedule|apply|request/i.test(action)) {
    showActionDetails(action, `${context} was submitted successfully. The activity has been added to the portal history.`, [["Status", "Submitted"], ["Reference", `MX-${Date.now().toString().slice(-6)}`]]);
    return;
  }
  showActionDetails(action, `${context} details are available here. Review the information, then choose the next action from this module.`, [["Module", currentView], ["Status", "Open"]]);
}

function buttonActionText(button) {
  return button.textContent.replace(/\s+/g, " ").trim() || button.getAttribute("aria-label") || "Open Details";
}

function requiresUpload(action, context) {
  return /upload|cv|certificate|document|cloud/i.test(`${action} ${context}`);
}

function requestActionUpload(action, context) {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp";
  input.addEventListener("change", () => {
    const files = [...input.files].map((file) => file.name);
    if (!files.length) {
      showToast("No file selected.");
      return;
    }
    showActionDetails(action, `${files.length} file${files.length === 1 ? "" : "s"} selected for ${context}.`, files.map((file) => [file, "Ready to upload"]));
  });
  input.click();
}

function destroyCharts() {
  if (revenueChart) {
    revenueChart.destroy();
    revenueChart = null;
  }
  if (comparisonChart) {
    comparisonChart.destroy();
    comparisonChart = null;
  }
}

function mountCharts() {
  destroyCharts();
  if (!window.Chart) {
    document.querySelectorAll(".chart-box").forEach((box) => {
      box.innerHTML = `<div class="activity chart-fallback"><span>Charts load when Chart.js is available</span><small>Live data ready</small></div>`;
    });
    return;
  }

  const revenueCanvas = document.querySelector("#revenueChart");
  const comparisonCanvas = document.querySelector("#comparisonChart");
  const textColor = getComputedStyle(appShell).getPropertyValue("--text").trim();
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: textColor } } },
    scales: {
      x: { ticks: { color: "#91a4bd" }, grid: { color: "rgba(145,164,189,.12)" } },
      y: { ticks: { color: "#91a4bd" }, grid: { color: "rgba(145,164,189,.12)" } },
    },
  };

  if (revenueCanvas) {
    revenueChart = new Chart(revenueCanvas, {
      type: portal === "customer" ? "bar" : "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
          label: portal === "customer" ? "Monthly spend" : "Forecast revenue",
          data: portal === "customer" ? [420, 510, 480, 620, 680, 710] : [29, 33, 31, 38, 42, 48],
          borderColor: "#58a6ff",
          backgroundColor: "rgba(88, 166, 255, .24)",
          tension: 0.38,
          fill: true,
        }],
      },
      options: chartOptions,
    });
  }

  if (comparisonCanvas) {
    comparisonChart = new Chart(comparisonCanvas, {
      type: "doughnut",
      data: {
        labels: ["Completed", "Remaining"],
        datasets: [{ data: [92, 8], backgroundColor: ["#45d483", "rgba(255,255,255,.12)"], borderWidth: 0 }],
      },
      options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { color: textColor } } } },
    });
  }
}

function renderNotifications() {
  const list = document.querySelector("#notifications");
  const unreadCount = document.querySelector("#unreadCount");
  if (!list || !unreadCount) return;
  list.innerHTML = notifications.map((item, index) => `
    <button class="notification ${item[0]} ${item[3] ? "read" : ""}" type="button" data-notification-index="${index}">
      <strong>${item[1]}</strong>
      <span>${item[2]}</span>
    </button>
  `).join("");
  unreadCount.textContent = notifications.filter((item) => !item[3]).length;
  list.querySelectorAll("[data-notification-index]").forEach((button) => {
    button.addEventListener("click", () => {
      notifications[Number(button.dataset.notificationIndex)][3] = true;
      persistNotifications();
      renderNotifications();
    });
  });
}

function updatePasswordStrength(form) {
  const password = form.querySelector("input[type='password']")?.value || "";
  const bars = form.querySelectorAll(".password-strength span");
  if (!bars.length) return;
  const score = [password.length >= 8, /[A-Z]/.test(password), /[a-z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length;
  bars.forEach((bar) => {
    bar.style.width = `${Math.max(score * 20, 8)}%`;
    bar.dataset.score = score;
  });
}

function filterTable(input) {
  const query = input.value.toLowerCase();
  input.closest(".card").querySelectorAll(".table-row:not(.table-head)").forEach((row) => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
}

function exportTableCsv(card) {
  const rows = [...card.querySelectorAll(".table-row:not([hidden])")].map((row) => [...row.children].map((cell) => `"${cell.textContent.trim()}"`).join(","));
  const blob = new Blob([rows.join("\n")], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "mapphex-export.csv";
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("CSV export prepared.");
}

function showSuggestions(query) {
  const box = document.querySelector("#suggestions");
  const matches = searchIndex.filter((item) => item.join(" ").toLowerCase().includes(query.toLowerCase())).slice(0, 6);
  box.innerHTML = matches.map((item, index) => `
    <div class="suggestion ${index === 0 ? "active" : ""}" role="option" tabindex="0">
      <span><strong>${item[0]}</strong><br><small>${item[2]}</small></span>
      <small>${item[1]}</small>
    </div>
  `).join("");
  box.classList.toggle("open", query.length > 0 && matches.length > 0);
  document.querySelector("#globalSearch").setAttribute("aria-expanded", String(box.classList.contains("open")));
}

function handleSearchKeys(event) {
  const suggestions = [...document.querySelectorAll(".suggestion")];
  const active = document.querySelector(".suggestion.active");
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (!suggestions.length) return;
    const nextIndex = active ? suggestions.indexOf(active) + 1 : 0;
    const target = suggestions[nextIndex < suggestions.length ? nextIndex : 0];
    setActiveSuggestion(target);
    return;
  }
  if (event.key === "ArrowUp") {
    event.preventDefault();
    if (!suggestions.length) return;
    const prevIndex = active ? suggestions.indexOf(active) - 1 : suggestions.length - 1;
    const target = suggestions[prevIndex >= 0 ? prevIndex : suggestions.length - 1];
    setActiveSuggestion(target);
    return;
  }
  if (event.key === "Enter" && active) {
    event.preventDefault();
    selectSuggestion(active);
    return;
  }
  if (event.key === "Escape") {
    document.querySelector("#suggestions").classList.remove("open");
    event.target.blur();
  }
}

function setActiveSuggestion(target) {
  if (!target) return;
  document.querySelectorAll(".suggestion").forEach((item) => item.classList.remove("active"));
  target.classList.add("active");
  target.scrollIntoView({ block: "nearest" });
}

function selectSuggestion(suggestion) {
  if (!suggestion) return;
  const text = suggestion.querySelector("strong")?.textContent || "";
  const input = document.querySelector("#globalSearch");
  input.value = text;
  document.querySelector("#suggestions").classList.remove("open");
  showToast(`${text} selected.`);
  input.focus();
}

function openPalette(palette) {
  renderCommands();
  if (!palette.open) palette.showModal();
  palette.setAttribute("aria-modal", "true");
  document.querySelector("#commandInput").focus();
}

function renderCommands(query = "") {
  const baseCommands = portal === "staff" ? [
    "Open My Staff Card",
  ] : [
    `Open ${currentView}`,
    "Open Search Center",
    "Export Executive Report",
    "Toggle High Contrast",
    "Increase Font Size",
  ];
  const commands = baseCommands.filter((command) => command.toLowerCase().includes(query.toLowerCase()));
  document.querySelector("#commandResults").innerHTML = commands.map((command) => `<button class="command-result" value="${command}">${command}<small>Enter</small></button>`).join("");
}

function handleCommandClick(event) {
  const command = event.target.closest("button")?.value;
  if (!command) return;
  if (command.includes("High Contrast")) document.body.classList.toggle("high-contrast");
  if (command.includes("Font Size")) document.body.classList.toggle("large-font");
  if (command.includes("My Staff Card")) renderView("My Staff Card");
  if (portal !== "staff" && command.includes("Search Center")) renderView("Search Center");
  if (command.includes("Export")) showToast("Report export queued.");
  document.querySelector("#commandPalette").close();
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}
