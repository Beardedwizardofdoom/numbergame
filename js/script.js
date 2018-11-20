let guesses      = 0;
const guessLimit = 3;
function guessWord(word, callback){

	const magicWord = "gnome";
	const correct   = word == magicWord;

	guesses = guesses + 1;
	
	if(guesses > guessLimit){
		console.log("out of turns");
	} else {
		if(correct){
			callback("you win!");
		} else {
			callback("you lose.");
		}
	}
}

function alertTheUser(result){
	window.alert(result);
}
function quietlyLetTheUserKnow(whisper){
	console.log(whisper);
}