// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
    
// Set up all of our variables (length, character types (lowercase, uppercase, numbers, special)):
  const passwordLength = parseInt(prompt('Enter a desired password length between 8 and 128 characters (longer = more secure).'))

    // Warning if user enters a number lower than 8 or more than 128:
    if (passwordLength < 8 || passwordLength > 128) {
      alert('Please enter a password length between 8 and 128 characters.')
      return
    }
  const charLowerConf = confirm('Would you like your password to contain lowercase letters? Click "OK" for Yes or "Cancel" for No')
  const charUpperConf = confirm('Would you like your password to contain uppercase letters? Click "OK" for Yes or "Cancel" for No')
  const charNumConf = confirm('Would you like your password to contain numbers? Click "OK" for Yes or "Cancel" for No')
  const charSpecConf = confirm('Would you like your password to contain special characters? Click "OK" for Yes or "Cancel" for No')
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '1234567890'
  const special = '!@#$%^&*()_'
  let userChosenCharacterTypes = ''
  newPassword = ''

    // Warning if user chooses no characters at all:
    if (!charLowerConf && !charUpperConf && !charNumConf && !charSpecConf) {
      alert('Please choose to include at least 1 of these character options: lowercase, uppercase, numbers, special characters.')
      return
    }

// If/Then statments for user chosen character types ("IF the user chose this character type THEN add that character type to the string called userChosenCharacterTypes"):
    if (charLowerConf) {
      userChosenCharacterTypes += lowercase;
  }
    if (charUpperConf) {
      userChosenCharacterTypes += uppercase;
  }
    if (charNumConf) {
      userChosenCharacterTypes += numbers;
    }
    if (charSpecConf) {
      userChosenCharacterTypes += special;
    }  

// Next run a for loop for the amount of times that there are characters in the user entered 'passwordLength' prompt:
    for (let i = 0; i < passwordLength; i++) {
// Each time the loop runs we're going to randomly choose a character from the userChosenCharacterTypes variable:     
      let randomIndex = Math.floor(Math.random() * userChosenCharacterTypes.length)
// Then we're going to take that randomly chosen character and add it to the newPassword:
      newPassword += userChosenCharacterTypes[randomIndex]
    }
// Once the loop has run for the amount of time specified in passwordLength then we're going to return with the completed newPassword:
    return newPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
