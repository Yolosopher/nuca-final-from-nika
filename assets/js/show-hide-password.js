const passwordInput = document.getElementById('password');
const showHidePasswordBtn = document.getElementById('password-show-btn');

showHidePasswordBtn.addEventListener('click', () => {
	passwordInput.type =
		passwordInput.type === 'password' ? 'text' : 'password';
	showHidePasswordBtn.classList.toggle('fa-eye');
	showHidePasswordBtn.classList.toggle('fa-eye-slash');
});
