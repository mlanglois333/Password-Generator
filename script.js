// Assignment Code

var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!@#$%^&*()";
var final = "";
var finArr = [];

var pWord = "";
// Write password to the #password input





// Add event listener to generate button
generateBtn.addEventListener("click", selectInput);



function selectInput(Characters) {
  
var charNum = Number(prompt("Select number of charcters (between 8 and 128)"));





var upSelect = confirm("Does the password require uppercase letters?");
if  (upSelect === true) 
{var final = final + uppercase; finArr.push(uppercase);}


var lowSelect = confirm("Does the password require lowercase letters?");
if  (lowSelect === true) 
{var final = final + lowercase; finArr.push(lowercase);}


var numSelect = confirm("Does the password require numbers?");
if  (numSelect === true) 
{var final = final + number; finArr.push(number);}


var specSelect = confirm("Does the password require special characters?");
if  (specSelect === true) 
{var final = final + special; finArr.push(special);}


console.log(finArr);
 
  function generatePassword() {
var i  
for ( i = 0; i < charNum; i++) {pWord += (final)[Math.floor(Math.random() * final.length)];}; 
}





  
function findCommonElement() { 

  var array1 = pWord.split("");

  var array2 = array2(array2); 

  function array2()
  {return finArr[1].split("")};

  var arrayLength = arrayLength(array2);
  function arrayLength(array2) {return array2.length};

      console.log(pWord);
    
    for(let i = 0; i < charNum; i++) { 
          
        
        for(let j = 0; j < (arrayLength); j++) { 
              
           
            if(array1[i] === array2[j]) { 
              
                 
                console.log(true); 
            } 
        } 
    } 
      
     console.log(false);  
} 



function writePassword() {
  var password = pWord;
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
   console.log(pWord);
}



generatePassword()

findCommonElement();

writePassword();





}





  










        


    
