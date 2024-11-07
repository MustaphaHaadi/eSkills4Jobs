// Initialize empty books array
let books = [];

// Function to add a new book to the array
function addBook(title, author, yearPublished) {
    let book = {
        title: title,
        author: author,
        yearPublished: yearPublished
    };
    books.push(book);
}

// Function to list all books
function listBooks() {
    if (books.length === 0) {
        console.log("No books in the list.");
        return;
    }
    
    console.log("List of Books:");
    for (let book of books) {
        console.log(`"${book.title}" by ${book.author} (${book.yearPublished})`);
    }
}

// Add some sample books
addBook("Python 101", "Hardy", 2024);
addBook("JavaScript 101", "John", 2021);

// List all books
listBooks();