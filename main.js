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

var acc = document.getElementsByClassName("dropdown-menu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
