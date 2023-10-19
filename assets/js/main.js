// $(document).ready(function(){
//     $('#myCarousel').carousel();
// });

//navbar
$(function () {
    $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

//back to top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//navbar
// $(document).ready(function() {
//   // Mobile nav toggle
//   $(document).on('click', '.mobile-nav-toggle', function(e) {
//     console.log("Hamburger clicked!"); 
//     var navbar = $('#navbar');
//     navbar.toggleClass('navbar-mobile');
//     if (navbar.hasClass('navbar-mobile')) {
//         navbar.find('ul').show();
//     } else {
//         navbar.find('ul').hide();
//     }
//     $(this).toggleClass('fa-bars fa-xmark');
// });


//   // Mobile nav dropdowns activate.
//   $(document).on('click', '.navbar .dropdown > a', function(e) {
//       if ($('#navbar').hasClass('navbar-mobile')) {
//           e.preventDefault();
//           $(this).next().toggleClass('dropdown-active');
//       }
//   });

//   // Scroll with offset on links with a class name .scrollto
//   $(document).on('click', '.scrollto', function(e) {
//       if ($(this.hash).length) {
//           e.preventDefault();

//           let navbar = $('#navbar');
//           if (navbar.hasClass('navbar-mobile')) {
//               navbar.removeClass('navbar-mobile');
//               let navbarToggle = $('mobile-nav-toggle');
//               navbarToggle.toggleClass('fa-bars fa-xmark');
//           }
//           // Assuming scrollto is a function defined elsewhere in your code
//           scrollto(this.hash);
//       }
//   });
// });

//-------------------------------------------------------------
