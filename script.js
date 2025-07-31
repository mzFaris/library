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
