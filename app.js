(() => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (burgerBtn && mobileNav) {
    const closeMenu = () => {
      mobileNav.classList.remove("open");
      burgerBtn.setAttribute("aria-expanded", "false");
    };

    burgerBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      burgerBtn.setAttribute("aria-expanded", mobileNav.classList.contains("open") ? "true" : "false");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active link highlight (optional, harmless)
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute("href");
    if (href === path) a.setAttribute("aria-current", "page");
  });
})();
