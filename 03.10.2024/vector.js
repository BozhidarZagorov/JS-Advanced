class Vector{
    x;
    y;

    constructor(x,y){
        this.x=x
        this.y=y
    }

    static add(a,b){
        return new Vector(a.x+b.x,a.y+b.y)
    }
    static distance(a,b){
        return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2)
    }
}

const vecA=new Vector(1,1)
const vecB=new Vector(4,5)

const sum = Vector.add(vecA,vecB)
console.log(vecA,vecB,sum);
console.log(Vector.distance(vecA,vecB));
