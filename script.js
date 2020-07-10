

const generateBtn = document.querySelector("#generate");
const clearBtn = document.querySelector("#clear");
generateBtn.addEventListener("click", start);
clearBtn.addEventListener("click", clearPwd);



function start() {

  let finArr = [];
  let pWord = "";


const charNum = (prompt("Select number of charcters (between 8 and 128)"))
 if (charNum < 8) {alert("Must contain 8-128 characters"); }
 else if (charNum > 128) {alert("Must contain 8-128 characters");

}
else {

const upSelect = confirm("Does the password require uppercase letters?");
if  (upSelect === true) 
{finArr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");}


const lowSelect = confirm("Does the password require lowercase letters?");
if  (lowSelect === true) 
{finArr.push("abcdefghijklmnopqrstuvwxyz");}


const numSelect = confirm("Does the password require numbers?");
if  (numSelect === true) 
{finArr.push("1234567890");}


const specSelect = confirm("Does the password require special characters?");
if  (specSelect === true) 
{finArr.push("!@#$%^&*()");}






}

let arrayLength = finArr.length;
const passAmt = Math.floor(charNum / arrayLength);

  function generatePassword() 
  
  
  { for (i = 0; i < arrayLength; i++ ){


let finArr1 = finArr[i];

const stringLength = finArr1.length;

    for ( j = 0; j < passAmt; j++) {pWord += (finArr1)[Math.floor(Math.random() * stringLength)];}; 
  
  }
  }
function addDiff() {  


const pwdLength = pWord.length;
const pwdDif = charNum - pwdLength;
const zeroLength = finArr[0].length;


  for ( i = 0; i < pwdDif; i++) {pWord += (finArr[0])[Math.floor(Math.random() * zeroLength)];}; 


  }

  function writePassword(array) {

        //This  piece of code uses the Fisher-Yates algorithim to shuffle the selected characters before writing. 
        //There is a great article on it at: https://medium.com/@oldwestaction/randomness-is-hard-e085decbcbb2
        //The concept is that you pick a random index and swap it with a string
        //It is written so that each element can only be selected once, moving from the last element down


        //This breaks the password string down into an array of single characters
        var array = pWord.split("");
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // This stops the shuffling when every element has been shuffled
        while (0 !== currentIndex) {
      
          // This selects an element at a random index
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // This swaps the elements out
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;

          

        }
        //This takes the randomized array and joins it back into a usable password string
        const password = array.join("");
        const passwordText = document.querySelector("#password");
         passwordText.value = password;
      }
      
      
      
generatePassword();
addDiff();
writePassword();


}

function clearPwd() {
  const clearText = document.querySelector("#password");
  clearText.value = ""; 


}




  










        


    
