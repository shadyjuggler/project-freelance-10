window.addEventListener("DOMContentLoaded", () => {
    console.log("Loaded Scripts");
});

const processSlider = new Swiper("#processSlider", {
    slidesPerView: 1,
    spaceBetween: 35,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
          slidesPerView: 4,
          spaceBetween: 35
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        }
      }
});
const reviewSlider = new Swiper("#reviewSlider", {
    slidesPerView: 1,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        1024: {
          slidesPerView: 3,
          spaceBetween: 35
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 40
        }
      }
});
const portfolioSlider = new Swiper("#portfolioSlider", {
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 80,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
   
});


var portfolio = new Swiper(".swiper-container-h", {
    paginationClickable: true,
    spaceBetween: 150,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var case1 = new Swiper(".case1", {
    pagination: {
        el: "#inner-pagination-1",
        clickable: true,
    },
    direction: "horizontal",
    spaceBetween: 50,
    nested: true,
    allowTouchMove: false
});
var case2 = new Swiper(".case2", {
    pagination: {
        el: "#inner-pagination-2",
        clickable: true,
    },
    direction: "horizontal",
    spaceBetween: 50,
    nested: true,
    allowTouchMove: false
});
var case2 = new Swiper(".case3", {
    pagination: {
        el: "#inner-pagination-3",
        clickable: true,
    },
    direction: "horizontal",
    spaceBetween: 50,
    nested: true,
    allowTouchMove: false
});
var case2 = new Swiper(".case4", {
    pagination: {
        el: "#inner-pagination-4",
        clickable: true,
    },
    direction: "horizontal",
    spaceBetween: 50,
    nested: true,
    allowTouchMove: false
});

