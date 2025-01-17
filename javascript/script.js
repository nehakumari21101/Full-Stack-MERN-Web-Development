let random = Math.floor(Math.random()*10)+11;

console.log(random);

let guess = prompt("Guess the number!");

while(true){
    if(guess == "quit"){
        console.log("You quit the game!");
        break;
    }
    if(guess == random){
        console.log("Congrate you guessed the right number🎉:", random);
        break;
    }else if(guess<random){
       guess = prompt("your Guess was too small, Try again!");
    }else {
        guess = prompt("Your guess was too large, try again!");
    }
}