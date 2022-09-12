const el = document.getElementById("generateButton");
el.addEventListener("click", generatePassword);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generatePassword() {
    const alphaNumeric = ['a', 'b', 'c', 'd', 'e' ,'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E' ,'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    console.log(alphaNumeric);
    let newPassword = '';

    for (let i = 0; i < 8; i++) {
        // get a random index
        newPassword = newPassword.concat(alphaNumeric[getRandomInt(62)]);
    }
    console.log(newPassword);


    // generate a random 8 digit alpha-numeric string //
    // must contain a number 
    // must contain a capital letter
    // must contain a lowercase letter
    // must be 10 digits long
}
