// Shared design theme cycler — works on GitHub Pages project sites (/repo-name/)

(function () {
  "use strict";

  var DESIGNS = [
    { id: "bugatti", file: "index.html", label: "Bugatti" },
    { id: "apple", file: "apple.html", label: "Apple" },
    { id: "billboard", file: "billboard.html", label: "Billboard" },
    { id: "stripe", file: "stripe.html", label: "Stripe" },
  ];

  /** Base path for project-site hosting, e.g. /lorenz-plumbing-solutions/ */
  function getBasePath() {
    var path = window.location.pathname;
    var parts = path.split("/").filter(Boolean);

    if (parts.length === 0) return "./";

    var last = parts[parts.length - 1];
    if (/\.html?$/i.test(last)) {
      parts.pop();
    }

    if (parts.length === 0) return "./";
    return "/" + parts.join("/") + "/";
  }

  function currentFile() {
    var path = window.location.pathname;
    var parts = path.split("/").filter(Boolean);
    if (parts.length === 0) return "index.html";

    var last = parts[parts.length - 1];
    if (/\.html?$/i.test(last)) return last;

    // /repo-name/ with no filename → index.html
    return "index.html";
  }

  function currentIndex() {
    var file = currentFile();
    for (var i = 0; i < DESIGNS.length; i++) {
      if (DESIGNS[i].file === file) return i;
    }
    return 0;
  }

  function designUrl(file) {
    return getBasePath() + file;
  }

  function render(el, idx) {
    var current = DESIGNS[idx];
    var next = DESIGNS[(idx + 1) % DESIGNS.length];

    el.href = designUrl(next.file);
    el.setAttribute("aria-label", "Switch theme to " + next.label);
    el.innerHTML =
      '<span class="design-cycle-label" aria-hidden="true">◐</span>' +
      '<span class="design-cycle-current">' + current.label + "</span>" +
      '<span class="design-cycle-next">Next: ' + next.label + "</span>" +
      '<span class="design-cycle-index">' + (idx + 1) + "/" + DESIGNS.length + "</span>";
  }

  function mount() {
    var el = document.getElementById("designCycle");
    if (!el) {
      el = document.createElement("a");
      el.id = "designCycle";
      el.className = "design-cycle";
      document.body.appendChild(el);
    }

    render(el, currentIndex());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
