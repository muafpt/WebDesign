
const buyBtns = document.querySelectorAll('.buy');


let showMessage = document.querySelector('.showMessage');
  
let prods = [];

buyBtns.forEach(btn =>{
    btn.addEventListener('click', function (){
        let name = btn.parentElement.children[0].innerText;
        let price = btn.parentElement.children[1].innerText;
        let imgSrc = btn.parentElement.parentElement.children[0].children[0].getAttribute('src');

        console.log(name);
        console.log(imgSrc);
        console.log(price);

        let prodData = {
            name: name,
            price: price,
            imgSrc: imgSrc
        }
        prods.push(prodData);
        let json = JSON.stringify(prods);

        if(localStorage.getItem('data')){
            console.log('aaa')
            let oldData = JSON.parse(localStorage.getItem('data'));
            console.log(oldData);
            oldData.push(prodData);
            json = JSON.stringify(oldData);
            localStorage.setItem('data',json);
        }else{
            localStorage.setItem('data',json)
        }
        
        showMessage.classList.add('active');
        setTimeout(function(){
            showMessage.classList.remove('active');
        },2000)

    })
})


