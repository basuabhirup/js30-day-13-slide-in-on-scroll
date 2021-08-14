function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  for (let i = 0; i < sliderImages.length; i++) {
    // half way through the image:
    const slideInAt = (window.scrollY + window.innerHeight - sliderImages[i].height / 2);
    // bottom of the image:
    const imageBottom = sliderImages[i].offsetTop + sliderImages[i].height;
    // conditional statements:
    const isHalfShown = slideInAt > sliderImages[i].offsetTop;
    const scrolledPast = window.scrollY > imageBottom;

    if (isHalfShown && !scrolledPast) {
      sliderImages[i].classList.add("active");
    } else {
      sliderImages[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", debounce(checkSlide));
