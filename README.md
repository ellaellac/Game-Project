# Game-Project

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

- button to start loading the game

2. Player movement - left and right
   addEventListener to keyboard : arrow left/right
   object: only move along the x-axis

3. Objects movement - random, from top to down

4. Collision - a heart deducted

5. Game running time: 1 min

6. Game Over(restart) after 3 collisions/ ends
   if (no heart || game ends) {start button}

7. Alert "Congrats" if player survive
   if (heart left) {alert Congrats!}
