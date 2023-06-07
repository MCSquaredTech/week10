console.log('Javascript-app.js file');
import { BooksTableData } from '../classes/book-table-data'; 
import books from '../data-service/books-data'; 

bookShelfTable = document.getElementById('bookshelf');

books = BooksTableData(books,bookSelfTable); 
books.loadBooks(); 
