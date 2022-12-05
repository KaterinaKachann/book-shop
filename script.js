import books from "./books.json" assert { type: "json" };

let wrapper = document.getElementsByClassName("wrapper");

// --------- Start Header -------
const header = document.createElement("header");
header.innerHTML = `
<div class="burger-menu">
        <nav>
          <div class="navbar">
            <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
              <div class="logo-image">
                <img src="./assets/icon/logo.png" alt="logo" />
              </div>
              <div class="basket-button">
                <button class="basket-btn">
                  <img src="./assets/icon/card.png" alt="basket" class="basket-btn-img"/>
                  <span class="card-quantity">0</span>
                </button>
              </div>
              <div class="basket-modal">
                <div class="modal-content">
                   <button class="basket-close">&times;</button>
                      <h1 class="title-basket">Basket</h1>
                      <div class="container-modal-basket">
                      <div class="list-item">
                      </div>
                      <div class="item-total">
                      <div>Total:</div>
                      <div class="total-value"></div>
                      <button class="item-button-send">Send</button>
                    
                  
                    </div>
                 </div>
              </div>
              <div class="menu-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Contacts</a></li>
              </div>
            </div>
          </div>
        </nav>
      </div>`;

wrapper[0].appendChild(header);
// --------- End Header -------

// --------- Start Main Cards -------
const main = document.createElement("main");
const blockProduct = document.createElement("div");
blockProduct.classList.add("product-list");
main.appendChild(blockProduct);

for (let i = 0; i < books.length; i++) {
  blockProduct.innerHTML += `
    <div class="product-item key="${i}">
        <div class="product-image">
            <img src=${books[i].imageLink} alt="img-${i}">
        </div>
        <div class="product-details">
        <div class="product-text">
            <p class="product-text-title">${books[i].title}</p>
            <p class="product-text-author">${books[i].author}</p>
            <p>$ ${books[i].price}.00</p>
            </div>
            <div class="product-button">
            <button class="btn-more" key="${i}"><img class="btn-more" key="${i}" src="./assets/icon/three-dots.png"/></button>
            <button class="btn-add" key="${i}"><img class="btn-add-img" key="${i}" id="${i}" src="./assets/icon/add.png"/></button>
            </div>
        </div>
        <div class="product-modal" key="${i}">
          <div class="modal-content">
             <button class="close" key="${i}">&times;</button>
              <div class="container-modal">
                <div class="content-title">
                  <p class="text-title">${books[i].title}</p>
                  <p class="text-price">$ ${books[i].price}.00</p>
                  <p>${books[i].description}</p>
                </div>
                <div class="content-img">
                  <img src="${books[i].imageLink}" alt="img-1" class="item-img">
                </div>
              </div>
           </div>
        </div>
     </div>
    `;
}
wrapper[0].appendChild(main);

let modalForm = document.createElement('div');
modalForm.classList.add("send-form-modal");
modalForm.innerHTML = `
<div class="modal-content-form">
<button class="send-form-close">&times;</button>
<form>
<h1>Send books</h1>
<label for="Name">Name:</label>
<input type="text" id="name" placeholder="Enter Name" required />
<label for="Surname">Surname:</label>
<input type="text id="Surname" placeholder="Enter Surname" required />
<label for="Delivery">Delivery Date:</label>
<input type="date" id="Delivery" required />
<label for="Street">Street:</label>
<input type="text" id="Street" placeholder="Enter Street" required />
<label for="House">House Number:</label>
<input type="number" id="House" placeholder="Enter House Number" required />
<label for="Flat">Flat Number:</label>
<input type="number" id="Flat" placeholder="Enter Flat Number" required />
<fieldset>
<legend>Choose the payment type:</legend>
<label for="Cash">
<input type="radio" id="Cash" name="payment" required/>Cash</label>
<label for="Card">
<input type="radio" id="Card" name="payment" required>Card</label>
</fieldset>
<fieldset>
<legend>Choose 2 gifts:</legend>
<input type="checkbox" id="pack" required/>
<label for="pack">pack as a gift </label>
<input type="checkbox" id="postcard" required>
<label for="Card">add postcard</label>
<input type="checkbox" id="discount" required>
<label for="discount">provide 2% discount to the next time</label>
<input type="checkbox" id="pen" required>
<label for="pen">branded pen or pencil</label>
</fieldset>
<input type="submit" value="Send"/>
</form>
</div>`;
wrapper[0].appendChild(modalForm)


// --------- End Main Cards -------

let modal = document.querySelectorAll(".product-modal");
let modalBasket = document.querySelector(".basket-modal");
const addToCart = document.querySelectorAll(".btn-add-img");
let count = 0;

window.addEventListener("click", function (e) {
  // --------- Button Open Modal About Cards -------
  if (e.target.className == "btn-more") {
    modal[e.target.getAttribute("key")].style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }
  // --------- Button Close Modal About Cards -------
  if (e.target.className == "close") {
    modal[e.target.getAttribute("key")].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
  // --------- Close Modal About Cards -------
  if (e.target.className == "product-modal") {
    modal[e.target.getAttribute("key")].style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
  // --------- Button Open Modal Basket -------
  if (e.target.className == "basket-btn-img") {
    modalBasket.style.display = "block";
    modalBasket.style.overflow = "auto";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    totalPrice();
  }
  // --------- Button Close Modal Basket -------
  if (e.target.className == "basket-close") {
    modalBasket.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
  // --------- Close Modal About Cards -------
  if (e.target.className == "basket-modal") {
    modalBasket.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }
  // --------- Button Add Item To Basket -------
  if (e.target.className == "btn-add-img") {
    updateBasket(count);
    addItemToBasket(e);
  }
  // --------- Button Add Item To Basket -------
  if (e.target.className == "item-remove") {
    removeItem(e);
  }
  // --------- Button Open Form Send -------
  if (e.target.className == "item-button-send") {
    let formSend = document.getElementsByClassName('send-form-modal')[0];
    formSend.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    formSend.style.overflow = "auto";
    modalBasket.style.display = "none";
  }
 // --------- Button Close Form Send -------
 if (e.target.className == "send-form-close") {
  let formSend = document.getElementsByClassName('send-form-modal')[0];
  formSend.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  modalBasket.style.display = "block";
  modalBasket.style.overflow = "auto";
}
});

window.addEventListener("change", function (e) {
  if (e.target.className == "item-quantity") {
    totalPrice();
  }
});

function updateBasket() {
  let listItems = document.querySelectorAll(".basket-item");
  document.getElementsByClassName("card-quantity")[0].textContent =
    1 + listItems.length;
}

function addItemToBasket(e) {
  let cartItem = e.target.id;
  let price =
    document.getElementsByClassName("text-price")[+cartItem].innerText;
  let imageItem = document.getElementsByClassName("item-img")[+cartItem].src;
  let titleItem =
    document.getElementsByClassName("product-text-title")[+cartItem].innerText;
  let authorItem = document.getElementsByClassName("product-text-author")[
    +cartItem
  ].innerText;
  let containerItem = document.getElementsByClassName("list-item");
  let item = document.createElement("div");
  item.classList.add("basket-item-container");
  item.innerHTML = `
    <div class="basket-item">
    <button class="item-remove">&times;</button>
    <img src=${imageItem} alt="img" style="height: 100px" class="img"/>
    <p>${titleItem}</p>
    <p>${authorItem}</p>
    <input class="item-quantity" type="number" value="1" min="0" max="5"/>
    <p class="item-price">${price}</p>
    </div>
    `;
  containerItem[0].appendChild(item);
}

function totalPrice() {
  let total = 0;
  let listItems = document.querySelectorAll(".basket-item");
  document.getElementsByClassName("card-quantity")[0].textContent =
    listItems.length;
  for (let i = 0; i < listItems.length; i++) {
    let itemPrice = listItems[i].getElementsByClassName("item-price")[0];
    let price = parseFloat(itemPrice.innerText.replace("$", ""));
    let itemQuantity =
      listItems[i].getElementsByClassName("item-quantity")[0].value;
    total = total + price * itemQuantity;
  }
  let totalContainer = document.getElementsByClassName("total-value")[0];
  totalContainer.innerText = "$ " + total + ".00";
}

function removeItem(e) {
  e.target.parentElement.parentElement.remove();
  totalPrice();
}

// --------- Start Footer -------
const footer = document.createElement("footer");
footer.innerHTML = `
<div class="container footer-container">
<p>Task</p>
<p>RSSCHOOL 2022</p>
<p>Github</p>
</div>
`;
wrapper[0].appendChild(footer);
// --------- End Footer -------
