const myLibrary = [];
const content = document.querySelector("#content");
const addBookButton = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function fetchDataFromForm() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("input[type='radio']:checked");

  return [title.value, author.value, pages.value, read.value];
}

function createCard(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", book.id);

  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");
  const deleteButton = document.createElement("button");

  title.textContent = `Title: ${book.title}`;
  author.textContent = `Author: ${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  read.textContent = `Read: ${book.read}`;
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", (e) => deleteCard(book.id));

  card.append(title, author, pages, read, deleteButton);

  content.append(card);
}

function displayBook() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  myLibrary.forEach((book) => {
    createCard(book);
  });
}

function deleteCard(id) {
  const card = document.querySelector(`[data-id="${id}"]`);
  content.removeChild(card);

  myLibrary.splice(
    myLibrary.findIndex((book) => book.id === id),
    1,
  );
}

addBookButton.addEventListener("click", (e) => {
  dialog.showModal();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary(...fetchDataFromForm());
  dialog.close();
  displayBook();
});

addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);

displayBook();
