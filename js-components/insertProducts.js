import axios from 'axios';

const fetchProducts = async (limit = 5) => {
	const response = await axios.get(
		`https://fakestoreapi.com/products?limit=${limit}`
	);

	return response.data;
};

const getInnerHTML = ({ image, title, price }) => `
	<div class="product_item_img">
		<img
			src="${image}"
			alt="" />
	</div>
	<div class="product_item_info">
		<h3>${title}</h3>
		<div class="link_and_price">
			<a href="product.html" class="link">დეტალურად</a>
			<span class="price">${price}$</span>
		</div>
	</div>
`;

const insertProducts = async () => {
	// product_item
	const products_main = document.querySelector('.products_main');
	if (!products_main) return;
	const products = await fetchProducts(10);
	console.log(products);
	products.forEach(product => {
		const productItem = document.createElement('div');
		productItem.className = 'product_item';
		productItem.innerHTML = getInnerHTML(product);

		products_main.appendChild(productItem);
	});
};

insertProducts();
