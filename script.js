// Assignment Code
var generateBtn = document.querySelector("#generate");
var charSelect = prompt("Select number of charcters (between 8 and 128)");
var upSelect = confirm("Does the password require uppercase letters?");
var lowSelect = confirm("Does the password require lowercase letters?");
var numSelect = confirm("Does the password require numbers?");
var specSelect = confirm("Does the password require special characters?");
var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowercase = ['abcdefghijklmnopqrstuvwxyz'];
var number = ['1234567890'];
var special = ['!@#$%^&*()'];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

        


    
