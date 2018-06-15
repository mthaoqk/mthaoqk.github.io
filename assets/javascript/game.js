var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//lowercase
var Wins = 0;
var Losses = 0;
var Guesses = 20;
var GuessesSoFar = [];
var compGuess = letter[Math.floor(Math.random() * letter.length)];
console.log("Computer's Guess: " + compGuess);


// when a key is pressed
document.onkeyup = function (keyInput) {
    var userGuess = keyInput.key;
    // if the key that the user pressed is a letter...
    if (letter.includes(userGuess)) {

        // check if users' key is the same as the computers guess
        if (userGuess === compGuess) {
            Wins++
            compGuess = letter[Math.floor(Math.random() * letter.length)];
            console.log("Computer's Guess: " + compGuess)
        }
        if (Wins >= 3) {
            alert("Winner is you!")
            document.location.reload();
            
        }
        else {
            Guesses--;
            console.log(userGuess + " is wrong");

            if (Guesses < 1){
                alert("Take the L!" ) + Losses++;
                document.location.reload();
            }
            // else (Losses > 5)
            // document.location.reload();


        }
    }

    document.getElementById("idWin").innerHTML = Wins;
    document.getElementById("idLoss").innerHTML = Losses;
    document.getElementById("idGuessesLeft").innerHTML = Guesses;
    document.getElementById("idGuessSoFar").innerHTML = GuessesSoFar;

}
