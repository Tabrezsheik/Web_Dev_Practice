//  Library Book System
// Features:
// Add books
// Remove books
// Check if book exists
// Show all books give in steps
let books = ["Harry Potter", "Atomic Habits", "Rich Dad Poor Dad"];

// Show books
console.log(books);

// Add book
books.push("The Alchemist");

// Remove last book
books.pop();

// Check book exists
console.log(books.includes("Atomic Habits"));

console.log(books.includes("The Alchemist"));

// Show final books
console.log(books);