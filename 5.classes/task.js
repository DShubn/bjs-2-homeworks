class PrintEditionItem {
    constructor(name, relaseData, pagesCount, state=100, type=null) {
        this.name = name;
        this.relaseData = relaseData;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
       return this.state += this.state * 1.5;
    }
    set setter(newCondition) {
        if(newCondition < 0) {
            this.state = 0;
        } else if(newCondition > 100) {
            this.state = 100;
        } else {
            this.state = newCondition;
        }
    }
    get setter() {
        return this._setter 
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
        
    }
}