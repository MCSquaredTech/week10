import { BookTableData } from "./book-table-data.js";
import { bookArray } from '../data-service/books-data.js';

export class BookFormData { 
    constructor(entry) {
        this.insertPoint = entry;
    }

    displayForm(books) {
        this.clearForm(this.insertPoint);
        const bookForm = document.createElement('form');
        bookForm.classList.add('bookForm');
        let frmISBN = document.createElement('div'); 
        frmISBN.classList.add('from-group');
        frmISBN.innerHTML = (`
            <label for='isbn-10'>ISBN</label> 
            <input type='text' class='form-control' id='isbn-10' placeholder='ISBN 10 Number'>
        `);
        bookForm.appendChild(frmISBN); 
        this.insertPoint.appendChild(bookForm);

        let frmPubDate = document.createElement('div'); 
        frmPubDate.classList.add('form-group');
        frmPubDate.innerHTML = (`
            <label for='pub-date'>Pub Date</label> 
            <input type='date' class='form-control' id='pub-date' placeholder='Publication Date'>
        `);
        bookForm.appendChild(frmPubDate);
        this.insertPoint.appendChild(bookForm);

        let frmTitle = document.createElement('div')
        frmTitle.classList.add('form-group');
        frmTitle.innerHTML = (`
            <label for='title'>Book Title</label> 
            <input type='text' class='form-control' id='title' placeholder='Book Title'>
        `);
        bookForm.appendChild(frmTitle);
        this.insertPoint.appendChild(bookForm);

        let frmAuthor = document.createElement('div')
        frmAuthor.classList.add('form-group');
        frmAuthor.innerHTML = (`
            <label for='author'>Authors</label> 
            <input type='text' class='form-control' id='author' placeholder='Author(s) Name'>
        `);
        bookForm.appendChild(frmAuthor);
        this.insertPoint.appendChild(bookForm);

        let frmDescription = document.createElement('div')
        frmDescription.classList.add('form-group');
        frmDescription.innerHTML = (`
            <label for='description'>Description</label> 
            <textarea rows='5' class='form-control' id='description' placeholder='Description'>
        `);
        bookForm.appendChild(frmDescription);
        this.insertPoint.appendChild(bookForm);

        let frmPrice = document.createElement('div')
        frmPrice.classList.add('form-group');
        frmPrice.innerHTML = (`
            <label for='price'>Price</label> 
            <input type='text' class='form-control' id='price' placeholder='Book Retail Price'>
            <br/>
        `);
        bookForm.appendChild(frmPrice);
        this.insertPoint.appendChild(bookForm);
       
        let frmGroup = document.createElement('div')
        frmGroup.classList.add('form-group');
        // frmGroup.innerHTML = (`
        //     <button class='btn btn-primary form-control' id='submit'>submit</button>
        // `);
        let addBookButton = this.createNewBook(books);
        frmGroup.appendChild(addBookButton);
        bookForm.appendChild(frmGroup);
        this.insertPoint.appendChild(bookForm);
    }

    createNewBook(books) { 
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary form-control';
        btn.innerHTML = 'Add Book'; 
        
        btn.onclick = (e) => {
            e.preventDefault();
            books.add(document.getElementById('isbn-10').value, 
            document.getElementById('pub-date').value, 
            document.getElementById('title').value, 
            document.getElementById('author').value, 
            document.getElementById('description').value, 
            document.getElementById('price').value);
            
            const bookshelf = document.querySelector('.data-rows'); 
            let bookTable = new BookTableData(books, bookshelf);
            this.displayForm(books);
            bookTable.drawTableRows();
        }    
        return btn;
    }

    clearForm(element) {
        while(element.firstChild) { 
            element.removeChild(element.firstChild);
        }
    }
}