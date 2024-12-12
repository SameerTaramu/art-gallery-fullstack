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

    

        
    

