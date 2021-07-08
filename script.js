let myLibrary = [];





function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;

}

Book.prototype.toString = function() {
    console.log(this.title, this.author);
};

Book.prototype.toggleStatus = function() {
    if(this.readStatus == 'Read') {
        this.readStatus = 'Unread';

    } else {
        this.readStatus = 'Read';
    }
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

    editButton.textContent = 'Read';
    deleteButton.textContent = 'Delete';
    title.textContent = newTitle;
    author.textContent = newAuthor;
    pages.textContent = newPages;
    status.textContent = newStatus;

    bookContainer.setAttribute('class','book');
    bookContainer.dataset.index = myLibrary.length - 1;
    bookButtons.setAttribute('class','bookButtons');
    deleteButton.setAttribute('class','deleteButton');
    editButton.setAttribute('class','editButton');
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

    deleteButton.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.remove();
        removeBookFromLibrary(e.target.parentNode.parentNode.dataset.index);
    });

    editButton.addEventListener('click', (e) => {
        changeStatus(e.target.parentNode.parentNode.dataset.index);
        console.log(myLibrary);
    });

    bookshelf.appendChild(bookContainer);



    console.log(myLibrary);

}
document.getElementById('addBook').addEventListener('click',addBookToLibrary);

function removeBookFromLibrary(dataIndex) {
    myLibrary.splice(Number(dataIndex),1);
    console.log('Delete Successful');
    document.querySelectorAll('.book').forEach((book, index )=> {
        book.dataset.index = index;
    });
}

function changeStatus(dataIndex) {
    let book = myLibrary[Number(dataIndex)];
    book.toggleStatus();
    let domBook = document.querySelector(`[data-index = "${dataIndex}"]`);
    if (book.readStatus == 'Read') {
        domBook.lastElementChild.textContent = 'Read';
        domBook.lastElementChild.setAttribute('style','color:green');
    } else {
        domBook.lastElementChild.textContent = 'Unread';
        domBook.lastElementChild.setAttribute('style','color:red');
    }
    console.log(myLibrary[Number(dataIndex)].readStatus);
}

function displayLibrary() {

    if (myLibrary.length == 0) {
        myLibrary.push(new Book('The Hobbit','J.R.R. Tolkien',310,'Unread'));
        myLibrary.push(new Book('Do Robots Dream of Electric Sheep?','Philip K. Dick',210, 'Read'));
        myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy",'Douglas Adams',180,'Read'));
    }
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

            editButton.textContent = 'Read';
            deleteButton.textContent = 'Delete';
            title.textContent = book.title;
            author.textContent = book.author;
            pages.textContent = book.pages;
            status.textContent = book.readStatus;

            bookContainer.setAttribute('class','book');
            bookContainer.dataset.index = index;
            bookButtons.setAttribute('class','bookButtons');
            deleteButton.setAttribute('class','deleteButton');
            editButton.setAttribute('class','editButton');
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

        document.querySelectorAll('.deleteButton').forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log(e);
                removeBookFromLibrary(e.target.parentNode.parentNode.dataset.index);
                e.target.parentNode.parentNode.remove();
            });
        });
        let editButtons = document.querySelectorAll('.editButton');
        // console.log(editButtons);
        editButtons.forEach( (button) => {
            // console.log(button);
            button.addEventListener('click', (e) => {
                changeStatus(e.target.parentNode.parentNode.dataset.index);
                // console.log(myLibrary);

            });
        });

    
}

window.addEventListener('load', displayLibrary);
