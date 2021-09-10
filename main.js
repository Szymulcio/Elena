const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");
let menuOpen = false;

toggleButton.addEventListener("click", () => {
  if (!menuOpen) {
    toggleButton.classList.add("open-burger");
    mobileNav.classList.add("open-nav");
    menuOpen = true;
  } else {
    toggleButton.classList.remove("open-burger");
    mobileNav.classList.remove("open-nav");
    menuOpen = false;
  }
});
