// Lorenz Plumbing Solutions — Billboard design interactions

(function () {
  "use strict";

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
        status.textContent = "FILL ALL FIELDS";
        status.className = "bb-form-status err";
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
      status.textContent = "OPENING EMAIL…";
      status.className = "bb-form-status ok";
      form.reset();
    });
  }
})();
