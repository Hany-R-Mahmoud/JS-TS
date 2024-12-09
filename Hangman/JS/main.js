const letters = "abcdefghijklmnopqrstuvwxyz'1234567890";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

// objects + categories
const words = {
  movies: [
    "Forest Gump",
    "Shawshank Redemption",
    "The godfather",
    "Lord of the rings",
    "Eternal sunshine of the spotless mind",
    "Inception",
    "Coco",
    "Inside out",
    "Harry potter",
  ],
  countries: [
    "Egypt",
    "Saudi Arabia",
    "Sudan",
    "Libya",
    "Morocco",
    "Algeria",
    "Tunisia",
    "Mauritania",
    "Jordan",
    "Palestine",
    "Syria",
    "Lebanon",
    "Yemen",
    "Iraq",
    "Kuwait",
    "Qatar",
    "Oman",
    "Emirates",
    "Bahrain",
    "Comoros",
    "Somalia",
  ],
  tv_Shows: [
    "Friends",
    "Grey's Anatomy",
    "Broklyn 99",
    "The office",
    "Attack on titans",
    "Ninja turtles",
    "House",
  ],
};

let allKeys = Object.keys(words);
let randomPropKey = allKeys[Math.floor(Math.random() * allKeys.length)];
let randomPropValue = words[randomPropKey];
let chosenWord =
  randomPropValue[Math.floor(Math.random() * randomPropValue.length)];
document.querySelector(".game-info .category span").innerHTML = randomPropKey;

// letters guess
let lettersGuessContainer = document.querySelector(".letters-guess");

let chosenWordArray = Array.from(chosenWord.toLowerCase());

chosenWordArray.forEach((letter) => {
  let span = document.createElement("span");
  if (letter == " ") {
    span.className = "has-space";
  }
  lettersGuessContainer.appendChild(span);
});

// set status
let theStatus = false;

let wrongAttempts = 0;

//the draw element
let theDraw = document.querySelector(".hangman-draw");

// handling letters
let lettersGuessSpans = document.querySelectorAll(".letters-guess span");

document.addEventListener("click", (e) => {
  theStatus = false;
  if (e.target.className == "letter-box") {
    e.target.classList.add("clicked");

    let clickedLetter = e.target.innerHTML.toLowerCase();
    chosenWordArray.forEach((wordLetter, wordIndex) => {
      if (wordLetter == clickedLetter) {
        theStatus = true;
        lettersGuessSpans.forEach((span, spanIndex) => {
          if (wordIndex == spanIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });

    if (theStatus !== true) {
      wrongAttempts++;
      theDraw.classList.add(`wrong-${wrongAttempts}`);
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    } else {
      document.getElementById("success").play();
    }
  }
});

function endGame() {
  Swal.fire(`Game Over 
        The Word is ${chosenWord}`);
  document.getElementById("over").play();
}
