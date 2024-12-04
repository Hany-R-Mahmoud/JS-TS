// Elements
let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }
    if (e.target.classList.contains("add-item")) {
      addItem();
    }
    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }
    if (e.target.classList.contains("show-items")) {
      showItems();
    }
  });
});
function showMessage() {
  results.innerHTML = "Type The Item first ";
}
function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      results.innerHTML = `Found Local Storage item called <span>${theInput.value}</span>`;
    } else {
      results.innerHTML = `No Local item called <span>${theInput.value}</span> Found`;
    }
  } else {
    showMessage();
  }
}
function addItem() {
  if (theInput.value !== "") {
    localStorage.setItem(theInput.value, `${theInput.value}`);
    results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
    theInput.value = "";
  } else {
    showMessage();
  }
}
function deleteItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      localStorage.removeItem(theInput.value);
      results.innerHTML = `Local Storage item called <span>${theInput.value}</span> Deleted`;
      theInput.value = "";
    } else {
      results.innerHTML = `No Local Storage item called <span>${theInput.value}</span> Found`;
    }
  } else {
    showMessage();
  }
}
function showItems() {
  if (localStorage.length) {
    results.innerHTML = "";
    for (let [key, value] of Object.entries(localStorage)) {
      results.innerHTML += `<span class="keys">${key}${value}</span>`;
    }
  } else {
    results.innerHTML = "Local Storage is empty";
  }
}
