let imageArray = Array.from(document.querySelectorAll(".slider-container img"));
let imageArrayCount = imageArray.length;
let currentSlide = 1;
let imageNumber = document.getElementById("image-number");
prevBtn = document.getElementById("prev");
nextBtn = document.getElementById("next");

// create ul & li
let bulletUl = document.createElement("ul");
document.querySelector(".bullet").appendChild(bulletUl);

for (let i = 1; i <= imageArrayCount; i++) {
  let bulletLi = document.createElement("Li");
  bulletLi.setAttribute("data-index", i);
  bulletLi.appendChild(document.createTextNode(i));
  bulletUl.appendChild(bulletLi);
}
let liArray = Array.from(document.querySelectorAll(".bullet li"));

// checker function

function checker() {
  imageNumber.textContent = "Slide #" + currentSlide + " of " + imageArrayCount;

  imageArray.forEach((e) => e.classList.remove("active"));
  liArray.forEach((e) => e.classList.remove("active"));

  imageArray[currentSlide - 1].classList.add("active");
  liArray[currentSlide - 1].classList.add("active");

  currentSlide === 1
    ? prevBtn.classList.add("disabled")
    : prevBtn.classList.remove("disabled");

  currentSlide === imageArrayCount
    ? nextBtn.classList.add("disabled")
    : nextBtn.classList.remove("disabled");
}
checker();

// buttons
nextBtn.addEventListener("click", () => {
  !nextBtn.classList.contains("disabled") ? currentSlide++ & checker() : false;
});
prevBtn.addEventListener("click", () => {
  !prevBtn.classList.contains("disabled") ? currentSlide-- & checker() : false;
});

for (let i = 0; i < liArray.length; i++) {
  liArray[i].onclick = function () {
    currentSlide = +this.getAttribute("data-index");
    checker();
  };
}
