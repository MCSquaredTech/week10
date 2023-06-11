import { Book } from "./book.js";
import { bookArray } from '../data-service/books-data.js';

export class Books { 
    constructor() { 
        this.bookCollection = [];
        this.currentBook;
    }

    add(isbn, pubDate, title, author, description, price) {
        let book = new Book(isbn, pubDate, title, author, description, price);
        this.currentBook = book;
        this.bookCollection.push(book); 
        
    }

    delete(book) { 
        let index = this.bookCollection.indexOf(book);
        this.bookCollection.splice(index, 1);
    }

    load() { 
        for (let book of bookArray) { 
            this.add(book.isbn, book.pubdate, book.title, book.author, book.description, book.price)
        }
    }

    save(book) { 
        console.log(JSON.stringify(bookArray))
        let bookJSon = `
            {"isbn": "${book.isbn}", 
            "pubdate": "${book.pubDate}", 
            "title": "${book.title}", 
            "author": "${book.author}", 
            "description": "${book.description}", 
            "image": = "none", 
            "price": "${book.price}}"
        `;
        let obj = JSON.parse(bookArray);
        obj[bookArray].push(bookJSon);
        bookArray = JSON.stringify(obj);
    }

    get books() { 
        return this.bookCollection;
    }
}