// let myArr=[10,'hello',30]

// console.log(myArr);

// myArr[0]=15
// myArr[3]=40

// console.log(myArr[-1]); // undefined

// console.log(myArr);


// function evenIndexes(arr) {
//     let output=''
//     for (let i = 0; i < arr.length; i++) {
//         if (i%2===0) {
//             output+=arr[i]+' '
//         }
//     }
//     console.log(output)
// }
// evenIndexes(['20','30','40','50','60'])

// let myArr = [20,30,40,50,60]

// // let a=myArr[0]
// // let b=myArr[1]

// // let [a,b]=myArr
// //both are the same

// let [a,b, ...rest]=myArr //ne e nujno da e rest moje da se imenuva kakto se reshi


// console.log(a,b,rest);


// //used as REST operator
// function arrDemo(...params) {
//     console.log(params);
// }
// arrDemo(20,30,40,50,60,'hello')



// //used as SPREAD operator
// function paramsDemo(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const myArr=[20,30,40]
// paramsDemo(...myArr)


// let myArr = [20,30,40,50,60]

//array as stack [last in first out]

// console.log(myArr);
// let a =myArr.pop()
// console.log(a);
// console.log(myArr);
// myArr.push(10)
// console.log(myArr);

//array as queue [first in first out]

// myArr.shift()
// console.log(myArr);
// myArr.unshift(11)
// console.log(myArr);



// function sumFirstAndLast(arr) {
//     return Number(arr.shift())+Number(arr.pop())
// }
// console.log(sumFirstAndLast(['10','20','30','40']));




// function solve(arr) {
//     let result=[]

//     for (const element of arr) {
//         if (element<0) {
//             result.unshift(element)
//         }else{
//             result.push(element)
//         }
//     }

//     for (const element of result) {
//         console.log(element);
        
//     }
// }
// solve([7,-2,8,9])
// solve([3,-2,0,1])



// let myArr = [20,30,40,50,60]

// console.log(myArr);

// const result = myArr.splice(1,3)

// console.log(result);
// console.log(myArr);

// myArr.splice(1,0,35,22,11,332)
// console.log(myArr);

// //method fill
// myArr.fill(0,2,4)
// console.log(myArr);

// myArr.fill(0,2)
// console.log(myArr);

// myArr.fill(0)
// console.log(myArr);



// let arr=[3,1,5,6,2,11,-1]
// console.log(arr);
// arr.sort((a,b)=>b-a)
// // arr.sort(compare)
// console.log(arr);


// //razshireno kakvo to4no e sort
// function compare(a,b) {
//     if (a<b) {
//         return -1
//     }else if (a>b) {
//         return 1
//     }else{
//         return 0
//     }
// }
//
//
// // sykraten sort
// function compare(a,b) {
//     return a - b
// }
// // function compare(a,b) {
// //     return a + b
// // }


// let arr=['bob','alice','Charlie']
// console.log(arr);
// arr.sort((a,b)=> a.localeCompare(b))
// // arr.sort()
// console.log(arr);


// function biggerHalf(arr) {
//     arr.sort((a,b)=>a - b)

//     let middle = Math.floor(arr.length/2)

//     let result=[]

//     for (let i = middle; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     return result
// }
// console.log(biggerHalf([4,7,2,5]))
// console.log(biggerHalf([3,19,14,7,2,19,6]))

// //kogato ima return zadyljitelno vhoda trqbva da e console.lognat



// let myArr=[10,20,30,40,50]
// let otherArr=myArr.slice(2,4)

// console.log(myArr);
// console.log(otherArr);
// console.log(myArr==otherArr);
// console.log(myArr.includes(20));
// console.log(myArr.indexOf(20)); // ima go = 1 | nqma go = -1




// function pie(arr,start,end) {
//     let startingIndex = arr.indexOf(start)
//     let endIndex = arr.indexOf(end)+1

//     const result = arr.slice(startingIndex,endIndex)
//     return result
// }
// console.log(pie(['Pumpkin Pie','Key Lime Pie','Cherry Pie','Lemon Meringue Pie','Sugar Cream Pie'],'Key Lime Pie','Lemon Meringue Pie'))


// let array = [1,3,2,6,7,5]

// console.log(array.find(x => x > 3 ));
// console.log(array.findIndex(x => x > 11 ) != -1);
// console.log(array.filter(x => x > 11 ).length > 0);

////////////////////////////////////
// function solve(arr) {
//     // let filtered= arr.filter((x,i) => i%2)
//     // // console.log(filtered);
//     // let doubled = filtered.map(x=>x*2)
//     // // // console.log(doubled);
//     // // let reversed = doubled.reverse()
//     // // // console.log(reversed);
//     // // let joined = reversed.join(' ')
//     // return(arr.filter((x,i) => i%2).map(x=>x*2).reverse().join(' '));
// }
// solve([10,15,20,25])
// solve([3,0,10,4,7,3])

// const solve=arr=>arr.filter((x,i) => i%2).map(x=>x*2).reverse().join(' ') //reshenie na edin red ot gorniq
/////////////////////////////////////

///////////////////////////////////////////////////////////////
// //obqsnenie ne reduce function 
// function reduce(arr,reduceFn,accumulator) {
//     for (let i = 0; i < arr.length; i++) {
//         accumulator=reduceFn(accumulator,arr[i])        
//     }
//     return accumulator
    
// }
// function add(a,b) {
//     return a+b
// }

// let myArr=[3,1,10,4,7,3]
// console.log(reduce(myArr,add,0))

// console.log(myArr.reduce(add,0));
////////////////////////////////////////////////////////////////

