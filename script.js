// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var length = Number(prompt("How many characters do you want for your password?(between 8 and 128)"));

var uppercase = confirm("Do you want uppercase in your password?");
var lowercase = confirm("Do you want lowercase in your password?");
var numeric = confirm("Do you want numeric values in your password?");
var special = confirm("Do you want special characters in your password?");



function generatePassword() {
  var chartset = "";
      if(
        lowercase == true && uppercase == false && special == false && numeric == false
      ){
        chartset = "abcdefghijklmnopqrstuvwxyz"
      }
      else if(
        lowercase == false && uppercase == true && special == false && numeric == false
      ){
        chartset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      else if(
        lowercase == false && uppercase == false && special == false && numeric == true
      ){
        chartset = "0123456789"
      }
      else if(
        lowercase == false && uppercase == false && special == true && numeric == false
      ){
        chartset = "!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == true && uppercase == true && special == true && numeric == true){
        chartset = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == true && uppercase == true && special == false && numeric == false){
      chartset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      else if(lowercase == true && uppercase == true && special == true && numeric == false){
        chartset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == false && uppercase == true && special == true && numeric == true){
      chartset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == false && uppercase == false && special == true && numeric == true){
        chartset = "0123456789!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == true && uppercase == false && special == true && numeric == true){
        chartset = "0123456789abcdefghijklmnopqrstuvwxyz!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == true && uppercase == false && special == true && numeric == false){
        chartset = "abcdefghijklmnopqrstuvwxyz!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"
      }
      else if(lowercase == false && uppercase == true && special == false && numeric == true){
        chartset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      else if(lowercase == true && uppercase == false && special == false && numeric == true){
        chartset = "0123456789abcdefghijklmnopqrstuvwxyz"
      }

      console.log(chartset);

      var passwordResult = ""

      for(var i = 0; i < length; i++) {
        passwordResult += chartset.charAt(Math.floor(Math.random()*chartset.length));
      }
      return passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!”#$%&’()*+,-./:;<=>?@[]^_`{|}~"