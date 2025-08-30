const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('newQuote');
const copyButton = document.getElementById('copyQuote');

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

copyButton.addEventListener('click', function() {
    const quoteText = quoteElement.textContent + ' ' + authorElement.textContent;
    navigator.clipboard.writeText(quoteText).then(function() {
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        setTimeout(function() {
            copyButton.textContent = originalText;
        }, 2000);
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
        alert('Could not copy text. Please select and copy manually.');
    });
});

displayNewQuote();
