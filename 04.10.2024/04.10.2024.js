// class Rectangle{
//     constructor(width,height,color){
//         this.width=width
//         this.height=height
//         this.color=color
//     }
//     calcArea(){
//         return this.width*this.height
//     }
// }
// const rect = new Rectangle(4,5,'Red')
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());


// class Data {
//     constructor(method,uri,version,message,response,fulfilled) {
//         this.method=method
//         this.uri=uri
//         this.version=version
//         this.message=message
//         this.response=undefined
//         this.fulfilled=false
//     }
// }
// let myData=new Data('GET','http://google.com','HTTP/1.1','')
// console.log(myData);

// function processThickets(input,criteria) {
//     const criteriaOptions = ['price','destination','status']
//     const tickets=[]
//     if (!Array.isArray(input) || typeof criteria !='string') {
//         throw Error("Invalid Argument: One or more of the supplied arguments does not match the required type.");
        
//     }
//     if(criteriaOptions.indexOf(criteria)==-1){
//         throw Error("Invalid sorting argument. Valid options: "+criteriaOptions.join(', '));
        
//     }
//     class Thickets{
//         constructor(destination,price,status){
//             this.destination=destination
//             this.price=price
//             this.status=status
//         }
//         static sort(tickets,criteria){
//             if (criteria==='price') {
//                 tickets.sort((a,b)=>a[criteria]-b[criteria])
//             }else{
//                 tickets.sort((a,b)=>a[criteria].localeCompare(b[criteria]))
//             }
//         }
//     }
//     for (const line of input) {
//         [destination,price,curStatus]=line.split('|')
//         const ticket = new Thickets(destination,Number(price),curStatus)
//         tickets.push(ticket)
//     }
//     Thickets.sort(tickets,criteria)
//     return tickets
    
// }
// console.log(processThickets(['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'],'destination'))



// class List{
//     constructor(){
//         this.list=[]
//         this.size=0
//     }
//     add(element){
//         this.list.push(element)
//         this.list.sort((a,b)=>a-b)
//         this.size++
//     }
//     remove(index){
//         if (index >= 0 && index<this.size) {
//             this.list.splice(index,1)
//             this.size--
//         }
//     }
//     get(index){
//         if (index >= 0 && index<this.size) {
//             return this.list[index]
//         }
//     }
// }
// let myList = new List()
// myList.add(5)
// myList.add(1)
// myList.add(6)
// myList.get(0)


// class Stringer {
//     constructor(string,initialLength) {
//         this.innerString=string
//         this.innerLength=initialLength
//     }
//     increase(length){
//         this.innerLength+=length
//     }
//     decrease(length){
//         this.innerLength-=length
//         if (this.innerLength<0) {
//             this.innerLength=0
//         }
//     }
//     toString(){
//         let result = ''
//         if (this.innerLength==0) {
//             result='...'
//         }
//         if (this.innerString.length>this.innerLength) {
//             result = this.innerString.slice(0,this.innerLength)+'...'
//         }else{
//             result=this.innerString
//         }
//         return result
//     }
// }
// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test
// test.decrease(3);
// console.log(test.toString()); // Te...
// test.decrease(5);
// console.log(test.toString()); // ...
// test.increase(4);
// console.log(test.toString()); // Test



// class Hex{
//     constructor(value){
//         this.value=value
//     }
//     valueOf(){
//         return this.value
//     }
//     toString(){
//         return '0x' + this.value.toString(16).toUpperCase()
//     }
//     plus(number){
//         if (typeof number=='number') {
//             return new Hex(this.value+number)
//         }else{
//             return new Hex(this.value+number.value)
//         }
//     }
//     minus(number){
//         if (typeof number=='number') {
//             return new Hex(this.value-number)
//         }else{
//             return new Hex(this.value-number.value)
//         }
//     }
//     parse(string){
//         return parseInt(string,16)
//     }
// }


// function processJuice(input) {
//     const juices = new Map
//     const juiceBottles = new Map

//     for (const line of input) {
//         const [juice,quatity]=line.split(' => ')
//         if (!juices.has(juice)) {
//             juices.set(juice,0)
//         }
//         juices.set(juice, juices.get(juice) + Number(quatity))

//         if (juices.get(juice)>=1000) {
//             const juiceBottle = parseInt(juices.get(juice) / 1000)
//             if (!juiceBottles.has(juice)) {
//                 juiceBottles.set(juice,0)
//             }
//             juiceBottles.set(juice, juiceBottles.get(juice) + juiceBottle)
//             juices.set(juice,juices.get(juice)-juiceBottle*1000)
//         }
//     }
//     for (const [juice,bottleCount] of juiceBottles) {
//         console.log(`${juice} => ${bottleCount}`);
        
//     }
// }
// processJuice(['Orange => 2000','Peach => 1432','Banana => 450','Peach => 600','Strawberry => 549'])


class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name === undefined || name === null || name === "") {
            throw new Error("Invalid input!");
        }
        if (salary === undefined || salary === null || salary === "") {
            throw new Error("Invalid input!");
        }
        if (position === undefined || position === null || position === "") {
            throw new Error("Invalid input!");
        }
        if (department === undefined || department === null || department === "") {
            throw new Error("Invalid input!");
        }
        if (Number(salary) < 0) {
            throw new Error("Invalid input!");
        }

        if (!this.departments[department]) {
            this.departments[department] = {
                totalSalary: 0,
                workers: [],
            };
        }

        let workers = [];

        workers.push({ name, salary, position });
        this.departments[department].totalSalary += salary;

        this.departments[department].workers.push(...workers);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        const departmentsArr = Object.entries(this.departments).sort((a, b) => {
            return (b[1].totalSalary / b[1].workers.length) - (a[1].totalSalary / a[1].workers.length);
        });

        let output = [];

        output.push(`Best Department is: ${departmentsArr[0][0]}`);
        output.push(`Average salary: ${(departmentsArr[0][1].totalSalary / departmentsArr[0][1].workers.length).toFixed(2)}`);

        const sortedWorkers = departmentsArr[0][1].workers.sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        for (const workerObj of sortedWorkers) {
            output.push(`${workerObj.name} ${workerObj.salary} ${workerObj.position}`);
        }

        return output.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());