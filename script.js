const myLibrary = [];
const content = document.querySelector("#content");
const addBookButton = document.querySelector("#add-book");
const dialog = document.querySelector("dialog");

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

function displayBook() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("p");
    const id = document.createElement("p");

    title.textContent = `Title: ${book.title}`;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Pages: ${book.pages}`;
    read.textContent = `Read: ${book.read}`;
    id.textContent = `Id: ${book.id}`;

    card.append(title, author, pages, read, id);

    content.append(card);
  });
}

addBookButton.addEventListener("click", (e) => {
  dialog.showModal();
});

addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);
addBookToLibrary("asdsdf", "sadfsdf", 5, true);

displayBook();
