// UP-Button
const upBtn = <HTMLSpanElement>document.getElementById("up-btn");
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? upBtn.classList.add("show")
    : upBtn.classList.remove("show");
});
upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//  scroller

const scroller = <HTMLDivElement>document.querySelector(".scroller");
window.addEventListener("scroll", () => {
  scroller.style.width = `${
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  }%`;
});

// increase number on scroll
let sectionThree = <HTMLElement>document.querySelector(".three");
let sectionFour = <HTMLElement>document.querySelector(".four");
let sectionNums = document.querySelectorAll(".three .nums div");
let sectThreeInitiation = false;

function sectThree() {
  sectionNums.forEach((num: any) => {
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
let sectFourBars: any = document.querySelectorAll(".four .progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= sectionFour.offsetTop) {
    sectFourBars.forEach(
      (bar: { style: { width: any }; dataset: { width: any } }) => {
        bar.style.width = bar.dataset.width;
      }
    );
  } else if (window.scrollY < sectionFour.offsetTop) {
    sectFourBars.forEach((bar: { style: { width: number } }) => {
      bar.style.width = 0;
    });
  }
});

// full-screen navigation
const toggleButton = <HTMLButtonElement>document.querySelector(".toggle");
const closeButton = <HTMLButtonElement>document.querySelector(".close");
const fullScreen = document.querySelector(".full-screen");
const navBtns = <NodeListOf<HTMLLIElement>>document.querySelectorAll(".full-screen ul li a");

toggleButton.addEventListener("click", () => {
  fullScreen.style.translateY = "0",
  closeButton.style.translateY = "0"
})
closeButton.addEventListener("click", () => {
  fullScreen.style.translateY = "-2000px",
    closeButton.style.translateY = "-200px" ,
});
navBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullScreen.style.translateY = "-2000px",
  closeButton.style.translateY = "-200px",
  })
})
// clock && countdown

const clock = <HTMLDivElement>document.querySelector(".clock");
setInterval(() => {
  let newDate = new Date();
  let hours: number | string = newDate.getHours();
  let minutes: number | string = newDate.getMinutes();
  let seconds: number | string = newDate.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let currentTime = hours + ":" + minutes + ":" + seconds;
  clock.innerHTML = currentTime;
}, 1000);

let countDownTime = 120;
const countDown = <HTMLDivElement>document.querySelector(".countdown");
setInterval(() => {
  let minutes: string | number = Math.floor(countDownTime / 60);
  let seconds: string | number = countDownTime % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countDown.innerHTML = minutes + ":" + seconds;
  if (countDownTime > 0) {
    countDownTime--;
  } else {
    location.reload();
  }
}, 1000);

//  section 5 - photo shuffle

setInterval(() => {
  const shuffledImage = <HTMLImageElement>(
    document.querySelector(".image-shuffle img")
  );
  const imageAlbum: string[] = [
    "https://ik.imagekit.io/hrim/IMG/shuffle-1.jpg?updatedAt=1731737806355",
    "https://ik.imagekit.io/hrim/IMG/shuffle-2.jpg?updatedAt=1731737806238",
    "https://ik.imagekit.io/hrim/IMG/shuffle-3.jpg?updatedAt=1731737806043",
    "https://ik.imagekit.io/hrim/IMG/shuffle-4.jpg?updatedAt=1731737806597",
    "https://ik.imagekit.io/hrim/IMG/shuffle-5.jpg?updatedAt=1731737805431",
  ];
  let randomImage = imageAlbum[Math.floor(Math.random() * imageAlbum.length)];
  shuffledImage.src = randomImage;
}, 6000);

// section 2 - tabs and content
let sectionTwoTabsArray = Array.from(
  document.querySelectorAll(".two .tabs li")
);
let sectionTwoContentArray = Array.from(
  document.querySelectorAll(".two .content div")
);
sectionTwoTabsArray.forEach((tab) => {
  tab.addEventListener("click", (e: any) => {
    sectionTwoTabsArray.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    sectionTwoContentArray.forEach((cont: any) => {
      cont.style.display = "none";
    });
    let targetContent = document.querySelector(e.currentTarget.dataset.tab);
    targetContent.style.display = "block";
  });
});

// Section 1 - Photo slider

let sliderCollectionArray: string[] = [
  "https://ik.imagekit.io/hrim/IMG/slider-1.jpg?updatedAt=1731737805889",
  "https://ik.imagekit.io/hrim/IMG/slider-2.jpg?updatedAt=1731737805542",
  "https://ik.imagekit.io/hrim/IMG/slider-3.jpg?updatedAt=1731737805578",
  "https://ik.imagekit.io/hrim/IMG/slider-4.jpg?updatedAt=1731737805248",
  "https://ik.imagekit.io/hrim/IMG/slider-5.jpg?updatedAt=1731737806170",
  "https://ik.imagekit.io/hrim/IMG/slider-6.jpg?updatedAt=1731737808813",
];
let slider = <HTMLElement>document.querySelector(".slider");
let slidePrevBtn = document.querySelector(".slide-control .prev");
let slideNextBtn = document.querySelector(".slide-control .next");
let slideBullets = <HTMLElement>document.querySelector(".slide-bullets");
let currentImage: any = 1;

for (let i: any = 0; i < sliderCollectionArray.length; i++) {
  let slideBullet = document.createElement("li");
  slideBullet.appendChild(document.createTextNode(i + 1));
  slideBullet.className = "slide-bullet";
  slideBullet.setAttribute("data-slide", i + 1);
  slideBullets.appendChild(slideBullet);

  let sliderImage = <HTMLImageElement>document.createElement("img");
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
    ? slidePrevBtn?.classList.add("disabled")
    : slidePrevBtn?.classList.remove("disabled");
  currentImage == sliderImagesArray.length
    ? slideNextBtn?.classList.add("disabled")
    : slideNextBtn?.classList.remove("disabled");
}
slideChecker();
slideNextBtn?.addEventListener("click", () => {
  !slideNextBtn?.classList.contains("disabled")
    ? currentImage++ && slideChecker()
    : false;
});
slidePrevBtn?.addEventListener("click", () => {
  !slidePrevBtn?.classList.contains("disabled")
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
let textArea = <HTMLTextAreaElement>(
  document.querySelector(".sect-two  #input-message")
);
let charLeftSpan: any = <HTMLSpanElement>(
  document.querySelector(".sect-two fieldset span")
);

textArea.addEventListener("keyup", function () {
  charLeftSpan.textContent = 100 - this.value.length;

  charLeftSpan.textContent < 0
    ? (charLeftSpan.style.color = "red")
    : (charLeftSpan.style.color = "#633482");
});

let password = <HTMLInputElement>document.querySelector("#password");
let passBtn = <HTMLDivElement>document.querySelector(".show-hide");

passBtn.addEventListener("click", () => {
  if (passBtn.textContent == "Show Password") {
    password.setAttribute("type", "text");
    passBtn.textContent = "Hide Password";
  } else if (passBtn.textContent == "Hide Password") {
    password.setAttribute("type", "password");
    passBtn.textContent = "Show Password";
  }
});
