const myLibrary = [];

function Book(id, title, author, page, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(title, author, page, read) {
  const book = new Book(crypto.randomUUID(), title, author, page, read);
  myLibrary.push(book);
}

function addCardToDOM(book) {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("p");
  title.textContent = `Title: ${book.title}`;
  const author = document.createElement("p");
  author.textContent = `Author: ${book.author}`;
  const page = document.createElement("p");
  page.textContent = `Pages: ${book.page}`;
  const read = document.createElement("p");
  read.textContent = `Status: ${book.read}`;

  card.append(title, author, page, read);

  content.appendChild(card);
}

addBookToLibrary(
  "Omniscient Reader's Viewpoint",
  "Sing Shong",
  498,
  "Completed",
);
addBookToLibrary(
  "Harry Potter and the Deathly Hallows",
  "J. K. Rowling",
  607,
  "Reading",
);

const content = document.querySelector(".content");

for (const book of myLibrary) {
  addCardToDOM(book);
}
