const slideShow = document.querySelector("#slide-images");
const slideImages = document.querySelectorAll("#slide-images img");

//counter and calculate width of image
const size = slideImages[0].clientWidth;
let count = 1;

slideShow.style.transform = "translateX(" + -size * count + "px)";

//get prev and next btn
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Circle Bubble of Slide
//get all circle element
const circles = document.querySelectorAll(".circle");
circles[0].classList.add("active-circle");

//add event

function activeNextCircle() {
  if (count != 1) {
    circles[count - 2].classList.remove("active-circle");
    if (count == slideImages.length - 1) {
      circles[0].classList.add("active-circle");
    } else {
      circles[count - 1].classList.add("active-circle");
    }
  }
}
function activePrveCircle() {
  circles[count - 1 + 1].classList.remove("active-circle");
  if (count == 0) {
    circles[6].classList.add("active-circle");
  } else {
    circles[count - 1].classList.add("active-circle");
  }
}

function prevSlide() {
  if (count <= 0) return;

  slideShow.style.transition = "all 0.4s ease-in-out";

  count--;
  slideShow.style.transform = "translateX(" + -size * count + "px)";

  //use count variable to identify what circle to add active-circle class
  activePrveCircle();

  slideShow.addEventListener("transitionend", function () {
    if (slideImages[count].id == "lastClone") {
      count = slideImages.length - 2;
      slideShow.style.transition = "none";
      slideShow.style.transform = "translateX(" + -size * count + "px)";
    }
  });

  console.log(count);
}

function nextSlide() {
  if (count >= slideImages.length - 1) return;

  slideShow.style.transition = "all 0.4s ease-in-out";

  count++;
  slideShow.style.transform = "translateX(" + -size * count + "px)";

  //use count variable to identify what circle to add active-circle class
  activeNextCircle();

  slideShow.addEventListener("transitionend", function () {
    if (slideImages[count].id == "firstClone") {
      slideShow.style.transition = "none";
      count = slideImages.length - count;
      slideShow.style.transform = "translateX(" + -size * count + "px)";
    }
  });
  console.log(count);
}

prevBtn.addEventListener("click", prevSlide);

nextBtn.addEventListener("click", nextSlide);

//auto next slide

let time = 4000;
setInterval(nextSlide, time);

//use count variable to identify what circle to add active-circle class

circles.forEach((element) => {
  element.addEventListener("click", function () {
    let dataCount = parseInt(element.dataset.count);
    slideShow.style.transition = 'all 0.6s ease-in-out';
    slideShow.style.transform = "translateX(" + -size * dataCount + "px)";
    console.log(count);
    circles[count - 1].classList.remove("active-circle");

    count = dataCount;
    circles[dataCount - 1].classList.add("active-circle");
  });
});
