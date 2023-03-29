

const nav = document.querySelector('header nav');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
	nav.classList.toggle('active')
})