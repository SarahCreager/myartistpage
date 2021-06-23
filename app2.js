
let userAnswer = prompt('Do you listen to any music from independent artists?');
console.log(userAnswer);

if (userAnswer == 'yes'){
    document.write('<h3>Thank you for supporting indie music! People like you allow independent artists to continue creating!' + '</h3>');
    document.write('<img src="https://i.ibb.co/wJhxPTb/Thank-you-2.png" alt="Thank-you" />')
} else {
    document.write('<h3>I challenge you to listen to one independent artist today. You may just find your new favorite song!' + '</h3>')
}

var txt;
var r = confirm("Continue to site if you love music!");
if (r == true) {
  txt = "You pressed OK!!";
} else {
  txt = "You pressed Cancel!";
}

