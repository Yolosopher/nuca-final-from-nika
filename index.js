require('./assets/js/burger.js');
require('./assets/js/cookie-popup.js');

const foundProductMain = document.querySelector('.products_main');
const foundHomeMain = document.querySelector('.home_main');

if (foundProductMain) {
	// if on products page
	require('./js-components/insertProducts.js');
} else if (foundHomeMain) {
	// if on home page
	require('./assets/js/slider.js');
	require('./js-components/accordion.js');
}
