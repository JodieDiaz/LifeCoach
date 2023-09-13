

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


 document
   .querySelector('a[href="#about-section"]')
   .addEventListener("click", function (e) {
     e.preventDefault();
     const targetSection = document.querySelector(this.getAttribute("href"));

     if (targetSection) {
       const offset = targetSection.offsetTop - 100; // Resta 100 píxeles al offset

       const scrollDuration = 5000;
       const scrollStep = Math.PI / (scrollDuration / 15);
       let count = 0;
       const scrollInterval = setInterval(function () {
         if (window.scrollY !== offset) {
           count = count + 1;
           const newOffset =
             offset - (offset - window.scrollY) * Math.cos(count * scrollStep);
           window.scrollTo(0, newOffset);
         } else {
           clearInterval(scrollInterval);
         }
       }, 15);
     }
   });
