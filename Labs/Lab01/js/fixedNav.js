window.addEventListener("scroll",myFunction);

// Get the header
const navbar = document.getElementById("fixHeader");
const cover = document.querySelector(".cover");
const logo = document.querySelector(".logo");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    cover.classList.add("stickyForCover");
    logo.children[0].children[0].setAttribute("src","./images/logo_white.png");
  } else {
    navbar.classList.remove("sticky");
    cover.classList.remove("stickyForCover");
    logo.children[0].children[0].setAttribute("src","./images/logo.png");
  }
}

