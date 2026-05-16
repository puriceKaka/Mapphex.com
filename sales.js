const sections = document.querySelectorAll(".portal-section");
const temporaryAppData = {};

function getTemporaryData(key) {
  return Object.prototype.hasOwnProperty.call(temporaryAppData, key) ? temporaryAppData[key] : null;
}

function setTemporaryData(key, value) {
  temporaryAppData[key] = value;
}

const loginForms = document.querySelectorAll(".login-card");
const loginTabButtons = document.querySelectorAll("[data-auth-tab]");
const logoutButton = document.getElementById("logoutButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const financeLoginForm = document.querySelector(".finance-login");
const financeRegisterButton = document.getElementById("financeRegisterButton");
const financeLoginMessage = document.getElementById("financeLoginMessage");
const salesLoginForm = document.querySelector(".sales-login");
const salesRegisterButton = document.getElementById("salesRegisterButton");
const salesLoginMessage = document.getElementById("salesLoginMessage");
const analyticsLoginForm = document.querySelector(".analytics-login");
const analyticsRegisterButton = document.getElementById("analyticsRegisterButton");
const analyticsLoginMessage = document.getElementById("analyticsLoginMessage");
const topbarTitle = document.getElementById("topbarTitle");
const menuButton = document.getElementById("menuButton");
const sideMenu = document.getElementById("sideMenu");
const sideMenuTitle = document.getElementById("sideMenuTitle");
const sideMenuClose = document.getElementById("sideMenuClose");
const sideMenuBackdrop = document.getElementById("sideMenuBackdrop");
const currencySelect = document.getElementById("currencySelect");
const sideMenuGroups = document.querySelectorAll("[data-side-menu-group]");
const sideFinanceButtons = document.querySelectorAll("[data-side-finance-target]");
const sideSalesButtons = document.querySelectorAll("[data-side-sales-target]");
const sideAnalyticsButtons = document.querySelectorAll("[data-side-analytics-target]");
const financeButtons = document.querySelectorAll("[data-finance-target]");
const financePanels = document.querySelectorAll(".finance-module-panel");
const salesButtons = document.querySelectorAll("[data-sales-target]");
const salesPanels = document.querySelectorAll(".sales-module-panel");
const salesHomeItems = document.querySelectorAll(".sales-home-item");
const salesLeadItems = document.querySelectorAll(".sales-lead-item");
const salesPanelItems = document.querySelectorAll(
  ".sales-module-panel:not(#sales-dashboard):not(#sales-leads) .submodule-row button",
);
const salesHomeDetail = document.getElementById("salesHomeDetail");
const salesHomeDetailTitle = document.getElementById("salesHomeDetailTitle");
const salesHomeDetailText = document.getElementById("salesHomeDetailText");
const salesHomeDetailLabel = document.getElementById("salesHomeDetailLabel");
const salesHomeBreakdown = document.getElementById("salesHomeBreakdown");
const salesTotalFilter = document.getElementById("salesTotalFilter");
const salesPeriodType = document.getElementById("salesPeriodType");
const salesPeriodValue = document.getElementById("salesPeriodValue");
const salesLeadDetail = document.getElementById("salesLeadDetail");
const salesLeadDetailTitle = document.getElementById("salesLeadDetailTitle");
const salesLeadDetailText = document.getElementById("salesLeadDetailText");
const salesLeadDetailLabel = document.getElementById("salesLeadDetailLabel");
const salesLeadBreakdown = document.getElementById("salesLeadBreakdown");
const addLeadButtons = document.querySelectorAll("[data-add-lead-button]");
const possibleCustomerForm = document.getElementById("possibleCustomerForm");
const customerForm = document.getElementById("customerForm");
const priceQuoteForm = document.getElementById("priceQuoteForm");
const salesOrderForm = document.getElementById("salesOrderForm");
const salesWorkTable = document.getElementById("salesWorkTable");
const salesTableSearch = document.getElementById("salesTableSearch");
const salesStatusFilter = document.getElementById("salesStatusFilter");
const salesNotices = document.getElementById("salesNotices");
const salesActivityLog = document.getElementById("salesActivityLog");
const exportSalesBackupButton = document.getElementById("exportSalesBackupButton");
const importSalesBackupButton = document.getElementById("importSalesBackupButton");
const salesBackupInput = document.getElementById("salesBackupInput");
const downloadSalesSummaryButton = document.getElementById("downloadSalesSummaryButton");
const printSalesSummaryButton = document.getElementById("printSalesSummaryButton");
const analyticsButtons = document.querySelectorAll("[data-analytics-target]");
const analyticsPanels = document.querySelectorAll(".analytics-module-panel");
const analyticsHomeItems = document.querySelectorAll(".analytics-home-item");
const analyticsPanelItems = document.querySelectorAll(".analytics-module-panel:not(#analytics-dashboard) .submodule-row button");
const analyticsHomeDetail = document.getElementById("analyticsHomeDetail");
const analyticsHomeDetailTitle = document.getElementById("analyticsHomeDetailTitle");
const analyticsHomeDetailText = document.getElementById("analyticsHomeDetailText");
const analyticsHomeDetailLabel = document.getElementById("analyticsHomeDetailLabel");
const analyticsHomeBreakdown = document.getElementById("analyticsHomeBreakdown");
const analyticsDateFilter = document.getElementById("analyticsDateFilter");
const analyticsSalesGrowth = document.getElementById("analyticsSalesGrowth");
const analyticsSpending = document.getElementById("analyticsSpending");
const analyticsActiveCustomers = document.getElementById("analyticsActiveCustomers");
const analyticsNotices = document.getElementById("analyticsNotices");
const analyticsActivityLog = document.getElementById("analyticsActivityLog");
const exportAnalyticsBackupButton = document.getElementById("exportAnalyticsBackupButton");
const importAnalyticsBackupButton = document.getElementById("importAnalyticsBackupButton");
const analyticsBackupInput = document.getElementById("analyticsBackupInput");
const downloadAnalyticsExcelButton = document.getElementById("downloadAnalyticsExcelButton");
const downloadAnalyticsPdfButton = document.getElementById("downloadAnalyticsPdfButton");
const downloadAnalyticsCsvButton = document.getElementById("downloadAnalyticsCsvButton");
const downloadAnalyticsWordButton = document.getElementById("downloadAnalyticsWordButton");
const dashboardItems = document.querySelectorAll(".dashboard-item");
const financeDashboardDetail = document.getElementById("financeDashboardDetail");
const financeDashboardDetailTitle = document.getElementById("financeDashboardDetailTitle");
const financeDashboardDetailText = document.getElementById("financeDashboardDetailText");
const financeDashboardDetailLabel = document.getElementById("financeDashboardDetailLabel");
const financeDashboardBreakdown = document.getElementById("financeDashboardBreakdown");
const ledgerItems = document.querySelectorAll(".ledger-item");
const ledgerDetail = document.getElementById("ledgerDetail");
const ledgerDetailTitle = document.getElementById("ledgerDetailTitle");
const ledgerDetailText = document.getElementById("ledgerDetailText");
const ledgerDetailLabel = document.getElementById("ledgerDetailLabel");
const ledgerBreakdown = document.getElementById("ledgerBreakdown");
const moneyRecordsSearch = document.getElementById("moneyRecordsSearch");
const financeDetailItems = document.querySelectorAll(
  ".finance-module-panel:not(#finance-dashboard):not(#finance-general-ledger) .submodule-row button",
);
const customerInvoiceForm = document.getElementById("customerInvoiceForm");
const customerInvoicesTable = document.getElementById("customerInvoicesTable");
const invoiceSubmitButton = document.getElementById("invoiceSubmitButton");
const cancelInvoiceEdit = document.getElementById("cancelInvoiceEdit");
const invoiceSearch = document.getElementById("invoiceSearch");
const invoiceStatusFilter = document.getElementById("invoiceStatusFilter");
const supplierBillForm = document.getElementById("supplierBillForm");
const supplierBillsTable = document.getElementById("supplierBillsTable");
const billSubmitButton = document.getElementById("billSubmitButton");
const cancelBillEdit = document.getElementById("cancelBillEdit");
const billSearch = document.getElementById("billSearch");
const billStatusFilter = document.getElementById("billStatusFilter");
const exportInvoicesButton = document.getElementById("exportInvoicesButton");
const printInvoicesButton = document.getElementById("printInvoicesButton");
const exportBillsButton = document.getElementById("exportBillsButton");
const printBillsButton = document.getElementById("printBillsButton");
const payrollTable = document.getElementById("payrollTable");
const downloadPayrollButton = document.getElementById("downloadPayrollButton");
const printPayrollButton = document.getElementById("printPayrollButton");
const downloadBudgetButton = document.getElementById("downloadBudgetButton");
const printBudgetButton = document.getElementById("printBudgetButton");
const analyticsReportButtons = document.querySelectorAll("[id^='download'][id$='Report']");
const approvalQueue = document.getElementById("approvalQueue");
const financeToast = document.getElementById("financeToast");
const financeActivityLog = document.getElementById("financeActivityLog");
const financeNotices = document.getElementById("financeNotices");
const exportFinanceBackupButton = document.getElementById("exportFinanceBackupButton");
const importFinanceBackupButton = document.getElementById("importFinanceBackupButton");
const financeBackupInput = document.getElementById("financeBackupInput");
const financeModal = document.getElementById("financeModal");
const financeModalTitle = document.getElementById("financeModalTitle");
const financeModalBody = document.getElementById("financeModalBody");
const closeFinanceModal = document.getElementById("closeFinanceModal");
let invoiceRowBeingEdited = null;
let billRowBeingEdited = null;
let pendingPaymentRow = null;
let pendingPaymentType = "";
let currentUsername = "";
let currentFinanceReportTitle = "Profit and loss summary";
let currentSalesReportTitle = "Sales summary";
let currentAnalyticsReportTitle = "Manager summary";
let salesRowBeingEdited = null;
let toastTimer;

const EMPTY_DETAIL_TEXT = "No records have been added yet.";
const emptyItems = () => [["Records", "0"], ["Status", "Empty"]];
const makeEmptyDetail = (title, label = title) => ({
  title,
  text: EMPTY_DETAIL_TEXT,
  label,
  items: emptyItems(),
});

const financeDashboardData = {
  "cash-balance": makeEmptyDetail("Available Money", "Money available"),
  "total-revenue": makeEmptyDetail("Money Earned", "Money earned"),
  "total-expenses": makeEmptyDetail("Money Spent", "Money spent"),
  "profit-loss": makeEmptyDetail("Money Left", "Money result"),
  "pending-invoices": makeEmptyDetail("Waiting Customer Bills", "Customer bills"),
  "pending-approvals": makeEmptyDetail("Waiting Approvals", "Approvals"),
  "budget-used": makeEmptyDetail("Budget Spent", "Budget use"),
  "budget-remaining": makeEmptyDetail("Budget Left", "Budget balance"),
  "recent-transactions": makeEmptyDetail("Recent Money Activity", "Latest activity"),
  "cash-flow-summary": makeEmptyDetail("Money In And Out", "Money movement"),
};

const ledgerData = {
  "chart-of-accounts": makeEmptyDetail("Money Account Names", "Money records"),
  "journal-entries": makeEmptyDetail("Money Entries", "Money entries"),
  "account-balances": makeEmptyDetail("Account Balances", "Balance summary"),
  "debit-records": makeEmptyDetail("Money Out Records", "Money out activity"),
  "credit-records": makeEmptyDetail("Money In Records", "Money in activity"),
  "trial-balance": makeEmptyDetail("Balance Check", "Balance check"),
  "ledger-transactions": makeEmptyDetail("All Money Records", "Money history"),
  "opening-balances": makeEmptyDetail("Starting Balances", "Start point"),
  "closing-balances": makeEmptyDetail("Ending Balances", "End point"),
};

const financeModuleDetails = {
  "finance-accounts-payable": { label: "Bills We Pay", text: EMPTY_DETAIL_TEXT, items: emptyItems() },
  "finance-accounts-receivable": { label: "Bills Customers Pay", text: EMPTY_DETAIL_TEXT, items: emptyItems() },
  "finance-budgeting": { label: "Budgets", text: EMPTY_DETAIL_TEXT, items: emptyItems() },
  "finance-payroll": { label: "Payroll", text: EMPTY_DETAIL_TEXT, items: emptyItems() },
  "finance-reports": { label: "Reports", text: EMPTY_DETAIL_TEXT, items: emptyItems() },
  "finance-approvals": { label: "Approvals", text: EMPTY_DETAIL_TEXT, items: emptyItems() },
};

const financeSubmoduleDetails = {
  "finance-accounts-payable": {},
  "finance-accounts-receivable": {},
  "finance-budgeting": {},
  "finance-payroll": {},
  "finance-reports": {
    "Profit and loss summary": makeEmptyDetail("Profit and loss summary", "Reports"),
    "What we own and owe": makeEmptyDetail("What we own and owe", "Reports"),
    "Money in/out summary": makeEmptyDetail("Money in/out summary", "Reports"),
    "Balance check summary": makeEmptyDetail("Balance check summary", "Reports"),
    "Tax summaries": makeEmptyDetail("Tax summaries", "Reports"),
    "Spending summary": makeEmptyDetail("Spending summary", "Reports"),
    "Money earned summary": makeEmptyDetail("Money earned summary", "Reports"),
    "Monthly money summary": makeEmptyDetail("Monthly money summary", "Reports"),
    "Budget summary": makeEmptyDetail("Budget summary", "Reports"),
    "Salary summary": makeEmptyDetail("Salary summary", "Reports"),
  },
  "finance-approvals": {},
};

const salesHomeData = {
  "total-sales": makeEmptyDetail("Total Sales", "Selling home"),
  "monthly-sales-money": makeEmptyDetail("Money From Sales This Month", "Monthly sales money"),
  "new-possible-customers": makeEmptyDetail("New Possible Customers", "Customer follow-up"),
  "open-sales": makeEmptyDetail("Sales Still Open", "Open sales"),
  "completed-sales": makeEmptyDetail("Sales Completed", "Completed sales"),
  "people-who-bought": makeEmptyDetail("Buying Customers", "Buying customers"),
  "sales-goal-progress": makeEmptyDetail("Sales Goal Progress", "Sales goals"),
  "top-customers": makeEmptyDetail("Top Customers", "Best customers"),
  "recent-activities": makeEmptyDetail("Recent Activities", "Sales activity"),
};

const salesLeadData = {
  "new-possible-customers": salesHomeData["new-possible-customers"],
  "where-they-came-from": makeEmptyDetail("Where They Came From", "Customer source"),
  "customer-status": makeEmptyDetail("Customer Status", "Customer status"),
  "sales-person-in-charge": makeEmptyDetail("Sales Person In Charge", "Sales team"),
  "follow-ups": makeEmptyDetail("Follow-ups", "Follow-up work"),
  "people-who-bought": salesHomeData["people-who-bought"],
};

const salesPanelLabels = {
  "sales-customers": "Customers",
  "sales-opportunities": "Possible Sales",
  "sales-quotations": "Price Quotes",
  "sales-orders": "Orders",
  "sales-sales-invoices": "Customer Bills",
  "sales-targets": "Goals",
  "sales-reports": "Sales Summaries",
};

const analyticsHomeData = {
  "total-money-earned": makeEmptyDetail("Total Money Earned", "Money earned"),
  "total-sales": makeEmptyDetail("Total Sales", "Sales"),
  "total-money-spent": makeEmptyDetail("Total Money Spent", "Money spent"),
  "profit-percentage": makeEmptyDetail("Profit Percentage", "Profit"),
  "active-customers": makeEmptyDetail("Active Customers", "Customers"),
  "sales-growth": makeEmptyDetail("Sales Growth", "Sales growth"),
  "money-in-and-out": makeEmptyDetail("Money In And Out", "Money movement"),
  "monthly-work-result": makeEmptyDetail("Monthly Work Result", "Monthly result"),
};

const analyticsPanelLabels = {
  "analytics-kpis": "Key Numbers",
  "analytics-financial-analytics": "Money Check",
  "analytics-sales-analytics": "Sales Check",
  "analytics-customer-analytics": "Customer Check",
  "analytics-forecasting": "Forecasts",
  "analytics-reports": "Business Summaries",
  "analytics-data-export": "Download Files",
};

const salesTotalOptions = {
  day: [{ label: "No sales yet", amount: "0", completed: "0", open: "0" }],
  month: [{ label: "No sales yet", amount: "0", completed: "0", open: "0" }],
  year: [{ label: "No sales yet", amount: "0", completed: "0", open: "0" }],
};

const analyticsDateData = {
  day: { sales: "0", spending: "0", customers: "0" },
  month: { sales: "0", spending: "0", customers: "0" },
  year: { sales: "0", spending: "0", customers: "0" },
};

const portalTitles = {
  overview: "Overview",
  financial: "Money Office",
  sales: "Selling Office",
  analytics: "Business Check",
};

const portalPages = {
  financial: "finance.html",
  sales: "sales.html",
  analytics: "analytics.html",
};

const currencySettings = {
  USD: { label: "USD", symbol: "$", rate: 1 },
  KES: { label: "KES", symbol: "KSh", rate: 130 },
  EUR: { label: "EUR", symbol: "€", rate: 0.92 },
  GBP: { label: "GBP", symbol: "£", rate: 0.79 },
  NGN: { label: "NGN", symbol: "₦", rate: 1500 },
  ZAR: { label: "ZAR", symbol: "R", rate: 18 },
  UGX: { label: "UGX", symbol: "USh", rate: 3800 },
  TZS: { label: "TZS", symbol: "TSh", rate: 2600 },
  INR: { label: "INR", symbol: "₹", rate: 83 },
  AED: { label: "AED", symbol: "AED", rate: 3.67 },
};

Object.assign(currencySettings, {
  USD: { label: "USD", symbol: "$", rate: 1 }, KES: { label: "KES", symbol: "KES ", rate: 130 },
  EUR: { label: "EUR", symbol: "EUR ", rate: 0.92 }, GBP: { label: "GBP", symbol: "GBP ", rate: 0.79 },
  NGN: { label: "NGN", symbol: "NGN ", rate: 1500 }, ZAR: { label: "ZAR", symbol: "ZAR ", rate: 18 },
  UGX: { label: "UGX", symbol: "UGX ", rate: 3800 }, TZS: { label: "TZS", symbol: "TZS ", rate: 2600 },
  INR: { label: "INR", symbol: "INR ", rate: 83 }, AED: { label: "AED", symbol: "AED ", rate: 3.67 },
  AFN: { label: "AFN", symbol: "AFN ", rate: 71 }, ALL: { label: "ALL", symbol: "ALL ", rate: 94 },
  AMD: { label: "AMD", symbol: "AMD ", rate: 390 }, AOA: { label: "AOA", symbol: "AOA ", rate: 920 },
  ARS: { label: "ARS", symbol: "ARS ", rate: 1050 }, AUD: { label: "AUD", symbol: "AUD ", rate: 1.52 },
  AZN: { label: "AZN", symbol: "AZN ", rate: 1.7 }, BAM: { label: "BAM", symbol: "BAM ", rate: 1.8 },
  BBD: { label: "BBD", symbol: "BBD ", rate: 2 }, BDT: { label: "BDT", symbol: "BDT ", rate: 110 },
  BGN: { label: "BGN", symbol: "BGN ", rate: 1.8 }, BHD: { label: "BHD", symbol: "BHD ", rate: 0.38 },
  BIF: { label: "BIF", symbol: "BIF ", rate: 2850 }, BND: { label: "BND", symbol: "BND ", rate: 1.35 },
  BOB: { label: "BOB", symbol: "BOB ", rate: 6.9 }, BRL: { label: "BRL", symbol: "BRL ", rate: 5 },
  BSD: { label: "BSD", symbol: "BSD ", rate: 1 }, BTN: { label: "BTN", symbol: "BTN ", rate: 83 },
  BWP: { label: "BWP", symbol: "BWP ", rate: 13.6 }, BYN: { label: "BYN", symbol: "BYN ", rate: 3.27 },
  BZD: { label: "BZD", symbol: "BZD ", rate: 2 }, CAD: { label: "CAD", symbol: "CAD ", rate: 1.36 },
  CDF: { label: "CDF", symbol: "CDF ", rate: 2800 }, CHF: { label: "CHF", symbol: "CHF ", rate: 0.9 },
  CLP: { label: "CLP", symbol: "CLP ", rate: 930 }, CNY: { label: "CNY", symbol: "CNY ", rate: 7.25 },
  COP: { label: "COP", symbol: "COP ", rate: 3900 }, CRC: { label: "CRC", symbol: "CRC ", rate: 520 },
  CUP: { label: "CUP", symbol: "CUP ", rate: 24 }, CVE: { label: "CVE", symbol: "CVE ", rate: 102 },
  CZK: { label: "CZK", symbol: "CZK ", rate: 23 }, DJF: { label: "DJF", symbol: "DJF ", rate: 178 },
  DKK: { label: "DKK", symbol: "DKK ", rate: 6.9 }, DOP: { label: "DOP", symbol: "DOP ", rate: 59 },
  DZD: { label: "DZD", symbol: "DZD ", rate: 134 }, EGP: { label: "EGP", symbol: "EGP ", rate: 49 },
  ERN: { label: "ERN", symbol: "ERN ", rate: 15 }, ETB: { label: "ETB", symbol: "ETB ", rate: 57 },
  FJD: { label: "FJD", symbol: "FJD ", rate: 2.25 }, GEL: { label: "GEL", symbol: "GEL ", rate: 2.7 },
  GHS: { label: "GHS", symbol: "GHS ", rate: 13.5 }, GMD: { label: "GMD", symbol: "GMD ", rate: 68 },
  GNF: { label: "GNF", symbol: "GNF ", rate: 8600 }, GTQ: { label: "GTQ", symbol: "GTQ ", rate: 7.8 },
  GYD: { label: "GYD", symbol: "GYD ", rate: 209 }, HKD: { label: "HKD", symbol: "HKD ", rate: 7.8 },
  HNL: { label: "HNL", symbol: "HNL ", rate: 24.7 }, HTG: { label: "HTG", symbol: "HTG ", rate: 132 },
  HUF: { label: "HUF", symbol: "HUF ", rate: 360 }, IDR: { label: "IDR", symbol: "IDR ", rate: 16000 },
  ILS: { label: "ILS", symbol: "ILS ", rate: 3.7 }, IQD: { label: "IQD", symbol: "IQD ", rate: 1310 },
  IRR: { label: "IRR", symbol: "IRR ", rate: 42000 }, ISK: { label: "ISK", symbol: "ISK ", rate: 138 },
  JMD: { label: "JMD", symbol: "JMD ", rate: 156 }, JOD: { label: "JOD", symbol: "JOD ", rate: 0.71 },
  JPY: { label: "JPY", symbol: "JPY ", rate: 155 }, KGS: { label: "KGS", symbol: "KGS ", rate: 89 },
  KHR: { label: "KHR", symbol: "KHR ", rate: 4100 }, KMF: { label: "KMF", symbol: "KMF ", rate: 455 },
  KRW: { label: "KRW", symbol: "KRW ", rate: 1370 }, KWD: { label: "KWD", symbol: "KWD ", rate: 0.31 },
  KZT: { label: "KZT", symbol: "KZT ", rate: 445 }, LAK: { label: "LAK", symbol: "LAK ", rate: 21000 },
  LBP: { label: "LBP", symbol: "LBP ", rate: 89500 }, LKR: { label: "LKR", symbol: "LKR ", rate: 300 },
  LRD: { label: "LRD", symbol: "LRD ", rate: 190 }, LSL: { label: "LSL", symbol: "LSL ", rate: 18 },
  LYD: { label: "LYD", symbol: "LYD ", rate: 4.85 }, MAD: { label: "MAD", symbol: "MAD ", rate: 10 },
  MDL: { label: "MDL", symbol: "MDL ", rate: 17.8 }, MGA: { label: "MGA", symbol: "MGA ", rate: 4500 },
  MKD: { label: "MKD", symbol: "MKD ", rate: 57 }, MMK: { label: "MMK", symbol: "MMK ", rate: 2100 },
  MNT: { label: "MNT", symbol: "MNT ", rate: 3450 }, MRU: { label: "MRU", symbol: "MRU ", rate: 39 },
  MUR: { label: "MUR", symbol: "MUR ", rate: 46 }, MVR: { label: "MVR", symbol: "MVR ", rate: 15.4 },
  MWK: { label: "MWK", symbol: "MWK ", rate: 1730 }, MXN: { label: "MXN", symbol: "MXN ", rate: 17 },
  MYR: { label: "MYR", symbol: "MYR ", rate: 4.7 }, MZN: { label: "MZN", symbol: "MZN ", rate: 64 },
  NAD: { label: "NAD", symbol: "NAD ", rate: 18 }, NIO: { label: "NIO", symbol: "NIO ", rate: 36.8 },
  NOK: { label: "NOK", symbol: "NOK ", rate: 10.7 }, NPR: { label: "NPR", symbol: "NPR ", rate: 133 },
  NZD: { label: "NZD", symbol: "NZD ", rate: 1.65 }, OMR: { label: "OMR", symbol: "OMR ", rate: 0.38 },
  PAB: { label: "PAB", symbol: "PAB ", rate: 1 }, PEN: { label: "PEN", symbol: "PEN ", rate: 3.75 },
  PGK: { label: "PGK", symbol: "PGK ", rate: 3.8 }, PHP: { label: "PHP", symbol: "PHP ", rate: 56 },
  PKR: { label: "PKR", symbol: "PKR ", rate: 278 }, PLN: { label: "PLN", symbol: "PLN ", rate: 4 },
  PYG: { label: "PYG", symbol: "PYG ", rate: 7350 }, QAR: { label: "QAR", symbol: "QAR ", rate: 3.64 },
  RON: { label: "RON", symbol: "RON ", rate: 4.6 }, RSD: { label: "RSD", symbol: "RSD ", rate: 108 },
  RUB: { label: "RUB", symbol: "RUB ", rate: 92 }, RWF: { label: "RWF", symbol: "RWF ", rate: 1300 },
  SAR: { label: "SAR", symbol: "SAR ", rate: 3.75 }, SCR: { label: "SCR", symbol: "SCR ", rate: 13.5 },
  SDG: { label: "SDG", symbol: "SDG ", rate: 600 }, SEK: { label: "SEK", symbol: "SEK ", rate: 10.5 },
  SGD: { label: "SGD", symbol: "SGD ", rate: 1.35 }, SLE: { label: "SLE", symbol: "SLE ", rate: 23 },
  SOS: { label: "SOS", symbol: "SOS ", rate: 570 }, SRD: { label: "SRD", symbol: "SRD ", rate: 35 },
  SSP: { label: "SSP", symbol: "SSP ", rate: 1300 }, STN: { label: "STN", symbol: "STN ", rate: 22.5 },
  SYP: { label: "SYP", symbol: "SYP ", rate: 13000 }, SZL: { label: "SZL", symbol: "SZL ", rate: 18 },
  THB: { label: "THB", symbol: "THB ", rate: 36 }, TJS: { label: "TJS", symbol: "TJS ", rate: 10.9 },
  TMT: { label: "TMT", symbol: "TMT ", rate: 3.5 }, TND: { label: "TND", symbol: "TND ", rate: 3.1 },
  TOP: { label: "TOP", symbol: "TOP ", rate: 2.35 }, TRY: { label: "TRY", symbol: "TRY ", rate: 32 },
  TTD: { label: "TTD", symbol: "TTD ", rate: 6.8 }, TWD: { label: "TWD", symbol: "TWD ", rate: 32 },
  UAH: { label: "UAH", symbol: "UAH ", rate: 39 }, UYU: { label: "UYU", symbol: "UYU ", rate: 39 },
  UZS: { label: "UZS", symbol: "UZS ", rate: 12600 }, VES: { label: "VES", symbol: "VES ", rate: 36 },
  VND: { label: "VND", symbol: "VND ", rate: 25400 }, VUV: { label: "VUV", symbol: "VUV ", rate: 120 },
  WST: { label: "WST", symbol: "WST ", rate: 2.75 }, XAF: { label: "XAF", symbol: "XAF ", rate: 605 },
  XCD: { label: "XCD", symbol: "XCD ", rate: 2.7 }, XOF: { label: "XOF", symbol: "XOF ", rate: 605 },
  YER: { label: "YER", symbol: "YER ", rate: 250 }, ZMW: { label: "ZMW", symbol: "ZMW ", rate: 25 },
  ZWL: { label: "ZWL", symbol: "ZWL ", rate: 360 },
});

const countryCurrencyOptions = `
Afghanistan|AFN
Albania|ALL
Algeria|DZD
Andorra|EUR
Angola|AOA
Antigua and Barbuda|XCD
Argentina|ARS
Armenia|AMD
Australia|AUD
Austria|EUR
Azerbaijan|AZN
Bahamas|BSD
Bahrain|BHD
Bangladesh|BDT
Barbados|BBD
Belarus|BYN
Belgium|EUR
Belize|BZD
Benin|XOF
Bhutan|BTN
Bolivia|BOB
Bosnia and Herzegovina|BAM
Botswana|BWP
Brazil|BRL
Brunei|BND
Bulgaria|BGN
Burkina Faso|XOF
Burundi|BIF
Cambodia|KHR
Cameroon|XAF
Canada|CAD
Cape Verde|CVE
Central African Republic|XAF
Chad|XAF
Chile|CLP
China|CNY
Colombia|COP
Comoros|KMF
Congo|XAF
Costa Rica|CRC
Croatia|EUR
Cuba|CUP
Cyprus|EUR
Czech Republic|CZK
Democratic Republic of Congo|CDF
Denmark|DKK
Djibouti|DJF
Dominica|XCD
Dominican Republic|DOP
Ecuador|USD
Egypt|EGP
El Salvador|USD
Equatorial Guinea|XAF
Eritrea|ERN
Estonia|EUR
Eswatini|SZL
Ethiopia|ETB
Fiji|FJD
Finland|EUR
France|EUR
Gabon|XAF
Gambia|GMD
Georgia|GEL
Germany|EUR
Ghana|GHS
Greece|EUR
Grenada|XCD
Guatemala|GTQ
Guinea|GNF
Guinea-Bissau|XOF
Guyana|GYD
Haiti|HTG
Honduras|HNL
Hungary|HUF
Iceland|ISK
India|INR
Indonesia|IDR
Iran|IRR
Iraq|IQD
Ireland|EUR
Israel|ILS
Italy|EUR
Ivory Coast|XOF
Jamaica|JMD
Japan|JPY
Jordan|JOD
Kazakhstan|KZT
Kenya|KES
Kiribati|AUD
Kuwait|KWD
Kyrgyzstan|KGS
Laos|LAK
Latvia|EUR
Lebanon|LBP
Lesotho|LSL
Liberia|LRD
Libya|LYD
Liechtenstein|CHF
Lithuania|EUR
Luxembourg|EUR
Madagascar|MGA
Malawi|MWK
Malaysia|MYR
Maldives|MVR
Mali|XOF
Malta|EUR
Marshall Islands|USD
Mauritania|MRU
Mauritius|MUR
Mexico|MXN
Micronesia|USD
Moldova|MDL
Monaco|EUR
Mongolia|MNT
Montenegro|EUR
Morocco|MAD
Mozambique|MZN
Myanmar|MMK
Namibia|NAD
Nauru|AUD
Nepal|NPR
Netherlands|EUR
New Zealand|NZD
Nicaragua|NIO
Niger|XOF
Nigeria|NGN
North Korea|KPW
North Macedonia|MKD
Norway|NOK
Oman|OMR
Pakistan|PKR
Palau|USD
Panama|PAB
Papua New Guinea|PGK
Paraguay|PYG
Peru|PEN
Philippines|PHP
Poland|PLN
Portugal|EUR
Qatar|QAR
Romania|RON
Russia|RUB
Rwanda|RWF
Saint Kitts and Nevis|XCD
Saint Lucia|XCD
Saint Vincent and the Grenadines|XCD
Samoa|WST
San Marino|EUR
Sao Tome and Principe|STN
Saudi Arabia|SAR
Senegal|XOF
Serbia|RSD
Seychelles|SCR
Sierra Leone|SLE
Singapore|SGD
Slovakia|EUR
Slovenia|EUR
Solomon Islands|SBD
Somalia|SOS
South Africa|ZAR
South Korea|KRW
South Sudan|SSP
Spain|EUR
Sri Lanka|LKR
Sudan|SDG
Suriname|SRD
Sweden|SEK
Switzerland|CHF
Syria|SYP
Taiwan|TWD
Tajikistan|TJS
Tanzania|TZS
Thailand|THB
Timor-Leste|USD
Togo|XOF
Tonga|TOP
Trinidad and Tobago|TTD
Tunisia|TND
Turkey|TRY
Turkmenistan|TMT
Tuvalu|AUD
Uganda|UGX
Ukraine|UAH
United Arab Emirates|AED
United Kingdom|GBP
United States|USD
Uruguay|UYU
Uzbekistan|UZS
Vanuatu|VUV
Vatican City|EUR
Venezuela|VES
Vietnam|VND
Yemen|YER
Zambia|ZMW
Zimbabwe|ZWL
`.trim().split("\n").map((line) => {
  const [country, currency] = line.split("|");
  return { country, currency };
});

const originalMoneyText = new WeakMap();

const moduleTitles = {
  financial: {
    dashboard: "Home",
    "general-ledger": "Money Records",
    "accounts-payable": "Bills We Pay",
    "accounts-receivable": "Bills Customers Pay",
    budgeting: "Budgets",
    payroll: "Payroll",
    reports: "Reports",
    approvals: "Approvals",
  },
  sales: {
    dashboard: "Home",
    leads: "Possible Customers",
    customers: "Customers",
    opportunities: "Possible Sales",
    quotations: "Price Quotes",
    orders: "Orders",
    "sales-invoices": "Customer Bills",
    targets: "Goals",
    reports: "Sales Summaries",
  },
  analytics: {
    dashboard: "Home",
    kpis: "Key Numbers",
    "financial-analytics": "Money Check",
    "sales-analytics": "Sales Check",
    "customer-analytics": "Customer Check",
    forecasting: "Forecasts",
    reports: "Business Summaries",
    "data-export": "Download Files",
  },
};

function setTopbarTitle(portal, module) {
  const portalTitle = portalTitles[portal] || "Overview";
  const moduleTitle = moduleTitles[portal]?.[module];
  topbarTitle.textContent = moduleTitle ? `${portalTitle} - ${moduleTitle}` : portalTitle;
}

function parseDollarAmount(token) {
  const cleaned = token.replace("$", "").replace(/,/g, "").trim();
  const suffix = cleaned.slice(-1).toUpperCase();
  const multiplier = suffix === "M" ? 1000000 : suffix === "K" ? 1000 : 1;
  const numeric = Number.parseFloat(multiplier === 1 ? cleaned : cleaned.slice(0, -1));

  return Number.isFinite(numeric) ? numeric * multiplier : 0;
}

function compactMoney(value, currency) {
  const settings = currencySettings[currency] || currencySettings.USD;
  const absolute = Math.abs(value);
  const suffix = absolute >= 1000000 ? "M" : absolute >= 1000 ? "K" : "";
  const divisor = suffix === "M" ? 1000000 : suffix === "K" ? 1000 : 1;
  const compactValue = value / divisor;
  const decimals = compactValue >= 100 || Number.isInteger(compactValue) ? 0 : 1;
  const amount = compactValue.toLocaleString(undefined, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: 0,
  });

  return `${settings.symbol}${amount}${suffix}`;
}

function convertMoneyText(text, currency) {
  const settings = currencySettings[currency] || currencySettings.USD;
  return text.replace(/\$[\d,]+(?:\.\d+)?\s*[KM]?/gi, (match) => {
    const baseValue = parseDollarAmount(match);
    return compactMoney(baseValue * settings.rate, currency);
  });
}

function setDynamicText(element, text) {
  element.textContent = text;
  element.childNodes.forEach((node) => {
    originalMoneyText.delete(node);
  });
}

function getCurrencyCodeFromValue(value) {
  return value.includes("|") ? value.split("|").pop() : value;
}

function populateCountryCurrencySelect() {
  if (!currencySelect || currencySelect.options.length) {
    return;
  }

  currencySelect.innerHTML = countryCurrencyOptions
    .map(({ country, currency }) => `<option value="${country}|${currency}">${country} - ${currency}</option>`)
    .join("");
}

function getSavedCurrencyValue() {
  const savedValue = getTemporaryData("selectedCurrency") || "United States|USD";

  if (savedValue.includes("|")) {
    return savedValue;
  }

  const matchingOption = countryCurrencyOptions.find((item) => item.currency === savedValue);
  return matchingOption ? `${matchingOption.country}|${matchingOption.currency}` : "United States|USD";
}

function updateCurrencyDisplay() {
  if (!currencySelect) {
    return;
  }

  const selectedCurrencyValue = currencySelect.value;
  const selectedCurrency = getCurrencyCodeFromValue(selectedCurrencyValue);
  setTemporaryData("selectedCurrency", selectedCurrencyValue);

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!parent || ["SCRIPT", "STYLE", "OPTION", "INPUT", "SELECT", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }

      const originalText = originalMoneyText.get(node) || node.nodeValue;
      return /\$[\d,]+(?:\.\d+)?\s*[KM]?/i.test(originalText) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    if (!originalMoneyText.has(node)) {
      originalMoneyText.set(node, node.nodeValue);
    }

    node.nodeValue = convertMoneyText(originalMoneyText.get(node), selectedCurrency);
  });
}

function showSection(target) {
  sections.forEach((section) => {
    section.classList.toggle("active", section.id === target);
  });

  document.body.classList.remove("portal-financial", "portal-sales", "portal-analytics");
  if (target === "financial" || target === "sales" || target === "analytics") {
    document.body.classList.add(`portal-${target}`);
  }

  updateSideMenuForSection(target);
  setTopbarTitle(target);
}

function updateSideMenuForSection(target) {
  const titles = {
    financial: "Money Office Menu",
    sales: "Selling Office Menu",
    analytics: "Business Check Menu",
  };

  sideMenuTitle.textContent = titles[target] || "Menu";
  sideMenuGroups.forEach((group) => {
    group.hidden = group.dataset.sideMenuGroup !== target;
  });
}

function openSideMenu() {
  const activeSection = document.querySelector(".portal-section.active");
  updateSideMenuForSection(activeSection ? activeSection.id : "overview");
  sideMenu.hidden = false;
  sideMenuBackdrop.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
}

function closeSideMenuPanel() {
  sideMenu.hidden = true;
  sideMenuBackdrop.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
}

function showFinanceModule(target) {
  financeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.financeTarget === target);
  });
  sideFinanceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sideFinanceTarget === target);
  });

  financePanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `finance-${target}`);
  });
  setTopbarTitle("financial", target);
}

function findFinanceButtonByText(text) {
  return Array.from(document.querySelectorAll("#financial button")).find((button) => button.textContent.trim() === text);
}

function getFinanceSubmoduleDetailPanel(panel) {
  let detailPanel = panel.querySelector(".finance-submodule-detail");

  if (!detailPanel) {
    detailPanel = document.createElement("section");
    detailPanel.className = "dashboard-detail finance-submodule-detail";
    detailPanel.innerHTML = `
      <div class="panel-header">
        <div>
          <h3></h3>
          <p></p>
        </div>
        <span></span>
      </div>
      <div class="dashboard-breakdown"></div>
    `;
    panel.appendChild(detailPanel);
  }

  return detailPanel;
}

function renderFinanceDetailRows(detail) {
  if (detail.tableHeaders && detail.tableRows) {
    return `
      <div class="table-panel compact-table">
        <table>
          <thead>
            <tr>${detail.tableHeaders.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${detail.tableRows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  return (detail.items || [])
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
}

function applyFinanceButtonAction(button, detail) {
  const title = button.textContent.trim();

  if (detail.billStatus) {
    billSearch.value = "";
    billStatusFilter.value = detail.billStatus;
    filterBills();
    supplierBillsTable.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (detail.invoiceStatus) {
    invoiceSearch.value = "";
    invoiceStatusFilter.value = detail.invoiceStatus;
    filterInvoices();
    customerInvoicesTable.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (button.closest("#finance-reports")) {
    currentFinanceReportTitle = title;
  }
}

function buildFinanceReportText() {
  const report = financeSubmoduleDetails["finance-reports"][currentFinanceReportTitle] || financeSubmoduleDetails["finance-reports"]["Profit and loss summary"];
  const lines = [
    currentFinanceReportTitle,
    "",
    report.text,
    "",
    ...(report.items || []).map(([label, value]) => `${label}: ${value}`),
  ];

  return lines.join("\n");
}

function openCustomerBillForm() {
  showFinanceModule("accounts-receivable");
  customerInvoiceForm.scrollIntoView({ behavior: "smooth", block: "center" });
  customerInvoiceForm.elements.invoiceNumber.focus();
  showToast("Customer bill form opened.");
}

function showSalesModule(target) {
  salesButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.salesTarget === target);
  });
  sideSalesButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sideSalesTarget === target);
  });

  salesPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `sales-${target}`);
  });
  setTopbarTitle("sales", target);
}

function showAnalyticsModule(target) {
  analyticsButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.analyticsTarget === target);
  });
  sideAnalyticsButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.sideAnalyticsTarget === target);
  });

  analyticsPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `analytics-${target}`);
  });
  setTopbarTitle("analytics", target);
}

function showSalesHomeDetail(target) {
  const detail = getSalesDynamicDetail(target) || salesHomeData[target];

  if (!detail) {
    salesHomeDetail.hidden = true;
    salesTotalFilter.hidden = true;
    return;
  }

  salesHomeDetail.hidden = false;
  salesTotalFilter.hidden = target !== "total-sales";
  salesHomeDetailTitle.textContent = detail.title;
  salesHomeDetailText.textContent = detail.text;
  salesHomeDetailLabel.textContent = detail.label;

  if (target === "total-sales") {
    updateSalesTotalOptions();
    updateCurrencyDisplay();
    return;
  }

  salesHomeBreakdown.innerHTML = renderDetailContent(detail);
  updateCurrencyDisplay();
}

function showSalesLeadDetail(target) {
  const detail = salesLeadData[target];

  if (!detail) {
    salesLeadDetail.hidden = true;
    return;
  }

  salesLeadDetail.hidden = false;
  salesLeadDetailTitle.textContent = detail.title;
  salesLeadDetailText.textContent = detail.text;
  salesLeadDetailLabel.textContent = detail.label;
  salesLeadBreakdown.innerHTML = renderDetailContent(detail);
  updateCurrencyDisplay();
}

function makeSalesPanelRows(panelId, title) {
  return [];
}

function showSalesPanelDetail(button) {
  const panel = button.closest(".sales-module-panel");
  const panelLabel = salesPanelLabels[panel.id] || "Selling Office";
  const title = button.textContent.trim();
  if (panel.id === "sales-reports") {
    currentSalesReportTitle = title;
  }

  let detailPanel = panel.querySelector(".sales-panel-detail");

  if (!detailPanel) {
    detailPanel = document.createElement("section");
    detailPanel.className = "dashboard-detail sales-panel-detail";
    detailPanel.innerHTML = `
      <div class="panel-header">
        <div>
          <h3></h3>
          <p></p>
        </div>
        <span></span>
      </div>
      <div class="dashboard-breakdown"></div>
    `;
    panel.appendChild(detailPanel);
  }

  detailPanel.querySelector("h3").textContent = title;
  detailPanel.querySelector("p").textContent = `${title} information for ${panelLabel}.`;
  detailPanel.querySelector("span").textContent = panelLabel;
  detailPanel.querySelector(".dashboard-breakdown").innerHTML = renderDetailContent({
    tableHeaders: ["Name", "Value", "Status", "Action"],
    tableRows: makeSalesPanelRows(panel.id, title),
  });
  updateCurrencyDisplay();
}

function showAnalyticsHomeDetail(target) {
  const detail = getAnalyticsHomeDynamicDetail(target) || analyticsHomeData[target];

  if (!detail) {
    analyticsHomeDetail.hidden = true;
    return;
  }

  analyticsHomeDetail.hidden = false;
  analyticsHomeDetailTitle.textContent = detail.title;
  analyticsHomeDetailText.textContent = detail.text;
  analyticsHomeDetailLabel.textContent = detail.label;
  analyticsHomeBreakdown.innerHTML = renderDetailContent(detail);
  updateCurrencyDisplay();
}

function makeAnalyticsPanelRows(panelId, title) {
  const metrics = getAnalyticsMetrics();
  const period = analyticsDateFilter?.value || "month";

  if (panelId === "analytics-kpis") {
    return [
      ["Money earned", formatUsd(metrics.earned), period, "Live"],
      ["Sales", String(metrics.salesCount), period, "Live"],
      ["Buying customers", String(metrics.buyingCustomers), period, "Live"],
    ];
  }

  if (panelId === "analytics-financial-analytics") {
    return [
      ["Money earned", formatUsd(metrics.earned), period, "Live"],
      ["Money spent", formatUsd(metrics.spent), period, metrics.spent > metrics.earned * 0.7 ? "High" : "Okay"],
      ["Money left", formatUsd(metrics.profit), `${metrics.profitPercent}%`, metrics.profitPercent < 30 ? "Dropping" : "Good"],
    ];
  }

  if (panelId === "analytics-sales-analytics") {
    return [
      ["Sales changes", formatUsd(metrics.earned), `${metrics.salesGrowth}%`, metrics.salesGrowth < 5 ? "Low" : "Good"],
      ["Buying customers", String(metrics.buyingCustomers), "Current", "Live"],
      ["Sales progress check", metrics.earned ? "Live" : "0%", "Goal", "Live"],
    ];
  }

  if (panelId === "analytics-customer-analytics") {
    return [
      ["Customer growth", String(metrics.activeCustomers), period, "Live"],
      ["Customers who came back", String(metrics.buyingCustomers), period, "Live"],
      ["Customer value", formatUsd(metrics.earned / Math.max(metrics.buyingCustomers, 1)), "Average", "Live"],
      ["Customers needing follow-up", String(metrics.customerFollowUps), "Call soon", metrics.customerFollowUps ? "Watch" : "Okay"],
    ];
  }

  if (panelId === "analytics-forecasting") {
    return [
      ["Expected sales", formatUsd(metrics.expectedSales), "Next period", "Plan stock"],
      ["Expected spending", formatUsd(metrics.expectedSpending), "Next period", "Check costs"],
      ["Expected profit", formatUsd(metrics.expectedProfit), "Next period", metrics.expectedProfit < metrics.profit ? "Watch" : "Good"],
      ["Expected customers", String(metrics.expectedCustomers), "Next period", "Follow up leads"],
    ];
  }

  if (panelId === "analytics-data-export") {
    return [
      ["Excel file", "Available", period, "Download"],
      ["PDF file", "Available", period, "Download"],
      ["CSV file", "Available", period, "Download"],
      ["Planned downloads", "Temporary only", period, "Plan"],
      ["Custom summary download", currentAnalyticsReportTitle, period, "Download"],
    ];
  }

  return [
    ["Manager summary", formatUsd(metrics.profit), period, "Download"],
    ["Money summary", formatUsd(metrics.earned), period, "Download"],
    ["Sales summary", String(metrics.salesCount), period, "Download"],
  ];
}

function showAnalyticsPanelDetail(button) {
  const panel = button.closest(".analytics-module-panel");
  const panelLabel = analyticsPanelLabels[panel.id] || "Business Check";
  const title = button.textContent.trim();
  if (panel.id === "analytics-reports" || panel.id === "analytics-data-export") {
    currentAnalyticsReportTitle = title;
  }

  let detailPanel = panel.querySelector(".analytics-panel-detail");

  if (!detailPanel) {
    detailPanel = document.createElement("section");
    detailPanel.className = "dashboard-detail analytics-panel-detail";
    detailPanel.innerHTML = `
      <div class="panel-header">
        <div>
          <h3></h3>
          <p></p>
        </div>
        <span></span>
      </div>
      <div class="dashboard-breakdown"></div>
    `;
    panel.appendChild(detailPanel);
  }

  detailPanel.querySelector("h3").textContent = title;
  detailPanel.querySelector("p").textContent = `${title} information for ${panelLabel} using the selected ${analyticsDateFilter?.value || "month"} view.`;
  detailPanel.querySelector("span").textContent = panelLabel;
  detailPanel.querySelector(".dashboard-breakdown").innerHTML = renderDetailContent({
    tableHeaders: ["Name", "Value", "Time", "Action"],
    tableRows: makeAnalyticsPanelRows(panel.id, title),
  });
  updateCurrencyDisplay();
}

function renderDetailContent(detail) {
  if (detail.tableHeaders && detail.tableRows) {
    return `
      <div class="detail-table">
        <table>
          <thead>
            <tr>${detail.tableHeaders.map((header) => `<th>${header}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${detail.tableRows
              .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  return detail.items.map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`).join("");
}

function updateSalesTotalOptions() {
  const periodType = salesPeriodType.value;
  const options = salesTotalOptions[periodType];

  salesPeriodValue.innerHTML = options.map((item) => `<option>${item.label}</option>`).join("");
  updateSalesTotalBreakdown();
}

function updateSalesTotalBreakdown() {
  const periodType = salesPeriodType.value;
  const selectedLabel = salesPeriodValue.value;
  const selectedItem = salesTotalOptions[periodType].find((item) => item.label === selectedLabel) || salesTotalOptions[periodType][0];
  const periodName = periodType === "day" ? "day" : periodType;
  const items = [
    [`Selected ${periodName}`, selectedItem.label],
    ["Total sales", selectedItem.amount],
    ["Completed sales", selectedItem.completed],
    ["Sales still open", selectedItem.open],
  ];

  salesHomeBreakdown.innerHTML = items
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
  updateCurrencyDisplay();
}

function showFinanceDashboardDetail(target) {
  const detail = financeDashboardData[target];

  if (!detail) {
    financeDashboardDetail.hidden = true;
    return;
  }

  financeDashboardDetail.hidden = false;
  financeDashboardDetailTitle.textContent = detail.title;
  financeDashboardDetailText.textContent = detail.text;
  financeDashboardDetailLabel.textContent = detail.label;
  financeDashboardBreakdown.innerHTML = renderDetailContent(detail);
  updateCurrencyDisplay();
}

function showLedgerDetail(target) {
  const detail = ledgerData[target];

  if (!detail) {
    ledgerDetail.hidden = true;
    return;
  }

  ledgerDetail.hidden = false;
  ledgerDetailTitle.textContent = detail.title;
  ledgerDetailText.textContent = detail.text;
  ledgerDetailLabel.textContent = detail.label;
  ledgerBreakdown.innerHTML = detail.items
    .map(([label, value]) => `<article><span>${label}</span><strong>${value}</strong></article>`)
    .join("");
  updateCurrencyDisplay();
}

function showFinanceSubmoduleDetail(button) {
  const panel = button.closest(".finance-module-panel");
  const moduleDetail = financeModuleDetails[panel.id];
  const title = button.textContent.trim();
  const detail = financeSubmoduleDetails[panel.id]?.[title];

  if (!moduleDetail) {
    return;
  }

  const detailPanel = getFinanceSubmoduleDetailPanel(panel);
  const activeDetail = detail || {
    text: `${title} is part of ${moduleDetail.label}. ${moduleDetail.text}`,
    items: moduleDetail.items,
  };

  detailPanel.querySelector("h3").textContent = title;
  detailPanel.querySelector("p").textContent = activeDetail.text;
  detailPanel.querySelector("span").textContent = moduleDetail.label;
  detailPanel.querySelector(".dashboard-breakdown").innerHTML = renderFinanceDetailRows(activeDetail);
  applyFinanceButtonAction(button, activeDetail);
  updateCurrencyDisplay();
}

function getStatusClass(status) {
  if (status === "Paid" || status === "Approved") {
    return "paid";
  }

  if (status === "Overdue" || status === "Rejected") {
    return "pending";
  }

  return "review";
}

function addTableRow(table, cells) {
  const row = table.tBodies[0].insertRow();
  row.innerHTML = cells.map((cell) => `<td>${cell}</td>`).join("");
  updateCurrencyDisplay();
  return row;
}

function amountFromText(text) {
  return Number(text.replace(/[^0-9.-]/g, "")) || 0;
}

function formatUsd(value) {
  return `$${Math.round(value).toLocaleString()}`;
}

function getRows(table) {
  return Array.from(table.tBodies[0].rows);
}

function setFinanceMetric(label, value) {
  document.querySelectorAll("#financial article, #financial button.dashboard-item").forEach((item) => {
    const metricLabel = item.querySelector("span")?.textContent.trim();
    const metricValue = item.querySelector("strong");

    if (metricLabel === label && metricValue) {
      setDynamicText(metricValue, value);
    }
  });
}

function getFinanceTotals() {
  const invoiceRows = getRows(customerInvoicesTable);
  const billRows = getRows(supplierBillsTable);
  const unpaidInvoices = invoiceRows.filter((row) => row.cells[4].textContent.trim() !== "Paid");
  const overdueInvoices = invoiceRows.filter((row) => row.cells[4].textContent.trim() === "Overdue");
  const unpaidBills = billRows.filter((row) => row.cells[4].textContent.trim() !== "Paid");
  const overdueBills = billRows.filter((row) => row.cells[4].textContent.trim() === "Overdue");
  const moneyIn = invoiceRows
    .filter((row) => row.cells[4].textContent.trim() === "Paid")
    .reduce((total, row) => total + Number(row.dataset.amount || amountFromText(row.cells[3].textContent)), 0);
  const moneyOut = billRows
    .filter((row) => row.cells[4].textContent.trim() === "Paid")
    .reduce((total, row) => total + Number(row.dataset.amount || amountFromText(row.cells[3].textContent)), 0);
  const unpaidAmount = unpaidInvoices.reduce((total, row) => total + Number(row.dataset.amount || amountFromText(row.cells[3].textContent)), 0);
  const overdueInvoiceAmount = overdueInvoices.reduce((total, row) => total + Number(row.dataset.amount || amountFromText(row.cells[3].textContent)), 0);
  const overdueBillAmount = overdueBills.reduce((total, row) => total + Number(row.dataset.amount || amountFromText(row.cells[3].textContent)), 0);

  return {
    invoiceRows,
    billRows,
    unpaidInvoices,
    overdueInvoices,
    unpaidBills,
    overdueBills,
    moneyIn,
    moneyOut,
    unpaidAmount,
    overdueInvoiceAmount,
    overdueBillAmount,
  };
}

function getPendingApprovalCount() {
  return Array.from(approvalQueue.querySelectorAll("article")).filter((item) => {
    const status = item.querySelector("small")?.textContent.trim() || "";
    return status !== "Approved" && !status.startsWith("Rejected");
  }).length;
}

function updateFinanceDashboardTotals() {
  const totals = getFinanceTotals();
  const availableMoney = 1280000 + totals.moneyIn - totals.moneyOut;
  const pendingApprovals = getPendingApprovalCount();

  setFinanceMetric("Money available", formatUsd(availableMoney));
  setFinanceMetric("Customer bills not paid", formatUsd(totals.unpaidAmount));
  setFinanceMetric("Supplier bills due", String(totals.unpaidBills.length));
  setFinanceMetric("Pending approvals", String(pendingApprovals));
  setFinanceMetric("Available money", formatUsd(availableMoney));
  setFinanceMetric("Waiting customer bills", String(totals.unpaidInvoices.length));
  setFinanceMetric("Late customer bills", String(totals.overdueInvoices.length));
  setFinanceMetric("Waiting approvals", String(pendingApprovals));
  setFinanceMetric("Money in", formatUsd(totals.moneyIn));
  setFinanceMetric("Money out", formatUsd(totals.moneyOut));
  setFinanceMetric("Customer bills overdue", formatUsd(totals.overdueInvoiceAmount));
  setFinanceMetric("Supplier bills overdue", formatUsd(totals.overdueBillAmount));
  renderFinanceNotices(totals);
  updateCurrencyDisplay();
}

function renderFinanceNotices(totals = getFinanceTotals()) {
  if (!financeNotices) {
    return;
  }

  const notices = [];

  if (totals.overdueInvoices.length) {
    notices.push(`${totals.overdueInvoices.length} customer bill(s) are overdue.`);
  }

  if (totals.overdueBills.length) {
    notices.push(`${totals.overdueBills.length} supplier bill(s) are overdue.`);
  }

  const pendingApprovals = getPendingApprovalCount();
  if (pendingApprovals) {
    notices.push(`${pendingApprovals} approval request(s) need review.`);
  }

  financeNotices.innerHTML = notices.length
    ? notices.map((notice) => `<div class="finance-notice">${notice}</div>`).join("")
    : '<div class="finance-notice">No urgent finance alerts right now.</div>';
}

function validateFinanceRecordForm(form, numberField, table, editingRow) {
  const number = form.elements[numberField].value.trim();
  const dueDate = form.elements.dueDate.value;
  const amount = Number(form.elements.amount.value);
  const tax = Number(form.elements.tax.value || 0);

  if (!number) {
    showToast("Enter the record number.");
    return false;
  }

  if (!dueDate || Number.isNaN(Date.parse(dueDate))) {
    showToast("Enter a correct due date.");
    return false;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showToast("Amount must be greater than zero.");
    return false;
  }

  if (!Number.isFinite(tax) || tax < 0) {
    showToast("Tax cannot be negative.");
    return false;
  }

  if (hasDuplicateRecord(table, number, editingRow)) {
    showToast("Record number already exists.");
    return false;
  }

  return true;
}

function getTableData(table) {
  const headers = Array.from(table.tHead?.rows[0]?.cells || []);
  const hasActionColumn = headers.at(-1)?.textContent.trim().toLowerCase() === "action";

  return getRows(table).map((row) => ({
    cells: Array.from(row.cells)
      .slice(0, hasActionColumn ? -1 : row.cells.length)
      .map((cell) => cell.textContent.trim()),
    dataset: { ...row.dataset },
  }));
}

function restoreFinanceTable(table, records, actionBuilder) {
  table.tBodies[0].innerHTML = "";
  records.forEach((record) => {
    const cells = record.cells.slice(0, 5);
    if (cells[4]) {
      cells[4] = `<span class="pill ${getStatusClass(cells[4])}">${cells[4]}</span>`;
    }
    const row = addTableRow(table, [...cells, actionBuilder()]);
    Object.entries(record.dataset || {}).forEach(([key, value]) => {
      row.dataset[key] = value;
    });
  });
}

function exportFinanceBackup() {
  const backup = {
    createdAt: new Date().toISOString(),
    customerInvoices: getTableData(customerInvoicesTable),
    supplierBills: getTableData(supplierBillsTable),
    payroll: getTableData(payrollTable),
    monthlySummaryPlan: JSON.parse(getTemporaryData("financeMonthlySummaryPlan") || "null"),
  };

  downloadTextFile(`finance-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(backup, null, 2));
  showToast("Finance backup exported.");
  addActivity("Finance backup exported.");
}

function importFinanceBackup(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const backup = JSON.parse(reader.result);

      if (!Array.isArray(backup.customerInvoices) || !Array.isArray(backup.supplierBills)) {
        throw new Error("Invalid finance backup file.");
      }

      restoreFinanceTable(customerInvoicesTable, backup.customerInvoices, makeInvoiceActions);
      restoreFinanceTable(supplierBillsTable, backup.supplierBills, makeBillActions);

      if (backup.monthlySummaryPlan) {
        setTemporaryData("financeMonthlySummaryPlan", JSON.stringify(backup.monthlySummaryPlan));
      }

      filterInvoices();
      filterBills();
      updateFinanceDashboardTotals();
      showToast("Finance backup imported.");
      addActivity("Finance backup imported.");
    } catch (error) {
      showToast("Backup import failed. Use a valid finance backup file.");
    }
  });

  reader.readAsText(file);
}

function setFinanceButtonLocked(button, locked) {
  button.disabled = locked;
  button.classList.toggle("finance-locked", locked);
  if (locked) {
    button.title = "Your finance role cannot use this action.";
  } else {
    button.removeAttribute("title");
  }
}

function applyFinanceRolePermissions(role) {
  const rules = {
    "Finance Manager": [],
    Accountant: ["finance-payroll"],
    "Payroll Officer": ["finance-accounts-payable", "finance-accounts-receivable", "finance-budgeting", "finance-approvals"],
    "Budget Officer": ["finance-accounts-payable", "finance-accounts-receivable", "finance-payroll"],
    Auditor: ["write-actions", "finance-approvals"],
  };
  const lockedAreas = rules[role] || [];

  sideFinanceButtons.forEach((button) => {
    const panelId = `finance-${button.dataset.sideFinanceTarget}`;
    setFinanceButtonLocked(button, lockedAreas.includes(panelId));
  });

  document.querySelectorAll("#financial .finance-module-panel").forEach((panel) => {
    const panelLocked = lockedAreas.includes(panel.id);
    panel.querySelectorAll("button, input, select").forEach((control) => {
      const isNavigation = control.closest(".submodule-row");
      setFinanceButtonLocked(control, panelLocked || (lockedAreas.includes("write-actions") && !isNavigation));
    });
  });

  if (lockedAreas.includes("write-actions")) {
    [customerInvoiceForm, supplierBillForm].forEach((form) => {
      form.querySelectorAll("input, select, button").forEach((control) => setFinanceButtonLocked(control, true));
    });
  }

  const canBackup = role === "Finance Manager";
  [exportFinanceBackupButton, importFinanceBackupButton].forEach((button) => {
    if (button) {
      setFinanceButtonLocked(button, !canBackup);
    }
  });
}

function filterInvoices() {
  const query = invoiceSearch.value.trim().toLowerCase();
  const status = invoiceStatusFilter.value;

  Array.from(customerInvoicesTable.tBodies[0].rows).forEach((row) => {
    const text = row.textContent.toLowerCase();
    const rowStatus = row.cells[4].textContent.trim();
    const matchesQuery = !query || text.includes(query);
    const matchesStatus = status === "All statuses" || rowStatus === status;
    row.hidden = !matchesQuery || !matchesStatus;
  });
}

function filterBills() {
  const query = billSearch.value.trim().toLowerCase();
  const status = billStatusFilter.value;

  Array.from(supplierBillsTable.tBodies[0].rows).forEach((row) => {
    const text = row.textContent.toLowerCase();
    const rowStatus = row.cells[4].textContent.trim();
    const matchesQuery = !query || text.includes(query);
    const matchesStatus = status === "All statuses" || rowStatus === status;
    row.hidden = !matchesQuery || !matchesStatus;
  });
}

function filterMoneyRecords() {
  const query = moneyRecordsSearch.value.trim().toLowerCase();

  ledgerItems.forEach((item) => {
    item.hidden = query && !item.textContent.toLowerCase().includes(query);
  });
}

function filterSalesWork() {
  const query = salesTableSearch.value.trim().toLowerCase();
  const status = salesStatusFilter.value;

  Array.from(salesWorkTable.tBodies[0].rows).forEach((row) => {
    const text = row.textContent.toLowerCase();
    const rowStatus = row.cells[2].textContent.trim();
    const matchesQuery = !query || text.includes(query);
    const matchesStatus = status === "All statuses" || rowStatus === status;
    row.hidden = !matchesQuery || !matchesStatus;
  });
}

function makeSalesActions(type) {
  const canConvert = ["Possible customer", "Price quote", "Order"].includes(type);
  return `
    <div class="row-actions">
      <button class="mini-button view-sales-action" type="button">View</button>
      <button class="mini-button edit-sales-action" type="button">Edit</button>
      ${canConvert ? '<button class="mini-button convert-sales-action" type="button">Convert</button>' : ""}
      <button class="mini-button delete-sales-action" type="button">Delete</button>
    </div>
  `;
}

function addSalesActivity(message) {
  if (!salesActivityLog) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${message}`;
  salesActivityLog.prepend(item);

  while (salesActivityLog.children.length > 6) {
    salesActivityLog.lastElementChild.remove();
  }
}

function addSalesWorkRow(type, name, status, followUpDate, nextAction, extra = {}) {
  const row = addTableRow(salesWorkTable, [type, name, status, followUpDate, nextAction, makeSalesActions(type)]);
  row.dataset.phone = extra.phone || "";
  row.dataset.amount = extra.amount || "0";
  row.dataset.notes = extra.notes || "";
  row.dataset.purchaseHistory = extra.purchaseHistory || (status === "Bought" ? `${name} has a completed sale.` : "No purchase yet.");
  filterSalesWork();
  updateSalesDashboardTotals();
  renderSalesNotices();
  showToast(`${type} added to sales work.`);
  addSalesActivity(`${type} ${name} added.`);
}

function handleSalesFormSubmit(form, type, statusFallback) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("name") || data.get("customer") || data.get("number");
    const status = data.get("status") || statusFallback;
    addSalesWorkRow(type, name, status, data.get("followUpDate"), data.get("nextAction"), {
      phone: data.get("phone") || "",
      amount: data.get("amount") || "0",
      notes: data.get("nextAction") || "",
      purchaseHistory: type === "Order" || status === "Bought" ? `${name} has buying activity.` : "No purchase yet.",
    });
    form.reset();
  });
}

function getSalesRows() {
  return Array.from(salesWorkTable.tBodies[0].rows);
}

function getSalesAmount(row) {
  return Number(row.dataset.amount || 0);
}

function getSalesTotals() {
  const rows = getSalesRows();
  const possibleCustomers = rows.filter((row) => row.cells[0].textContent.trim() === "Possible customer");
  const openSales = rows.filter((row) => row.cells[2].textContent.trim() !== "Bought");
  const completedSales = rows.filter((row) => row.cells[2].textContent.trim() === "Bought");
  const buyingCustomers = rows.filter((row) => row.cells[0].textContent.trim() === "Customer" || row.cells[2].textContent.trim() === "Bought");
  const totalAmount = rows.reduce((total, row) => total + getSalesAmount(row), 0);
  const completedAmount = completedSales.reduce((total, row) => total + getSalesAmount(row), 0);

  return { rows, possibleCustomers, openSales, completedSales, buyingCustomers, totalAmount, completedAmount };
}

function updateSalesDashboardTotals() {
  const totals = getSalesTotals();
  const goalCard = document.querySelector(".sales-goal-card");
  const progress = 0;

  if (goalCard) {
    setDynamicText(goalCard.querySelector("strong"), formatUsd(totals.completedAmount));
    goalCard.querySelector("progress").value = progress;
    setDynamicText(goalCard.querySelector("small"), "No sales goal set.");
  }

  updateCurrencyDisplay();
}

function renderSalesNotices() {
  if (!salesNotices) {
    return;
  }

  const today = new Date().toISOString().slice(0, 10);
  const overdue = [];
  const dueToday = [];

  getSalesRows().forEach((row) => {
    const followUpDate = row.cells[3].textContent.trim();
    const label = `${row.cells[1].textContent.trim()} - ${row.cells[4].textContent.trim()}`;

    if (followUpDate < today && row.cells[2].textContent.trim() !== "Bought") {
      overdue.push(label);
    } else if (followUpDate === today) {
      dueToday.push(label);
    }
  });

  const notices = [
    ...overdue.map((item) => `Overdue follow-up: ${item}`),
    ...dueToday.map((item) => `Follow up today: ${item}`),
  ];

  salesNotices.innerHTML = notices.length
    ? notices.map((notice) => `<div class="finance-notice">${notice}</div>`).join("")
    : '<div class="finance-notice">No urgent sales follow-ups right now.</div>';
}

function getSalesDynamicDetail(target) {
  const totals = getSalesTotals();
  const rowsToTable = (rows) => ({
    tableHeaders: ["Type", "Name", "Status", "Follow-up date", "Next action"],
    tableRows: rows.map((row) => Array.from(row.cells).slice(0, 5).map((cell) => cell.textContent.trim())),
  });

  if (target === "total-sales") {
    return {
      title: "Total Sales",
      text: "This shows all sales work currently recorded in the portal.",
      label: "Selling home",
      tableHeaders: ["Measure", "Value", "Meaning"],
      tableRows: [
        ["All records", String(totals.rows.length), "Everything in Sales Work"],
        ["Total sales amount", formatUsd(totals.totalAmount), "Quote and order amounts"],
        ["Completed sales amount", formatUsd(totals.completedAmount), "Bought records"],
      ],
    };
  }

  if (target === "monthly-sales-money") {
    return {
      title: "Money From Sales This Month",
      text: "This shows the sales money currently recorded from quotes and orders.",
      label: "Monthly sales money",
      tableHeaders: ["Type", "Name", "Status", "Amount"],
      tableRows: totals.rows.map((row) => [
        row.cells[0].textContent.trim(),
        row.cells[1].textContent.trim(),
        row.cells[2].textContent.trim(),
        formatUsd(getSalesAmount(row)),
      ]),
    };
  }

  if (target === "new-possible-customers") {
    return { ...salesHomeData[target], ...rowsToTable(totals.possibleCustomers) };
  }

  if (target === "open-sales") {
    return { ...salesHomeData[target], ...rowsToTable(totals.openSales) };
  }

  if (target === "completed-sales") {
    return { ...salesHomeData[target], ...rowsToTable(totals.completedSales) };
  }

  if (target === "people-who-bought") {
    return { ...salesHomeData[target], title: "Buying Customers", ...rowsToTable(totals.buyingCustomers) };
  }

  if (target === "recent-activities") {
    return {
      title: "Recent Activities",
      text: "This shows the latest sales actions recorded in this browser.",
      label: "Sales activity",
      tableHeaders: ["Activity"],
      tableRows: Array.from(salesActivityLog?.children || []).map((item) => [item.textContent]),
    };
  }

  return null;
}

function openSalesRecordPreview(row) {
  openModal(
    "Sales Record",
    `
      <div class="modal-detail-grid">
        <article><span>Type</span><strong>${row.cells[0].textContent.trim()}</strong></article>
        <article><span>Name</span><strong>${row.cells[1].textContent.trim()}</strong></article>
        <article><span>Phone</span><strong>${row.dataset.phone || "Not recorded"}</strong></article>
        <article><span>Status</span><strong>${row.cells[2].textContent.trim()}</strong></article>
        <article><span>Follow-up date</span><strong>${row.cells[3].textContent.trim()}</strong></article>
        <article><span>Next action</span><strong>${row.cells[4].textContent.trim()}</strong></article>
        <article><span>Notes</span><strong>${row.dataset.notes || "No notes"}</strong></article>
        <article><span>Purchase history</span><strong>${row.dataset.purchaseHistory || "No purchase history"}</strong></article>
      </div>
    `,
  );
}

function openSalesRecordEdit(row) {
  salesRowBeingEdited = row;
  openModal(
    "Edit Sales Record",
    `
      <form class="payment-form" id="salesRecordEditForm">
        <label>
          Type
          <select name="type">
            ${["Possible customer", "Customer", "Price quote", "Order"].map((type) => `<option ${row.cells[0].textContent.trim() === type ? "selected" : ""}>${type}</option>`).join("")}
          </select>
        </label>
        <label>
          Name
          <input name="name" value="${row.cells[1].textContent.trim()}" required />
        </label>
        <label>
          Phone
          <input name="phone" value="${row.dataset.phone || ""}" />
        </label>
        <label>
          Status
          <select name="status">
            ${["New", "Interested", "Waiting", "Bought"].map((status) => `<option ${row.cells[2].textContent.trim() === status ? "selected" : ""}>${status}</option>`).join("")}
          </select>
        </label>
        <label>
          Follow-up date
          <input name="followUpDate" type="date" value="${row.cells[3].textContent.trim()}" required />
        </label>
        <label>
          Next action
          <input name="nextAction" value="${row.cells[4].textContent.trim()}" required />
        </label>
        <label>
          Amount
          <input name="amount" type="number" min="0" value="${row.dataset.amount || 0}" />
        </label>
        <label>
          Notes
          <input name="notes" value="${row.dataset.notes || ""}" />
        </label>
        <button class="primary-button" type="submit">Save sales record</button>
      </form>
    `,
  );
}

function setSalesRow(row, data) {
  row.cells[0].textContent = data.type;
  row.cells[1].textContent = data.name;
  row.cells[2].textContent = data.status;
  row.cells[3].textContent = data.followUpDate;
  row.cells[4].textContent = data.nextAction;
  row.cells[5].innerHTML = makeSalesActions(data.type);
  row.dataset.phone = data.phone || "";
  row.dataset.amount = data.amount || "0";
  row.dataset.notes = data.notes || "";
  row.dataset.purchaseHistory = data.purchaseHistory || row.dataset.purchaseHistory || "No purchase yet.";
}

function convertSalesRecord(row) {
  const type = row.cells[0].textContent.trim();
  const name = row.cells[1].textContent.trim();

  if (type === "Possible customer") {
    setSalesRow(row, {
      type: "Customer",
      name,
      status: "Interested",
      followUpDate: row.cells[3].textContent.trim(),
      nextAction: "Prepare customer profile",
      phone: row.dataset.phone,
      amount: row.dataset.amount,
      notes: "Converted from possible customer.",
      purchaseHistory: row.dataset.purchaseHistory,
    });
    addSalesActivity(`${name} converted to customer.`);
    showToast("Possible customer converted to customer.");
  } else if (type === "Price quote") {
    setSalesRow(row, {
      type: "Order",
      name,
      status: "Waiting",
      followUpDate: row.cells[3].textContent.trim(),
      nextAction: "Prepare order",
      phone: row.dataset.phone,
      amount: row.dataset.amount,
      notes: "Converted from price quote.",
      purchaseHistory: row.dataset.purchaseHistory,
    });
    addSalesActivity(`${name} price quote converted to order.`);
    showToast("Price quote converted to order.");
  } else if (type === "Order") {
    setSalesRow(row, {
      type: "Customer bill",
      name,
      status: "Waiting",
      followUpDate: row.cells[3].textContent.trim(),
      nextAction: "Send customer bill",
      phone: row.dataset.phone,
      amount: row.dataset.amount,
      notes: "Converted from order.",
      purchaseHistory: `${name} order is ready for customer bill.`,
    });
    addSalesActivity(`${name} order converted to customer bill.`);
    showToast("Order converted to customer bill.");
  } else {
    showToast("This sales record cannot be converted.");
    return;
  }

  filterSalesWork();
  updateSalesDashboardTotals();
  renderSalesNotices();
}

function getSalesBackupData() {
  return {
    createdAt: new Date().toISOString(),
    records: getSalesRows().map((row) => ({
      cells: Array.from(row.cells).slice(0, 5).map((cell) => cell.textContent.trim()),
      dataset: { ...row.dataset },
    })),
  };
}

function exportSalesBackup() {
  const dateStamp = new Date().toISOString().slice(0, 10);
  const filenameBase = `sales-report-${dateStamp}`;

  openPdfPrintView(currentSalesReportTitle, buildSalesReportText());
  downloadWordDocument(`${filenameBase}.doc`, currentSalesReportTitle, buildSalesReportText());
  downloadExcelWorkbook(`${filenameBase}.xls`, buildSalesExcelRows());
  downloadTextFile(`sales-backup-${dateStamp}.json`, JSON.stringify(getSalesBackupData(), null, 2));
  showToast("Sales PDF, Word, Excel, and backup files exported.");
  addSalesActivity("Sales PDF, Word, Excel, and backup files exported.");
}

function importSalesBackup(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const backup = JSON.parse(reader.result);

      if (!Array.isArray(backup.records)) {
        throw new Error("Invalid sales backup.");
      }

      salesWorkTable.tBodies[0].innerHTML = "";
      backup.records.forEach((record) => {
        const [type, name, status, followUpDate, nextAction] = record.cells;
        const row = addTableRow(salesWorkTable, [type, name, status, followUpDate, nextAction, makeSalesActions(type)]);
        Object.entries(record.dataset || {}).forEach(([key, value]) => {
          row.dataset[key] = value;
        });
      });

      filterSalesWork();
      updateSalesDashboardTotals();
      renderSalesNotices();
      showToast("Sales backup imported.");
      addSalesActivity("Sales backup imported.");
    } catch (error) {
      showToast("Sales backup import failed.");
    }
  });

  reader.readAsText(file);
}

function buildSalesReportText() {
  const totals = getSalesTotals();
  return [
    currentSalesReportTitle,
    "",
    `All sales records: ${totals.rows.length}`,
    `Open sales: ${totals.openSales.length}`,
    `Completed sales: ${totals.completedSales.length}`,
    `Buying customers: ${totals.buyingCustomers.length}`,
    `Recorded sales amount: ${formatUsd(totals.totalAmount)}`,
  ].join("\n");
}

function buildSalesExcelRows() {
  const totals = getSalesTotals();
  return [
    ["Sales report", currentSalesReportTitle],
    ["Created", new Date().toLocaleString()],
    [],
    ["Summary", "Value"],
    ["All sales records", totals.rows.length],
    ["Open sales", totals.openSales.length],
    ["Completed sales", totals.completedSales.length],
    ["Buying customers", totals.buyingCustomers.length],
    ["Recorded sales amount", formatUsd(totals.totalAmount)],
    [],
    ["Type", "Name", "Status", "Follow-up date", "Next action", "Phone", "Amount", "Notes"],
    ...totals.rows.map((row) => [
      row.cells[0]?.textContent.trim() || "",
      row.cells[1]?.textContent.trim() || "",
      row.cells[2]?.textContent.trim() || "",
      row.cells[3]?.textContent.trim() || "",
      row.cells[4]?.textContent.trim() || "",
      row.dataset.phone || "",
      row.dataset.amount || "",
      row.dataset.notes || "",
    ]),
  ];
}

function buildAnalyticsReportText() {
  const metrics = getAnalyticsMetrics();
  return [
    currentAnalyticsReportTitle,
    "",
    `Period: ${analyticsDateFilter?.value || "month"}`,
    `Total money earned: ${formatUsd(metrics.earned)}`,
    `Total sales records: ${metrics.salesCount}`,
    `Total money spent: ${formatUsd(metrics.spent)}`,
    `Profit: ${formatUsd(metrics.profit)}`,
    `Profit percentage: ${metrics.profitPercent}%`,
    `Active customers: ${metrics.activeCustomers}`,
    `Buying customers: ${metrics.buyingCustomers}`,
    `Expected sales: ${formatUsd(metrics.expectedSales)}`,
    `Expected spending: ${formatUsd(metrics.expectedSpending)}`,
    `Expected profit: ${formatUsd(metrics.expectedProfit)}`,
    `Expected customers: ${metrics.expectedCustomers}`,
  ].join("\n");
}

function buildAnalyticsCsv() {
  const metrics = getAnalyticsMetrics();
  return [
    "Metric,Value",
    `"Total money earned","${formatUsd(metrics.earned)}"`,
    `"Total sales records","${metrics.salesCount}"`,
    `"Total money spent","${formatUsd(metrics.spent)}"`,
    `"Profit","${formatUsd(metrics.profit)}"`,
    `"Profit percentage","${metrics.profitPercent}%"`,
    `"Active customers","${metrics.activeCustomers}"`,
    `"Buying customers","${metrics.buyingCustomers}"`,
    `"Expected sales","${formatUsd(metrics.expectedSales)}"`,
    `"Expected spending","${formatUsd(metrics.expectedSpending)}"`,
    `"Expected profit","${formatUsd(metrics.expectedProfit)}"`,
    `"Expected customers","${metrics.expectedCustomers}"`,
  ].join("\n");
}

function downloadAnalyticsFile(type) {
  const filenameBase = currentAnalyticsReportTitle.toLowerCase().replace(/\s+/g, "-");

  if (type === "excel") {
    downloadExcelWorkbook(`${filenameBase}.xls`, buildAnalyticsCsv().split("\n").map((row) => row.split(",").map((cell) => cell.replace(/^"|"$/g, ""))));
  } else if (type === "csv") {
    downloadTextFile(`${filenameBase}.csv`, buildAnalyticsCsv(), "text/csv;charset=utf-8");
  } else {
    openPdfPrintView(currentAnalyticsReportTitle, buildAnalyticsReportText());
  }

  showToast(`${currentAnalyticsReportTitle} ${type.toUpperCase()} downloaded.`);
  addAnalyticsActivity(`${currentAnalyticsReportTitle} ${type.toUpperCase()} downloaded.`);
}

function exportAnalyticsBackup() {
  const backup = {
    createdAt: new Date().toISOString(),
    period: analyticsDateFilter?.value || "month",
    reportTitle: currentAnalyticsReportTitle,
    metrics: getAnalyticsMetrics(),
    finance: {
      customerInvoices: getTableData(customerInvoicesTable),
      supplierBills: getTableData(supplierBillsTable),
    },
    sales: getSalesBackupData(),
  };

  downloadTextFile(`analytics-backup-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(backup, null, 2));
  showToast("Analytics backup exported.");
  addAnalyticsActivity("Analytics backup exported.");
}

function importAnalyticsBackup(file) {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    try {
      const backup = JSON.parse(reader.result);

      if (!backup.metrics && !backup.sales && !backup.finance) {
        throw new Error("Invalid analytics backup.");
      }

      if (backup.period && analyticsDateFilter) {
        analyticsDateFilter.value = backup.period;
      }
      currentAnalyticsReportTitle = backup.reportTitle || currentAnalyticsReportTitle;
      updateAnalyticsDashboardFromPortalData();
      showToast("Analytics backup imported.");
      addAnalyticsActivity("Analytics backup imported.");
    } catch (error) {
      showToast("Analytics backup import failed.");
    }
  });

  reader.readAsText(file);
}

function applyAnalyticsRolePermissions(role) {
  const rules = {
    "Business Manager": [],
    "Data Officer": ["analytics-reports"],
    "Report Officer": ["analytics-data-export", "analytics-forecasting"],
    "Business Analyst": ["analytics-data-export"],
  };
  const lockedAreas = rules[role] || [];

  sideAnalyticsButtons.forEach((button) => {
    setFinanceButtonLocked(button, lockedAreas.includes(`analytics-${button.dataset.sideAnalyticsTarget}`));
  });

  analyticsPanels.forEach((panel) => {
    const locked = lockedAreas.includes(panel.id);
    panel.querySelectorAll("button, input, select").forEach((control) => setFinanceButtonLocked(control, locked));
  });

  const canBackup = role === "Business Manager" || role === "Data Officer";
  [exportAnalyticsBackupButton, importAnalyticsBackupButton].forEach((button) => {
    if (button) {
      setFinanceButtonLocked(button, !canBackup);
    }
  });
}

function applySalesRolePermissions(role) {
  const rules = {
    "Sales Manager": [],
    "Sales Person": ["sales-orders", "sales-reports"],
    "Customer Officer": ["sales-opportunities", "sales-quotations", "sales-orders", "sales-targets"],
    "Order Officer": ["sales-leads", "sales-customers", "sales-targets"],
  };
  const lockedAreas = rules[role] || [];

  sideSalesButtons.forEach((button) => {
    setFinanceButtonLocked(button, lockedAreas.includes(`sales-${button.dataset.sideSalesTarget}`));
  });

  salesPanels.forEach((panel) => {
    const locked = lockedAreas.includes(panel.id);
    panel.querySelectorAll("button, input, select").forEach((control) => setFinanceButtonLocked(control, locked));
  });

  if (role !== "Sales Manager") {
    [exportSalesBackupButton, importSalesBackupButton].forEach((button) => {
      if (button) {
        setFinanceButtonLocked(button, true);
      }
    });
  }
}

function updateAnalyticsDateView() {
  updateAnalyticsDashboardFromPortalData();
  const selected = document.querySelector(".analytics-home-item.selected");
  if (selected) {
    showAnalyticsHomeDetail(selected.dataset.analyticsHomeTarget);
  }
}

function addAnalyticsActivity(message) {
  if (!analyticsActivityLog) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${message}`;
  analyticsActivityLog.prepend(item);

  while (analyticsActivityLog.children.length > 6) {
    analyticsActivityLog.lastElementChild.remove();
  }
}

function getPeriodMultiplier() {
  const period = analyticsDateFilter?.value || "month";
  if (period === "day") {
    return 0.17;
  }
  if (period === "year") {
    return 5.9;
  }
  return 1;
}

function getAnalyticsMetrics() {
  const finance = getFinanceTotals();
  const sales = getSalesTotals();
  const multiplier = getPeriodMultiplier();
  const earned = Math.round((sales.completedAmount || 142800) * multiplier);
  const spent = Math.round(((finance.moneyOut || 126430) + finance.overdueBillAmount) * multiplier);
  const profit = earned - spent;
  const activeCustomers = Math.max(sales.buyingCustomers.length, sales.rows.length);
  const salesGrowth = earned >= 150000 * multiplier ? 8 : 2;
  const profitPercent = earned > 0 ? Math.round((profit / earned) * 1000) / 10 : 0;

  return {
    earned,
    salesCount: sales.rows.length,
    spent,
    profit,
    profitPercent,
    activeCustomers,
    customerFollowUps: sales.openSales.length,
    buyingCustomers: sales.buyingCustomers.length,
    salesGrowth,
    moneyIn: finance.moneyIn,
    moneyOut: finance.moneyOut,
    expectedSales: Math.round(earned * 1.09),
    expectedSpending: Math.round(spent * 1.04),
    get expectedProfit() {
      return this.expectedSales - this.expectedSpending;
    },
    expectedCustomers: Math.round(activeCustomers * 1.08),
  };
}

function renderAnalyticsNotices(metrics = getAnalyticsMetrics()) {
  if (!analyticsNotices) {
    return;
  }

  const notices = [];
  if (metrics.salesGrowth < 5) {
    notices.push("Sales growth is low. Follow up open sales.");
  }
  if (metrics.spent > metrics.earned * 0.7) {
    notices.push("Spending is high compared with sales.");
  }
  if (metrics.customerFollowUps > 0) {
    notices.push(`${metrics.customerFollowUps} customer follow-up(s) need attention.`);
  }
  if (metrics.profitPercent < 30) {
    notices.push("Profit is dropping. Review spending and pricing.");
  }

  analyticsNotices.innerHTML = notices.length
    ? notices.map((notice) => `<div class="finance-notice">${notice}</div>`).join("")
    : '<div class="finance-notice">Business Check has no urgent warnings right now.</div>';
}

function updateComparisonCards(metrics = getAnalyticsMetrics()) {
  const cards = document.querySelectorAll("#analytics-dashboard .compare-grid article");
  const lastMonth = Math.round(metrics.earned * 0.98);
  const lastYear = Math.round(metrics.earned * 0.72);
  const values = [
    ["This month vs last month", `${formatUsd(metrics.earned)} / ${formatUsd(lastMonth)}`, `${formatUsd(metrics.earned - lastMonth)} difference`],
    ["This year vs last year", `${formatUsd(Math.round(metrics.earned * 5.9))} / ${formatUsd(lastYear * 5)}`, "Year comparison"],
    ["Sales vs spending", `${formatUsd(metrics.earned)} / ${formatUsd(metrics.spent)}`, `${formatUsd(metrics.profit)} profit`],
  ];

  cards.forEach((card, index) => {
    const [label, value, note] = values[index];
    card.querySelector("span").textContent = label;
    setDynamicText(card.querySelector("strong"), value);
    card.querySelector("small").textContent = note;
  });
}

function updateAnalyticsDashboardFromPortalData() {
  const metrics = getAnalyticsMetrics();

  setDynamicText(analyticsSalesGrowth, formatUsd(metrics.earned));
  setDynamicText(analyticsSpending, formatUsd(metrics.spent));
  analyticsActiveCustomers.textContent = String(metrics.activeCustomers);
  updateComparisonCards(metrics);
  renderAnalyticsNotices(metrics);
  updateCurrencyDisplay();
}

function getAnalyticsHomeDynamicDetail(target) {
  const metrics = getAnalyticsMetrics();
  const map = {
    "total-money-earned": {
      title: "Total Money Earned",
      text: "This updates from completed sales in the Sales portal.",
      label: "Money earned",
      tableRows: [["Completed sales money", formatUsd(metrics.earned), "Current period", "Live"]],
    },
    "total-sales": {
      title: "Total Sales",
      text: "This updates from all Sales Work records.",
      label: "Sales",
      tableRows: [["Sales records", String(metrics.salesCount), "Current period", "Live"]],
    },
    "total-money-spent": {
      title: "Total Money Spent",
      text: "This updates from supplier bills and finance payment data.",
      label: "Spending",
      tableRows: [["Spending", formatUsd(metrics.spent), "Current period", metrics.spent > metrics.earned * 0.7 ? "Watch" : "Okay"]],
    },
    "profit-percentage": {
      title: "Profit Percentage",
      text: "This compares earned money with spending.",
      label: "Profit",
      tableRows: [["Profit", formatUsd(metrics.profit), `${metrics.profitPercent}%`, metrics.profitPercent < 30 ? "Dropping" : "Good"]],
    },
    "active-customers": {
      title: "Active Customers",
      text: "This updates from customers and buying activity in Sales.",
      label: "Customers",
      tableRows: [["Active customers", String(metrics.activeCustomers), "Current period", "Live"]],
    },
    "sales-growth": {
      title: "Sales Growth",
      text: "This checks whether sales are growing fast enough.",
      label: "Sales growth",
      tableRows: [["Growth", `${metrics.salesGrowth}%`, "Current period", metrics.salesGrowth < 5 ? "Low" : "Good"]],
    },
    "money-in-and-out": {
      title: "Money In And Out",
      text: "This compares money received with money paid.",
      label: "Money movement",
      tableRows: [["Money in", formatUsd(metrics.moneyIn), "Finance", "Live"], ["Money out", formatUsd(metrics.moneyOut), "Finance", "Live"]],
    },
    "monthly-work-result": {
      title: "Monthly Work Result",
      text: "This summarizes sales, spending, customers, and profit.",
      label: "Monthly result",
      tableRows: [
        ["Sales", formatUsd(metrics.earned), "Current", "Live"],
        ["Spending", formatUsd(metrics.spent), "Current", metrics.spent > metrics.earned * 0.7 ? "Watch" : "Okay"],
        ["Customers", String(metrics.activeCustomers), "Current", "Live"],
        ["Profit", formatUsd(metrics.profit), `${metrics.profitPercent}%`, metrics.profitPercent < 30 ? "Watch" : "Good"],
      ],
    },
  };

  return map[target] ? { ...map[target], tableHeaders: ["Name", "Value", "Time", "Status"] } : null;
}

function showToast(message) {
  clearTimeout(toastTimer);
  financeToast.textContent = message;
  financeToast.hidden = false;
  toastTimer = setTimeout(() => {
    financeToast.hidden = true;
  }, 2600);
}

function addActivity(message) {
  if (!financeActivityLog) {
    return;
  }

  const item = document.createElement("li");
  item.textContent = `${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} - ${message}`;
  financeActivityLog.prepend(item);

  while (financeActivityLog.children.length > 6) {
    financeActivityLog.lastElementChild.remove();
  }
}

function openModal(title, content) {
  financeModalTitle.textContent = title;
  financeModalBody.innerHTML = content;
  financeModal.hidden = false;
}

function closeModal() {
  financeModal.hidden = true;
  financeModalBody.innerHTML = "";
  pendingPaymentRow = null;
  pendingPaymentType = "";
  salesRowBeingEdited = null;
}

function setLoginMessage(messageElement, message, type) {
  messageElement.textContent = message;
  messageElement.className = `login-message ${type}`;
}

function showAuthPanel(card, target) {
  card.querySelectorAll("[data-auth-tab]").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.authTab === target);
  });
  card.querySelector(".login-panel").classList.toggle("active", target === "login");
  card.querySelector(".register-panel").classList.toggle("active", target === "register");
}

function showWelcomeMessage(portal, fallbackUsername, loginRole) {
  const registrationKeys = {
    financial: "financialPortalRegisteredUser",
    sales: "salesPortalRegisteredUser",
    analytics: "analyticsPortalRegisteredUser",
  };
  const portalNames = {
    financial: "Money Office",
    sales: "Selling Office",
    analytics: "Business Check",
  };
  const registeredUser = JSON.parse(getTemporaryData(registrationKeys[portal]) || "{}");
  const name = registeredUser.fullName || fallbackUsername;
  const role = loginRole || registeredUser.role || "User";
  welcomeMessage.textContent = `Welcome, ${name} - ${role} (${portalNames[portal]})`;
}

function openInsideRegistration(portal) {
  const settings = {
    financial: {
      title: "Finish Finance Registration",
      formId: "insideRegistrationForm",
      staffPlaceholder: "FIN-001",
      departments: ["Finance", "Accounts", "Payroll", "Budgeting", "Audit"],
      levels: ["Can view records", "Can add records", "Can approve payments"],
      button: "Save finance registration",
    },
    sales: {
      title: "Finish Sales Registration",
      formId: "insideRegistrationForm",
      staffPlaceholder: "SAL-001",
      departments: ["Sales", "Customer Care", "Orders", "Price Quotes"],
      levels: ["Can view customers", "Can add sales", "Can approve orders"],
      button: "Save sales registration",
    },
    analytics: {
      title: "Finish Business Check Registration",
      formId: "insideRegistrationForm",
      staffPlaceholder: "BIZ-001",
      departments: ["Business Check", "Reports", "Data", "Planning"],
      levels: ["Can view numbers", "Can prepare reports", "Can download files"],
      button: "Save business check registration",
    },
  };
  const config = settings[portal];

  openModal(
    config.title,
    `
      <form class="payment-form" id="${config.formId}" data-inside-registration-portal="${portal}">
        <label>
          Staff ID
          <input name="staffId" placeholder="${config.staffPlaceholder}" required />
        </label>
        <label>
          Department
          <select name="department">
            ${config.departments.map((department) => `<option>${department}</option>`).join("")}
          </select>
        </label>
        <label>
          Approval level
          <select name="approvalLevel">
            ${config.levels.map((level) => `<option>${level}</option>`).join("")}
          </select>
        </label>
        <label>
          Work email
          <input name="workEmail" type="email" placeholder="name@company.com" required />
        </label>
        <button class="primary-button" type="submit">${config.button}</button>
      </form>
    `,
  );
}

function hasDuplicateRecord(table, value, editingRow) {
  return Array.from(table.tBodies[0].rows).some((row) => row !== editingRow && row.cells[0].textContent.trim() === value);
}

function getDueStatus(dueDate, status) {
  const normalizedStatus = status.trim();

  if (normalizedStatus === "Paid" || normalizedStatus === "Approved") {
    return normalizedStatus;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);

  if (due < today) {
    return "Overdue";
  }

  return normalizedStatus;
}

function openPaymentModal(row, type) {
  pendingPaymentRow = row;
  pendingPaymentType = type;
  openModal(
    "Payment Receipt",
    `
      <form class="payment-form" id="paymentReceiptForm">
        <label>
          Payment date
          <input name="paymentDate" type="date" required />
        </label>
        <label>
          Payment method
          <select name="paymentMethod">
            <option>Bank transfer</option>
            <option>Cash</option>
            <option>Card</option>
            <option>Cheque</option>
            <option>Mobile money</option>
          </select>
        </label>
        <label>
          Payment code
          <input name="paymentReference" placeholder="PAY-1005" required />
        </label>
        <label>
          Paid amount
          <input name="paidAmount" value="${row.cells[3].textContent.replace(/[$,]/g, "")}" type="number" min="1" required />
        </label>
        <button class="primary-button" type="submit">Save payment receipt</button>
      </form>
    `,
  );
}

function openRecordPreview(row, type) {
  const isInvoice = type === "invoice";
  const labels = isInvoice
    ? ["Customer bill number", "Customer", "Due date", "Amount", "Status"]
    : ["Bill number", "Supplier", "Due date", "Amount", "Status"];
  const tax = row.dataset.tax || "0";
  const paymentMethod = row.dataset.paymentMethod || "Not recorded";
  const paymentReference = row.dataset.paymentReference || "Not paid yet";
  const paymentDate = row.dataset.paymentDate || "Not paid yet";
  const details = labels
    .map((label, index) => `<article><span>${label}</span><strong>${row.cells[index].textContent.trim()}</strong></article>`)
    .join("");

  openModal(
    isInvoice ? "Customer Bill Preview" : "Supplier Bill Preview",
    `
      <div class="modal-detail-grid">
        ${details}
        <article><span>Tax amount</span><strong>$${Number(tax).toLocaleString()}</strong></article>
        <article><span>Payment method</span><strong>${paymentMethod}</strong></article>
        <article><span>Payment code</span><strong>${paymentReference}</strong></article>
        <article><span>Payment date</span><strong>${paymentDate}</strong></article>
      </div>
    `,
  );
}

function makeInvoiceActions() {
  return `
    <div class="row-actions">
      <button class="mini-button mark-paid-action" type="button">Mark paid</button>
      <button class="mini-button view-invoice-action" type="button">View</button>
      <button class="mini-button edit-invoice-action" type="button">Edit</button>
      <button class="mini-button delete-invoice-action" type="button">Delete</button>
    </div>
  `;
}

function makeBillActions() {
  return `
    <div class="row-actions">
      <button class="mini-button mark-bill-paid-action" type="button">Mark paid</button>
      <button class="mini-button view-bill-action" type="button">View</button>
      <button class="mini-button edit-bill-action" type="button">Edit</button>
      <button class="mini-button delete-bill-action" type="button">Delete</button>
    </div>
  `;
}

function resetInvoiceForm() {
  invoiceRowBeingEdited = null;
  customerInvoiceForm.reset();
  invoiceSubmitButton.textContent = "Add customer bill";
  cancelInvoiceEdit.hidden = true;
}

function setInvoiceRow(row, data) {
  row.cells[0].textContent = data.invoiceNumber;
  row.cells[1].textContent = data.customer;
  row.cells[2].textContent = data.dueDate;
  row.cells[3].textContent = `$${Number(data.amount).toLocaleString()}`;
  row.cells[4].innerHTML = `<span class="pill ${getStatusClass(data.status)}">${data.status}</span>`;
  row.dataset.amount = data.amount;
  row.dataset.tax = data.tax;
  row.dataset.paymentMethod = data.paymentMethod;
}

function resetBillForm() {
  billRowBeingEdited = null;
  supplierBillForm.reset();
  billSubmitButton.textContent = "Add bill";
  cancelBillEdit.hidden = true;
}

function setBillRow(row, data) {
  row.cells[0].textContent = data.billNumber;
  row.cells[1].textContent = data.supplier;
  row.cells[2].textContent = data.dueDate;
  row.cells[3].textContent = `$${Number(data.amount).toLocaleString()}`;
  row.cells[4].innerHTML = `<span class="pill ${getStatusClass(data.status)}">${data.status}</span>`;
  row.dataset.amount = data.amount;
  row.dataset.tax = data.tax;
  row.dataset.paymentMethod = data.paymentMethod;
}

function exportTableToCsv(table, filename) {
  const headerCells = Array.from(table.tHead?.rows[0]?.cells || []);
  const hasActionColumn = headerCells.at(-1)?.textContent.trim().toLowerCase() === "action";
  const rows = Array.from(table.rows)
    .filter((row) => !row.hidden)
    .map((row) =>
      Array.from(row.cells)
        .slice(0, hasActionColumn ? -1 : row.cells.length)
        .map((cell) => `"${cell.textContent.trim().replace(/"/g, '""')}"`)
        .join(","),
    )
    .join("\n");
  const blob = new Blob([rows], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function downloadTextFile(filename, content, type = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function textToRows(content) {
  return content
    .split("\n")
    .filter((line) => line.trim())
    .map((line) => {
      const [label, ...rest] = line.split(":");
      return [label.trim(), rest.join(":").trim()];
    });
}

function buildOfficeTable(rows) {
  return rows
    .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
    .join("");
}

function downloadWordDocument(filename, title, content) {
  const rows = textToRows(content);
  const html = `
    <html>
      <head><meta charset="utf-8"><title>${escapeHtml(title)}</title></head>
      <body>
        <h1>${escapeHtml(title)}</h1>
        <table border="1" cellspacing="0" cellpadding="8">${buildOfficeTable(rows)}</table>
      </body>
    </html>
  `;
  downloadTextFile(filename, html, "application/msword;charset=utf-8");
}

function downloadExcelWorkbook(filename, rows) {
  const html = `
    <html>
      <head><meta charset="utf-8"></head>
      <body>
        <table border="1">${buildOfficeTable(rows)}</table>
      </body>
    </html>
  `;
  downloadTextFile(filename, html, "application/vnd.ms-excel;charset=utf-8");
}

function openPdfPrintView(title, content) {
  const reportWindow = window.open("", "_blank", "width=900,height=700");
  if (!reportWindow) {
    showToast("Allow popups to open the PDF print view.");
    return;
  }

  reportWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <title>${escapeHtml(title)}</title>
        <style>
          body { font-family: Arial, sans-serif; color: #111827; padding: 32px; }
          h1 { color: #071b3a; }
          table { width: 100%; border-collapse: collapse; margin-top: 18px; }
          td, th { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
          tr:nth-child(even) { background: #f8fafc; }
        </style>
      </head>
      <body>
        <h1>${escapeHtml(title)}</h1>
        <table>${buildOfficeTable(textToRows(content))}</table>
        <script>window.onload = () => window.print();</script>
      </body>
    </html>
  `);
  reportWindow.document.close();
}

financeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showFinanceModule(button.dataset.financeTarget);
  });
});

menuButton.addEventListener("click", openSideMenu);
sideMenuClose.addEventListener("click", closeSideMenuPanel);
sideMenuBackdrop.addEventListener("click", closeSideMenuPanel);

sideFinanceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showFinanceModule(button.dataset.sideFinanceTarget);
    closeSideMenuPanel();
  });
});

sideSalesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSalesModule(button.dataset.sideSalesTarget);
    closeSideMenuPanel();
  });
});

sideAnalyticsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showAnalyticsModule(button.dataset.sideAnalyticsTarget);
    closeSideMenuPanel();
  });
});

salesButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSalesModule(button.dataset.salesTarget);
  });
});

addLeadButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showSalesModule("dashboard");
    possibleCustomerForm.scrollIntoView({ behavior: "smooth", block: "center" });
    possibleCustomerForm.elements.name.focus();
  });
});

analyticsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showAnalyticsModule(button.dataset.analyticsTarget);
  });
});

if (currencySelect) {
  populateCountryCurrencySelect();
  currencySelect.value = getSavedCurrencyValue();
  currencySelect.addEventListener("change", updateCurrencyDisplay);
  updateCurrencyDisplay();
}

salesHomeItems.forEach((item) => {
  item.addEventListener("click", () => {
    salesHomeItems.forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showSalesHomeDetail(item.dataset.salesDetailTarget);
  });
});

salesLeadItems.forEach((item) => {
  item.addEventListener("click", () => {
    salesLeadItems.forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showSalesLeadDetail(item.dataset.salesLeadTarget);
  });
});

salesPanelItems.forEach((item) => {
  item.addEventListener("click", () => {
    const panel = item.closest(".sales-module-panel");
    panel.querySelectorAll(".submodule-row button").forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showSalesPanelDetail(item);
  });
});

analyticsHomeItems.forEach((item) => {
  item.addEventListener("click", () => {
    analyticsHomeItems.forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showAnalyticsHomeDetail(item.dataset.analyticsHomeTarget);
  });
});

analyticsPanelItems.forEach((item) => {
  item.addEventListener("click", () => {
    const panel = item.closest(".analytics-module-panel");
    panel.querySelectorAll(".submodule-row button").forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showAnalyticsPanelDetail(item);
  });
});

salesPeriodType.addEventListener("change", updateSalesTotalOptions);
salesPeriodValue.addEventListener("change", updateSalesTotalBreakdown);

dashboardItems.forEach((item) => {
  item.addEventListener("click", () => {
    dashboardItems.forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showFinanceDashboardDetail(item.dataset.dashboardTarget);
  });
});

ledgerItems.forEach((item) => {
  item.addEventListener("click", () => {
    ledgerItems.forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showLedgerDetail(item.dataset.ledgerTarget);
  });
});

financeDetailItems.forEach((item) => {
  item.addEventListener("click", () => {
    const panel = item.closest(".finance-module-panel");
    panel.querySelectorAll(".submodule-row button").forEach((button) => button.classList.remove("selected"));
    item.classList.add("selected");
    showFinanceSubmoduleDetail(item);
  });
});

const newCustomerBillButton = findFinanceButtonByText("New customer bill");
if (newCustomerBillButton) {
  newCustomerBillButton.addEventListener("click", openCustomerBillForm);
}

customerInvoiceForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateFinanceRecordForm(customerInvoiceForm, "invoiceNumber", customerInvoicesTable, invoiceRowBeingEdited)) {
    return;
  }

  const data = new FormData(customerInvoiceForm);
  const status = data.get("status");
  const invoiceData = {
    invoiceNumber: data.get("invoiceNumber"),
    customer: data.get("customer"),
    dueDate: data.get("dueDate"),
    amount: data.get("amount"),
    status: getDueStatus(data.get("dueDate"), status),
    tax: data.get("tax") || "0",
    paymentMethod: data.get("paymentMethod"),
  };

  if (invoiceRowBeingEdited) {
    setInvoiceRow(invoiceRowBeingEdited, invoiceData);
    showToast("Customer bill updated successfully.");
    addActivity(`Customer bill ${invoiceData.invoiceNumber} updated.`);
  } else {
    const row = addTableRow(customerInvoicesTable, [
      invoiceData.invoiceNumber,
      invoiceData.customer,
      invoiceData.dueDate,
      `$${Number(invoiceData.amount).toLocaleString()}`,
      `<span class="pill ${getStatusClass(invoiceData.status)}">${invoiceData.status}</span>`,
      makeInvoiceActions(),
    ]);
    row.dataset.amount = invoiceData.amount;
    row.dataset.tax = invoiceData.tax;
    row.dataset.paymentMethod = invoiceData.paymentMethod;
    showToast("Customer bill added successfully.");
    addActivity(`Customer bill ${invoiceData.invoiceNumber} added.`);
  }

  resetInvoiceForm();
  filterInvoices();
  updateFinanceDashboardTotals();
});

cancelInvoiceEdit.addEventListener("click", resetInvoiceForm);

customerInvoicesTable.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const row = button.closest("tr");

  if (button.classList.contains("mark-paid-action")) {
    if (row.cells[4].textContent.trim() === "Paid") {
      showToast("This customer bill is already paid.");
      return;
    }
    openPaymentModal(row, "invoice");
  }

  if (button.classList.contains("view-invoice-action")) {
    openRecordPreview(row, "invoice");
  }

  if (button.classList.contains("edit-invoice-action")) {
    invoiceRowBeingEdited = row;
    customerInvoiceForm.elements.invoiceNumber.value = row.cells[0].textContent.trim();
    customerInvoiceForm.elements.customer.value = row.cells[1].textContent.trim();
    customerInvoiceForm.elements.dueDate.value = row.cells[2].textContent.trim();
    customerInvoiceForm.elements.amount.value = row.cells[3].textContent.replace(/[$,]/g, "").trim();
    customerInvoiceForm.elements.status.value = row.cells[4].textContent.trim();
    customerInvoiceForm.elements.tax.value = row.dataset.tax || "0";
    customerInvoiceForm.elements.paymentMethod.value = row.dataset.paymentMethod || "Bank transfer";
    invoiceSubmitButton.textContent = "Update customer bill";
    cancelInvoiceEdit.hidden = false;
    showToast("Customer bill ready to edit.");
    customerInvoiceForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (button.classList.contains("delete-invoice-action")) {
    if (!window.confirm("Delete this customer bill?")) {
      return;
    }

    if (invoiceRowBeingEdited === row) {
      resetInvoiceForm();
    }

    row.remove();
    showToast("Customer bill deleted.");
    addActivity(`Customer bill ${row.cells[0].textContent.trim()} deleted.`);
    filterInvoices();
    updateFinanceDashboardTotals();
  }
});

supplierBillForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateFinanceRecordForm(supplierBillForm, "billNumber", supplierBillsTable, billRowBeingEdited)) {
    return;
  }

  const data = new FormData(supplierBillForm);
  const status = data.get("status");
  const billData = {
    billNumber: data.get("billNumber"),
    supplier: data.get("supplier"),
    dueDate: data.get("dueDate"),
    amount: data.get("amount"),
    status: getDueStatus(data.get("dueDate"), status),
    tax: data.get("tax") || "0",
    paymentMethod: data.get("paymentMethod"),
  };

  if (billRowBeingEdited) {
    setBillRow(billRowBeingEdited, billData);
    showToast("Supplier bill updated successfully.");
    addActivity(`Supplier bill ${billData.billNumber} updated.`);
  } else {
    const row = addTableRow(supplierBillsTable, [
      billData.billNumber,
      billData.supplier,
      billData.dueDate,
      `$${Number(billData.amount).toLocaleString()}`,
      `<span class="pill ${getStatusClass(billData.status)}">${billData.status}</span>`,
      makeBillActions(),
    ]);
    row.dataset.amount = billData.amount;
    row.dataset.tax = billData.tax;
    row.dataset.paymentMethod = billData.paymentMethod;
    showToast("Supplier bill added successfully.");
    addActivity(`Supplier bill ${billData.billNumber} added.`);
  }

  resetBillForm();
  filterBills();
  updateFinanceDashboardTotals();
});

invoiceSearch.addEventListener("input", filterInvoices);
invoiceStatusFilter.addEventListener("change", filterInvoices);
billSearch.addEventListener("input", filterBills);
billStatusFilter.addEventListener("change", filterBills);
moneyRecordsSearch.addEventListener("input", filterMoneyRecords);
salesTableSearch.addEventListener("input", filterSalesWork);
salesStatusFilter.addEventListener("change", filterSalesWork);
analyticsDateFilter.addEventListener("change", updateAnalyticsDateView);
cancelBillEdit.addEventListener("click", resetBillForm);

handleSalesFormSubmit(possibleCustomerForm, "Possible customer", "New");
handleSalesFormSubmit(customerForm, "Customer", "Bought");
handleSalesFormSubmit(priceQuoteForm, "Price quote", "Waiting");
handleSalesFormSubmit(salesOrderForm, "Order", "Bought");

salesWorkTable.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const row = button.closest("tr");

  if (button.classList.contains("view-sales-action")) {
    openSalesRecordPreview(row);
  }

  if (button.classList.contains("edit-sales-action")) {
    openSalesRecordEdit(row);
  }

  if (button.classList.contains("convert-sales-action")) {
    convertSalesRecord(row);
  }

  if (button.classList.contains("delete-sales-action")) {
    if (!window.confirm("Delete this sales record?")) {
      return;
    }

    addSalesActivity(`${row.cells[0].textContent.trim()} ${row.cells[1].textContent.trim()} deleted.`);
    row.remove();
    filterSalesWork();
    updateSalesDashboardTotals();
    renderSalesNotices();
    showToast("Sales record deleted.");
  }
});

supplierBillsTable.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const row = button.closest("tr");

  if (button.classList.contains("mark-bill-paid-action")) {
    if (row.cells[4].textContent.trim() === "Paid") {
      showToast("This supplier bill is already paid.");
      return;
    }
    openPaymentModal(row, "bill");
  }

  if (button.classList.contains("view-bill-action")) {
    openRecordPreview(row, "bill");
  }

  if (button.classList.contains("edit-bill-action")) {
    billRowBeingEdited = row;
    supplierBillForm.elements.billNumber.value = row.cells[0].textContent.trim();
    supplierBillForm.elements.supplier.value = row.cells[1].textContent.trim();
    supplierBillForm.elements.dueDate.value = row.cells[2].textContent.trim();
    supplierBillForm.elements.amount.value = row.cells[3].textContent.replace(/[$,]/g, "").trim();
    supplierBillForm.elements.status.value = row.cells[4].textContent.trim();
    supplierBillForm.elements.tax.value = row.dataset.tax || "0";
    supplierBillForm.elements.paymentMethod.value = row.dataset.paymentMethod || "Bank transfer";
    billSubmitButton.textContent = "Update bill";
    cancelBillEdit.hidden = false;
    showToast("Supplier bill ready to edit.");
    supplierBillForm.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  if (button.classList.contains("delete-bill-action")) {
    if (!window.confirm("Delete this supplier bill?")) {
      return;
    }

    if (billRowBeingEdited === row) {
      resetBillForm();
    }

    row.remove();
    showToast("Supplier bill deleted.");
    addActivity(`Supplier bill ${row.cells[0].textContent.trim()} deleted.`);
    filterBills();
    updateFinanceDashboardTotals();
  }
});

exportInvoicesButton.addEventListener("click", () => {
  exportTableToCsv(customerInvoicesTable, "customer-bills.csv");
  showToast("Customer bills downloaded.");
});

exportBillsButton.addEventListener("click", () => {
  exportTableToCsv(supplierBillsTable, "supplier-bills.csv");
  showToast("Supplier bills downloaded.");
});

printInvoicesButton.addEventListener("click", () => {
  showToast("Use the browser print dialog to print customer bills.");
  window.print();
});

printBillsButton.addEventListener("click", () => {
  showToast("Use the browser print dialog to print supplier bills.");
  window.print();
});

downloadPayrollButton.addEventListener("click", () => {
  const rows = Array.from(payrollTable.rows).map((row) => Array.from(row.cells).map((cell) => cell.textContent.trim()));
  downloadExcelWorkbook("payroll-table.xls", rows);
  showToast("Payroll Excel workbook downloaded.");
});

printPayrollButton.addEventListener("click", () => {
  showToast("Use the browser print dialog to print payroll.");
  window.print();
});

downloadBudgetButton.addEventListener("click", () => {
  downloadExcelWorkbook("budget-table.xls", [["Team", "Budget used"]]);
  showToast("Budget Excel workbook downloaded.");
});

printBudgetButton.addEventListener("click", () => {
  showToast("Use the browser print dialog to print budgets.");
  window.print();
});

analyticsReportButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const reportName = button.textContent.trim().replace(/^Download\s+/i, "");
    currentAnalyticsReportTitle = reportName;
    downloadWordDocument(`${reportName.toLowerCase().replace(/\s+/g, "-")}.doc`, reportName, buildAnalyticsReportText());
    showToast(`${reportName} Word document downloaded.`);
    addAnalyticsActivity(`${reportName} Word document downloaded.`);
  });
});

const financeReportPanel = document.getElementById("finance-reports");
if (financeReportPanel) {
  const financeReportButtons = Array.from(financeReportPanel.querySelectorAll(".report-actions button"));

  financeReportButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.textContent.trim();

      if (action === "Download PDF") {
        openPdfPrintView(currentFinanceReportTitle, buildFinanceReportText());
        showToast(`${currentFinanceReportTitle} PDF print view opened.`);
      }

      if (action === "Download Excel") {
        const report = financeSubmoduleDetails["finance-reports"][currentFinanceReportTitle] || financeSubmoduleDetails["finance-reports"]["Profit and loss summary"];
        downloadExcelWorkbook(`${currentFinanceReportTitle.toLowerCase().replace(/\s+/g, "-")}.xls`, [["Item", "Value"], ...(report.items || [])]);
        showToast(`${currentFinanceReportTitle} Excel workbook downloaded.`);
      }

      if (action === "Download Word") {
        downloadWordDocument(`${currentFinanceReportTitle.toLowerCase().replace(/\s+/g, "-")}.doc`, currentFinanceReportTitle, buildFinanceReportText());
        showToast(`${currentFinanceReportTitle} Word document downloaded.`);
      }

      if (action === "Print summary") {
        showToast("Use the browser print dialog to print the finance summary.");
        window.print();
      }

      if (action === "Plan monthly summary") {
        openModal(
          "Plan Monthly Summary",
          `
            <form class="payment-form" id="monthlySummaryPlanForm">
              <label>
                Summary name
                <input name="summaryName" value="${currentFinanceReportTitle}" required />
              </label>
              <label>
                Month
                <input name="summaryMonth" type="month" value="2026-05" required />
              </label>
              <label>
                Reviewer
                <input name="reviewer" placeholder="Finance Manager" required />
              </label>
              <button class="primary-button" type="submit">Save summary plan</button>
            </form>
          `,
        );
      }
    });
  });
}

if (exportFinanceBackupButton) {
  exportFinanceBackupButton.addEventListener("click", exportFinanceBackup);
}

if (importFinanceBackupButton && financeBackupInput) {
  importFinanceBackupButton.addEventListener("click", () => financeBackupInput.click());
  financeBackupInput.addEventListener("change", () => {
    const [file] = financeBackupInput.files;

    if (file) {
      importFinanceBackup(file);
      financeBackupInput.value = "";
    }
  });
}

if (exportSalesBackupButton) {
  exportSalesBackupButton.addEventListener("click", exportSalesBackup);
}

if (importSalesBackupButton && salesBackupInput) {
  importSalesBackupButton.addEventListener("click", () => salesBackupInput.click());
  salesBackupInput.addEventListener("change", () => {
    const [file] = salesBackupInput.files;

    if (file) {
      importSalesBackup(file);
      salesBackupInput.value = "";
    }
  });
}

if (downloadSalesSummaryButton) {
  downloadSalesSummaryButton.addEventListener("click", () => {
    downloadWordDocument(`${currentSalesReportTitle.toLowerCase().replace(/\s+/g, "-")}.doc`, currentSalesReportTitle, buildSalesReportText());
    showToast(`${currentSalesReportTitle} Word document downloaded.`);
    addSalesActivity(`${currentSalesReportTitle} Word document downloaded.`);
  });
}

if (printSalesSummaryButton) {
  printSalesSummaryButton.addEventListener("click", () => {
    showToast("Use the browser print dialog to print the sales summary.");
    window.print();
  });
}

const buildAnalyticsHomeButton = Array.from(document.querySelectorAll("#analytics .primary-button")).find(
  (button) => button.textContent.trim() === "Build home page",
);
if (buildAnalyticsHomeButton) {
  buildAnalyticsHomeButton.addEventListener("click", () => {
    updateAnalyticsDashboardFromPortalData();
    showAnalyticsModule("dashboard");
    showToast("Business Check home updated from Finance and Sales.");
    addAnalyticsActivity("Business Check home updated.");
  });
}

if (downloadAnalyticsExcelButton) {
  downloadAnalyticsExcelButton.addEventListener("click", () => downloadAnalyticsFile("excel"));
}

if (downloadAnalyticsPdfButton) {
  downloadAnalyticsPdfButton.addEventListener("click", () => downloadAnalyticsFile("pdf"));
}

if (downloadAnalyticsCsvButton) {
  downloadAnalyticsCsvButton.addEventListener("click", () => downloadAnalyticsFile("csv"));
}

if (downloadAnalyticsWordButton) {
  downloadAnalyticsWordButton.addEventListener("click", () => {
    downloadWordDocument(`${currentAnalyticsReportTitle.toLowerCase().replace(/\s+/g, "-")}.doc`, currentAnalyticsReportTitle, buildAnalyticsReportText());
    showToast(`${currentAnalyticsReportTitle} Word document downloaded.`);
    addAnalyticsActivity(`${currentAnalyticsReportTitle} Word document downloaded.`);
  });
}

if (exportAnalyticsBackupButton) {
  exportAnalyticsBackupButton.addEventListener("click", exportAnalyticsBackup);
}

if (importAnalyticsBackupButton && analyticsBackupInput) {
  importAnalyticsBackupButton.addEventListener("click", () => analyticsBackupInput.click());
  analyticsBackupInput.addEventListener("change", () => {
    const [file] = analyticsBackupInput.files;

    if (file) {
      importAnalyticsBackup(file);
      analyticsBackupInput.value = "";
    }
  });
}

document.querySelectorAll("#analytics-data-export .submodule-row button").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.textContent.trim();
    currentAnalyticsReportTitle = action;

    if (action === "Download Excel") {
      downloadAnalyticsFile("excel");
    } else if (action === "Download PDF") {
      downloadAnalyticsFile("pdf");
    } else if (action === "Download CSV") {
      downloadAnalyticsFile("csv");
    } else if (action === "Planned downloads") {
      setTemporaryData("analyticsPlannedDownload", JSON.stringify({ report: currentAnalyticsReportTitle, period: analyticsDateFilter?.value || "month" }));
      showToast("Analytics download plan saved.");
      addAnalyticsActivity("Analytics download plan saved.");
    } else {
      downloadAnalyticsFile("csv");
    }
  });
});

closeFinanceModal.addEventListener("click", closeModal);
financeModal.addEventListener("click", (event) => {
  if (event.target === financeModal) {
    closeModal();
  }
});

financeModalBody.addEventListener("submit", (event) => {
  if (event.target.id === "insideRegistrationForm") {
    event.preventDefault();
    const data = new FormData(event.target);
    const portal = event.target.dataset.insideRegistrationPortal;
    setTemporaryData(
      `${portal}InsideRegistrationDone`,
      JSON.stringify({
        staffId: data.get("staffId"),
        department: data.get("department"),
        approvalLevel: data.get("approvalLevel"),
        workEmail: data.get("workEmail"),
      }),
    );
    showToast("Portal registration saved.");
    closeModal();
    return;
  }

  if (event.target.id === "salesRecordEditForm") {
    event.preventDefault();
    const data = new FormData(event.target);

    if (salesRowBeingEdited) {
      setSalesRow(salesRowBeingEdited, {
        type: data.get("type"),
        name: data.get("name"),
        phone: data.get("phone"),
        status: data.get("status"),
        followUpDate: data.get("followUpDate"),
        nextAction: data.get("nextAction"),
        amount: data.get("amount") || "0",
        notes: data.get("notes"),
      });
      addSalesActivity(`${data.get("type")} ${data.get("name")} updated.`);
      filterSalesWork();
      updateSalesDashboardTotals();
      renderSalesNotices();
      showToast("Sales record updated.");
    }

    closeModal();
    salesRowBeingEdited = null;
    return;
  }

  if (event.target.id === "monthlySummaryPlanForm") {
    event.preventDefault();
    const data = new FormData(event.target);
    setTemporaryData(
      "financeMonthlySummaryPlan",
      JSON.stringify({
        summaryName: data.get("summaryName"),
        summaryMonth: data.get("summaryMonth"),
        reviewer: data.get("reviewer"),
      }),
    );
    showToast("Monthly summary plan saved.");
    addActivity(`${data.get("summaryName")} planned for ${data.get("summaryMonth")}.`);
    closeModal();
    return;
  }

  if (event.target.id !== "paymentReceiptForm") {
    return;
  }

  event.preventDefault();
  const data = new FormData(event.target);
  pendingPaymentRow.cells[4].innerHTML = '<span class="pill paid">Paid</span>';
  pendingPaymentRow.dataset.paymentDate = data.get("paymentDate");
  pendingPaymentRow.dataset.paymentMethod = data.get("paymentMethod");
  pendingPaymentRow.dataset.paymentReference = data.get("paymentReference");
  pendingPaymentRow.dataset.paidAmount = data.get("paidAmount");

  if (pendingPaymentType === "invoice") {
    filterInvoices();
    addActivity(`Customer bill ${pendingPaymentRow.cells[0].textContent.trim()} marked as paid.`);
    showToast("Customer bill payment receipt saved.");
  }

  if (pendingPaymentType === "bill") {
    filterBills();
    addActivity(`Supplier bill ${pendingPaymentRow.cells[0].textContent.trim()} marked as paid.`);
    showToast("Supplier bill payment receipt saved.");
  }

  updateFinanceDashboardTotals();
  closeModal();
});

approvalQueue.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) {
    return;
  }

  const item = button.closest("article");

  if (button.classList.contains("approve-action")) {
    item.querySelector("small").textContent = "Approved";
    item.style.borderColor = "#b8d4d7";
    showToast("Approval completed.");
    addActivity(`${item.querySelector("span").textContent.trim()} approved.`);
    updateFinanceDashboardTotals();
  }

  if (button.classList.contains("reject-action")) {
    const reason = window.prompt("Enter rejection reason:");
    item.querySelector("small").textContent = reason ? `Rejected: ${reason}` : "Rejected";
    item.style.borderColor = "#f0c2c2";
    showToast("Request rejected.");
    addActivity(`${item.querySelector("span").textContent.trim()} rejected.`);
    updateFinanceDashboardTotals();
  }
});

Array.from(customerInvoicesTable.tBodies[0].rows).forEach((row) => {
  row.dataset.amount = row.dataset.amount || amountFromText(row.cells[3].textContent);
  row.dataset.tax = row.dataset.tax || "0";
  row.dataset.paymentMethod = row.dataset.paymentMethod || "Bank transfer";
});

Array.from(supplierBillsTable.tBodies[0].rows).forEach((row) => {
  row.dataset.amount = row.dataset.amount || amountFromText(row.cells[3].textContent);
  row.dataset.tax = row.dataset.tax || "0";
  row.dataset.paymentMethod = row.dataset.paymentMethod || "Bank transfer";
});

getSalesRows().forEach((row) => {
  if (row.cells.length < 6) {
    row.insertCell().innerHTML = makeSalesActions(row.cells[0].textContent.trim());
  }

  row.dataset.phone = row.dataset.phone || "Not recorded";
  row.dataset.amount = row.dataset.amount || (row.cells[0].textContent.trim() === "Order" ? "12600" : row.cells[0].textContent.trim() === "Price quote" ? "9800" : "0");
  row.dataset.notes = row.dataset.notes || row.cells[4].textContent.trim();
  row.dataset.purchaseHistory = row.dataset.purchaseHistory || (row.cells[2].textContent.trim() === "Bought" ? `${row.cells[1].textContent.trim()} has buying activity.` : "No purchase yet.");
});

updateSalesDashboardTotals();
renderSalesNotices();
updateAnalyticsDashboardFromPortalData();

loginTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".login-card");
    showAuthPanel(card, button.dataset.authTab);
  });
});

[
  [financeLoginForm, "financeRegisterPassword", "financeRegisterConfirmPassword"],
  [salesLoginForm, "salesRegisterPassword", "salesRegisterConfirmPassword"],
  [analyticsLoginForm, "analyticsRegisterPassword", "analyticsRegisterConfirmPassword"],
].forEach(([form, passwordField, confirmField]) => {
  form.elements[passwordField].addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      form.elements[confirmField].focus();
    }
  });
});

function registerPortalUser({
  form,
  nameField,
  roleField,
  phoneField,
  emailField,
  passwordField,
  confirmPasswordField,
  storageKey,
  messageElement,
  portalName,
}) {
  const fullName = form.elements[nameField].value.trim();
  const role = form.elements[roleField].value;
  const phone = form.elements[phoneField].value.trim();
  const email = form.elements[emailField].value.trim();
  const password = form.elements[passwordField].value.trim();
  const confirmPassword = form.elements[confirmPasswordField].value.trim();

  if (!fullName || !phone || !email || !password || !confirmPassword) {
    setLoginMessage(messageElement, "Enter full name, phone, email, password, and confirm password.", "error");
    return;
  }

  if (password !== confirmPassword) {
    setLoginMessage(messageElement, "Password and confirm password must match.", "error");
    return;
  }

  setTemporaryData(
    storageKey,
    JSON.stringify({
      fullName,
      role,
      phone,
      email,
      password,
    }),
  );
  setLoginMessage(messageElement, `${fullName} registered for ${portalName} as ${role}. You can now log in.`, "success");
  form.elements.username.value = email || fullName;
  form.elements.password.value = "";
  showAuthPanel(form, "login");
}

financeRegisterButton.addEventListener("click", () => {
  registerPortalUser({
    form: financeLoginForm,
    nameField: "financeRegisterName",
    roleField: "financeRegisterRole",
    phoneField: "financeRegisterPhone",
    emailField: "financeRegisterEmail",
    passwordField: "financeRegisterPassword",
    confirmPasswordField: "financeRegisterConfirmPassword",
    storageKey: "financialPortalRegisteredUser",
    messageElement: financeLoginMessage,
    portalName: "Money Office",
  });
});

salesRegisterButton.addEventListener("click", () => {
  registerPortalUser({
    form: salesLoginForm,
    nameField: "salesRegisterName",
    roleField: "salesRegisterRole",
    phoneField: "salesRegisterPhone",
    emailField: "salesRegisterEmail",
    passwordField: "salesRegisterPassword",
    confirmPasswordField: "salesRegisterConfirmPassword",
    storageKey: "salesPortalRegisteredUser",
    messageElement: salesLoginMessage,
    portalName: "Selling Office",
  });
});

analyticsRegisterButton.addEventListener("click", () => {
  registerPortalUser({
    form: analyticsLoginForm,
    nameField: "analyticsRegisterName",
    roleField: "analyticsRegisterRole",
    phoneField: "analyticsRegisterPhone",
    emailField: "analyticsRegisterEmail",
    passwordField: "analyticsRegisterPassword",
    confirmPasswordField: "analyticsRegisterConfirmPassword",
    storageKey: "analyticsPortalRegisteredUser",
    messageElement: analyticsLoginMessage,
    portalName: "Business Check",
  });
});

loginForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.elements.username.value.trim();
    const password = form.elements.password.value.trim();
    const loginRole = form.elements.loginRole?.value || "";
    const portal = form.dataset.loginTarget;

    if (!username || !password) {
      return;
    }

    const registrationMessages = {
      financial: financeLoginMessage,
      sales: salesLoginMessage,
      analytics: analyticsLoginMessage,
    };
    const registrationKeys = {
      financial: "financialPortalRegisteredUser",
      sales: "salesPortalRegisteredUser",
      analytics: "analyticsPortalRegisteredUser",
    };

    if (!getTemporaryData(registrationKeys[portal])) {
      setLoginMessage(registrationMessages[portal], "Please register before logging in.", "error");
      return;
    }

    const registeredUser = JSON.parse(getTemporaryData(registrationKeys[portal]) || "{}");
    const savedName = (registeredUser.fullName || "").trim().toLowerCase();
    const savedEmail = (registeredUser.email || "").trim().toLowerCase();
    const typedUsername = username.toLowerCase();

    if (typedUsername !== savedName && typedUsername !== savedEmail) {
      setLoginMessage(registrationMessages[portal], "Use the same full name or email you used when registering.", "error");
      return;
    }

    if (password !== registeredUser.password) {
      setLoginMessage(registrationMessages[portal], "Wrong password. Enter the password you used when registering.", "error");
      return;
    }

    currentUsername = username;
    setTemporaryData(`${portal}LoginRole`, loginRole);
    setTemporaryData(`${portal}LoginName`, username);
    showWelcomeMessage(portal, username, loginRole);
    if (portalPages[portal]) {
      window.location.href = portalPages[portal];
      return;
    }
    document.body.classList.remove("auth-mode");
    showSection(portal);
    if (portal === "financial") {
      showFinanceModule("dashboard");
      applyFinanceRolePermissions(loginRole || registeredUser.role);
      updateFinanceDashboardTotals();
      if (!getTemporaryData("financialInsideRegistrationDone")) {
        openInsideRegistration("financial");
      }
    }
    if (portal === "sales") {
      showSalesModule("dashboard");
      applySalesRolePermissions(loginRole || registeredUser.role);
      updateSalesDashboardTotals();
      renderSalesNotices();
      if (!getTemporaryData("salesInsideRegistrationDone")) {
        openInsideRegistration("sales");
      }
    }
    if (portal === "analytics") {
      showAnalyticsModule("dashboard");
      applyAnalyticsRolePermissions(loginRole || registeredUser.role);
      updateAnalyticsDashboardFromPortalData();
      if (!getTemporaryData("analyticsInsideRegistrationDone")) {
        openInsideRegistration("analytics");
      }
    }
    closeSideMenuPanel();
    window.scrollTo({ top: 0, behavior: "auto" });
  });
});

logoutButton.addEventListener("click", () => {
  if (document.body.dataset.pagePortal) {
    window.location.href = "index.html";
    return;
  }

  document.body.classList.add("auth-mode");
  welcomeMessage.textContent = "";
  loginForms.forEach((form) => form.reset());
  showSection("overview");
  closeSideMenuPanel();
});

function openPortalPage() {
  const portal = document.body.dataset.pagePortal;

  if (!portal) {
    return;
  }

  const moduleStarters = {
    financial: showFinanceModule,
    sales: showSalesModule,
    analytics: showAnalyticsModule,
  };
  const loginName = getTemporaryData(`${portal}LoginName`) || "";
  const loginRole = getTemporaryData(`${portal}LoginRole`) || "";

  document.body.classList.remove("auth-mode");
  showSection(portal);
  moduleStarters[portal]?.("dashboard");
  showWelcomeMessage(portal, loginName, loginRole);
  if (portal === "financial") {
    applyFinanceRolePermissions(loginRole);
    updateFinanceDashboardTotals();
  }
  if (portal === "sales") {
    applySalesRolePermissions(loginRole);
    updateSalesDashboardTotals();
    renderSalesNotices();
  }
  if (portal === "analytics") {
    applyAnalyticsRolePermissions(loginRole);
    updateAnalyticsDashboardFromPortalData();
  }
  if (!getTemporaryData(`${portal}InsideRegistrationDone`)) {
    openInsideRegistration(portal);
  }
  closeSideMenuPanel();
}

openPortalPage();
