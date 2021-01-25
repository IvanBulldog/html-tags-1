window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const mybutton = document.getElementById("myBtn"); // for taked place top button
    const navBarScrolling = document.querySelector('.navbar'); // for taked place navbar
  if (document.documentElement.scrollTop > 20) { // when button and nav must worked
    mybutton.style.display = "block"; // create button in scroll
    navBarScrolling.classList.add('top-nav-collapse'); // for add class to navbar
  } else {
    mybutton.style.display = "none"; // delete top button in top place
    navBarScrolling.classList.remove('top-nav-collapse'); // delet class if him in top
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For all another  
}