const contactForm = document.querySelector('#contact-form');

const isEmail = email => {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
};

contactForm.addEventListener('submit', e => {
	e.preventDefault();

	const { fullname, email, message, password, age, terms } = e.target;

	const errors = {};
	if (!fullname.value) {
		errors.fullname = 'Fullname is required';
	}
	if (fullname.value.length < 3) {
		errors.fullname = 'Fullname must be at least 3 characters';
	}
	if (!email.value) {
		errors.email = 'Email is required';
	}

	if (!isEmail(email.value)) {
		errors.email = 'Email input does not match email schema';
	}

	if (!message.value) {
		errors.message = 'Message is required';
	}
	if (message.value.length < 10) {
		errors.message = 'Message must be at least 10 characters';
	}
	if (!password.value) {
		errors.password = 'Password is required';
	}

	if (password.value.length < 8) {
		errors.password = 'Password must be at least 8 characters';
	}
	if (!terms.checked) {
		errors.terms = 'You have to accept the terms';
	}

	if (Object.keys(errors).length > 0) {
		Object.keys(errors).forEach(key => {
			const input = e.target[key];
			const form_control = input.closest('.form-control');
			const messageEl = form_control.querySelector(
				'.form-control-message'
			);

			// actions
			form_control.classList.add('error');
			messageEl.innerText = errors[key];
		});
	} else {
		alert('Form submitted');
		contactForm.reset();
	}
});

const { fullname, email, message, password, terms } = contactForm;
const formDataElements = [fullname, email, message, password, terms];

formDataElements.forEach(input => {
	if (input.name === 'terms') {
		terms.addEventListener('change', () => {
			const form_control = input.closest('.form-control');
			form_control.classList.remove('error');

			const messageEl = form_control.querySelector(
				'.form-control-message'
			);
			messageEl.innerText = '';
		});
	} else {
		input.addEventListener('focus', () => {
			const form_control = input.closest('.form-control');
			form_control.classList.remove('error');

			const messageEl = form_control.querySelector(
				'.form-control-message'
			);
			messageEl.innerText = '';
		});
	}
});
