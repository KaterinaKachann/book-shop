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
      
    </div>
    <div class="menu-items">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Books</a></li>
      <li><a href="#">Contacts</a></li>
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

let modalForm = document.createElement("div");
modalForm.classList.add("send-form-modal");
modalForm.innerHTML = `
<div class="modal-content-form">
<button class="send-form-close">&times;</button>
<form id="form">
<h1>Send books</h1>
<label for="name">Name:</label>
<input type="text" id="name" placeholder="Enter Name" required />
<div class="error-mesg-length-name">Name should contain at least 4 element</div>
<div class="error-mesg-letters-name">Name should contain only letters</div>
<div class="error-mesg-space-name">Name should not has spaces</div>
<label for="surname">Surname:</label>
<input type="text" id="surname" placeholder="Enter Surname" required />
<div class="error-mesg-length-surname">Surname should contain at least 5 element</div>
<div class="error-mesg-letters-surname">Surname should contain only letters</div>
<div class="error-mesg-space-surname">Surname should not has spaces</div>
<label for="delivery">Delivery Date:</label>
<input type="date" id="delivery" required />
<label for="street">Street:</label>
<input type="text" id="street" placeholder="Enter Street" required />
<div class="error-mesg-length-street">Street should contain at least 5 element</div>
<label for="house">House Number:</label>
<input type="number" id="house" placeholder="Enter House Number" required min="0" />
<div class="error-mesg-numbers-house">House Number should contain only positive numbers</div>
<label for="flat">Flat Number:</label>
<input type="number" id="flat" placeholder="Enter Flat Number" required />
<div class="error-mesg-numbers-flat">Flat Number should contain only positive numbers</div>
<fieldset>
<legend>Choose the payment type:</legend>
<label for="Cash">
<input type="radio" id="Cash" name="payment" required/>Cash</label>
<label for="Card">
<input type="radio" id="Card" name="payment" required>Card</label>
</fieldset>
<fieldset>
<legend>Choose 2 gifts(optional):</legend>
<div>
<input type="checkbox" id="pack" value="pack" class="gift"/>
<label for="pack">Pack as a gift </label>
</div>
<div>
<input type="checkbox" id="postcard" value="postcard" class="gift">
<label for="Card">Add postcard</label>
</div>
<div>
<input type="checkbox" id="discount" value="discount" class="gift">
<label for="discount">Provide 2% discount to the next time</label>
</div>
<div>
<input type="checkbox" id="pen" value="pen" class="gift">
<label for="pen">Branded pen or pencil</label>
</div>
</fieldset>
<button class="submit-btn" type="submit" disabled>Submit</button>
</form>
</div>`;
wrapper[0].appendChild(modalForm);

const form = document.querySelector("#form");

const errorMsgLengthName = document.querySelector(".error-mesg-length-name");
const errorMsgLettersName = document.querySelector(".error-mesg-letters-name");
const errorMsgSpaceName = document.querySelector(".error-mesg-space-name");

const errorMsgLengthSurname = document.querySelector(
  ".error-mesg-length-surname"
);
const errorMsgLettersSurname = document.querySelector(
  ".error-mesg-letters-surname"
);
const errorMsgSpaceSurname = document.querySelector(
  ".error-mesg-space-surname"
);

const errorMsgLengthStreet = document.querySelector(
  ".error-mesg-length-street"
);

const errorMsgNumbersHouse = document.querySelector(
  ".error-mesg-numbers-house "
);

const errorMsgNumbersFlat = document.querySelector(
  ".error-mesg-numbers-flat "
);

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const streetInput = document.querySelector("#street");
const houseInput = document.querySelector("#house");
const flatInput = document.querySelector("#flat");

let tomorrow = new Date();
tomorrow = new Date(tomorrow.setDate(tomorrow.getDate() + 2)).toISOString().split('T')[0];
document.getElementById("delivery").setAttribute('min', tomorrow);
document.getElementById("delivery").value = tomorrow;

function validateName(e) {
  if (e.target.value.length >= 4) {
    errorMsgLengthName.style.display = "none";
    nameInput.classList.remove("input-error");
  } else {
    errorMsgLengthName.style.display = "block";
    nameInput.classList.add("input-error");
  }

  if (/^[A-Za-z\s]*$/.test(e.target.value)) {
    errorMsgLettersName.style.display = "none";
    nameInput.classList.remove("input-error");
  } else {
    errorMsgLettersName.style.display = "block";
    nameInput.classList.add("input-error");
  }

  if (/\s/g.test(e.target.value)) {
    errorMsgSpaceName.style.display = "block";
    nameInput.classList.add("input-error");
  } else {
    errorMsgSpaceName.style.display = "none";
    nameInput.classList.remove("input-error");
  }
}

function validateSurname(e) {
  if (e.target.value.length >= 5) {
    errorMsgLengthSurname.style.display = "none";
    surnameInput.classList.remove("input-error");
  } else {
    errorMsgLengthSurname.style.display = "block";
    surnameInput.classList.add("input-error");
  }

  if (/^[A-Za-z\s]*$/.test(e.target.value)) {
    errorMsgLettersSurname.style.display = "none";
    surnameInput.classList.remove("input-error");
  } else {
    errorMsgLettersSurname.style.display = "block";
    surnameInput.classList.add("input-error");
  }

  if (/\s/g.test(e.target.value)) {
    errorMsgSpaceSurname.style.display = "block";
    surnameInput.classList.add("input-error");
  } else {
    errorMsgSpaceSurname.style.display = "none";
    surnameInput.classList.remove("input-error");
  }
}

function validateStreet(e){
  if(e.target.value.length >= 5){
    errorMsgLengthStreet.style.display = "none";
    streetInput.classList.remove("input-error");
  } else {
    errorMsgLengthStreet.style.display = "block";
    streetInput.classList.add("input-error");
  }
}

function validateHouseNumber(e){
  if (e.target.value < 0) {
    errorMsgNumbersHouse.style.display = "block";
    houseInput.classList.add("input-error");
  } else {
    errorMsgNumbersHouse.style.display = "none";
    houseInput.classList.remove("input-error");
  }
}

function validateFlatNumber(e){
  if (e.target.value < 0) {
    errorMsgNumbersFlat.style.display = "block";
    flatInput.classList.add("input-error");
  } else {
    errorMsgNumbersFlat.style.display = "none";
    flatInput.classList.remove("input-error");
  }
}

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
    let formSend = document.getElementsByClassName("send-form-modal")[0];
    formSend.style.display = "block";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    formSend.style.overflow = "auto";
    modalBasket.style.display = "none";
    console.log(document.querySelectorAll('input')[0].value)
  }
  // --------- Button Close Form Send -------
  if (e.target.className == "send-form-close") {
    let formSend = document.getElementsByClassName("send-form-modal")[0];
    formSend.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    modalBasket.style.display = "block";
    modalBasket.style.overflow = "auto";
  }
});

// --------- Event which change quantity -------
window.addEventListener("change", function (e) {
  if (e.target.className == "item-quantity") {
    totalPrice();
  }
  if (e.target.id == "name") {
    validateName(e);
  }
  if (e.target.id == "surname") {
    validateSurname(e);
  }
  if(e.target.id == "street"){
    validateStreet(e)
  }
  if(e.target.id == "house"){
    validateHouseNumber(e);
  }
  if(e.target.id == "flat"){
    validateFlatNumber(e);
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

let counterGift = 0;

function disableChooseGift() {
  const gifts = document.querySelectorAll(".gift");
  gifts.forEach((gift) => {
    if (!gift.checked) {
      gift.disabled = true;
    }
  });
}

function enableChooseGift() {
  const gifts = document.querySelectorAll(".gift");
  gifts.forEach((gift) => {
    gift.disabled = false;
  });
}

function checkChoosenGift(e) {
  const checked = e.currentTarget.checked;
  if (checked) {
    counterGift += 1;
    if (counterGift == 2) {
      disableChooseGift();
    }
  } else {
    if (counterGift == 2) {
      enableChooseGift();
    }
    counterGift -= 1;
  }
}

function handleGift() {
  const gifts = document.querySelectorAll(".gift");
  gifts.forEach((gift) => {
    gift.addEventListener("click", checkChoosenGift);
  });
}

handleGift();

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
