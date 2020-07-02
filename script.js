

var generateBtn = document.querySelector("#generate");
var finArr = [];
var pWord = "";


generateBtn.addEventListener("click", selectInput);



function selectInput() {
  
var charNum = Number(prompt("Select number of charcters (between 8 and 128)"));


var upSelect = confirm("Does the password require uppercase letters?");
if  (upSelect === true) 
{finArr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");}


var lowSelect = confirm("Does the password require lowercase letters?");
if  (lowSelect === true) 
{finArr.push("abcdefghijklmnopqrstuvwxyz");}


var numSelect = confirm("Does the password require numbers?");
if  (numSelect === true) 
{finArr.push("1234567890");}


var specSelect = confirm("Does the password require special characters?");
if  (specSelect === true) 
{finArr.push("!@#$%^&*()");}



var arrayLength = finArr.length;
var passAmt = Math.floor(charNum / arrayLength);


 
  function generatePassword() 
  
  
  { for (i = 0; i < arrayLength; i++ ){


var finArr1 = finArr[i];

var stringLength = finArr1.length;

    for ( j = 0; j < passAmt; j++) {pWord += (finArr1)[Math.floor(Math.random() * stringLength)];}; 
  
  }
  }
function addDiff() {  


var pwdLength = pWord.length;
var pwdDif = charNum - pwdLength;
var zeroLength = finArr[0].length;


  for ( i = 0; i < pwdDif; i++) {pWord += (finArr[0])[Math.floor(Math.random() * zeroLength)];}; 


  }

  

 
    
    
    
    function shuffle(array) {
     
     
      var currentIndex = array.length, temporaryValue, randomIndex;
    
     
      while (0 !== currentIndex) {
    
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
     
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    
      var array = arr.join('');
      return pWord;
    }
    
 
  
  



function writePassword() {
  var finalPword = pWord.join('');
  var password = finalPword;
  var passwordText = document.querySelector("#password");
   passwordText.value = password;
   console.log(pWord);
}



generatePassword();
addDiff();
   var arr = pWord.split("");
   shuffle(arr);
   console.log(pWord);

writePassword(finalPword);







}





  










        


    
