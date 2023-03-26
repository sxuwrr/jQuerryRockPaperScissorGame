// alert('working');
$(document).ready(function() {

    // Define variables for the game
    var wins = 0;
    var losses = 0;
    var ties = 0;
  
    // Attach click event handlers to the buttons
    $(".rock").click(function() {
      playRound("rock");
    });
  
    $(".paper").click(function() {
      playRound("paper");
    });
  
    $(".scissors").click(function() {
      playRound("scissors");
    });
  
    // Function to play a round of Rock, Paper, Scissors
    function playRound(playerChoice) {
      // Generate a random choice for the computer
      var choices = ["rock", "paper", "scissors"];
      var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
      // Determine the winner of the round
      var message;
      if (playerChoice === "rock") {
        if (computerChoice === "rock") {
          message = "Tie!";
          ties++;
        } else if (computerChoice === "paper") {
          message = "You lose! Paper covers rock.";
          losses++;
        } else {
          message = "You win! Rock smashes scissors.";
          wins++;
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
          message = "You win! Paper covers rock.";
          wins++;
        } else if (computerChoice === "paper") {
          message = "Tie!";
          ties++;
        } else {
          message = "You lose! Scissors cut paper.";
          losses++;
        }
      } else {
        if (computerChoice === "rock") {
          message = "You lose! Rock smashes scissors.";
          losses++;
        } else if (computerChoice === "paper") {
          message = "You win! Scissors cut paper.";
          wins++;
        } else {
          message = "Tie!";
          ties++;
        }
      }
  
      // Update the score and message
      $("#wins").text(wins);
      $("#losses").text(losses);
      $("#ties").text(ties);
      $(".message").text(message);
    }
  });
  



