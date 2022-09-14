let generateBtn = document.querySelector("#generate");
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let specials = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function writePassword() {
  let password = "";

  let passwordLength = window.prompt("How many characters do you want in your password?");
  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  if (!Number.isInteger(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter an integer between 8 and 128");
    return;
  }

  let lowercaseChoice = window.prompt("Do you want lowercase letters in your password?");
    lowercaseChoice = lowercaseChoice.toUpperCase();

  let uppercaseChoice = window.prompt("Do you want uppercase letters in your password?");
    uppercaseChoice = uppercaseChoice.toUpperCase();

  let numbersChoice = window.prompt("Do you want numbers in your password?");
    numbersChoice = numbersChoice.toUpperCase();

  let specialsChoice = window.prompt("Do you want especial characters in your password?");
    specialsChoice = specialsChoice.toUpperCase();

  for (let i = 0; i < passwordLength; i++) {

    if (lowercaseChoice == "YES" || specialsChoice == "Y" & password.length < passwordLength){
      let lowercaseIndex = Math.floor(Math.random() * lowercase.length);
      let lowercaseLetter = lowercase[lowercaseIndex];
      password = password.concat(lowercaseLetter);
      console.log("password is " + password);
   }

    if (uppercaseChoice == "YES" || specialsChoice == "Y" & password.length < passwordLength){
      let uppercaseIndex = Math.floor(Math.random() * uppercase.length);
      let uppercaseLetter = uppercase[uppercaseIndex];
      password = password.concat(uppercaseLetter);
      console.log("password is " + password);
    }

    if (numbersChoice == "YES" || specialsChoice == "Y" & password.length < passwordLength){
      let numbersIndex = Math.floor(Math.random() * numbers.length);
      let numbersLetter = numbers[numbersIndex];
      password = password.concat(numbersLetter);
      console.log("password is " + password);
    }

    if (specialsChoice == "YES" || specialsChoice == "Y" & password.length < passwordLength){
      let specialsIndex = Math.floor(Math.random() * specials.length);
      let specialsLetter = specials[specialsIndex];
      password = password.concat(specialsLetter);
      console.log("password is " + password);
    }

  }
  window.alert("Your generated password is " + password);
}



generateBtn.addEventListener("click", writePassword);