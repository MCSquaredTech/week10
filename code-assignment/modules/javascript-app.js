import { BookTableData } from "../components/book-table-data.js";
import { BookFormData } from "../components/book-form-data.js";
import { Books } from "../classes/books.js";
import { bookArray } from "../data-service/books-data.js"

let eventClick = ((id, action) => { 
    let element = document.querySelector(id);
    element.addEventListener('click', action);
    return  element; 
});

eventClick('#add', () => {
    
    let element = document.querySelector('#left-div');

    if (element.classList.contains('toggle-hide')){
        element.classList.remove('toggle-hide');
        element.classList.add('toggle-show')
    } else { 
        element.classList.remove('toggle-show');
        element.classList.add('toggle-hide')
    }
});

const bookshelf = document.querySelector('.data-rows'); 
let book = document.getElementById("left-div"); 

let books = new Books(); 
books.load(bookArray);

let bookTable = new BookTableData(books, bookshelf);
bookTable.loadBooks();

let bookForm = new BookFormData(book)
bookForm.displayForm();

tableRows = document.querySelectorAll('table tbody tr')

console.log(tableRows);

