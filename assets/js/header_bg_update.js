const header = document.querySelector('.header');

window.addEventListener('scroll', event => {

	if (window.scrollY > 496) {
		header.classList.add('updated');
	} else {
		header.classList.remove('updated');
	}
});
