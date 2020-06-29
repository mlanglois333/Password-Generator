// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = prompt("Select number of charcters (between 8 and 128)");
var uppercase = confirm("Does the password require uppercase letters?");
var lowercase = confirm("Does the password require lowercase letters?");
var numbers = confirm("Does the password require numbers?");
var specialChar = confirm("Does the password require special characters?");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
