document.addEventListener('DOMContentLoaded', function () {
    // Array of products (You can add more properties like description, ratings, etc.)
    const products = [
        { id: 1, name: 'Product 1', price: '$19.99', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: '$29.99', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: '$39.99', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: '$49.99', image: 'https://via.placeholder.com/150' }
    ];

    // Function to create a product card
    function createProductCard(product) {
        return `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Inject product cards into the #product-cards section
    const productCardsContainer = document.getElementById('product-cards');
    products.forEach(product => {
        productCardsContainer.innerHTML += createProductCard(product);
    });
});


// Function to load HTML content into a given element by ID
function loadHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading HTML file:', error));
}

// Function to load multiple product cards
function loadProductCards() {
    const productCards = document.getElementById('product-cards');
    for (let i = 0; i < 3; i++) {  // Example: Load 3 product cards
        loadHTML('product-card.html', 'product-cards');
    }
}

// Load the header, footer, and product cards when the page loads
window.onload = function() {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
    loadProductCards();
};
