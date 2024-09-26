// // logThis('global')
// const myObj={
//     count: 5,
//     logThis(msg) {
//         console.log('Execution context:',msg,this);
//     }
// }
// // myObj.logThis('object method')
// document.querySelector('button').addEventListener('click',myObj.logThis.bind(myObj,'bound context'))
// console.log(logThis);

// const person={
//     name:'Peter',
//     age:31
// }
// myObj.logThis.apply(person,['object method'])

// function add(a,b) {
//     console.log(a+b);
// }
// add.call(null,5,3)
// add.apply(null,[5,3])

// const boundLogThis=logThis.bind(person)
// console.log(boundLogThis);
// boundLogThis('bound content')

// const otherPerson={
//     name:'George',
//     boundLogThis
// }
// otherPerson.boundLogThis('inside other object')


///////////////////////////////////////////////////////////
// const obj={
//     name:'Peter',
//     outer(){
//         console.log(this);//Object {name:'Peter'}
//         const inner = () =>console.log(this);
//         inner()
//     }
// }
// obj.outer()//Object {name:'Peter'}

// const {outer}=obj
// outer()

//////////////////////////////////////////////////////////

// function externalArea() {
//     return Math.abs(this.x*this.y)
// }
// function externalVol(){
//     return Math.abs(this.x * this.y * this.z);
// };
// function solve(area,vol,boxesAsJson) {
    
//     const boxes=JSON.parse(boxesAsJson)

//     const result = boxes.map(box => ({
//         area:area.call(box),
//         volume:vol.call(box)
//     }))

//     // for (const box of boxes) {
//     //     result.push({
//             // area:area.call(box),
//             // volume:vol.call(box)
//     //     })
//     // }
//     return result
    
// }
// solve(externalArea, externalVol, `[
//     {"x":"1","y":"2","z":"10"},
//     {"x":"7","y":"7","z":"10"},
//     {"x":"5","y":"2","z":"10"}
//     ]`);

////////////////////////

// function outer(msg) {
//     console.log('executing outer function');
    
//     return function inner() {
//         console.log('executing inner function');
//         console.log(msg);
//     }
// }
// const result = outer('hello')
// const result2 = outer('there')

// result()
// result2()

// console.log(result,result2);

/////////////////////////

// let counter = 5 

// function count(value) {
//     counter++
//     console.log(counter+value);
    
// }
// count(3)
// count(3)
// count(3)
// count(3)

// counter=-3

// count(3)
// count(3)

//////////////////////


// function outer(msg) {
//     let counter=0
//     console.log(counter);
//     increment()
//     console.log(counter);
//     function increment() {
//         counter++
//     }
// }
// outer()

///////////////////



// /////////////////////////////////

// function createCounterObj() {
//     return{
//         counter:0,
//         increment(){
//             this.counter++,
//             console.log(this.counter);
            
//         }
//     }
// }

// //both are the same

// function createCounterClosure(msg) {
//     let counter = 0

//     return increment

//     function increment() {
//         counter++,
//         console.log(counter);
        
//     }
// }

// const incr = createCounterClosure()

// incr()
// incr()
// incr()
// incr()
// incr()

// const counterObj = createCounterObj()

// counterObj.increment()
// counterObj.increment()
// counterObj.increment()
// counterObj.increment()
// counterObj.increment()

// console.log(counterObj.counter);

// counterObj.counter=8
// counterObj.increment()

// //////////////////////


// function commandProcessor() {
//     let str = ''

//     return{
//         append,
//         removeStart,
//         removeEnd,
//         print
//     }

//     function append(value) {
//         str+=value
//     }
//     function removeStart(n) {
//         str=str.slice(n)
//     }
//     function removeEnd(n) {
//         str=str.slice(0,-n)
//     }
//     function print() {
//         console.log(str);
//     }
// }
// const proc=commandProcessor()
// proc.append('hello')
// proc.print()
// proc.removeEnd(1)
// proc.print()


//IIFE - immediately-invoked Function Expressions
// (function(){let name = 'Peter'})()




