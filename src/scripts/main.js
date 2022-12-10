new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 16,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});
new Swiper(".reviews__content", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  spaceBetween: 16,
  breakpoints: {
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 32,
      pagination: {
        el: null,
      },
      navigation: {
        nextEl: ".swiper-button-next",
      },
    },
  },
});
const menuButton = document.querySelector(".menu-burger");
const menuBox = document.querySelector(".main-header__menu-box");

const toggleMenuButton = () => {
  menuButton.classList.toggle("active");
  menuBox.classList.toggle("active");
};

menuButton.addEventListener("click", toggleMenuButton);
