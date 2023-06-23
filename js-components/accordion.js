window.addEventListener('load', () => {
	const questions = Array.from(document.querySelectorAll('.question'));

	questions.forEach(question => {
		const answer = question.querySelector('.answer');
		const scrollHeight = answer.scrollHeight;

		answer.style.setProperty('--height', `${scrollHeight}px`)

		
		question.addEventListener('click', () => {
			question.classList.toggle('active');
		});
	});
});
