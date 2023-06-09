
export class Book { 
    constructor(isbn, pubDate, title, author, description, price) {
        this._isbn = isbn; 
        this._pubDate = pubDate; 
        this._title = title; 
        this._author = author; 
        this._description = description; 
        this._price = price; 
    }

    get isbn() {
        return this._isbn; 
    }
    set isbn(value) { 
        this._isbn = value; 
    }

    get pubDate() { 
        return this._pubDate; 
    }
    set pubDate(value) { 
        this.pubDate = value;
    }

    get title() { 
        return this._title; 
    }
    set title(value) { 
        this._title = value;
    }

    get author() { 
        return this._author;
    }
    set author(value) { 
        this._author = value;
    }

    get description() { 
        return this._description;
    }
    set description(value) { 
        this._description = value;
    }

    get price() { 
        return this._price;
    }
    set price(value) { 
        this._price = value;
    }

}