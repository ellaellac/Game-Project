"use strict";

//Variables
var startButton = document.getElementById("startButton");
var player = document.getElementById("player");
var apple = document.getElementById("apple");
var hearts = document.querySelectorAll(".game__chance"); //Moving Player

player.style.position = "relative";
player.style.left = "0px";

var movingPlayer = function movingPlayer(event) {
  var position = parseInt(player.style.left);
  var borderEnd = player.parentElement.clientWidth - player.width; // console.log(player.width);

  if (event.code === "ArrowLeft" && position >= 0) {
    player.style.left = position - 10 + "px"; //console.log("ArrowLeft");
  } else if (event.code === "ArrowRight" && position < borderEnd) {
    player.style.left = position + 10 + "px"; //console.log("ArrowRight");
  } else {
    console.log("other keys pressed");
  }
};

document.addEventListener("keydown", movingPlayer); //Falling Objects

apple.style.position = "relative";
apple.style.top = "0px";

var fallingApples = function fallingApples() {
  detectCollision();
  var position = parseInt(apple.style.top);
  console.log(position);
  var borderBottom = apple.parentElement.clientHeight - apple.height * 2;

  if (position <= borderBottom) {
    apple.style.top = position + 10 + "px";
    apple.style.left = Math.floor(Math.random() * 15) + "px";
  } else if (position >= borderBottom) {
    apple.style.top = "0px";
  }
};

var callFallingApples = function callFallingApples() {
  setInterval(fallingApples, 100);
};

startButton.addEventListener("click", callFallingApples); //Collision
// console.log(apple.x);
// console.log(player.x);
// console.log(player.width);
// console.log(apple.width);

var numberOfHearts = 3;

var detectCollision = function detectCollision() {
  if (apple.x + apple.width >= player.x && apple.x <= player.x + player.width && apple.y + apple.height >= player.y && apple.y <= player.y + player.height) {
    console.log("collision");
    var heartsLeft = numberOfHearts - 1;
  } // return (hearts[heartsLeft].style.display = "none");

};

detectCollision(); // hearts[2].style.display = "none";
// hearts[1].style.display = "none";

hearts[0].style.display = "none";