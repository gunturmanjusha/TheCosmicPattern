(() => {
  document.documentElement.classList.add("nav-enabled");
  const overlay = document.createElement("button");
  overlay.className = "nav-overlay";
  overlay.type = "button";
  overlay.setAttribute("aria-label", "Close navigation");
  document.body.append(overlay);
  let activeCloseMenu;

  overlay.addEventListener("click", () => activeCloseMenu?.());

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
      if (activeCloseMenu === closeMenu) {
        overlay.classList.remove("is-visible");
        activeCloseMenu = undefined;
      }
    };
    toggle.addEventListener("click", () => {
      if (nav.classList.contains("is-open")) {
        closeMenu();
      } else {
        activeCloseMenu?.();
        nav.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
        overlay.classList.add("is-visible");
        activeCloseMenu = closeMenu;
      }
    });
    links.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  });
})();
