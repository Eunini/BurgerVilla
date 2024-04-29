document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelector('.nav-links');
  
    navbarToggler.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  });

  var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});

new Tornpaper({ grungeScale: 2 });
ScrollReveal().reveal('.navbar, .hero, .about, .our-team, .menu, .tornpaper, .contact',{ 
  delay: 300,
  distance: '20px',
  origin: 'bottom',
  easing: 'ease-in-out',
  duration: 800,
  opacity: 0,
  scale: 1,
  reset: false
});

// scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollButton = document.getElementById("scrollUpBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var name = document.getElementById("name").value.trim();
// pop up msg
  function showAlert() {
      var name = document.getElementById("name").value.trim();
    Swal.fire({
      title: `Hello, {name}`,
      text: 'Your message have been received!',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }
setTimeout(showAlert, 10000);

