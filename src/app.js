// Get DOM elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('newQuote');

// Function to get a random quote
function getRandomQuote() {
    // Get a random index between 0 and the length of the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    
    // Return the quote at the random index
    return quotes[randomIndex];
}

// Function to display a new quote
function displayNewQuote() {
    // Get a random quote
    const quote = getRandomQuote();
    
    // Update the quote and author text
    quoteElement.textContent = '"' + quote.text + '"';
    authorElement.textContent = '— ' + quote.author;
}

// Add click event listener to the button
newQuoteButton.addEventListener('click', displayNewQuote);

// Display a quote when the page loads
displayNewQuote();