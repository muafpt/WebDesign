const zoomBtn = document.querySelector(".zoom");
const zoomContent = document.querySelector(".zoom-img");
const container = document.querySelector("#container-zoom");
zoomBtn.addEventListener('click',function(){
    container.classList.toggle('container-zoom');
    zoomContent.classList.toggle("zoomed");
   
})

const close = document.querySelector(".close");
close.addEventListener('click',function(){
    container.classList.toggle('container-zoom');
    zoomContent.classList.toggle("zoomed");
})