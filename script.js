function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.about-pic');

function showSlides() {
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  slideIndex++;
  if (slideIndex === images.length) {
    slideIndex = 0;
  }
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

showSlides();
