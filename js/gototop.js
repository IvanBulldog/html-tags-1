const scrollFunctionBtn = document.querySelector(".back-to-top"); // for taked place top button

window.addEventListener('scroll', function scrollFunctionTop() {
    if (document.documentElement.scrollTop > 20) { // when button and nav must worked
        scrollFunctionBtn.style.display = "block"; // create button in scroll
    } else {
        scrollFunctionBtn.style.display = "none"; // delete top button in top place
    }
});

scrollFunctionBtn.addEventListener('click', function fuctionTop() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});