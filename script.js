// Lorenz Plumbing Solutions — minimal interactions

(function () {
  "use strict";

  // year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // mobile nav drawer
  var toggle = document.getElementById("navToggle");
  var drawer = document.getElementById("navDrawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", function () {
      var open = drawer.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
    });
    drawer.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        drawer.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        drawer.setAttribute("aria-hidden", "true");
      }
    });
  }

  // contact form (no backend — client validation + mailto fallback)
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      if (!name || !phone || !message) {
        status.textContent = "FILL NAME, PHONE, AND MESSAGE.";
        status.className = "form-status caption err";
        return;
      }

      // NOTE: no server yet. Open user's mail client as fallback.
      var email = (data.get("email") || "").toString().trim();
      var body =
        "Name: " + name +
        "\nPhone: " + phone +
        (email ? "\nEmail: " + email : "") +
        "\n\n" + message;
      var href =
        "mailto:info@lorenzplumbing.com" +
        "?subject=" + encodeURIComponent("Service request — " + name) +
        "&body=" + encodeURIComponent(body);

      window.location.href = href;
      status.textContent = "OPENING YOUR EMAIL APP…";
      status.className = "form-status caption ok";
      form.reset();
    });
  }
})();
