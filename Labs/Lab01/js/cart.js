console.log("got it");

const tableCart = document.querySelector("#talbe-cart");

let data = JSON.parse(localStorage.getItem("data"));
const totalCost = document.querySelector(".total-cost");

let sum = 0;
data.forEach((prod) => {
  tableCart.innerHTML += `<tbody>
  <tr class="item-content">
    <td class="item-img">
      <a href="./detail.html"><img src="${prod.imgSrc}" alt="" /></a>
    </td>
    <td class="item-description">
      <h4><a href="./detail.html">${prod.name}</a></h4>
      <p>Web ID: 1089772</p>
    </td>
    <td class="item-price"><p>${prod.price}</p></td>
    <td class="item-quantity">
      <a href="" class="item-add"><i class="fa fa-plus"></i></a>
      <input type="text" value="1" readonly />
      <a href="" class="item-minus"><i class="fa fa-minus"></i></a>
    </td>
    <td class="item-total"><p>${prod.price}</p></td>
    <td class="item-delete">
      <a >
        <i class="fa fa-times"></i>
      </a>
    </td>
  </tr>
</tbody>`;

  sum += parseFloat(prod.price.slice(1));

  totalCost.children[0].children[0].children[1].innerText = `$${sum}`;
});

const deletebtns = document.querySelectorAll(".item-delete");
const tr = document.querySelectorAll(".item-content");
deletebtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let srcImg = btn.parentElement.querySelector("img").getAttribute("src");
    data.forEach((e) => {
      if (e.imgSrc == srcImg) {
        const index = data.indexOf(e);
        if (index > -1) {
          data.splice(index, 1);
        }
      }
    });
    let json = JSON.stringify(data);
    localStorage.setItem("data", json);

    btn.parentElement.remove();

    const allCost = document.querySelectorAll(".item-total");
    const [useless, ...restArr] = allCost;
    haveToPay = 0;
    restArr.forEach((e) => {
      haveToPay += parseFloat(e.children[0].innerText.slice(1));
    });
    totalWithEcoTax.innerText = `$${haveToPay + 2}`;
    totalCost.children[0].children[0].children[1].innerText =`$${updateCost()}`;;
  });
});
