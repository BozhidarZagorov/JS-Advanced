// function sum(arr,start,end) {
//     if (!Array.isArray(arr)) {
//         return NaN
//     }
//     if (start<0) {
//         start=0
//     }
//     if (end>arr.length-1) {
//         end=arr.length-1
//     }
    
//     let result =0
//     for (let i = start; i <= end; i++) {
//         result+=Number(arr[i])
        
//     }
//     return result
    
// }
// try{
//     sum([10, 20, 30, 40, 50, 60], 3, 300)
//     sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
//     sum([10, 'twenty', 30, 40], 0, 2)
//     sum([], 1, 2)
//     sum('text', 0, 2)
// }catch(err){
//     console.log('one of the operations encountered an error');
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }




// const validFaces=new Set([
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A'
// ])
// const suits={
//     'C':'\u2663',
//     'D':'\u2666',
//     'H':'\u2665',
//     'S':'\u2660'
// }

// function createCard(face,suit) {
//     if (!validFaces.has(face)) {
//         throw new Error('Invalid face')
//     }
//     if (!suits.hasOwnProperty(suit)) {
//         throw new Error('Invalid suit')
//     }
//     return{
//         face,
//         suit,
//         toString(){
//             return this.face+suits[this.suit]
//         }
//     }
// }
// console.log(createCard('10','D').toString())
// console.log(createCard('A','S').toString())
// try{
//     console.log(createCard('1','C').toString())
// }catch(err){
//     console.log('Error creating card:', err.message);
    
// }



