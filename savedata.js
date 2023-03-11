/* DOM er maddome html er import field shomuher value gulo pawar jonno ai fuction */
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

/* store kora cart er data shomuho pawar jonno ai fuction*/
const storeShoppingCart = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}

/* store kora data gulo webpage a display korar jonno ai function */
const displayProduct = (product, quantity) => {
    const displayContainer = document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText = `${product}: ${quantity}`;   
    displayContainer.appendChild(li);
}

/* store cart fuction hote prapto data gulo ke stingify kore local storage a save korar jonno ai fuction */
const saveDataInLocalStorage = (product, quantity) =>{
    const cart = storeShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

/* local storage a save kora data gulo ke patmanent vabe display te ba web UI a show korar jonno ai fuction */
const displayProductFromLocalStorage = () =>{
    const saveCart = storeShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductFromLocalStorage();