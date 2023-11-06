// Change Nav background-color when scrolling
window.onscroll = function () {
  var navbar = document.querySelector(".header .container");
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

// Slider Show For Events
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("myslides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actived", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actived";
  setTimeout(showSlides, 3000);
}

let allLis = document.querySelectorAll("ul li a");
allLis.forEach(function (ele) {
  ele.onclick = function () {
    allLis.forEach(function (ele) {
      // Remove active From All Elements
      ele.classList.remove("active");
    });
    // Add active To This Elements
    this.classList.add("active");
  };
});

let list = document.querySelector("#list");
list.onclick = function () {
  allLis.forEach(function (ele) {
    ele.style.display = "block";
  });
  console.log("clicked");
};
