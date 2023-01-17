const searchArg = document.getElementById("search-argument");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", e => {
    let alphaRegexPattern = /[^a-z]/i;
    let messages = [];

    if (alphaRegexPattern.test(searchArg.value)) {
        messages.push("Search argument should be all alphabets.");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(", ");
    }
})