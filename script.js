let myLibrary = [{title:'a',author:'aa',pages:5,readStatus:'Unread'}];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

Book.prototype.toString = function() {
    console.log(this.title, this.author);
};

// function goal: get user input, turn it into a book object, 
// add that book object to the myLibrary array

function addBookToLibrary() {
    let newTitle = document.getElementById('inputTitle').value;
    let newAuthor = document.getElementById('inputAuthor').value;
    let newPages = document.getElementById('inputPages').value;
    let newStatus = document.querySelector('input[name=status]:checked').value;

    let newBook = new Book(newTitle,newAuthor,newPages,newStatus);

    myLibrary.push(newBook);

    let bookshelf = document.getElementById('bookshelf');

    let bookContainer = document.createElement('div');
    let bookButtons = document.createElement('section');
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    let title = document.createElement('h3');
    let author = document.createElement('h5');
    let pages = document.createElement('p');
    let status = document.createElement('p');

    editButton.textContent = 'Edit';
    deleteButton.textContent = 'Delete';
    title.textContent = newTitle;
    author.textContent = newAuthor;
    pages.textContent = newPages;
    status.textContent = newStatus;

    bookContainer.setAttribute('class','book');
    bookContainer.dataset.index = myLibrary.length - 1;
    bookButtons.setAttribute('class','bookButtons');
    deleteButton.setAttribute('id','deleteButton');
    editButton.setAttribute('id','editButton');
    if(newStatus == 'Read') {
        status.setAttribute('style','color: green');
    } else {
        status.setAttribute('style','color: red');
    }

    bookContainer.appendChild(bookButtons);
    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(status);

    bookButtons.appendChild(deleteButton);
    bookButtons.appendChild(editButton);

    bookshelf.appendChild(bookContainer);


    console.log(myLibrary);

}
document.getElementById('addBook').addEventListener('click',addBookToLibrary);

function removeBookFromLibrary(dataIndex) {
    myLibrary.splice(Number(dataIndex),1);
    console.log('Delete Successful');
}

function displayLibrary() {
    if (myLibrary.length !== 0) {
        let bookshelf = document.getElementById('bookshelf');

        myLibrary.forEach((book, index) => {

            let bookContainer = document.createElement('div');
            let bookButtons = document.createElement('section');
            let deleteButton = document.createElement('button');
            let editButton = document.createElement('button');
            let title = document.createElement('h3');
            let author = document.createElement('h5');
            let pages = document.createElement('p');
            let status = document.createElement('p');

            editButton.textContent = 'Edit';
            deleteButton.textContent = 'Delete';
            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;
            status.textContent = book.readStatus;

            bookContainer.setAttribute('class','book');
            bookContainer.dataset.index = index;
            bookButtons.setAttribute('class','bookButtons');
            deleteButton.setAttribute('id','deleteButton');
            editButton.setAttribute('id','editButton');
            if(book.readStatus == 'Read') {
                status.setAttribute('style','color: green');
            } else {
                status.setAttribute('style','color: red');
            }

            bookContainer.appendChild(bookButtons);
            bookContainer.appendChild(title);
            bookContainer.appendChild(author);
            bookContainer.appendChild(pages);
            bookContainer.appendChild(status);

            bookButtons.appendChild(deleteButton);
            bookButtons.appendChild(editButton);

            bookshelf.appendChild(bookContainer);

        });

    }
}
