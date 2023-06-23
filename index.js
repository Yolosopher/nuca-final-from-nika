require('./js-components/burger.js');
require('./js-components/cookie-popup.js');

const foundProductMain = document.querySelector('.products_main');
const foundHomeMain = document.querySelector('.home_main');

if (foundProductMain) {
	// if on products page
	require('./js-components/insertProducts.js');
} else if (foundHomeMain) {
	// if on home page
	require('./js-components/slider.js');
	require('./js-components/accordion.js');
}
