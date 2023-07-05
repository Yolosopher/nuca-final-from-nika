import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.category_slider', {
	spaceBetween: 30,
	slidesPerView: 4,
	autoplay: {
		delay: 3000,
	},
	speed: 700,
	loop: true
});