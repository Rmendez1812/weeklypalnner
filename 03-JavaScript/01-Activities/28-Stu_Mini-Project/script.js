var wins = 0;
var ties = 0;
var losses = 0;

//array of options for the computer to pick from
var options = ['R', 'P', 'S'];

var playGame = function () {
    // player selection
    var userChoice = window.prompt('Enter R, P, or S:');

    //Player selected Cancel; end game
    if (!userChoice) {
        return;
    }

// convert to uppercase to make comparisons easier
userChoice = userChoice.toUpperCase();

// get random index from array of options
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];
}

alert()