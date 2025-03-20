/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:
/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
// Import the readline-sync module to allow user input from the console
const readline = require('readline-sync');

// Initialize the player's inventory and environment status
let hasTorch = true;  // Whether the player has a torch
let hasMap = false;   // Whether the player has a map
let hasSword = true;  // Whether the player has a sword
let hasCompass = true;  // Whether the player has a compass
let isDay = true;         // Whether it's currently day or night

// Display the initial prompt to the player about the available paths
console.log("You see two paths: one leads to the mountains, the other to the village.");

// Prompt the user to choose between the 'mountains' or the 'village'
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");
if (choice === "mountains"||  choice === "village"){
    // If the player chooses 'mountains' and has a torch
if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  // Ask the player if they want to go to a cave or go trekking
  let mountainChoice = readline.question("Do you want to go to cave or trekking? ");
  // Ask if the player has a sword and compass (using Yes/No input)
  hasSword = readline.keyInYNStrict("Do you has hasSword? ");
  hasCompass = readline.keyInYNStrict("Do you has compass? ");
   // If the player chooses the cave and has a sword, they can defend themselves against beasts
  if (mountainChoice == "cave" && hasSword) {
  console.log("Inside the cave, you are attacked with wild beast,your sword will help you.Move on");
  // If the player chooses the cave but doesn't have a sword, they are forced to run
  } else if (mountainChoice == "cave" && !hasSword) {
  console.log("Inside the cave, you are attacked with wild beast,you have nothing to defeat.Just run out.");
  // If the player chooses trekking and has a compass, they can navigate safely
  } else if (mountainChoice == "trekking" && hasCompass) {
  console.log("Using your compass, you safetly navigate the trekking");
  // If the player doesn't have a compass or sword and chooses to trek, they get lost
  } else {
  console.log("You aimlessly on the mountain, without compass and sword. Its better to turn back.");
  }
  // If the player chooses 'mountains' but doesn't have a torch
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
   // If the player chooses 'village' and has a map, they can find their way
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  // Ask the player if it's daytime
  isDay = readline.keyInYNStrict("Is it a day time? ");
   // Ask the player if they want to go shopping or fishing
  let choice1 = readline.question("Do you want to shopping or fishing? ").toLowerCase();
  if( choice1 == "shopping" && isDay ) {
    console.log("Traditional and Handloom products are on sale, Enjoy shopping.");
     // If it's daytime and the player chooses fishing, they can fish in clear water lakes
  } else if (choice1 == "fishing" && isDay){
  console.log("Amazing clear water lakes are ready for fishing.");
  // If it's not daytime, suggest that the player take rest for tomorrow's activities
  } else {
  console.log("As it is dark and night suggesting you take some rest for tommorows funfilled activities ");
  }
   // If the player chooses a different path but it's daytime, encourage them to enjoy nature and fishing
} else if (choice !== "mountains" || "village" && isDay) {
    console.log("Enjoy Nature and fishing.");
  // In case the player doesn't choose a valid path, print a message
} else {
  console.log("You get lost and wander aimlessly.");
}
}
else{
  // If the player chooses an invalid path, ask them to choose between 'mountains' or 'village'
  console.log("Invalid choice choose 'mountains' or 'village'");
}
