
    let shoppingCart = document.querySelector('.shopping-cart');
    document.querySelector('#cart-btn').onclick = () => { 
        shoppingCart.classList.toggle('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        uploadForm.classList.remove('active');
    }

    let loginForm = document.querySelector('.login-form');
    document.querySelector('#user-btn').onclick = () => {
       
        shoppingCart.classList.remove('active');
        loginForm.classList.toggle('active');
        navbar.classList.remove('active');
        uploadForm.classList.remove('active');
    }

    let navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        uploadForm.classList.remove('active');
    }

    let uploadForm = document.querySelector('.upload-section');
    document.querySelector('#upload-btn').onclick = () => {
        navbar.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        uploadForm.classList.toggle('active');
    }

    window.onscroll = () => {
        shoppingCart.classList.remove('active');
        loginForm.classList.remove('active');
        navbar.classList.remove('active');
        uploadForm.classList.remove('active');
    }
    document.getElementById('reg-box').onclick = function(event) {
        event.preventDefault(); 
        window.location.href = 'register.html'; 
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        if (window.location.hash === '#login-section') {
            const loginSection = document.getElementById('login-section');
            if (loginSection) {
                loginSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
var addCart = document.getElementsByClassName('btn');
for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
}

document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
    updateCartCount();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Already added your items to cart");
            return;
        }
    }

    var cartBoxContent = `
        <img src="${productImg}" alt="" class="product-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
        </div>
        <i class='fa fa-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
    updateCartCount();
}

function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var price = parseFloat(priceElement.innerText.replace('Rs', "").trim());
        total += parseFloat(price);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = 'Rs' + total;
}

function updateCartCount() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var cartCount = cartBoxes.length;
    document.getElementById('cart-btn').getElementsByTagName('span')[0].innerText = cartCount;
}

function buyButtonClicked() {
    alert('Your order placed successfully');
    window.location.href = 'paymentform.html';
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
    updateTotal();
    updateCartCount();
}
