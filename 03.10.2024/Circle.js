class Circle{
    _r;
    get r(){
        return this._r
    }
    set r(value){
        if (typeof value !='number') {
            throw new TypeError('Radius must be a positive number')
        }
        if (value<=0) {
            throw new RangeError('Radius must be a positive number')
        }
        this._r=value
    }
    // d;
    get d(){
        return this.r*2;
    }
    set d(value){
        if (typeof value !='number') {
            throw new TypeError('Diameter must be a positive number')
        }
        if (value<=0) {
            throw new RangeError('Diameter must be a positive number')
        }
        this.r=value/2
    }
    constructor(r){

        this.r=r
        // this.d=2*r
    }
}
const myCircle = new Circle(5)
console.log(myCircle.r);
console.log(myCircle.d);

// myCircle.d='hello'
// myCircle.r='hello'

// console.log(myCircle.r);
// console.log(myCircle.d);


// myCircle.r = 8

// console.log(myCircle.r);
// console.log(myCircle.d);

// myCircle.d=4

// console.log(myCircle.r);
// console.log(myCircle.d);

