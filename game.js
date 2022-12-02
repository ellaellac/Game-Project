//1. Variables//
const startButton = document.getElementById("startButton");
const player = document.getElementById("player");
const apple = document.querySelectorAll(".game__apples");
const hearts = document.querySelectorAll(".game__chance");
const queen = document.querySelector(".game__decoration");
const congratImg = document.getElementById("game__win");

//2. Moving Player//
player.style.position = "relative";
player.style.left = "0px";

const movingPlayer = (event) => {
  const position = parseInt(player.style.left);
  const borderEnd = player.parentElement.clientWidth - player.width;
  if (event.code === "ArrowLeft" && position >= 0) {
    player.style.left = position - 10 + "px";
  } else if (event.code === "ArrowRight" && position < borderEnd) {
    player.style.left = position + 10 + "px";
  } else {
    console.log("other keys pressed");
  }
};

document.addEventListener("keydown", movingPlayer);

//3. Falling Objects//
//Reset EACH Apple Position
const resetApples = (i) => {
  apple[i].style.top = "0px";
  console.log("reset");
};

//ALL Apples initial position
for (let i = 0; i < apple.length; i++) {
  apple[i].style.position = "relative";
  apple[i].style.top = "0px";
}
//Falling Apples
const fallingApples = () => {
  for (let i = 0; i < apple.length; i++) {
    const position = parseInt(apple[i].style.top);
    const borderBottom = apple[i].parentElement.clientHeight - apple[i].height;
    console.log(position);
    //apple falling animation
    if (position <= borderBottom) {
      apple[i].style.top = position + Math.floor(Math.random() * 40) + "px";
      apple[i].style.left = Math.floor(Math.random() * (15 + 15) - 15) + "px";
      apple[i].style.transform = `rotate(${Math.floor(
        Math.random() * (20 + 20) - 20
      )}deg)`;
    }
    //reset apple position
    else if (position >= borderBottom) {
      resetApples(i);
    }
    //detect Collision
    detectCollision();
  }
};

//4. Collision //

let heartsLeft = 3;

const detectCollision = () => {
  for (let i = 0; i < apple.length; i++) {
    if (
      apple[i].x + apple[i].width >= player.x &&
      apple[i].x <= player.x + player.width &&
      apple[i].y + apple[i].height >= player.y &&
      apple[i].y <= player.y + player.height
    ) {
      console.log("collision");
      resetApples(i);

      console.log((heartsLeft = heartsLeft - 1));
      deductHearts(heartsLeft);
    }
  }
};

console.log(heartsLeft);

// Lost Chance
const deductHearts = (heartsLeft) => {
  if (heartsLeft > 0) {
    hearts[heartsLeft].style.display = "none";
  } //Game Over
  else {
    alert("Game Over");
    stopFallingApples();
  }
};

//5. Restart Game
const restart = () => {
  console.log("restart");
  //fill Hearts
  heartsLeft = 3;
  for (let i = 0; i < apple.length; i++) {
    hearts[i].style.display = "unset";
  }
  //apple return original position
  for (let i = 0; i < apple.length; i++) {
    apple[i].style.position = "relative";
    apple[i].style.top = "0px";
    apple[i].style.display = "none";
  }
};
//6. Control Running Time
const gameTimeFunction = () => {
  return (gameTime = setTimeout(gameWon, 30000));
};
//7. Start
const callFallingApples = () => {
  console.log("Start");
  //Btn Change to STOP
  startButton.removeEventListener("click", callFallingApples);
  startButton.addEventListener("click", stopFallingApples);
  startButton.innerText = "STOP";
  //apple display
  for (let i = 0; i < apple.length; i++) {
    apple[i].style.display = "unset";
  }
  //Congrats Img disappear
  congratImg.style.display = "none";
  //Start counting Time -- 30 sec
  gameTimeFunction();
  //Call apples to fall
  return (fallingApplesInterval = setInterval(fallingApples, 400));
};

//8. STOP Btn
const stopFallingApples = () => {
  console.log("Stop");
  //Btn Change to Start
  startButton.removeEventListener("click", stopFallingApples);
  startButton.addEventListener("click", callFallingApples);
  startButton.innerText = "Start";
  //Apples back to initial position & hearts fill
  restart();
  //clear Time countdown
  clearTimeout(gameTime);
  //Stop falling apples
  return clearInterval(fallingApplesInterval);
};

startButton.addEventListener("click", callFallingApples);

// 9. Game Won
const gameWon = () => {
  congratImg.style.display = "unset";
  stopFallingApples();
  //clear Time countdown
  clearTimeout(gameTime);
  console.log("GAME END");
};
