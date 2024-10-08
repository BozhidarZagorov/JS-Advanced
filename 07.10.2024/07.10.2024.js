'use strict'

//strict ni ograni4ava da ne pravim greshki po promenlivi
// const myPerson={
//     name:'Peter',
//     age:27
// }
// console.log(Object.getOwnPropertyDescriptors(myPerson));
// Object.defineProperty(myPerson,'name',{
//     value: 'Peter',
//     writable: false,
//     enumerable: true,
//     configurable: true
// });

// myPerson.name='john'    //throwva error zaradi strict ina4e bez strict ne gyrmi no i ne smenq obekta pri writable false
// console.log(myPerson);


// Object.defineProperty(myPerson,'name',{
//     value: 'Peter',
//     writable: false,
//     enumerable: false,
//     configurable: true
// });

// console.log(myPerson);  // pri enumerable false pri logvane ne logva name 
// console.log(myPerson.name); // obekta vse oshte si ima name i moje da byde izvikvan prosto go skriva ot obhojdane


// Object.defineProperty(myPerson,'name',{
//     value: 'Peter',
//     writable: false,
//     enumerable: false,
//     configurable: false
// });


// console.log(myPerson.name);


// Object.defineProperty(myPerson,'name',{
//     value: 'Peter',
//     writable: true,
//     enumerable: false,
//     configurable: false
// });

//pri configurable false nqma da ni pozvoli promeni po definepropertyta



// console.log(Object.keys(myPerson));

// Object.defineProperty(myPerson, 'position', {
//     value: 'janitor',
//     writable: true
// });
// console.log(myPerson);

// myPerson.position = 'security' // gyrmi zaradi strict poneje definepropert - writable e po defalt false

// console.log(myPerson);




// const myPerson={
//     name: 'Peter',
//     age:27,
//     contact:{
//         phone: '+1-555-1764',
//         email: 'peter@abv'
//     }
// }

// Object.defineProperty(myPerson, 'contactInfo',{
//     enumerable:true,
//     configurable:true,
//     get(){
//         return `${this.name}(phone: ${this.contact.phone}, email: ${this.contact.email})`
//     }
// })

// console.log(myPerson.contactInfo);




class Person {
    constructor(firstNmae,lastName) {
        this.firstName=firstNmae
        this.lastName=lastName
    }
    sayHello(){
        console.log(`${this.firstName} says hello!`);
    }
}

class Employee extends Person {
    constructor(firstNmae,lastName,position) {
        super(firstNmae,lastName)
        this.position=position
    }
    printInfo(){
        console.log(`${this.lastName}, ${this.firstName}, ${this.position}`);   
    }
}

const myEmployee = new Employee('John','Smith','teacher')
console.log(myEmployee);
myEmployee.sayHello()
myEmployee.printInfo()
