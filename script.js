import books from "./books.json" assert { type: "json" };

let wrapper = document.getElementsByClassName("wrapper");

const header = document.createElement("header");
header.innerHTML = `<div class="burger-menu"><nav><div class="navbar"><div class="container nav-container"><input class="checkbox" type="checkbox" name="" id="" /><div class="hamburger-lines"><span class="line line1"></span><span class="line line2"></span><span class="line line3"></span></div><div class="logo-image"><img src="./assets/icon/logo.png" alt="logo" /></div><div class="basket-button"><button><img src="./assets/icon/card.png" alt="basket" /></button></div><div class="menu-items"><li><a href="#">Home</a></li><li><a href="#">About</a></li><li><a href="#">Books</a></li><li><a href="#">Contacts</a></li></div></div></div></nav></div>`;
wrapper[0].appendChild(header);

const main = document.createElement("main");
const blockProduct = document.createElement("div");
blockProduct.classList.add("product-list");
main.appendChild(blockProduct);

for(let i = 0; i < books.length; i++){
    blockProduct.innerHTML += `
    <div class="product-item key=${i}">
        <div class="product-image">
            <img src=${books[i].imageLink} alt="img-${i}">
        </div>
        <div class="product-details">
            <p>${books[i].title}</p>
            <p>$ ${books[i].price}.00</p>
        </div>
    </div>`;
}


wrapper[0].appendChild(main);
