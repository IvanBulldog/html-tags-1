window.addEventListener('scroll', function scrollFunction() {
    const navBarScrolling = document.querySelector('.navbar'); // for taked place navbar
    if (document.documentElement.scrollTop > 20) { // when button and nav must worked
        navBarScrolling.classList.add('top-nav-collapse'); // for add class to navbar
    } else {
        navBarScrolling.classList.remove('top-nav-collapse'); // delet class if him in top
    }
});
