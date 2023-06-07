// Pass in the book-data from the applet.js file 

export class BookTableData  { 
    constructor(bookData, bookTable) { 
        this.bookData = bookData; 
        this.bookTable = bookTable
    }

    loadBooks() { 
         
        for (let book in this.bookData) {
            const newRow = document.createElement('tr'); 
            newRow.innerHTML = (`
                <td>${book.isbn}</td>
                <td>${book.pudDate}</td>
                <td>${book.title}</td> 
                <td>${book.author}</td> 
                <td>${book.price}</td>
            `);
            this.bookTable.appendChild(newRow);
        }
    }
}