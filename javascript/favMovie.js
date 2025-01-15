const favMovie = "Avatar";

        let guess;
        while (true) {
            guess = prompt("Guess my favorite movie!");

            if (guess === 'quit') {
                console.log("You quit");
                break;
            }

            if (guess === favMovie) {
                console.log("Congrats! 🎉");
                break;
            }

            console.log("Wrong guess. Please try again.");
        }