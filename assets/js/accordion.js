window.addEventListener('load', () => {
	const questions = Array.from(document.querySelectorAll('.about_div'));

	questions.forEach(question => {
		const answer = question.querySelector('.community_text');
		const scrollHeight = answer.scrollHeight;

		answer.style.setProperty('--height', `${scrollHeight}px`)

		
		question.addEventListener('click', () => {
			question.classList.toggle('toggled');
		});
	});
});
