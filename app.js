// asking user for their name

function getusername() {
    let username = prompt('Please enter your name:');
    console.log(username);
    document.write('<h2>' + username + '</h2>');
    return username; // -> 'sarah'
}

// asking user if they support indie music
function getuserAnswer(){
    let userAnswer = prompt('Do you listen to any music from independent artists?');
    console.log(userAnswer);
    
    if (userAnswer.toLowerCase() == 'yes'){
        document.write('<h3>Thank you for supporting indie music! People like you allow independent artists to continue creating!</h3>');
        document.write('<img src="https://i.ibb.co/wJhxPTb/Thank-you-2.png" alt="Thank-you" />')
    } else {
        document.write('<h3>I challenge you to listen to one independent artist today. You may just find your new favorite song!</h3>')
    }  
  }
// asking user to continue to site if they love music

  function getuserAnswer2(){
    var txt;
    var r = confirm("Continue to site if you love music!");
      if (r == true) {
      txt = "You pressed OK!!";
  } else {
      txt = "You pressed Cancel!";
  }
  }
  
  //create a number guessing game
  
  //create a number guessing game
  //figure the number to be guessed (the range as well)
  //How many chances do they get
  //messages for right or wrong
  //reward for a right guess
  //prompt the user
     //validate input before checking
   //need a counter for attempts
 

   function userGuessingGame(){
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer)
    userAttempts = 5;
    for(let i =0; i < userAttempts; i++){
        let userGuess = prompt('Please enter a number from 1-100')
        while(userGuess < 1 || userGuess > 100){
            userGuess = prompt('Wrong range. Please enter a number from 1-100')
        }
        if (userGuess == correctAnswer){
            alert('You are correct!');
            break;
        } else if(userGuess < correctAnswer){
            alert('Too low. Try Again.')
        } else if(userGuess > correctAnswer){
            alert('Too high. Try again.')
        } else {
            alert('Something Else Went Wrong.');
        }
        console.log(i);
        if (i == userAttempts - 1){
            alert('You did not guess correctly. The number is ' + correctAnswer);
        }
    }
}

function liveConcertPhoto(){
    let numberofliveConcertPhotos = prompt('How many live concert photos do you want to see?')
    for(let i = 0; i< numberofliveConcertPhotos; i++){
        document.write('<img src="https://i.ibb.co/BPQYQHn/pexels-rahul-pandit-3052360.jpg"/>')
    }
}

