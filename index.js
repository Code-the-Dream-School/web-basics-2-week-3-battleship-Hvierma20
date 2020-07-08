  
const battleship = () => {
  
  // Step 1: Create Players
  let player1 = {
    name: prompt('Enter your name'),
    shipCount: parseInt(4),
    gameBoard: [ 
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
    ]
    }
  let player2 = {
    name: prompt('Enter your name'),
    shipCount: parseInt(4),
    gameBoard: [ 
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
    ]
    }

    console.log(player1, player2);

  //Step 2: Randomly Add Ships to each Board
  let shipPlaced1 = 0; 
  let shipPlaced2 = 0; 
  // 1.-Create a loop that runs until 4 ships have been added to the board
  while (shipPlaced1 < 4 && shipPlaced2 <4){
  // Inside the loop, generate a random x and a random y coordinate (must be between 0 and 3)
  let xPos1 = Math.floor(Math.random() * 4);
  let xPos2 = Math.floor(Math.random() * 4);
  // console.log(xPos);
  let yPos1 = Math.floor(Math.random() * 4);
  let yPos2 = Math.floor(Math.random() * 4);
  // console.log(yPos);
  let shipRandom1 = [xPos1, yPos1]
  let shipRandom2 = [xPos2, yPos2]
    console.log(shipRandom1);
    console.log(shipRandom2);
  if (player1.gameBoard[xPos1][yPos1] === 0 && player2.gameBoard[xPos2][yPos2] === 0) {
    player1.gameBoard[xPos1][yPos1] = 1;
    player2.gameBoard[xPos2][yPos2] = 1;
    shipPlaced1 ++;
    shipPlaced2 ++;
     
    } 
  }
  console.log(player1.gameBoard);  
  console.log(player2.gameBoard);


// Step 3: Start the Game Play

// You will need to loop through the following steps, switching between players 1 and 2, until one of the players wins.
// Step 3a: Ask the Player to Choose Strike Coordinates
 
let currentUser = player1.name;
// let message;

while (true) {
  if (currentUser === player1.name) {
    // Using the prompt() function, ask the current player to choose an x and y coordinate to strike.
    // You will need to store the user's input in a variable(s) for the next step.
    let hitX1 = parseInt(prompt(`${currentUser} Enter X coordinates to strike - from 0 to 3`));
    let hitY1 = parseInt(prompt(`${currentUser} Enter Y coordinates to strike - from 0 to 3`));

    // Step 3b: Determine if the Player Sunk their Opponent's Ship
    // Using the x and y coordinates from the previous step, 
    // check the opponent's board to see if the space (array element) at those indices is a ship (is equal to 1).
      if (player2.gameBoard[hitX1][hitY1] === 1) {
        // If yes, "sink the ship" (change the value from 1 to 0)
        player2.gameBoard[hitX1][hitY1] = 0;
        // decrement the opponent's ship count,
        player2.shipCount -= 1;
        console.log (player2.gameBoard);
        // and show an alert that says "Hit!"
        alert (`Hit!`)
      } else if (player2.shipCount === 0) {
        alert (`Congratulations ${currentUser} you WIN!!!`)
        break;
      } else {
        alert (`You missed!`);
        currentUser = player2.name; 
      }
  }

  if (currentUser === player2.name) {
    // Using the prompt() function, ask the current player to choose an x and y coordinate to strike.
    // You will need to store the user's input in a variable(s) for the next step.
    let hitX2 = parseInt(prompt(`${currentUser} Enter X coordinates to strike - from 0 to 3`));
    let hitY2 = parseInt(prompt(`${currentUser} Enter Y coordinates to strike - from 0 to 3`));

    // Step 3b: Determine if the Player Sunk their Opponent's Ship
    // Using the x and y coordinates from the previous step, 
    // check the opponent's board to see if the space (array element) at those indices is a ship (is equal to 1).
      if (player1.gameBoard[hitX2][hitY2] === 1) {
        // If yes, "sink the ship" (change the value from 1 to 0)
        player1.gameBoard[hitX2][hitX2] = 0;
        // decrement the opponent's ship count,
        player1.shipCount -= 1;
        console.log (player1.gameBoard);
        // and show an alert that says "Hit!"
        alert (`Hit!`)
      } else if (player1.shipCount === 0) {
        alert (`Congratulations ${currentUser} you WIN!!!`)
        break;
      } else {
        alert (`You missed!`);
        currentUser = player1.name; 
      }
  }
}
  



  return `The winner is ${currentUser}`
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult 
