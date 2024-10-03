// import { json } from "stream/consumers";
// import { personData } from "./data.js";

import { log } from "console"

// class Person {
//     static lastId=0;
//     id;
//     firstName;
//     lastName;
//     // SSN=null;
//     age;
//     email;

//     constructor(firstName,lastName,age,email) {
//         this.id = Person.lastId++
//         this.firstName=firstName
//         this.lastName=lastName
//         this.age=age
//         this.email=email
//     }
//     //sayHello
//     toString(){
//         // console.log(`hello my name is ${this.firstname} ${this.lastname} nice to meet you`);
//         return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
//     }
//     static formatName(person){
//         return `${person.lastName}, ${person.firstName}`
//     }
//     static parse(dataJson){
//         const data=JSON.parse(dataJson)
//         const instance =new Person(data.firstName, data.lastName, data.age, data.email)
//         return instance
//     }
// }

// const LiteralPerson = {
//     firstname:undefined,
//     lastname:undefined,
//     SSN: null,
//     sayHello() {
        
//     }
// }
// const myPerson = Person.parse(personData)
// const secondPerson = new Person('Anne','Smith',22,`anne@company.com`)
// const otherPerson = new Person('John','Bobson',28,`John@company.com`)
// // const myPerson = new Person("Peter");
// // console.log(myPerson);
// // myPerson.firstname='Peter'
// // myPerson.lastname='Johnson'
// // console.log(myPerson);
// // myPerson.sayHello()
// console.log(myPerson);
// // console.log(secondPerson);
// // console.log(otherPerson);

// console.log(Person.formatName(myPerson));
// console.log(Person.lastId);


// const myMap = new Map()

// myMap.set('first',1)
// myMap.set('second',2)

// console.log(myMap);
// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.entries());

// const mySet=new Set()

// mySet.add('first')
// mySet.add('second')

// console.log(mySet);
// console.log(mySet.keys());
// console.log(mySet.values());
// console.log(mySet.entries());


function autoEngineCompany(carData) {
    const registry = {}

    for (const entry of carData) {
        let [brand,model,count]=entry.split(' | ')
        count = Number(count)

        if (registry.hasOwnProperty(brand)==false) {
            // registry[brand]={}
            registry[brand]=new CarBrand(brand)

        }

        // if (registry[brand].hasOwnProperty(model)==false) {
        //     registry[brand][model]=new CarModel(model)
        // }
        // registry[brand][model].add(count)
        registry[brand].add(model,count)

    }
    console.log(Object.values(registry).join('\n'));
    
    // for (const brand in registry) {
    //     console.log(brand);

    //     console.log(Object.values(registry[brand]).join('\n'));
        
    //     // for (const model in registry[brand]) {
    //     //     console.log(registry[brand][model].toString());
            
    //     // }
    // }
    
}
class CarBrand{
    name;
    models;

    constructor(name){
        this.name=name
        this.models=new Map()
    }

    add(model,count){
        if (this.models.has(model)==false) {
            this.models.set(model, new CarModel(model))
        }
        this.models.get(model).add(count)
    }
    toString(){
        return `${this.name}
${[...this.models.values()].join('\n')}`
    }
}
class CarModel{
    name;
    count;

    constructor(name,count=0){
        this.name=name
        this.count=count
    }
    add(count){
        this.count+=count
    }
    toString(){
        return `###${this.name} -> ${this.count}`
    }
}
autoEngineCompany(['Audi | Q7 | 1000','Audi | Q6 | 100','BMW | X5 | 1000','BMW | X6 | 100','Citroen | C4 | 123','Volga | GAZ-24 | 1000000','Lada | Niva | 1000000','Lada | Jigula | 1000000','Citroen | C4 | 22','Citroen | C5 | 10'])