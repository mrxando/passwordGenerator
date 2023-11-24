const passwordBox = document.getElementById('password');
const lenght = 12;

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialCharacters = '!@#$%^&*()_+';
const allcharacters = upperCaseLetters + lowerCaseLetters + numbers + specialCharacters;


function generatePassword() {
    let password = '';
    while(lenght > password.length){
        password += allcharacters[Math.floor(Math.random() * allcharacters.length)];
    } 
    passwordBox.value = password;
}

document.querySelector('.btn').addEventListener('click', () => {
    
generatePassword()

});

document.querySelector('.copyBTN').addEventListener('click', () => {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
});