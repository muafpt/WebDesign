function changePage(url) {
  window.open(url, "_self");
}

function changePageAfter5sec(url) {
  setTimeout(function () {
    changePage(url);
  }, 500);
}

changePageAfter5sec("./home.html");
