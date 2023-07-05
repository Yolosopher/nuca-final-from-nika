import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.category_slider', {
	spaceBetween: 30,
	slidesPerView: 2,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	speed: 700,
	loop: true,
	breakpoints: {
		480: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 4,
		}
	}
});
