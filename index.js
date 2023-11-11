const letters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
    ]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = [
    "~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",
    ",","|",":",";","<",">",".","?","/"
    ]

let password1El = document.getElementById("password-1")
let password2El = document.getElementById("password-2")

function generatePasswords() {
    
    let passwordLength = parseInt(document.getElementById("password-length").value)
    
    let characters = createList()
    
    let password1 = ""
    for (let i = 0; i < passwordLength; i++) {
        let c = characters[Math.floor(Math.random() * characters.length)]
        password1 += c
    }
    password1El.textContent = password1
    
    let password2 = ""
    for (let i = 0; i < passwordLength; i++) {
        let c = characters[Math.floor(Math.random() * characters.length)]
        password2 += c
    }
    password2El.textContent = password2
    
    // AN ATTEMPT TO WRITE DRY CODE:
    // for (let j = 0; j < 2; j++) {
    //     let password = ""
    //     for (let i = 0; i < 15; i++) {
    //         let c = characters[Math.floor(Math.random() * characters.length)]
    //         password += c
    //     }
    //     console.log(password)
    // }
}

function createList() {
    
    let relevant_characters = letters
    
    // console.log(document.getElementById("numbers").checked)
    // console.log(document.getElementById("symbols").checked)
    
    if (document.getElementById("numbers-checkbox").checked) {
        relevant_characters = relevant_characters.concat(numbers)
    }
    
    if (document.getElementById("symbols-checkbox").checked) {
        relevant_characters = relevant_characters.concat(symbols)
    }
    
    return relevant_characters
    
}

// CSS - make UI pretty!
// fix copy button icon size (make smaller)
// copy on click function

function copyPassword1() {
    let p1El = document.getElementById("password-1")
    let hiddenField = document.getElementById("hidden-password-1")
    hiddenField.value = p1El.textContent
    // hiddenField.select()
    navigator.clipboard.writeText(hiddenField.value)
}