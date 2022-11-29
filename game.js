//Variables
const startButton = document.getElementById("startButton");
const player = document.getElementById("player");
const apple = document.getElementById("apple");
const hearts = document.querySelectorAll(".game__chance");

//Moving Player
player.style.position = "relative";
player.style.left = "0px";

const movingPlayer = (event) => {
  const position = parseInt(player.style.left);
  const borderEnd = player.parentElement.clientWidth - player.width;
  // console.log(player.width);
  if (event.code === "ArrowLeft" && position >= 0) {
    player.style.left = position - 10 + "px"; //console.log("ArrowLeft");
  } else if (event.code === "ArrowRight" && position < borderEnd) {
    player.style.left = position + 10 + "px"; //console.log("ArrowRight");
  } else {
    console.log("other keys pressed");
  }
};

document.addEventListener("keydown", movingPlayer);

//Falling Objects
apple.style.position = "relative";
apple.style.top = "0px";

const fallingApples = () => {
  detectCollision();
  const position = parseInt(apple.style.top);
  console.log(position);
  const borderBottom = apple.parentElement.clientHeight - apple.height * 2;

  if (position <= borderBottom) {
    apple.style.top = position + 10 + "px";
    apple.style.left = Math.floor(Math.random() * 15) + "px";
  } else if (position >= borderBottom) {
    apple.style.top = "0px";
  }
};

const callFallingApples = () => {
  console.log("start");
  startButton.removeEventListener("click", callFallingApples);
  startButton.addEventListener("click", stopFallingApples);
  return (fallingApplesInterval = setInterval(fallingApples, 100));
};

const stopFallingApples = () => {
  console.log("stop");
  startButton.removeEventListener("click", stopFallingApples);
  startButton.addEventListener("click", callFallingApples);
  return clearInterval(fallingApplesInterval);
};

startButton.addEventListener("click", callFallingApples);

//Collision
// console.log(apple.x);
// console.log(player.x);
// console.log(player.width);
// console.log(apple.width);

let heartsLeft = 3;

const detectCollision = () => {
  if (
    apple.x + apple.width >= player.x &&
    apple.x <= player.x + player.width &&
    apple.y + apple.height >= player.y &&
    apple.y <= player.y + player.height
  ) {
    console.log("collision");
    console.log((heartsLeft = heartsLeft - 1));
    deductHearts(heartsLeft);
  }
};

const deductHearts = (heartsLeft) => {
  hearts[heartsLeft].style.display = "none";
};

// detectCollision();

// hearts[1].style.display = "none";
// hearts[0].style.display = "none";
