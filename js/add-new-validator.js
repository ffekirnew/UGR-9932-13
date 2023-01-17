const bookName = document.getElementById("book-name");
const authorName = document.getElementById("author-name");
const isbn = document.getElementById("isbn");
const cover = document.getElementById("book-cover");
const price = document.getElementById("price");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = [];

    let alphaRegexPattern = /[^a-z]/i;
    let isbnRegexPattern = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$)[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;
    let priceRegexPattern = /^\d+(?:\.\d{1,2})?$/;

    console.log(alphaRegexPattern.test(bookName.value));
    if (alphaRegexPattern.test(bookName.value)) {
        messages.push("Book name can only contain the alphabet.");
    }

    if (alphaRegexPattern.test(authorName)) {
        messages.push("Author name should only contain alphabets")
    }

    if (isbnRegexPattern.test(isbn.value)) {
        messages.push("ISBN should be in the standard manner.");
    }

    if (priceRegexPattern.test(price.value)) {
        messages.push("Price should only contain money charachters.");
    }

    if (messages) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(", ");
        console.log(messages);
        console.log(errorElement.innerHTML);
    }

})