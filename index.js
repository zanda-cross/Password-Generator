const characters = {
    uppercase: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    lowercase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specials: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
}

const errorEL = document.getElementById("error")
const pwdEl1 = document.getElementById("box-one")
const pwdEl2 = document.getElementById("box-two")
const genButton = document.getElementById("btn-pwdgenerator")
const uppercaseBox = document.getElementById("inc-uppercase")
const numbersBox = document.getElementById("inc-numbers")
const specialBox = document.getElementById("inc-special")
const lowercaseBox = document.getElementById("inc-lowercase")
const copyBtn1 = document.querySelector(".copy-btn-1")
const copyBtn2 = document.querySelector(".copy-btn-2")
let passwordLength = 12;
const displayLength = document.getElementById("pwd-length");

document.getElementById("add-btn").addEventListener("click", function() {
    if (passwordLength < 18) {
        passwordLength++;
        displayLength.textContent = passwordLength;
    }
})

document.getElementById("subtract-btn").addEventListener("click", function() {
    if (passwordLength > 6) {
        passwordLength--;
        displayLength.textContent = passwordLength;
    }
})

function generatePassword() {

    let charactersPool = [];

    if (lowercaseBox.checked) {
        charactersPool = charactersPool.concat(characters.lowercase)
        errorEL.textContent = "";
    }

    if (uppercaseBox.checked) {
        charactersPool = charactersPool.concat(characters.uppercase)
        errorEL.textContent = "";
    }

    if (numbersBox.checked) {
        charactersPool = charactersPool.concat(characters.numbers)
        errorEL.textContent = "";
    }

    if (specialBox.checked) {
        charactersPool =  charactersPool.concat(characters.specials)
        errorEL.textContent = "";
    }

    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomGen = Math.floor(Math.random() * charactersPool.length)
        password += charactersPool[randomGen]
    }

    return password
}

genButton.addEventListener("click", function() {
    checkedBoxes()
})

function checkedBoxes() {
    if (lowercaseBox.checked || uppercaseBox.checked || numbersBox.checked || specialBox.checked) {
        pwdEl1.textContent = generatePassword()
        pwdEl2.textContent = generatePassword()
    } else {
        errorEL.textContent = "You must select at least one option."
    }
}

copyBtn1.addEventListener("click", function() {
    let msgEl = document.getElementById("copy-one");
    navigator.clipboard.writeText(pwdEl1.textContent);

    msgEl.classList.add("show");
    msgEl.textContent = "Copied to the clipboard."
    setTimeout(() => {
        msgEl.classList.remove("show");
        msgEl.textContent = "";
    }, 2000);

})

copyBtn2.addEventListener("click", function() {
    let msgEl = document.getElementById("copy-two");
    navigator.clipboard.writeText(pwdEl1.textContent);

    msgEl.classList.add("show");
    msgEl.textContent = "Copied to the clipboard."
    setTimeout(() => {
        msgEl.classList.remove("show");
        msgEl.textContent = "";
    }, 2000);

})