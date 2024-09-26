// function createCity(name,population,treasury) {
//     const city={}

//     city.name=name
//     city.population=population
//     city.treasury=treasury

//     return city
// }
// // const result =createCity('Tortuga',7000,15000)
// // console.log(result);

// // // const {name ,treasury}=result
// // const {name ,...rest}=result


// // // console.log(name,treasury);
// // console.log(name,rest);

// // const otherCity = result
// // console.log(otherCity == result);

// // const otherOtherCity={name:'Tortuga',population:7000,treasury:15000}
// // console.log(otherCity==otherOtherCity);

// // //dannite moje da sa ednakvi vytre no ne vodqt do edin adress


// function pop(townArray) {
//     const result={}

//     for (const entry of townArray) {
//         let [name,population]=entry.split(' <-> ')
//         population=Number(population)
//         if (result.hasOwnProperty(name)) {
//             result[name]+=population
//         }else{
//             result[name]=population
//         }
//     }
//     // console.log(result);
    
//     for (const name in result) {
//         console.log(name,':',result[name]);
//     }

// }
// pop(['Istanbul <-> 100000','Honk Kong <-> 2100004','Jerusalem <-> 2352344','Mexico City <-> 23401925','Istanbul <-> 1000'])



// let count = 5 
// const parser = {
//     increment() { count++},
//     decrement() {count--},
//     reset() {count=0}
// }
// const commands =['increment','increment','increment','increment','decrement','reset']

// for (const command of commands) {
//     parser[command]()
//     console.log(command,'->',count);
    
// }

// const myObject = {
//     name:'Peter',
//     age:28,
//     printAge:function() {
//         console.log(`My age is ${this.age} years old`);        
//     },
//     printThis:function() {
//         console.log(this);
//     },
//     greet(){
//         console.log(`hello my name is ${this.name}`);
        
//     }
// }

// function printThis() {
//     console.log(this);
// }
// printThis()
// myObject.printThis()
// myObject.printAge()
// myObject.greet()

// const name =myObject.name
// console.log(name);
// const greet = myObject.greet
// console.log(greet);

// greet()

// const great = myObject.greet

// const otherObj={
//     name:'John'
// }
// otherObj.great=great
// otherObj.great()

// console.log(otherObj.great == myObject.greet);




// function createCity(name,population,treasury) {
//     const city={}

//     city.name=name
//     city.population=population
//     city.treasury=treasury
//     city.taxRate = 10
//     city.collectTaxes = function () {
//         this.treasury+=Math.floor(this.population*this.taxRate)
//     }
//     city.applyGrowth=function(percent){
//         this.population+=Math.floor((percent/100)*this.population)
//     }
//     city.applyRecession=function(percent){
//         this.treasury-=Math.ceil((percent/100)*this.treasury)
//     }
//     return city
// }
// const result = createCity('Tortuga',7000,15000)
// console.log(result);
// result.collectTaxes()
// console.log(result);
// result.applyGrowth(5)
// console.log(result);
// result.applyRecession(7)
// console.log(result);





// function createCity(name,population,treasury) {
//     const city={
//         name,
//         population,
//         treasury,
//         taxRate:10,
//         collectTaxes:function () {
//             this.treasury+=Math.floor(this.population*this.taxRate)
//         },
//         applyGrowth:function(percent){
//             this.population+=Math.floor((percent/100)*this.population)
//         },
//         applyRecession:function(percent){
//             this.treasury-=Math.ceil((percent/100)*this.treasury)
//         }
//     }
//     return city
// }


// const record = {
//     name:{
//         first:'Peter',
//         last: 'Johnson',
//     },
//     age:28,
//     address:{
//         city:'sofia',
//         street:'oringeCounty78',
//         location:{
//             lat:'42.234',
//             lon:'255.231'
//         }
//     }
// }

// // const {...myCopy}=record
// const myCopy=deepCopy(record)
// console.log(myCopy.name==record.name);
// myCopy.first='John'
// console.log(record.name);



// function deepCopy(ref) {
//     if (Array.isArray(ref)) {
//         return ref.map(deepCopy)
//     } if (typeof ref ==='object') {
//         return Object.fromEntries(Object.entries(ref).map((k,v)=>[k,deepCopy(v)]))
//     }else{
//         return ref
//     }
// }



//////////////////////////////////both are the same


// function deepCopy(ref) {
//     if (Array.isArray(ref)) {
//         //copy array
//         return ref.map(deepCopy)
//     }else if (typeof ref ==='object') {
//         //Copy object
//         return Object.fromEntries(Object.entries(ref).map((k,v)=>[k,deepCopy(v)]))
//     }else{
//         // primitive value
//         return ref
//     }
// }

// function copyArray(arr) {
//     const result = []

//     for (const item of arr) {
//         result.push(deepCopy(item))
//     }
//     return result
// }

// function copyObject(obj) {
//     const result = {}

//     for (const key in obj) {
//         result[key]=deepCopy(obj[key])
//     }
// }

/////////////////////////////////////////////////////////



// function createCity(name,population,treasury) {
//     const city={
//         name,
//         population,
//         treasury,
//     }
//     return city
// }
// function addTaxBehavior(city) {
//     return Object.assign(city,{
//         taxRate:10,
//         collectTaxes:function () {
//             this.treasury+=Math.floor(this.population*this.taxRate)
//         },
//         applyGrowth:function(percent){
//             this.population+=Math.floor((percent/100)*this.population)
//         },
//         applyRecession:function(percent){
//             this.treasury-=Math.ceil((percent/100)*this.treasury)
//         }
//     })
// }


// console.log(JSON.stringify(result)); ////////to json //obratnoto e json.parse(result)
//too slow dont use in real time applications
//property order is not preserved !
//json cant hold methods


