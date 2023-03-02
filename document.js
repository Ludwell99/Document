let navbar = document.querySelector('#navbar');

document.querySelector('#menu_btn').onclick = () => {
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
}
let cartItem = document.querySelector('.cart_item_container');

document.querySelector('#event_btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let search = document.querySelector('.search_form');

document.querySelector('#search_btn').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    search.classList.remove('active');
}