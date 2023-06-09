import { Book } from "./book.js";

export class Books { 
    constructor() { 
        this.bookCollection = [];
    }

    add(isbn, pubDate, title, author, description, price) {
        let book = new Book(isbn, pubDate, title, author, description, price);
        this.bookCollection.push(book); 
    }

    delete(book) { 
        let index = this.bookCollection.indexOf(book);
        this.bookCollection.splice(index, 1);
    }

    load(bookArray) { 
        for (let book of bookArray) { 
            this.add(book.isbn, book.pubdate, book.title, book.author, book.description, book.price)
        }
    }

    get books() { 
        return this.bookCollection;
    }
}