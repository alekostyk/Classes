// Triangle class

class Triangle {
    constructor(a,b,c,h) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.h = h;
    }

    field() {
        return `Triangle field: ${this.a * this.h}`;
    }

    circuit() {
        return `Triangle circuit: ${this.a + this.b + this.c}`;
    }
}

// Square class

class Square {
    constructor(a) {
        this.a = a;
    }

    field() {
        return `Square field: ${this.a * this.a}`;
    }

    circuit() {
        return `Square circuit: ${this.a * 4}`;
    }
}

// Circle class

class Circle {
    constructor(r) {
        this.r = r;
    }

    field() {
        return `Circle field: ${Math.PI * Math.pow(this.r,2)}`;
    }

    circuit() {
        return `Circle circuit: ${2 * Math.PI * this.r}`;
    }
}


let trojkat = new Triangle(3,5,6,8);
console.log(trojkat.field());
console.log(trojkat.circuit());

let kwadrat = new Square(4);
console.log(kwadrat.field());
console.log(kwadrat.circuit());

let kolo = new Circle(4.23);
console.log(kolo.field());
console.log(kolo.circuit());