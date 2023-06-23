const cookieValue = localStorage.getItem('cookie-policy');

if (!cookieValue) {
	const cookie_popup = document.querySelector('.cookie-popup');
	const agreeBtn = document.getElementById('agree');
	const disagreeBtn = document.getElementById('disagree');

	window.addEventListener('load', () => {
		cookie_popup.classList.add('shown');

		agreeBtn.addEventListener('click', () => {
			localStorage.setItem('cookie-policy', 'agreed');
			cookie_popup.classList.remove('shown');
		});
		disagreeBtn.addEventListener('click', () => {
			localStorage.setItem('cookie-policy', 'disagreed');
			cookie_popup.classList.remove('shown');
		});
	});
}
