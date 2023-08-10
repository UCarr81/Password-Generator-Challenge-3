var generateBtn = document.querySelector("#generate");

// Password variables that the user can choose
function generatePassword() {
    var length = prompt("How Long will your password be? 8-128");
    var uppercase = confirm("will it have Uppercase letters?");
    var lowercase = confirm("will it have Lowercase letters?");
    var symbols = confirm("Will it have Symbols?");
    var numbers = confirm("will it have numbers?");

    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTIVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var symbolsLetters = "!@#$%^&*()_+=-{}|\][?><,./"
    var numbersNumbers = "1234567890"
    var Select = [];

    

//If user prompts Confirms Yes Computer will display the following
if (lowercase) {Select += lowercaseLetters;}
if (uppercase) {Select += uppercaseLetters;}
if (symbols) {Select += symbolsLetters;}
if (numbers) {Select += numbersNumbers;}

// Final Password select Upper prompts and throws up a Password
let finalPassword = ""
for (let i = 0; i < length; i++) {
  let rng =[Math.floor(Math.random() * Select.length)];
  finalPassword = finalPassword + Select[rng];
}
return finalPassword;
};

// Finally the password is picked up and displayed in web
function writePassword() {
  var password = generatePassword();
 var passwordText = document.querySelector("#password");
     passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
