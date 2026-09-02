const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Åbner og lukker mobilmenuen
menuButton.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.setAttribute("aria-label", menuIsOpen ? "Luk menu" : "Åbn menu");

  menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

// Lukker mobilmenuen, når der klikkes på et menupunkt
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Åbn menu");
    menuButton.textContent = "☰";
  });
});

// Viser til toppen-knappen, når brugeren har scrollet 400 pixels
window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
});

// Scroller tilbage til toppen
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
