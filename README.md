# Game-Project

Overview:
The task
Congratulations, you’re a JavaScript developer!
Now it’s time to show the world your newly discoveredpowers!
You need to put everything you’ve learned in both Module 1 and Module 2 to the test by
designing andbuilding your own
full functioning browser based game using HTML, CSS/SCSS and JavaScript…
You have a few options to choose from depending on your confidence level with JavaScript.
If you are notsure what to choose message a coach and they can always guide you.
Previous trainees have built a widevariety of things, including:
Tic Tac Toe
Connect Four
Point and Shoot games
Simple sideways scrolling platform games (e.g. Mario)
Snake
Minesweeper
Quizzes and Trivia (e.g. Who Wants to be a Millionaire)

# Game - Falling Objects Game

- The player need to move left or right to escape from the falling objects.
- The player has 3 chances in a game.
- Game over if player collides with the objects more than 3 times.

# PSEUDOCODE

# HTML/CSS

0. Instruction
1. Screen for Game
2. 1 Player
3. Falling objects
4. 3 chances (heart img)
5. Game start button

# JS

1. Game starts after button clicked

- Start button to start loading the game
- clicked : start => Restart

2. Player movement - left and right
   addEventListener to keyboard : left/right arrows
   player: only move along the x-axis

3. Objects movement - random, from top to down
   objects:only move along the y-axis

4. Collision - a heart deducted
   if player collides with the objects, a heart will be decducted

5. Game running time: 30 sec

6. Game Over after 3 collisions/ ends
   if no hearts left --> Game Over
   if 1 or more than 1 hearts left --> You win!

7. If you win , "Congrats" image pop up
   If you lose, "Game Over" alert
