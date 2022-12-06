let wrapper = document.getElementsByClassName("wrapper");

// --------- Start Modal Form -------
let modalForm = document.createElement("div");
modalForm.classList.add("send-form-modal");
modalForm.innerHTML = `
<div class="modal-content-form">
<button class="send-form-close">&times;</button>
<form id="form">
<h1>Send books</h1>
<label for="name">Name:</label>
<input type="text" id="name" placeholder="Enter Name" required />
<div class="error-mesg-name">Name unvalid. Please, check the entered data</div>
<label for="surname">Surname:</label>
<input type="text" id="surname" placeholder="Enter Surname" required />
<div class="error-mesg-surname">Surname unvalid. Please, check the entered data</div>
<label for="delivery">Delivery Date:</label>
<input type="date" id="delivery" required />
<label for="street">Street:</label>
<input type="text" id="street" placeholder="Enter Street" required />
<div class="error-mesg-length-street">Street unvalid. Please, check the entered data</div>
<label for="house">House Number:</label>
<input type="number" id="house" placeholder="Enter House Number" required min="0" />
<div class="error-mesg-numbers-house">House Number unvalid. Please, check the entered data</div>
<label for="flat">Flat Number:</label>
<input type="number" id="flat" placeholder="Enter Flat Number" required />
<div class="error-mesg-numbers-flat">Flat Number unvalid. Please, check the entered data</div>
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

const errorMsgName = document.querySelector(".error-mesg-name");
const errorMsgSurname = document.querySelector(".error-mesg-surname");
const errorMsgLengthStreet = document.querySelector(
  ".error-mesg-length-street"
);
const errorMsgNumbersHouse = document.querySelector(
  ".error-mesg-numbers-house "
);
const errorMsgNumbersFlat = document.querySelector(".error-mesg-numbers-flat ");

const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const streetInput = document.querySelector("#street");
const houseInput = document.querySelector("#house");
const flatInput = document.querySelector("#flat");

let tomorrow = new Date();
tomorrow = new Date(tomorrow.setDate(tomorrow.getDate() + 2))
  .toISOString()
  .split("T")[0];
document.getElementById("delivery").setAttribute("min", tomorrow);
document.getElementById("delivery").value = tomorrow;

function refreshButtonSubmit() {
  let btnSubmit = document.querySelector(".submit-btn");
  let listError = document.querySelectorAll(".input-error");
    if (listError.length == 0) {
      btnSubmit.removeAttribute("disabled");
    }else{
        btnSubmit.setAttribute("disabled", true);
    }
}

function validateName(e) {    
  if (
    e.target.value.length >= 4 &&
    /^[A-Za-z\s]*$/.test(e.target.value) &&
    ! /\s/g.test(e.target.value)
  ) {
    errorMsgName.style.display = "none";
    nameInput.classList.remove("input-error");
  } else {
    errorMsgName.style.display = "block";
    nameInput.classList.add("input-error");
  }
  refreshButtonSubmit();
}

function validateSurname(e) {
  if (
    e.target.value.length >= 5 &&
    /^[A-Za-z\s]*$/.test(e.target.value) &&
    ! /\s/g.test(e.target.value)
  ) {
    errorMsgSurname.style.display = "none";
    surnameInput.classList.remove("input-error");
  } else {
    errorMsgSurname.style.display = "block";
    surnameInput.classList.add("input-error");
  }
  refreshButtonSubmit();
}

function validateStreet(e) {
  if (e.target.value.length >= 5) {
    errorMsgLengthStreet.style.display = "none";
    streetInput.classList.remove("input-error");
  } else {
    errorMsgLengthStreet.style.display = "block";
    streetInput.classList.add("input-error");
  }
  refreshButtonSubmit();
}

function validateHouseNumber(e) {
  if (e.target.value <= 1) {
    errorMsgNumbersHouse.style.display = "block";
    houseInput.classList.add("input-error");
  } else {
    errorMsgNumbersHouse.style.display = "none";
    houseInput.classList.remove("input-error");
  }
  refreshButtonSubmit();
}

function validateFlatNumber(e) {
  if (e.target.value <= 1) {
    errorMsgNumbersFlat.style.display = "block";
    flatInput.classList.add("input-error");
  } else {
    errorMsgNumbersFlat.style.display = "none";
    flatInput.classList.remove("input-error");
  }
  refreshButtonSubmit();
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

// --------- End Modal Form -------

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
  if (e.target.id == "street") {
    validateStreet(e);
  }
  if (e.target.id == "house") {
    validateHouseNumber(e);
  }
  if (e.target.id == "flat") {
    validateFlatNumber(e);
  }
});

window.addEventListener("submit", function (e) {
  if (e.target.className == "submit-btn") {
  }
});
