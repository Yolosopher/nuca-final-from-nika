import axios from 'axios';

const fetchProducts = async (limit = 5) => {
	const response = await axios.get(
		`https://fakestoreapi.com/products?limit=${limit}`
	);

	return response.data;
};

const getInnerHTML = ({ image, title, price }) => `
	<div class="img">
	<img
		src="${image}"
		alt="${title}" />
	</div>
	<span class="product product_title">${title}</span>
	<p>$${price}</p>
`;

const insertProducts = async () => {
	// product_item
	const all_cards = document.querySelector('.all_cards');
	all_cards.innerHTML = '';
	if (!all_cards) return;
	const products = await fetchProducts(10);

	products.forEach(product => {
		const productItem = document.createElement('div');
		productItem.className = 'card';
		productItem.innerHTML = getInnerHTML(product);

		all_cards.appendChild(productItem);
	});
};

const searchProducts = keyword => {
	const products = Array.from(document.querySelectorAll('.all_cards .card'));

	products.forEach(product => {
		const title = product.querySelector('.product_title').textContent;
		const searchResult = title
			.toLowerCase()
			.includes(keyword.toLowerCase());

		if (!searchResult) {
			product.classList.add('hide');
		} else {
			product.classList.remove('hide');
		}
	});
};

insertProducts()

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', event => {
	event.preventDefault();


	const input = event.target.search;
	searchProducts(input.value);
	
})