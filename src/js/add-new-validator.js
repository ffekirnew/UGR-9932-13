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
    let priceRegexPattern = /[^0-9_]/i;

    if (alphaRegexPattern.test(bookName.value)) {
        messages.push("Book name can only contain the alphabet.");
    }

    if (alphaRegexPattern.test(authorName.value)) {
        messages.push("Author name should only contain alphabets")
    }

    if (isbnRegexPattern.test(isbn.value)) {
        messages.push("ISBN should be in the standard manner.");
    }

    console.log(price.value);
    if (priceRegexPattern.test(price.value)) {
        messages.push("Price needs to be a valid price.");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join(", ");
    }

})