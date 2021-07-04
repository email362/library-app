let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

Book.prototype.toString = () => console.log(this.name, this.title);

function addBookToLibrary() {
    let newBook = new Book('helloTitle','helloAuthor',345, 'Unread');
    let bookshelf = document.getElementById('bookshelf');
    let bookEle = document.createElement('div');
    let titleEle = document.createElement('h3');
    titleEle.textContent = newBook.title;
    let authEle = document.createElement('h5');
    authEle.textContent = newBook.author;
    let pageEle = document.createElement('p');
    pageEle.textContent = newBook.pages;
    let readEle = document.createElement('p');
    readEle.textContent = newBook.readStatus;
    bookEle.setAttribute('class','book');
    bookEle.appendChild(titleEle);
    bookEle.appendChild(authEle);
    bookEle.appendChild(pageEle);
    bookEle.appendChild(readEle);
    bookshelf.appendChild(bookEle);
    newBook.toString();
}

document.getElementById('addBook').addEventListener('click',addBookToLibrary);