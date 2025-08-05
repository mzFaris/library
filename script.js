const myLibrary = [];

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

const cardContainer = document.querySelector("#card-container");

function displayBooks() {
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");

    for (const prop in book) {
      const p = document.createElement("p");
      p.textContent = `${prop}: ${book[prop]}`;
      card.append(p);
    }

    cardContainer.append(card);
  });
}

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add");
addButton.addEventListener("click", (e) => {
  dialog.showModal();
});

addBookToLibrary("Omniscient Reader's Viewpoint", "Sing Shong", 500, true);
addBookToLibrary("Omniscient Reader's Viewpoint", "Sing Shong", 500, true);
addBookToLibrary("Omniscient Reader's Viewpoint", "Sing Shong", 500, true);
addBookToLibrary("Omniscient Reader's Viewpoint", "Sing Shong", 500, true);
addBookToLibrary("Lookism", "Taejun Pak", 300, false);
addBookToLibrary("Lookism", "Taejun Pak", 300, false);
addBookToLibrary("Lookism", "Taejun Pak", 300, false);
addBookToLibrary("Lookism", "Taejun Pak", 300, false);
addBookToLibrary("Lookism", "Taejun Pak", 300, false);

displayBooks();
