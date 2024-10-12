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



// function heroicInventory(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         const heroEl = arr[i];

//         let currHero = {};
//         const [name, level, items] = heroEl.split(' / ');

//         currHero.name = name;
//         currHero.level = Number(level);
//         currHero.items = items ? String(items).split(', ') : [];

//         if (currHero.name==''||currHero.level=='') {
            
//         }else{
//             result.push(currHero);
//         }
//     }
//     console.log(JSON.stringify(result));
// }

// heroicInventory(['Isacc / 25 / Apple, GravityGun', 
//                 'Derek / 12 / BarrelVest, DestructionSword', 
//                 'Hes / 1 / Desolator, Sentinel, Antara']);



// function lowestPricesInCities(arr) {
//     let productMap = new Map();

//     for (const el of arr) {
//         const [city, product, price] = el.split(" | ");
//         const productPrice = Number(price);

//         if (!productMap.has(product)) {
//             productMap.set(product, { town: city, price: productPrice });
//         } else {
//             if (productPrice < productMap.get(product).price) {
//                 productMap.set(product, { town: city, price: productPrice });
//             }
//         }
//     }

//     for (const [product, data] of productMap.entries()) {
//         console.log(`${product} -> ${data.price} (${data.town})`);
//     }
// }

// lowestPricesInCities(['Sample Town | Sample Product | 1000',
//      'Sample Town | Orange | 2', 
//      'Sample Town | Peach | 1', 
//      'Sofia | Orange | 3', 
//      'Sofia | Peach | 2', 
//      'New York | Sample Product | 1000.1', 
//      'New York | Burger | 10'])


// function townsToJSON(arr) {
//     let result = [];

//     for (let i = 1; i < arr.length; i++) {
//         let [start, town, latitude, longitude, rest] = arr[i].split('|');

//         latitude = Number(Number(latitude.trim()).toFixed(2))
//         longitude = Number(Number(longitude.trim()).toFixed(2))

//         const current = {
//             "Town": town.trim(),
//             "Latitude": latitude,
//             "Longitude": longitude
//         }

//         result.push(current);
//     }
//     return JSON.stringify(result);
// }

// console.log(townsToJSON(['| Town | Latitude | Longitude |', 
//     '| Sofia | 42.696552 | 23.32601 |', 
//     '| Beijing | 39.913818 | 116.363625 |']))

// console.log(townsToJSON(['| Town | Latitude | Longitude |','| Veliko Turnovo | 43.0757 | 25.6172 |','| Monatevideo | 34.50 | 56.11 |']));



// latitude = Number(latitude.trim()).toFixed(2)
// longitude = Number(longitude.trim()).toFixed(2)

// [{"Town":"Sofia","Latitude":"42.70","Longitude":"23.33"},{"Town":"Beijing","Latitude":"39.91","Longitude":"116.36"}]
// [{"Town":"Veliko Turnovo","Latitude":"43.08","Longitude":"25.62"},{"Town":"Monatevideo","Latitude":"34.50","Longitude":"56.11"}]

//gorniqt variant ne minava zaradi zakryglqneto pyk povtornoto castvane kym number maha dopylnitelnite nuli i skobi cringeroni not macaroni


// [{"Town":"Sofia","Latitude":42.7,"Longitude":23.33},{"Town":"Beijing","Latitude":39.91,"Longitude":116.36}]
// [{"Town":"Veliko Turnovo","Latitude":43.08,"Longitude":25.62},{"Town":"Monatevideo","Latitude":34.5,"Longitude":56.11}]

//         latitude = Number(Number(latitude.trim()).toFixed(2))
//         longitude = Number(Number(longitude.trim()).toFixed(2))