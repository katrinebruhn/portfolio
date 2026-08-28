const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  const menuIsOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", menuIsOpen);
  menuButton.textContent = menuIsOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const scrollTopBtn = document.querySelector("#scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
