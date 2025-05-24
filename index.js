document.getElementById("menu-btn").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    let button = document.getElementById("menu-btn");
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
});
const slides = document.querySelectorAll(".slide");
let current = 0;
const interval = 2000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, interval);
