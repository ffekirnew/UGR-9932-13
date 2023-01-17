function isAlphanumericAndUnderscore(string){
    let regexPattern = /[^a-z0-9_]/i;
    return regexPattern.test(string);
}

const userName = document.getElementById("user-name")
const password = document.getElementById("password")
const submit = document.getElementById("submit")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", e => {
    let messages = [];

    console.log(userName.value)
    if (isAlphanumericAndUnderscore(userName.value)) {
        messages.push("Usernames can only contain the alphabet, numbers and the underscore");
    }

    if (password.value.length < 8) {
        messages.push("Password length must be greater or equal to 8")
    }
    
    if (messages != []) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(", ")
    }
})


