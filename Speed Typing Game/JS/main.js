let words = [
  "Hello",
  "Programming",
  "Code",
  "Javascript",
  "Town",
  "Country",
  "Testing",
  "Youtube",
  "Linkedin",
  "Twitter",
  "Github",
  "Leetcode",
  "Internet",
  "Python",
  "Scala",
  "Destructuring",
  "Paradigm",
  "Styling",
  "Cascade",
  "Documentation",
  "Coding",
  "Funny",
  "Working",
  "Dependencies",
  "Task",
  "Runner",
  "Roles",
  "Test",
  "Rust",
  "Playing",
];

let lvls = {
  Easy: 6,
  Medium: 4,
  Hard: 2,
};
let chosenLvl = "Easy";
let lvlDuration = document.querySelector(".seconds");
lvlDuration.innerHTML = lvls[chosenLvl];
let lvlName = document.querySelector(".lvl");

// Selectors
let theContainer = document.querySelector(".container");
let startBtn = document.querySelector(".start");
let theInput = document.querySelector(".container input");
let wordsPool = document.querySelector(".words-pool");
let theWord = document.querySelector(".the-word");
let remainingTime = document.querySelector(".time span");
let totalWords = document.querySelector(".score .total");
let points = document.querySelector(".score .got");
let gameEnd = document.querySelector(".finish");

lvlName.addEventListener("change", () => {
  chosenLvl = lvlName.value;
  lvlDuration.innerHTML = lvls[chosenLvl];
});
totalWords.innerHTML = words.length;

theInput.onpaste = () => false;

startBtn.addEventListener("click", () => {
  startBtn.remove();
  theInput.focus();
  wordsPool.innerHTML = "";

  remainingTime.innerHTML = lvls[chosenLvl];

  lvlName.disabled = true;
  getWord();
});

function getWord() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let randomWordIndex = words.indexOf(randomWord);
  let chosenWord = words.splice(randomWordIndex, 1);

  theWord.innerHTML = chosenWord;
  wordsPool.innerHTML = "";

  for (let i = 0; i < words.length; i++) {
    let wordsInThepool = document.createElement("div");
    let wordsInThepoolTxt = document.createTextNode(words[i]);
    wordsInThepool.appendChild(wordsInThepoolTxt);
    wordsPool.appendChild(wordsInThepool);
  }
  timer();
}

function timer() {
  if (words.length === totalWords.innerHTML - 1) {
    remainingTime.innerHTML = lvls[chosenLvl] + 2;
  } else {
    remainingTime.innerHTML = lvls[chosenLvl];
  }

  let countDown = setInterval(() => {
    remainingTime.innerHTML--;
    if (remainingTime.innerHTML === "0") {
      clearInterval(countDown);
      if (theInput.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
        points.innerHTML++;
        theInput.value = "";

        if (words.length > 0) {
          getWord();
        } else {
          gameEnd.innerHTML = "<span class='good'> Congratz </span>";
          wordsPool.remove();
          let date = new Date();
          window.localStorage.setItem(
            date,
            `${points.innerHTML} from ${totalWords.innerHTML}`
          );
        }
      } else {
        gameEnd.innerHTML = "<span class='bad'> Game End </span>";
        wordsPool.remove();
        theInput.remove();
        theWord.remove();
        let date = new Date();
        window.localStorage.setItem(
          date,
          `${points.innerHTML} from ${totalWords.innerHTML}`
        );

        let restart = document.createElement("button");
        restart.className = "restart";
        restart.innerHTML = "RESTART";
        theContainer.appendChild(restart);

        restart.addEventListener("click", () => {
          location.reload();
        });
      }
    }
  }, 1000);
}

// tasks
//   ---- [01] Save Score To Local Storage With Date
//   ---- [02] Choose Levels From Select Box
//   ---- [03] Break The Logic To More Functions
//   ---- [04] Choose Array Of Words For Every Level
//   ---- [05] Write Game Instruction With Dynamic Values
//   ---- [06] Add 3 Seconds For The First Word
