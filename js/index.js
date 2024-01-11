// HamburgerToggle
const navbarLinks = document.querySelector(".navbar .nav-items");

const navbarToggle = document.querySelector(".navbar .navbar-toggle");
const toggleBar = navbarToggle.addEventListener("click", () => {
	navbarLinks.classList.toggle("show");
	navbarToggle.classList.toggle("active");
});

// Slider
const swiper = new Swiper(".slider .swiper", {
	pagination: {
		el: ".slider .swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".slider .swiper-button-next",
		prevEl: ".slider .swiper-button-prev"
	},
	loop: true,
	autoplay: {
		delay: 2500
	}
});

// Product Slider
const initializeSwiper = (selector, prevButtonId, nextButtonId) => {
	return new Swiper(selector, {
		spaceBetween: 30,
		loop: true,
		effect: "slide",
		navigation: {
			nextEl: `#${nextButtonId}`,
			prevEl: `#${prevButtonId}`
		},
		autoplay: false,
		breakpoints: {
			1280: {
				slidesPerView: 4
			},
			989: {
				slidesPerView: 3
			},
			768: {
				slidesPerView: 2
			},
			500: {
				slidesPerView: 1
			}
		}
	});
};

const swipers = initializeSwiper("#swiper", "prev", "next");
const swiper1 = initializeSwiper("#swiper1", "prev1", "next1");
const swiper2 = initializeSwiper("#swiper2", "prev2", "next2");
const swiper3 = initializeSwiper("#swiper3", "prev3", "next3");

// AOS
AOS.init();
