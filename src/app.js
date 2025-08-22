const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('newQuote');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
function displayNewQuote() {
    const quote = getRandomQuote();
    quoteElement.textContent = '"' + quote.text + '"';
    authorElement.textContent = '— ' + quote.author;
}

newQuoteButton.addEventListener('click', displayNewQuote);
displayNewQuote();
