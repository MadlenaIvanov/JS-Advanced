class PointDistance {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        if(a instanceof PointDistance == false || b instanceof PointDistance == false) {
            throw new TypeError('Parameter must be of type Point');
        }
        
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }
}

const p1 = new PointDistance(0,0);
const p2 = new PointDistance(4, 3);

console.log(p1, p2);
console.log(PointDistance.distance(p1, p2));