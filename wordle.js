
const correctWord = "COLOR";
const maxWordLength = correctWord.length;
const maxRounds = 6;
var round = 0;

// TO DO:
// correct the case that an already green letter if guessed again in another spot, will show as orange (unless it is also correct at a different location)

// Gets user input and returns it as all uppercase
const userInput = () => {
    input = document.getElementById("textbox1").value;

    // Will have to change if/when I implement dynamic typing
    if (input.length == maxWordLength) {
        return input.toUpperCase();
    }
}

// Takes in user input word and assigns each letter a value associated with its "correctness"
const checkInput = (word) => {
    // Generates new array of length of word, filled with 0's. Represents default case of letter being completely incorrect
    const result = new Array(maxWordLength).fill(0);

    // Case where letter is correct but incorrect location
    for (let i = 0; i < maxWordLength; i++) {
        for (let j = 0; j < maxWordLength; j++) {
            if (word[i] == correctWord[j]) {
                result[i] = 1;
           }
        }
    }

    // Case where letter is correct and in correct location
    for (let i = 0; i < maxWordLength; i++) {
        if (word[i] == correctWord[i]) {
            result[i] = 2;
        }  
    }
    return result;
};

// Updates the div's to have the letter inside, along with adding its respective class to change color
const printResult = (guess, result, round) => {
    var row = round * maxWordLength;

    for (let i = 0; i < maxWordLength; i++) {
        if (result[i] == 2) {
            document.getElementById(i + row).innerText = guess[i];
            document.getElementById(i + row).classList.add('correctLocation');

        }
        if (result[i] == 1) {
            document.getElementById(i + row).innerText = guess[i];
            document.getElementById(i + row).classList.add('correctLetter');
        }
        if (result[i] == 0) {
            document.getElementById(i + row).innerText = guess[i];
        }
        document.body.innerHTML += "<span> </span>";
    }
};

const chooseWord = (array) => {
    index = Math.floor(Math.random() * array.length);
}

const mainLoop = () => {
    //var word = chooseWord(//wordarray);

    //remove word const and add parameter for word to each function

    var wordGuess = userInput();
    var letterResults = checkInput(wordGuess);
    printResult(wordGuess, letterResults, round);
    if (round < maxRounds) {
        round++;
    }
    else {
        console.log("you lose!");
    }
    
};

  




