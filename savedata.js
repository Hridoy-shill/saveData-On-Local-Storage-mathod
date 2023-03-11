const addBtn = () =>{
    const productField = document.getElementById('products-feild');
    const productQuantity = document.getElementById('quantity-feild');
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value = '';
    productQuantity.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity);
    saveDataInLocalStorage(product, quantity);
}

const storeShoppingCart = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

const displayProduct = (product, quantity) => {
    const displayContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`;   
    displayContainer.appendChild(li);
}

const saveDataInLocalStorage = (product, quantity) =>{
    const cart = storeShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}