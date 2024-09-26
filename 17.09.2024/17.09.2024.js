// function calorieObject(data) {
//     const result = {}

//     for (let i = 0; i < data.length; i+=2) {
//         const key = data[i];
//         const value = Number(data[i+1])
//         result[key]=value

//     }
//     console.log(result);
// }
// calorieObject(['Yoghurt', '48', 'Rise', '138','Apple', '52'])


// function constructionCrew(obj) {
//     if (!obj.dizziness) {
//         return obj
//     }

//     obj.levelOfHydrated+=obj.weight*obj.experience*0.1
//     obj.dizziness=false
//     return obj
// }
// console.log(constructionCrew({ weight: 80,experience: 1,levelOfHydrated: 0,dizziness: true }))




// function carFactory(order) {
//     let car = {
//         model:null,
//         engine:null,
//         carriage:null,
//         wheels:null
//     }
//     car.model=order.model

//     if (order.power<=90) {
//         car.engine={
//             power:90,
//             volume:1800
//         }
//     }else if (order.power<=120) {
//         car.engine={
//             power:120,
//             volume:2400
//         }
//     }else{
//         car.engine={
//             power:200,
//             volume:3500
//         }
//     }

//     if (order.carriage==='hatchback') {
//         car.carriage={
//             type:'hatchback',
//             color:order.color
//         }
//     }else{
//         car.carriage={
//             type:'coupe',
//             color:order.color
//         }
//     }

//     let sizeOfWheels=order.wheelsize%2===0 ? order.wheelsize - 1 : order.wheelsize

//     car.wheels=new Array(4).fill(sizeOfWheels)

//     return car
// }
// console.log(carFactory({ model: 'VW Golf II',power: 90,color: 'blue',carriage: 'hatchback',wheelsize: 14 }))




// function storeCatalogue(data) {
//     const store={}

//     for (const element of data) {
//         let [key,value]=element.split(' : ')
//         value=Number(value)
//         store[key]=value
//     }

//     let sortResult = Object.entries(store).sort((arrA,arrB)=>arrA[0].localeCompare(arrB[0]))
//    let currentGroupChar=''
//     for (const [key,value] of sortResult) {
//         if (currentGroupChar !==key[0]) {
//             currentGroupChar=key[0]
//             console.log(currentGroupChar);
//         }
//         console.log(`  ${key}: ${value}`);
        
//     } 
// }
// storeCatalogue(['Appricot : 20.4',
//     'Fridge : 1500',
//     'TV : 1499',
//     'Deodorant : 10',
//     'Boiler : 300',
//     'Apple : 1.25',
//     'Anti-Bug Spray : 15',
//     'T-Shirt : 10'])



// function rectangle(width,height,color) {
//     color=color[0].toUpperCase()+color.substring(1)
//     return{
//         width,
//         height,
//         color,
//         calcArea: function () {
//             return this.width*this.height
//         }
//     }
// }
// let rect = rectangle(4,5,'red')
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
// console.log(rect.calcArea());





// function createSortedList() {
//     return{
//         add:function(element){
//             if (typeof(element)!=='number') {
//                 return
//             }
//             this._sortList.push(element)
//             this.size=this._sortList.length
//             this._sortList.sort(this._sort)
//         },
//         remove:function(index){
//             if (index<0 || index>=this.size) {
//                 return
//             }
//             this._sortList.splice(index,1)
//             this._sortList.sort(this._sort)
//             this.size=this._sortList.length
//         },
//         get:function(index){
//             if (index<0 || index>=this.size) {
//                 return
//             }
//             return this._sortList[index]
//         },
//         size:0,
//         _sortList:[],                           //dolna 4erta se slaga za da se znae da ne se pipa otvyn //private method 
//         _sort:(a,b)=>a-b
//     }   
// }
// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1));
// list.remove(1);
// console.log(list.get(1));








// have to check it out more


// function solve() {
//     const canCast = (state) =>({
//         cast:(spell)=>{
//         console.log(`${state.name}cast ${spell}`);
//         state.mana--
//         }
//     })

//     const canFight = (state)=>({
//         fight:()=>{
//             console.log(`${state.name} slashes at the foe!`);
//             state.stamina--
//         }
//     })

//     const fighter = (name) =>{
//         let state = {
//             name,
//             health:100,
//             stamina:100
//         }
//         return Object.assign(state,canFight(state))
//     }
//     const mage = (name)=>{
//         let state = {
//             name,
//             health:100,
//             mana:100
//         }
//         return Object.assign(state,canCast(state))
//     }
//     return {mage:mage,fighter:fighter}
// }

// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);