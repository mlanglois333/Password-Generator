// Assignment Code

var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var special = "!@#$%^&*()";
var final = "";
var finArr = [];
var tf = [];
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

for ( i = 0; i < charNum; i++) {pWord += (final)[Math.floor(Math.random() * final.length)];}; 
}





function checkPass() {

  //defines index number of string to be checked
var ind = 0
//defines index to be checked//
var indexNo = finArr[ind];
//defines length of array (charset)//
var arrInd = finArr.length;
//turns password into array of characters//
var array1 = pWord.split("");
//splits charset into array//
var array2 = indexNo.split("");
//defintes length of charset//
var arrayLength = array2.length;

  // Loops through each selected character set //
for (var h = 0; h < arrInd ; h++) {

  console.log(ind);
  console.log(indexNo);
  console.log(array1);
  console.log(array2);
  console.log(arrayLength);
  console.log(arrInd);
 


  // Loops through each item in index//

    for(let i = 0; i < charNum; i++) { 
          
        
        for(let j = 0; j < arrayLength; j++) { 
              
           
            if(array1[i] === array2[j]) { 
              tf = true}

                 
                } 
        }  
        
        
  } 

}


  
  




function writePassword() {
  var password = pWord;
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
   console.log(pWord);
}



generatePassword()

checkPass();
writePassword();
 console.log (tf)






}





  










        


    
