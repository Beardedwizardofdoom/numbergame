// all of the variables needed to start a new game
let correctNumber;
let currentGuessCount;
let maxGuesses;
let remainingGuesses;


//grab all the HTML we're gonna change
const submit      = document.getElementById("guess-button");
const output      = document.getElementById("response");
const guessInput  = document.getElementById("guess-input");

//generate a new game and make guesses when you clik the button
submit.addEventListener("click", guessNumber);
generateNewGame();


//generate a new game and reset all the things
function generateNewGame(){

	resetUI();
	
	correctNumber     = generateRandomNumber();

	maxGuesses        = 5;
	currentGuessCount = 0;
	remainingGuesses  = maxGuesses - currentGuessCount;

	window.correctNumber = correctNumber;
}//generateNewGame

function generateRandomNumber(){
	const randomNumber        = Math.random() * 100;
	const roundedRandomNumber = Math.round(randomNumber);

	return roundedRandomNumber;
}//generateRandomNumber

//make a guess based on the user input
function guessNumber(){

	let message;
	if(currentGuessCount < maxGuesses){
		currentGuessCount = currentGuessCount + 1;
		remainingGuesses  = maxGuesses - currentGuessCount;

		const guess        = guessInput.value;
		const responseCode = checkGuess(guess);
		message            = lookupMessageFromResponse(responseCode);

		if(responseCode == 0){
			window.setTimeout(generateNewGame, 1000);
		}
	}

	if(remainingGuesses == 0){
		message = "No guesses remaining! Generating a new random number...";
		window.setTimeout(generateNewGame, 1000);
	}
	
	output.textContent = message;
}//guessNumber

function checkGuess(guess){

	let response;
	if(guess == correctNumber){
		response = 0;
	} else {
		if(guess < correctNumber){
			response = -1;
		} else {
			response = 1;
		}
	}

	return response;
}//checkGuess

function lookupMessageFromResponse(code){
	let message;
	if(code == 0){
		message = "Nailed it! Generating a new random number...";
	} else if (code == -1){
		message = `Too low! Try again, ${remainingGuesses} guesses remaining...`;
	} else if (code == 1){
		message = `Too high! Try again, ${remainingGuesses} guesses remaining...`;
	}
	return message;
}//lookupMessageFromResponse;

function resetUI(){

	output.textContent = "Make a guess...";
	guessInput.value   = 0;
}//resetUI



/*
	NOTES:
		- console.log to print something to the console
		- console.dir to print everything about something to the console

*/




// let guesses      = 0;
// const guessLimit = 3;
// function guessWord(word, callback){

// 	const magicWord = "gnome";
// 	const correct   = word == magicWord;

// 	guesses = guesses + 1;
	
// 	if(guesses > guessLimit){
// 		console.log("out of turns");
// 	} else {
// 		if(correct){
// 			callback("you win!");
// 		} else {
// 			callback("you lose.");
// 		}
// 	}
// }

// function alertTheUser(result){
// 	window.alert(result);
// }
// function quietlyLetTheUserKnow(whisper){
// 	console.log(whisper);
// }