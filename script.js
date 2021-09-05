class Book {

    static bookId = 0;

    constructor(title='Title', author='Author', pages=100, readStatus='unread') {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus.toLowerCase();
        this.id = Book.bookId;
        Book.bookId++;

        
    }

    toString = () => {
        console.log(this.title, this.author);
    }

    get status ()  {
        return this.readStatus;
    }

    set status(value) {
        this.readStatus = value;
    }

    toggleStatus = () => {
        if(this.status == 'read') {
            this.status = 'unread';
        }
        else if(this.status == 'unread') {
            this.status = 'read';
        }
    }

    display = () => {

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
        title.textContent = this.title;
        author.textContent = this.author;
        pages.textContent = this.pages;
        status.textContent = this.status;

        bookContainer.setAttribute('class','book');
        bookContainer.setAttribute('id', this.id);
        bookButtons.setAttribute('class','bookButtons');
        deleteButton.setAttribute('class','deleteButton');
        editButton.setAttribute('class','editButton');
        if(this.status == 'read') {
            status.classList.add('read');
        } else {
            status.classList.add('unread');
        }
        
        bookContainer.appendChild(bookButtons);
        bookContainer.appendChild(title);
        bookContainer.appendChild(author);
        bookContainer.appendChild(pages);
        bookContainer.appendChild(status);

        bookButtons.appendChild(deleteButton);
        bookButtons.appendChild(editButton);

        editButton.addEventListener('click', (e) => {

            let statusEle = document.getElementById(''+this.id).lastChild;

            statusEle.classList.remove(this.status.toLowerCase());
            
            this.toggleStatus();

            statusEle.textContent = this.status;
            
            statusEle.classList.add(this.status.toLowerCase());
            
        });

        return bookContainer;

    }

}





class Library {
    constructor(books = [], domId) {
        this.books = books;
        this.displayShelf = document.getElementById(domId);
    }

    addBook = (title, author, pages, status) => {
        let book = new Book(title,author,pages,status);

        let bookElement = book.display();
        
        this.books.push(book);

        bookElement.firstElementChild.firstElementChild.addEventListener('click', (e) => {
            this.removeBook(e.target.parentNode.parentNode.id);
            e.target.parentNode.parentNode.remove();
        });

        this.displayShelf.appendChild(bookElement);

        console.log({books:this.books});
    }

    removeBook = (id) => {
        this.books.forEach((book,index) => {
            if(book.id == Number(id)) {
                this.books.splice(index,1);
                console.log('Book Removed');
                return;
            }
        });
        console.log({books:this.books});
    }

    display = () => {

        document.getElementById('addBook').addEventListener('click', e => {
            this.addBook(document.getElementById('inputTitle').value, document.getElementById('inputAuthor').value, document.getElementById('inputPages').value, document.querySelector('input[name=status]:checked').value);

        })

        this.books.forEach(book => {
            let bookElement = book.display();
            this.displayShelf.appendChild(bookElement);

            bookElement.firstElementChild.firstElementChild.addEventListener('click', (e) => {
                this.removeBook(e.target.parentNode.parentNode.id);
                e.target.parentNode.parentNode.remove();
            });

        });

    }

}
    
let lib = new Library([new Book('The Hobbit','J.R.R. Tolkien',310,'unread'), new Book('Do Robots Dream of Electric Sheep?','Philip K. Dick',210, 'read'), new Book("Hitchhiker's Guide to the Galaxy",'Douglas Adams',180,'read')],'bookshelf');

window.addEventListener('load', lib.display());
