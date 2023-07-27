
window.addEventListener("scroll", function () {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var parallaxBgCitas = document.querySelector(".parallax-bg-citas");
  parallaxBgCitas.style.transform = "translateY(" + scrollTop * 0.5 + "px)";
});
