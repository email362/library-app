let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

Book.prototype.toString = () => console.log(this.title, this.author);

function addBookToLibrary() {
    
    myLibrary.push(new Book(document.getElementById('inputTitle').value,document.getElementById('inputAuthor').value,document.getElementById('inputPages').value, 'Unread'));
    let bookshelf = document.getElementById('bookshelf');
    let bookEle = document.createElement('div');

    let buttonDiv = document.createElement('div');
    buttonDiv.setAttribute('class', 'bookButtons');
    
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id','deleteButton');
    deleteButton.textContent = 'Delete';

    let editButton = document.createElement('button');
    editButton.setAttribute('id','editButton');
    editButton.textContent = 'Edit';

    buttonDiv.appendChild(deleteButton);
    buttonDiv.appendChild(editButton);

    let titleEle = document.createElement('h3');
    titleEle.textContent = book.title;
    let authEle = document.createElement('h5');
    authEle.textContent = book.author;
    let pageEle = document.createElement('p');
    pageEle.textContent = book.pages;
    let readEle = document.createElement('p');
    readEle.textContent = book.readStatus;
    bookEle.setAttribute('class','book');
    
    bookEle.appendChild(buttonDiv);
    bookEle.appendChild(titleEle);
    bookEle.appendChild(authEle);
    bookEle.appendChild(pageEle);
    bookEle.appendChild(readEle);
    bookshelf.appendChild(bookEle);
    console.log(book.title);

}
document.getElementById('addBook').addEventListener('click',addBookToLibrary);

function removeBookFromLibrary(bookToBeRemoved) {

}

function displayLibrary() {
    
}
