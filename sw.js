const CACHE_NAME = "enterprise-erp-v32";
const APP_SHELL = [
  "./",
  "./index.html",
  "./home/home.css",
  "./home/home.js",
  "./platform/enterprise-core.js",
  "./platform/enterprise-platform.css",
  "./platform/enterprise-platform.js",
  "./platform/enterprise-store.js",
  "./platform/kv-client.js",
  "./platform/pwa.js",
  "./platform/ui-menu.js",
  "./auth/login.html",
  "./auth/auth.js",
  "./director/Director.html",
  "./director/director-accounts.html",
  "./director/director.css",
  "./director/director.js",
  "./organization/organization-register.html",
  "./organization/organization-login.html",
  "./organization/organization-agreement.html",
  "./organization/portal-selection.html",
  "./organization/organization-workspace.html",
  "./organization/organization-module.html",
  "./organization/organization-admin.html",
  "./organization/management.css",
  "./organization/onboarding.css",
  "./organization/portal.css",
  "./teamleader/TeamLeader.html",
  "./teamleader/teamleader.css",
  "./staff/staff-portal.html",
  "./branches/branch-dashboard.html",
  "./branches/branch-directory.html",
  "./hr/hr-dashboard.html",
  "./departments/departments-hub.html",
  "./reports/reports-hub.html",
  "./images/enterprise-logo.png",
  "./images/enterprise-icon-192.png",
  "./images/enterprise-icon-512.png",
  "./images/bytewave-logo.jpg",
  "./images/bytewave-icon-192.png",
  "./images/bytewave-icon-512.png",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);
  if (url.pathname.startsWith("/api/")) return;
  if (req.method !== "GET") return;
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(() => null);
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match("./index.html")))
  );
});
