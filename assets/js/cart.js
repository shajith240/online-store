import { createOrder } from './api.js';

// Function to handle order creation
async function handleOrderCreation(userId, productId, quantity) {
    const response = await createOrder(userId, productId, quantity);
    alert(response.message);
}

// Example usage
document.getElementById('orderButton').addEventListener('click', () => {
    const userId = 1; // Replace with actual user ID
    const productId = 1; // Replace with actual product ID
    const quantity = 2; // Replace with actual quantity
    handleOrderCreation(userId, productId, quantity);
});
