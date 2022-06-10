//build a guessing game, user can enter a number
//the system picks a random number between 1 and 10
//if the user number is equal to the system number, 
//give the user 2 points, if the user number is different than the random number by 1, 
//give the user 1 point. Otherwise, give the user 0 points, the user can play the game as long as they want.
const readline = require('readline-sync');

//variable to store the score
let score = 0;

//write a function to check the number of user input and the random number and give the user points
function checknumber(usernumber, randomnumber) {
    if (usernumber == randomnumber) {
        score = score + 2;
        console.log('you got 2 points');
    } else if (usernumber == randomnumber + 1) {
        score = score + 1;
        console.log('you got 1 point');

    } else if (usernumber == randomnumber - 1) {
        score = score + 1;
        console.log('you got 1 point');
    } else {
        score = score + 0;
        console.log('you got 0 points');
    }
    console.log('your score is: ' + score);
    return score;

}

//write a function get the random number and user number from the user
function getnumber() {
    let usernumber = readline.question('enter a number between 1 and 10: ');
    console.log('your number is: ' + usernumber);
    let randomnumber = Math.floor(Math.random() * 10) + 1;
    console.log('the random number is: ' + randomnumber);
    return checknumber(usernumber, randomnumber);
}
//used the loop to make this game can play as long as the user want
while (true) {
    getnumber();
    const playagain = readline.question('Do you want to play again? (y/n) ');
    if (playagain == 'n') {
        break;
    }
}