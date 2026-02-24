(function(){
  // Active nav (desktop + mobile)
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const markActive = (scope) => {
    const links = scope.querySelectorAll('a[href]');
    links.forEach(a => {
      const href = (a.getAttribute("href") || "").toLowerCase();
      if (!href) return;
      const same = href === path || (path === "" && href === "index.html");
      if (same) a.setAttribute("aria-current","page");
      else a.removeAttribute("aria-current");
    });
  };

  const header = document.querySelector(".site-header");
  if (header) markActive(header);

  // Mobile menu
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");

  const setExpanded = (open) => {
    if (!burgerBtn) return;
    burgerBtn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  const openMenu = () => {
    if (!mobileNav) return;
    mobileNav.classList.add("open");
    setExpanded(true);
    markActive(mobileNav);
  };

  const closeMenu = () => {
    if (!mobileNav) return;
    mobileNav.classList.remove("open");
    setExpanded(false);
  };

  if (burgerBtn && mobileNav){
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.contains("open");
      if (isOpen) closeMenu();
      else openMenu();
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close on click outside
    document.addEventListener("click", (e) => {
      const target = e.target;
      const clickedInside = mobileNav.contains(target) || burgerBtn.contains(target);
      if (!clickedInside) closeMenu();
    });

    // Close on link click
    mobileNav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeMenu();
    });
  }

  // Year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
