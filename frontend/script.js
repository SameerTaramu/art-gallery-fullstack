let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{ 
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}

let loginForm = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');

}
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

}



document.getElementById('button').onclick = function(event) {
    event.preventDefault(); 
    window.location.href = 'artwork.html'; 
};
    
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


if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons);
    for (var i=0; i<removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }
} 
var addCart = document.getElementsByClassName('btn');
for (var i=0; i<addCart.length; i++){
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
}   

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();

}
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title,price,productImg);
    updateTotal();
}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for (var i=0; i<cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
            alert("Already added your items to cart");
            return;
        }
    }

var cartBoxContent = `
                        <img src="image/a5.png" alt="" class="product-img">
                        <div class="detail-box">
                            <div class="cart-product-title">Artwork Title 5</div>
                            <div class="cart-price">$2.99</div>
                        </div>
                            <i class='fa fa-trash-alt cart-remove'></i>`;
cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
}
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartRows = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBox.length; i++){
        var cartBox = cartBox[i];
        var priceElemnt = cartBox.getElementsByClassName('cart-price')[0];
        var price = parseFloat(priceElemnt.innerText.replace('$', ""));
        total = total + price;
        total = Math.round(total * 100)/100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}
        
    

