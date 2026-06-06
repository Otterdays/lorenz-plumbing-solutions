// Lorenz Plumbing Solutions — Apple design interactions

(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("globalNavLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

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
        status.textContent = "Please fill in name, phone, and message.";
        status.className = "form-status caption err";
        return;
      }

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
      status.textContent = "Opening your email app…";
      status.className = "form-status caption ok";
      form.reset();
    });
  }
})();
