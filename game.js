//1. Variables//
const startButton = document.getElementById("startButton");
const player = document.getElementById("player");
const apple = document.querySelectorAll(".game__apples");
const hearts = document.querySelectorAll(".game__chance");
const queen = document.querySelector(".game__decoration");

//2. Moving Player//
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

//3. Falling Objects//

//Reset Apple Position
const resetApples = () => {
  apple.style.top = "0px";
};

//Falling Apples
apple.style.position = "relative";
apple.style.top = "0px";

const fallingApples = () => {
  detectCollision();
  const position = parseInt(apple.style.top);
  console.log(position);
  const borderBottom = apple.parentElement.clientHeight - apple.height;

  if (position <= borderBottom) {
    apple.style.top = position + 10 + "px";
    apple.style.left = Math.floor(Math.random() * 10) + "px";
  } else if (position >= borderBottom) {
    resetApples();
  }
};

//Start Btn
const callFallingApples = () => {
  console.log("start");
  startButton.removeEventListener("click", callFallingApples);
  startButton.addEventListener("click", stopFallingApples);
  startButton.innerText = "Pause";
  return (fallingApplesInterval = setInterval(fallingApples, 100));
};

//Pause Btn
const stopFallingApples = () => {
  console.log("stop");
  startButton.removeEventListener("click", stopFallingApples);
  startButton.addEventListener("click", callFallingApples);
  startButton.innerText = "Start";
  return clearInterval(fallingApplesInterval);
};

startButton.addEventListener("click", callFallingApples);

//4. Collision

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
    resetApples();
    deductHearts(heartsLeft);
  }
};
// Lost Chance
const deductHearts = (heartsLeft) => {
  if (heartsLeft > 0) {
    hearts[heartsLeft].style.display = "none";
  } else {
    alert("Game Over");
  }
};

// console.log(apple.x);
// console.log(player.x);
// console.log(player.width);
// console.log(apple.width);
// detectCollision();

// hearts[1].style.display = "none";
// hearts[0].style.display = "none";
