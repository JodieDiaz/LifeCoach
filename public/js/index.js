

window.addEventListener("scrollimgp", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var parallaxBgCitas = document.querySelector(".parallax-bg-citas");
  parallaxBgCitas.style.transform = "translateY(" + scrollTop * 0.5 + "px)";
});

 const parallaxBg = document.querySelector(".parallax-bg");

 window.addEventListener("scroll", function () {
   const scrollY = window.scrollY;
   parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`; // Ajusta la velocidad del efecto
 });

