// Pass in the book-data from the applet.js file 

export class BookTableData  { 
    constructor(bookData, bookTable) { 
        this.bookData = bookData; 
        this.bookTable = bookTable;
    }

    loadBooks() { 
        let classes = "table table-light table-striped table-hover align-center".split(' ');
        const tbl = document.createElement('table');
        tbl.classList.add(...classes);
        tbl.setAttribute('id', "tbl-bookshelf");
        const thead = document.createElement('thead');
        const tbHeaders = document.createElement('tr');
            tbHeaders.innerHTML = (`
                <th>ISBN</th>
                <th>Pub Date</th> 
                <th>Title</th>
                <th>Author</th> 
                <th>Price</th>    
                <th>Delete</th>
            `);
            thead.appendChild(tbHeaders);
        const tbody = document.createElement('tbody');
        for (let book of this.bookData) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = (`
                <td>${book.isbn}</td>
                <td>${book.pubdate}</td>
                <td>${book.title}</td> 
                <td>${book.author}</td> 
                <td> ${book.price}</td>
                <td><button class="btn btn success delete-item">Delete</button>
            `);
            tbody.appendChild(newRow);
        }
        tbl.appendChild(thead);
        tbl.appendChild(tbody);
        this.bookTable.appendChild(tbl);
    }

    
    
}