const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const firstName = document.getElementById("first-name");
const lasttName = document.getElementById("last-name");
const phone = document.getElementById("phone");
const location = document.getElementById("location");

form.addEventListener("submit", e => {
    let messages = [];

    let alphaRegexPattern = /[^a-z]/i;
    let phoneRegexPattern = /[^0-9]/i;

    if (alphaRegexPattern.test(firstName.value)) {
        messages.push("First name should be all alphabets.");
    }

    if (alphaRegexPattern.test(lastName.value)) {
        messages.push("Last name should be all alphabets.");
    }

    if (alphaRegexPattern.test(location.value)) {
        messages.push("Location should be all alphabets.");
    }

    if (phoneRegexPattern.test(phone.value)) {
        messages.push("Phone should be all numbers.");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(", ");
    }
})
