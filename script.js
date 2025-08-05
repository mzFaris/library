const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read ? "✅" : "❌";
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const cardContainer = document.querySelector("#card-container");

function displayBooks() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    for (const prop in book) {
      const p = document.createElement("p");
      p.textContent = `${prop}: ${book[prop]}`;
      card.append(p);
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    card.append(deleteButton);

    cardContainer.append(card);
  });
}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add");
addButton.addEventListener("click", (e) => {
  dialog.showModal();
});

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("form input[type='radio']:checked");

  addBookToLibrary(title.value, author.value, pages.value, read.value);
  displayBooks();

  dialog.close();
});
