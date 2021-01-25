window.onscroll = function() {navbarScroll()};

function navbarScroll() {
    const navBarScrolling = document.querySelector('.navbar');
    if (document.documentElement.scrollTop > 20) {
        navBarScrolling.classList.add('top-nav-collapse');
    } else {
        navBarScrolling.classList.remove('top-nav-collapse');
    }
}

