// Shared design theme cycler — cycles Bugatti → Apple → Billboard → …

(function () {
  "use strict";

  var DESIGNS = [
    { id: "bugatti", file: "index.html", label: "Bugatti" },
    { id: "apple", file: "apple.html", label: "Apple" },
    { id: "billboard", file: "billboard.html", label: "Billboard" },
  ];

  function currentFile() {
    var path = window.location.pathname;
    var file = path.split("/").pop() || "index.html";
    if (!file || file === "/") file = "index.html";
    return file;
  }

  function currentIndex() {
    var file = currentFile();
    for (var i = 0; i < DESIGNS.length; i++) {
      if (DESIGNS[i].file === file) return i;
    }
    return 0;
  }

  function mount() {
    if (document.getElementById("designCycle")) return;

    var idx = currentIndex();
    var current = DESIGNS[idx];
    var next = DESIGNS[(idx + 1) % DESIGNS.length];

    var btn = document.createElement("button");
    btn.id = "designCycle";
    btn.className = "design-cycle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Switch theme to " + next.label);
    btn.innerHTML =
      '<span class="design-cycle-label" aria-hidden="true">◐</span>' +
      '<span class="design-cycle-current">' + current.label + "</span>" +
      '<span class="design-cycle-next">Next: ' + next.label + "</span>" +
      '<span class="design-cycle-index">' + (idx + 1) + "/" + DESIGNS.length + "</span>";

    btn.addEventListener("click", function () {
      window.location.href = next.file;
    });

    document.body.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
