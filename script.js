// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
    
  // Set up all of our variables (length, character types (lowercase, uppercase, numbers, special), ):
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
  let inProgressPassword = ''
  newPassword = ''

  // Warning if user chooses no characters at all:
  if (!charLowerConf && !charUpperConf && !charNumConf && !charSpecConf) {
    alert('Please choose to include at least 1 of these character options: lowercase, uppercase, numbers, special characters.')
    return
  }

    if (charLowerConf) {
      inProgressPassword += lowercase;
  }
    if (charUpperConf) {
      inProgressPassword += uppercase;
  }
    if (charNumConf) {
      inProgressPassword += numbers;
    }
    if (charSpecConf) {
      inProgressPassword += special;
    }  


    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * inProgressPassword.length)
      newPassword += inProgressPassword[randomIndex]
    }
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
