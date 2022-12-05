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
                    <div class="container-modal-basket">
                      <h1>Basket</h1>
                      <div class="basket-item-container">
                        <div class="basket-item">
                        <p>1</p>
                        <img src="./assets/images/1.png" alt="img" style="height:100px"/>
                        <p>Title</p>
                        <p>Count</p>
                        <p>Price</p>
                      </div>
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
            <button class="btn-add" key="${i}"><img class="btn-add-img" key="${i}" src="./assets/icon/add.png"/></button>
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
                  <img src="${books[i].imageLink}" alt="img-1">
                </div>
              </div>
           </div>
        </div>
     </div>
    `;
}

wrapper[0].appendChild(main);
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
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }
// --------- Button Close Modal Basket -------
  if(e.target.className == "basket-close") {
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
    count++;
    updateBasket(count);
  }
});


function updateBasket(count) {
  document.getElementsByClassName("card-quantity")[0].textContent = count;
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