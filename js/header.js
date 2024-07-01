const harderNav = document.getElementById("headerNav");
const navBtn = document.getElementById("navBtn");
navBtn.addEventListener("click", () => {
  harderNav.classList.toggle("myHidden");
  harderNav.classList.toggle("myShow");
});
