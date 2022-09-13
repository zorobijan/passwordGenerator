// Assignment Code
let generateBtn = document.querySelector("#generate");
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let especials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
// Write password to the #password input
function writePassword() {
  let password = "";
  // step 1: get requirements from UI
   // get checkboxes
  // step 2: 
  // let password = generatePassword() 
    let lowercaseChoice = window.prompt("Do you want lowercase letters in your password?");
    lowercaseChoice = lowercaseChoice.toUpperCase();

    let uppercaseChoice = window.prompt("Do you want uppercase letters in your password?");
    uppercaseChoice = uppercaseChoice.toUpperCase();

    let numbersChoice = window.prompt("Do you want numbers in your password?");
    numbersChoice = numbersChoice.toUpperCase();

    let especialsChoice = window.prompt("Do you want especial characters in your password?");
    especialsChoice = especialsChoice.toUpperCase();

      if (lowercaseChoice == "YES"){
        let lowercaseIndex = Math.floor(Math.random() * lowercase.length);
        let lowercaseLetter = lowercase[lowercaseIndex];
        password = password.concat(lowercaseLetter);
        console.log("password is " + password);
      }

      if (uppercaseChoice == "YES"){
        let uppercaseIndex = Math.floor(Math.random() * uppercase.length);
        let uppercaseLetter = uppercase[uppercaseIndex];
        password = password.concat(uppercaseLetter);
        console.log("password is " + password);
      }

      if (numbersChoice == "YES"){
        let numbersIndex = Math.floor(Math.random() * numbers.length);
        let numbersLetter = numbers[numbersIndex];
        password = password.concat(numbersLetter);
        console.log("password is " + password);
      }

      if (especialsChoice == "YES"){
        let especialsIndex = Math.floor(Math.random() * especials.length);
        let especialsLetter = especials[especialsIndex];
        password = password.concat(especialsLetter);
        console.log("password is " + password);
      }
      
    // let lowercaseIndex = Math.floor(Math.random() * lowercase.length);
    // let uppercaseIndex = Math.floor(Math.random() * uppercase.length);
    // let numbersIndex = Math.floor(Math.random() * numbers.length);
    // let specialsIndex = Math.floor(Math.random() * specials.length);

  // let passwordText = document.querySelector("#password");

  // passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// const el = document.getElementById("generateButton");
// el.addEventListener("click", generatePassword);

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function generatePassword() {
//     const alphaNumeric = ['a', 'b', 'c', 'd', 'e' ,'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E' ,'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
//     console.log(alphaNumeric);
//     let newPassword = '';

//     for (let i = 0; i < 8; i++) {
//         // get a random index
//         newPassword = newPassword.concat(alphaNumeric[getRandomInt(62)]);
//     }
//     console.log(newPassword);


//     // generate a random 8 digit alpha-numeric string //
//     // must contain a number 
//     // must contain a capital letter
//     // must contain a lowercase letter
//     // must be 10 digits long
// }
