const footer = document.createElement('footer');
const footerH5 = document.createElement('h5');
footerH5.textContent = 'This is a footer';

footerH5.className = 'footer nice-footer';
footerH5.classList.add('additional-class');
footerH5.classList.remove('footer');
footerH5.classList.toggle('footer');
footerH5.classList.contains('footer');

footer.appendChild(footerH5);

const main = document.querySelector('.home_main');

main.classList.add('main');

console.log(main);

document.body.appendChild(footer);

// burger menu functionality

const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
	burgerMenu.classList.toggle('shown')
});
