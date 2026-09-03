(() => {
  document.documentElement.classList.add("nav-enabled");
  document.querySelectorAll(".site-nav").forEach((nav, index) => {
    const toggle = nav.querySelector(".nav-toggle");
    const links = nav.querySelector(".nav-links");
    if (!toggle || !links) return;
    const menuId = `primary-navigation-${index + 1}`;
    links.id = menuId;
    toggle.setAttribute("aria-controls", menuId);
    const closeMenu = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  });
})();
