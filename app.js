(() => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (burgerBtn && mobileNav) {
    const closeMenu = () => {
      mobileNav.classList.remove("open");
      burgerBtn.setAttribute("aria-expanded", "false");
    };

    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      burgerBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // ESC closes menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Clicking a menu link closes it
    mobileNav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", closeMenu);
    });

    // Click outside closes menu
    document.addEventListener("click", (e) => {
      if (
        mobileNav.classList.contains("open") &&
        !mobileNav.contains(e.target) &&
        !burgerBtn.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav highlight
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("a[href]").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.setAttribute("aria-current", "page");
  });
})();
