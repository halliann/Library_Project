console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

// i.
class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

// ii.
class Library {
    constructor() {
        this.bookCount = 1;
        this.books = [];
    }

    markRead(checkbox, id) {
        for(let i = 0; i < this.books.length; i++) {
            if(this.books[i].id === id) {
                this.books[i].read = true;
                checkbox.checked = true;
                checkbox.disabled = true;
            }
        }
    }

    addBook() {
        let titleInput = document.getElementById('titleInput').value;
        let authorInput = document.getElementById('authorInput').value;
        let readInput = document.getElementById('readInput').checked;

        let newBook = new Book(this.bookCount, titleInput, authorInput, readInput);
        this.books.push(newBook);

        // create new table row
        let newRow = document.createElement('tr');

        // create new table cells 
        let c1 = document.createElement('td');
        c1.textContent = newBook.title;

        let c2 = document.createElement('td');
        c2.textContent = newBook.author;

        let c3 = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = newBook.read;
        c3.appendChild(checkbox);


        // append new cells to new row
        newRow.appendChild(c1);
        newRow.appendChild(c2);
        newRow.appendChild(c3);

        // select table body
        let tbody = document.getElementById('tableBody');

        // append new row to table
        tbody.appendChild(newRow);

        // increase book count by 1
        this.bookCount++;
    }
};

let library = new Library();

// iii. && iv.
let addBtn = document.getElementById('addBook');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    library.addBook(library.books, library.bookCount);

    // clear input after adding book
    document.getElementById('titleInput').value = '';
    document.getElementById('authorInput').value = '';
    document.getElementById('readInput').checked = false;
});