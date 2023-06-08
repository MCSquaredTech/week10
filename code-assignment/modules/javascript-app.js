import { BookTableData } from "../classes/book-table-data.js";
import { BookFormData } from "../classes/book-form-data.js";
import { books } from "../data-service/books-data.js";

const bookshelf = document.getElementById('mid-div'); 
let book = document.getElementById("left-div"); 

let bookTable = new BookTableData(books, bookshelf);
bookTable.loadBooks(books, bookshelf);

let bookForm = new BookFormData(book)
bookForm.displayForm();

