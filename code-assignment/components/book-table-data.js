import { Books } from '../classes/books.js'

export class BookTableData  { 
    constructor(bookData, bookTable) { 
        this.bookData = bookData; 
        this.bookTable = bookTable;
    }

    loadBooks() { 
        for (let book of this.bookData.books) {
            let newRow = document.createElement('tr');
            newRow.innerHTML = (`
                <td>${book.isbn}</td>
                <td>${book.pubDate}</td>
                <td>${book.title}</td> 
                <td>${book.author}</td> 
                <td> ${book.price}</td>
                <td><button class="btn btn success delete-item">Delete</button>
            `)  
            function clicked() { 
                return book;
            }
            newRow.onclick = clicked();
            this.bookTable.appendChild(newRow);
        }
        
            
        }
}  
