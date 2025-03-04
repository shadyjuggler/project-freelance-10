//libraries like jquery etc
window.addEventListener("DOMContentLoaded", () => {
  console.log("Loaded Scripts");
});


const processSlider = new Swiper('#processSlider', {
  slidesPerView: 4,
  spaceBetween: 35,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const reviewSlider = new Swiper('#reviewSlider', {
  slidesPerView: 3,
  spaceBetween: 35,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
