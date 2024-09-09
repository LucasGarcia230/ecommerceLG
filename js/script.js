// Lista de productos (puedes agregar más productos aquí)
const products = [
    { id: 1, name: "Producto 1", price: 5000 },
    { id: 2, name: "Producto 2", price: 10000 },
    { id: 3, name: "Producto 3", price: 15000 },
    { id: 4, name: "Producto 4", price: 20000 },
    { id: 5, name: "Producto 5", price: 25000 },
    { id: 6, name: "Producto 6", price: 30000 },
    { id: 7, name: "Producto 7", price: 35000 },
    { id: 8, name: "Producto 8", price: 40000 },
    { id: 9, name: "Producto 9", price: 45000 },
];

// Carrito de compras
let cart = [];

// Función para mostrar los productos en la página
function displayProducts() {
    
    const productList = document.querySelector('.lista-prod');
    
    productList.innerHTML = ''; // Limpiar lista de productos

    // Iterar sobre los productos y crear el HTML
    products.forEach(product => {
        
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Agregar al carrito</button>
        `;

        productList.appendChild(productDiv); // Agrego el hijo div al padre productList
    });
}

// Función para agregar productos al carrito

function addToCart(productId) {
    
    // Buscar el producto por su id
    const product = products.find(p => p.id === productId);
    
    // Condicional: verificar si el producto ya está en el carrito
    const cartItem = cart.find(item => item.id === productId);
    
    if (cartItem) {
        // Si ya está en el carrito, aumentamos la cantidad
        cartItem.quantity += 1;
    } else {
        // Si no está en el carrito, lo agregamos con cantidad 1
        cart.push({ ...product, quantity: 1 });
    }

    updateCart(); // Llamar a la función para actualizar el carrito
}

// Función para actualizar el carrito (mostrar productos y total)
function updateCart() {
    const cartItems = document.getElementById('carrito-items');
    const cartTotal = document.getElementById('carrito-total');
    cartItems.innerHTML = ''; // Limpiar lista del carrito

    let total = 0; // Variable para acumular el total
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartItems.appendChild(li);

        // Sumar al total
        total += item.price * item.quantity;
    });

    // Mostrar el total
    cartTotal.textContent = `Total: $${total}`;
}

// Función para vaciar el carrito
function clearCart() {
    cart = []; // Vaciar array del carrito
    updateCart(); // Actualizar visualmente el carrito
}

// Llamar a la función para mostrar los productos al cargar la página
displayProducts();

//Declaración de variables con let y const
//funciones nativas prompt, alert, confirm
//let platoElegido = prompt("¿Que quieres comer hoy?");

//alert("El plato elegido fue " + platoElegido);
