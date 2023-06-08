import { BookTableData } from "../classes/book-table-data.js";
import { books } from "../data-service/books-data.js";

const bookshelf = document.getElementById('datarow'); 

console.log('here');

let bookTable = new BookTableData(books, bookshelf);
bookTable.loadBooks(books, bookshelf);