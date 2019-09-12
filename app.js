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

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Construct the error element
  // Create div
  const div = document.createElement('div');
  // Add class names; alert but also the passed in className
  div.className = `alert ${className}`;
  // Add text node
  div.appendChild(document.createTextNode(message));
  // Insert alert into the DOM
  // First get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');

  // Two args: what we want to insert (the div)
  // And before what to insert it (the form)
  container.insertBefore(div, form);

  // Alert should disappear after 3 seconds
  setTimeout(function() {
    document.querySelector('.alert').remove();
  }, 3000);
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

  // Validate (no empty fields)
  if (title === '' || author === '' || isbn === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);

    // Show success message
    ui.showAlert('Book added', 'success');

    // Clear table fields after adding book
    ui.clearFields();
  }

  e.preventDefault();
});
