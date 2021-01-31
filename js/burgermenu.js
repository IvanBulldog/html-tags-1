const burgerBtn = document.querySelector('.navbar-custom .navbar-toggler');

burgerBtn.addEventListener('click', function burgerMenu() {
    burgerBtn.classList.toggle('collapsed');
    document.querySelector('.navbar-collapse').classList.toggle('show');
});