// AddtoCart
document.addEventListener("DOMContentLoaded", () => {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];

	const updateCount = (count, countDisplay) => {
		countDisplay.textContent = count;
	};

	const addToCartButtons = document.querySelectorAll(".addtocart");

	addToCartButtons.forEach((addToCartButton, index) => {
		const decrementButton = document.getElementById(
			`decrement${index + 1}`
		);

		const incrementButton = document.getElementById(
			`increment${index + 1}`
		);

		const countDisplay = document.getElementById(`count${index + 1}`);

		let count = 0;

		decrementButton.addEventListener("click", () => {
			if (count > 0) {
				count -= 1;
				updateCount(count, countDisplay);
			}
		});

		incrementButton.addEventListener("click", () => {
			count += 1;
			updateCount(count, countDisplay);
		});

		addToCartButton.addEventListener("click", () => {
			const productName =
				addToCartButton.getAttribute("data-product-name");
			const productPrice = parseFloat(
				addToCartButton.getAttribute("data-product-price")
			);
			const quantity = count;

			const productData = {
				name: productName,
				price: productPrice,
				quantity: quantity
			};

			cart.push(productData);
			localStorage.setItem("cart", JSON.stringify(cart));

			alert(`Added "${productName}" to the cart.`);
			window.location.href = "Basket.html#add";
		});
	});
});

// Basket table
document.addEventListener("DOMContentLoaded", () => {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	const cartItemsContainer = document.getElementById("cart-items");
	let totalAmount = 0;

	if (cartItemsContainer) {
		cart.forEach((productData, index) => {
			const row = document.createElement("tr");
			row.innerHTML = `
			<td data-label="Product Name:">${productData.name}</td>
			<td data-label="Price:">$${
				productData.price ? productData.price.toFixed(2) : 0
			}</td>
			<td data-label="Quantity:">${productData.quantity || 0}</td>
			<td data-label="Total:">$${
				productData.price && productData.quantity
					? (productData.price * productData.quantity).toFixed(2)
					: 0
			}</td>
			<td data-label="Trash:">
				<button onclick="removeItem(${index})">
					<i class="bi bi-trash-fill"></i>
				</button>
			</td>
		`;

			cartItemsContainer.appendChild(row);

			if (productData.price && productData.quantity) {
				totalAmount += productData.price * productData.quantity;
			}
		});

		if (cart.length > 0) {
			const totalRow = document.createElement("tr");
			totalRow.innerHTML = `
                <td colspan="3">Total:</td>
                <td>$${totalAmount.toFixed(2)}</td>
            `;

			cartItemsContainer.appendChild(totalRow);
		}
	}
});

// Remove Item
const removeItem = index => {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	if (index >= 0 && index < cart.length) {
		cart.splice(index, 1);
		localStorage.setItem("cart", JSON.stringify(cart));
		alert("Are you sure to remove this item?");
		setTimeout(() => {
			location.reload();
		}, 300)
	}
};
