(function () {
  "use strict";

  const navigation = document.querySelector(".section-nav");
  const sections = Array.from(document.querySelectorAll(".article-section"));

  if (!navigation || sections.length === 0) return;

  const controls = Array.from(navigation.querySelectorAll("button[data-section]"));

  function showSection(sectionId) {
    sections.forEach(function (section) {
      section.hidden = section.id !== sectionId;
    });

    controls.forEach(function (control) {
      control.setAttribute("aria-selected", String(control.dataset.section === sectionId));
    });
  }

  controls.forEach(function (control) {
    control.addEventListener("click", function () {
      showSection(control.dataset.section);
    });
  });

  if (controls.length > 0) showSection(controls[0].dataset.section);
})();
