/*
// - show details product using query params
async function generateDetails(id) {
  let result = await fetch(`http://localhost:3000/products?userId=${id}`);
  let data = await result.json();

  handleData(data);
}

let details = document.querySelector(".details-list");
function handleData(data) {
  details.innerHTML = data
    .map((item) => {
      let { id, title, img, body, price, quantity } = item;

      return `
      <li>
        <figure>
          <img src="${img}" alt="" />
        </figure>
        <div class="details-title">
          <h3>${title}</h3>
          <p>${body}</p>
          <span>Price: ${price}</span>
          <div class="quantity">
            <p>quantity: </p>
            <input type="text" data-id="${id}" value="${quantity}" />
          </div>
          <button>Add To Cart</button>
        </div>
      </li>
    
    `;
    })
    .join("");
}

export { generateDetails };
*/

// - show details product using find

async function generateDetails(id) {
  let result = await fetch("data-details.json");
  let data = await result.json();

  let product = data.products.find((ele) => ele.id === id);
  if (product) {
    handleData(product);
  }
}

let details = document.querySelector(".details-list");
function handleData(data) {
  let { id, title, img, body, price, quantity } = data;
  details.innerHTML = `
      <li>
        <figure>
          <img src="${img}" alt="" />
        </figure>
        <div class="details-title">
          <h3>${title}</h3>
          <p>${body}</p>
          <span>Price: ${price}</span>
          <div class="quantity">
            <p>quantity: </p>
            <input type="text" data-id="${id}" value="${quantity}" />
          </div>
          <button>Add To Cart</button>
        </div>
      </li>
    `;

  let input = document.querySelector("input");
  let productId = Number(input.getAttribute("data-id"));

  let getData = JSON.parse(localStorage.getItem("products")) || [];
  let product = getData.find((ele) => ele.id === productId);

  if (product) {
    input.value = product.quantity;
  }
}

export { generateDetails };
