//your JS code here. If required.
// Select form and table body
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

// Add event listener to the form
bookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  // Get form values
  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const isbn = document.getElementById("isbn").value.trim();

  // Validate input
  if (!title || !author || !isbn) {
    alert("Please fill out all fields!");
    return;
  }

  // Create a new row
  const row = document.createElement("tr");

  // Add data to the row
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Append the row to the table body
  bookList.appendChild(row);

  // Clear form fields
  bookForm.reset();
});

// Add event listener to the table for the "Clear" button
bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    // Remove the row containing the clicked button
    e.target.parentElement.parentElement.remove();
  }
});
