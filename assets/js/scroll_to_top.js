const scroll_to_top = document.getElementById('scroll_to_top');


scroll_to_top.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
})