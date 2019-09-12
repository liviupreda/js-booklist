// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Create prototype
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list');
  // Create table row element
  const row = document.createElement('tr');
  // Insert table columns
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

// Clear table fields after adding book
UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e) {
  // Get form values
  const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

  // Instantiate Book object
  const book = new Book(title, author, isbn);

  // Instantiate UI object (in order to add the book to the table)
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  // Clear table fields after adding book
  ui.clearFields();

  e.preventDefault();
});
