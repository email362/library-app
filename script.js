let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

Book.prototype.toString = () => console.log(this.title, this.author);

// function goal: get user input, turn it into a book object, 
// add that book object to the myLibrary array

function addBookToLibrary() {
    let newTitle = document.getElementById('inputTitle').value;
    let newAuthor = document.getElementById('inputAuthor').value;
    let newPages = document.getElementById('inputPages').value;
    let newStatus = document.querySelector('input[name=status]:checked').value;

    let newBook = new Book(newTitle,newAuthor,newPages,newStatus);

    myLibrary.push(newBook);
    console.log(myLibrary);

}
document.getElementById('addBook').addEventListener('click',addBookToLibrary);

function removeBookFromLibrary(dataIndex) {
    myLibrary.splice(Number(dataIndex),1);
    console.log('Delete Successful');
}

function displayLibrary() {
    
}
