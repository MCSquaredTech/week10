import { Books } from '../classes/books.js'

export class BookTableData  { 
    constructor(bookData, bookTable) { 
        this.bookData = bookData; 
        this.bookTable = bookTable;
    }

    drawTableRows() { 
        this.clearDataRows(this.bookTable);

        for (let book of this.bookData.books) {
            let newRow = document.createElement('tr');
            
            newRow.innerHTML = (`
                <td>${book.isbn}</td>
                <td>${book.pubDate}</td>
                <td>${book.title}</td> 
                <td>${book.author}</td> 
                <td> ${book.price}</td>
                
            `)
            
            let action = newRow.insertCell(5); 
            action.appendChild(this.clickDeleteButton(book));  
            this.bookTable.appendChild(newRow);
        } 
        // this.tableRowClicked();   
    }
    
    // tableRowClicked = () => { 
    //     let els = document.querySelectorAll('.data-rows tr'); 
    //     for (let el of els) { 
    //         el.addEventListener('click', (el) => {
                
    //             alert(el.tagName)
    //         });
    //     }
    // }

    clearDataRows(element) {
        while(element.firstChild) { 
            element.removeChild(element.firstChild);
        }
    }

    clickDeleteButton(book) { 
        let btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            let index = this.bookData.books.indexOf(book); 
            this.bookData.books.splice(index, 1);
            this.drawTableRows();
        }
        return btn; 
    }

}  
