class Circle {
    constructor(r) {
        this.r = r;
    }

    get diameter() {
        return this.r * 2;
    }

    set diameter(value) {
        if(typeof value != 'number') {
            throw new TypeError('Diameter must be a number')
        }
        this.r = value /2;
    }
}

const myCircle = new Circle(3);

console.log(myCircle);
console.log(myCircle.r);
console.log(myCircle.diameter);

myCircle.r = 5;
console.log(myCircle.r);
console.log(myCircle.diameter);

myCircle.diameter = 8;
console.log(myCircle.r)