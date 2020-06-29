// Assignment Code

var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!@#$%^&*()";
var final = "";

// Write password to the #password input





// Add event listener to generate button
generateBtn.addEventListener("click", selectInput);



function selectInput() {
  
 
var charSelect = Number(prompt("Select number of charcters (between 8 and 128)"));


var upSelect = confirm("Does the password require uppercase letters?");
if  (upSelect === true) 
{var final = final + uppercase};
console.log(final);

var lowSelect = confirm("Does the password require lowercase letters?");
if  (lowSelect === true) 
{var final = final + lowercase};
console.log(final);

var numSelect = confirm("Does the password require numbers?");
if  (numSelect === true) 
{var final = final + number};
console.log(final);

var specSelect = confirm("Does the password require special characters?");
if  (specSelect === true) 
{var final = final + special};
console.log(final);


 
  function generatePassword(charSelect) {

for ( i = 0; i < charSelect; i++) {password += charAt(final)[Math.floor(Math.random() * final.length)]; console.log(password)};
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
}
generatePassword()

writePassword()

}





  










        


    
