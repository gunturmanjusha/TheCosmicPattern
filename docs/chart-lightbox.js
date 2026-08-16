(function () {
  "use strict";

  const dialog = document.querySelector(".chart-lightbox");
  const dialogImage = dialog && dialog.querySelector("img");
  const closeButton = dialog && dialog.querySelector(".chart-lightbox-close");
  const chartLinks = document.querySelectorAll(".sign-image-link");

  if (!dialog || !dialogImage || !closeButton || typeof dialog.showModal !== "function") return;

  chartLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const sourceImage = link.querySelector("img");
      event.preventDefault();
      dialogImage.src = link.href;
      dialogImage.alt = sourceImage ? sourceImage.alt : "Full Saturn retrograde transit chart";
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", function () {
    dialog.close();
  });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
})();
