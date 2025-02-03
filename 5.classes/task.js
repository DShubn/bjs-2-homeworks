class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state=100, type=null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(newCondition) {
        if(newCondition < 0) {
            this._state = 0;
        } else if(newCondition > 100) {
            this._state = 100;
        } else {
            this._state = newCondition;
        }
    }
    get state() {
        return this._state 
    }
}

class Magazine extends PrintEditionItem {
    constructor() {
        super()
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author) {
        super()
        this.author = author;
        this.type = "book"
    }
}

class NovelBook extends Book {
  constructor() {
    super()
    this.type = "novel"
  }
}

class FantasticBook extends Book {
  constructor() {
    super()
    this.type = "fantastic"
  } 
}

class DetectiveBook extends Book {
  constructor() {
    super()
    this.type = "detective"
  }
}



// №2

class Library extends Book{
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook(book) {
        this.book = book;
        if(this.state > 10) {
            this.books.push(book)
        }
    }
    findBookBy(type, value) {
        type.v
    }
}