 document.getElementById("contactame-button").addEventListener("click", function() {
      window.location.href = "mailto:correo-de-dafne@example.com";
    });

    // conoceme.js
$(document).ready(function() {
  // Cambia el color del header al hacer scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });
});
