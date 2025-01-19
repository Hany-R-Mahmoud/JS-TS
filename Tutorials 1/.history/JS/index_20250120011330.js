"use strict";
// UP-Button
let upBtn = document.getElementById("up-btn");
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? upBtn === null || upBtn === void 0
      ? void 0
      : upBtn.classList.add("show")
    : upBtn === null || upBtn === void 0
    ? void 0
    : upBtn.classList.remove("show");
});
upBtn === null || upBtn === void 0
  ? void 0
  : upBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
//  scroller
let scroller = document.querySelector(".scroller");
window.addEventListener("scroll", () => {
  scroller.style.width = `${
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  }%`;
});
// increase number on scroll
let sectionThree = document.querySelector(".three");
let sectionFour = document.querySelector(".four");
let sectionNums = document.querySelectorAll(".three .nums div");
let sectThreeInitiation = false;
function sectThree() {
  sectionNums.forEach((num) => {
    let targetNum = num.dataset.goal;
    let targetInterval = setInterval(() => {
      num.innerHTML++;
      if (num.innerHTML == targetNum) {
        clearInterval(targetInterval);
      }
    }, 30);
  });
}
window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionThree.offsetTop) {
    if (!sectThreeInitiation) {
      sectThree();
    }
    sectThreeInitiation = true;
  }
});
// fill bar on scroll
let sectFourBars = document.querySelectorAll(".four .progress span");
window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionFour.offsetTop) {
    sectFourBars.forEach((bar) => {
      bar.style.width = bar.dataset.width;
    });
  } else if (window.scrollY < sectionFour.offsetTop) {
    sectFourBars.forEach((bar) => {
      bar.style.width = 0;
    });
  }
});
// full-screen navigation
let toggleBtn = document.querySelector(".toggle");
let closeBtn = document.querySelector(".close");
let fullScreen = document.querySelector(".full-screen ul");
let navBtns = document.querySelectorAll(".full-screen ul li a");
toggleBtn === null || toggleBtn === void 0
  ? void 0
  : toggleBtn.addEventListener("click", () => {
      fullScreen.style.transform = "translateY(0)";
      closeBtn.style.transform = "translateY(0)";
    });
closeBtn.addEventListener("click", () => {
  fullScreen.style.transform = "translateY(-2000px)";
  closeBtn.style.transform = "translateY(-200px)";
});
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullScreen.style.transform = "translateY(-2000px)";
    closeBtn.style.transform = "translateY(-200px)";
  });
});
// clock && countdown
let clockDiv = document.querySelector(".clock");
setInterval(() => {
  let newTime = new Date();
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();
  let seconds = newTime.getSeconds();
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;
  let currentTime = hours + ":" + minutes + ":" + seconds;
  clockDiv.innerHTML = currentTime;
}, 1000);
let countDownTime = 120;
let countDown = document.querySelector(".countdown");
setInterval(() => {
  let minutes = Math.floor(countDownTime / 60);
  let seconds = countDownTime % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  countDown.innerHTML = minutes + ":" + seconds;
  if (countDownTime > 0) {
    countDownTime--;
    if (countDownTime == 0) {
      document.location = "../index.html/#home";
      location.reload();
    }
  }
}, 1000);
//  section 5 - photo shuffle
setInterval(() => {
  let imageShuffle = document.querySelector(".image-shuffle img");
  let imageShuffleArray = [
    "https://ik.imagekit.io/hrim/IMG/shuffle-1.jpg?updatedAt=1731737806355",
    "https://ik.imagekit.io/hrim/IMG/shuffle-2.jpg?updatedAt=1731737806238",
    "https://ik.imagekit.io/hrim/IMG/shuffle-3.jpg?updatedAt=1731737806043",
    "https://ik.imagekit.io/hrim/IMG/shuffle-4.jpg?updatedAt=1731737806597",
    "https://ik.imagekit.io/hrim/IMG/shuffle-5.jpg?updatedAt=1731737805431",
  ];
  let randomImageShuffle =
    imageShuffleArray[Math.floor(Math.random() * imageShuffleArray.length)];
  imageShuffle.src = randomImageShuffle;
}, 6000);
// section 2 - tabs and content
let sectionTwoTabsArray = Array.from(
  document.querySelectorAll(".two .tabs li")
);
let sectionTwoContentArray = Array.from(
  document.querySelectorAll(".two .content div")
);
sectionTwoTabsArray.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    sectionTwoTabsArray.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    sectionTwoContentArray.forEach((cont) => {
      cont.style.display = "none";
    });
    let targetContent = document.querySelector(e.currentTarget.dataset.tab);
    targetContent.style.display = "block";
  });
});
// Section 1 - Photo slider
let sliderCollectionArray = [
  "https://ik.imagekit.io/hrim/IMG/slider-1.jpg?updatedAt=1731737805889",
  "https://ik.imagekit.io/hrim/IMG/slider-2.jpg?updatedAt=1731737805542",
  "https://ik.imagekit.io/hrim/IMG/slider-3.jpg?updatedAt=1731737805578",
  "https://ik.imagekit.io/hrim/IMG/slider-4.jpg?updatedAt=1731737805248",
  "https://ik.imagekit.io/hrim/IMG/slider-5.jpg?updatedAt=1731737806170",
  "https://ik.imagekit.io/hrim/IMG/slider-6.jpg?updatedAt=1731737808813",
];
let slider = document.querySelector(".slider");
let slidePrevBtn = document.querySelector(".slide-control .prev");
let slideNextBtn = document.querySelector(".slide-control .next");
let slideBullets = document.querySelector(".slide-bullets");
let currentImage = 1;
for (let i = 0; i < sliderCollectionArray.length; i++) {
  let slideBullet = document.createElement("li");
  slideBullet.appendChild(document.createTextNode(i + 1));
  slideBullet.className = "slide-bullet";
  slideBullet.setAttribute("data-slide", i + 1);
  slideBullets.appendChild(slideBullet);
  let sliderImage = document.createElement("img");
  sliderImage.src = sliderCollectionArray[i];
  slider.appendChild(sliderImage);
}
let sliderBulletsArray = document.querySelectorAll(".slide-bullet");
let sliderImagesArray = document.querySelectorAll(".slider img");
function slideChecker() {
  sliderBulletsArray.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  sliderImagesArray.forEach((image) => image.classList.remove("active"));
  sliderBulletsArray[currentImage - 1].classList.add("active");
  sliderImagesArray[currentImage - 1].classList.add("active");
  currentImage == 1
    ? slidePrevBtn === null || slidePrevBtn === void 0
      ? void 0
      : slidePrevBtn.classList.add("disabled")
    : slidePrevBtn === null || slidePrevBtn === void 0
    ? void 0
    : slidePrevBtn.classList.remove("disabled");
  currentImage == sliderImagesArray.length
    ? slideNextBtn === null || slideNextBtn === void 0
      ? void 0
      : slideNextBtn.classList.add("disabled")
    : slideNextBtn === null || slideNextBtn === void 0
    ? void 0
    : slideNextBtn.classList.remove("disabled");
}
slideChecker();
slideNextBtn === null || slideNextBtn === void 0
  ? void 0
  : slideNextBtn.addEventListener("click", () => {
      !(slideNextBtn === null || slideNextBtn === void 0
        ? void 0
        : slideNextBtn.classList.contains("disabled"))
        ? currentImage++ && slideChecker()
        : false;
    });
slidePrevBtn === null || slidePrevBtn === void 0
  ? void 0
  : slidePrevBtn.addEventListener("click", () => {
      !(slidePrevBtn === null || slidePrevBtn === void 0
        ? void 0
        : slidePrevBtn.classList.contains("disabled"))
        ? currentImage-- && slideChecker()
        : false;
    });
sliderBulletsArray.forEach((bullet) => {
  bullet.addEventListener("click", () => {
    currentImage = bullet.getAttribute("data-slide");
    slideChecker();
  });
});
// Section-Two Text-area
let textArea = document.querySelector(".sect-two  #input-message");
let charLeftSpan = document.querySelector(".sect-two fieldset span");
textArea.addEventListener("keyup", function () {
  charLeftSpan.textContent = 100 - this.value.length;
  charLeftSpan.textContent < 0
    ? (charLeftSpan.style.color = "red")
    : (charLeftSpan.style.color = "#633482");
});
let password = document.querySelector("#password");
let passBtn = document.querySelector(".show-hide");
passBtn.addEventListener("click", () => {
  if (passBtn.textContent == "Show Password") {
    password.setAttribute("type", "text");
    passBtn.textContent = "Hide Password";
  } else if (passBtn.textContent == "Hide Password") {
    password.setAttribute("type", "password");
    passBtn.textContent = "Show Password";
  }
});

console.log("hi");
//# sourceMappingURL=index.js.map
