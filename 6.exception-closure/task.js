function parseCount(parsing) {
    const value = Number.parseFloat(parsing);
    if(Number.isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return value
}

function validateCount(parsing) {
    try {
        return parseCount(parsing)
    } catch (error) {
        return error
    } 
}


// Задача 2

class Triangle {
    constructor(a, b, c) {
        if(a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
        this.a = a;
        this.b = b;
        this.c = c
    }

    get perimeter() {
        return this.a + this.b + this.c
      }
    
    get area() {
         const p = this.perimeter / 2
         const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
         return Number(area.toFixed(3))
    }
   
}

function getTriangle(a, b, c) {
    try {
    const triangle1 = new Triangle(a, b, c)
    return triangle1
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}