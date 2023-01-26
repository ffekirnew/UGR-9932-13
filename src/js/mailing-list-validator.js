const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const firstName = document.getElementById("first-name");
const lasttName = document.getElementById("last-name");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
    let messages = [];

    let alphaRegexPattern = /[^a-z]/i;
    let emailRegexPattern = /[^a-z0-9_@.]/i;

    if (alphaRegexPattern.test(firstName.value)) {
        messages.push("First name should only contain alphabets.");
    }

    if (alphaRegexPattern.test(lasttName.value)) {
        messages.push("Last name should only contain alphabets.");
    }

    if (emailRegexPattern.test(email.value)) {
        messages.push("Email should be in the form name@example.com.");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(", ");
    }
})
