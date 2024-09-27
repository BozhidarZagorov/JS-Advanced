//works
// function arraySort(arr,method) {
//     const result = arr.toSorted((a,b)=>a-b) // syzdava nov masiv za da moje da se reversne
//     if (method==='desc') {
//         result.reverse()
//     }
//     return result
// }

// arraySort([14,7,17,6,8],'asc')
// arraySort([14,7,17,6,8],'desc')


// function argsInfo(...args) {
//     const tally={}
//     args.forEach(line => {
//         const type = typeof line

//         console.log(`${type}: ${line}`);
//         if (!tally.hasOwnProperty(type)) {
//             tally[type]=0
//         }
//         tally[type]+=1
        
//     });
//     Object.entries(tally).sort((arr1,arr2)=>arr2[1]-arr1[1]).forEach(entry=>{
//         console.log(`${entry[0]} = ${entry[1]}`);
        
//     })
// }
// argsInfo('cat', 42, function () { console.log('Hello world!'); })


// function fibbonacci() {
//     let a=1,b=1
//     return function() {
//         const next = a
//         let temp = a
//         a=b
//         b=temp+b
//         return next
//     }
// }

// let fib = fibbonacci()
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());
// console.log(fib());


// function solution(action) {
//     let result = []
//     switch (action) {
//         case 'upvote':this.upvotes++;break;
//         case 'downvote':this.downvotes++;break;
//         case 'score':result=getScore.call(this)
//     }
//     function getScore() {
//         let positive =this.upvotes
//         let negative =this.downvotes
//         let total = positive + negative
//         let score = positive - negative
//         let rating = 'new'

//         if (total>50) {
//             const num = Math.ceil(Math.max(positive,negative)*0.25)
//             positive+=num
//             negative+=num
            
//         }
//         if (total<10) {
//             rating='new'
//         }else if (this.upvotes > total*0.66) {
//             rating='hot'
//         }else if (total > 100 && score>=0) {
//             rating='contoversial'
//         }else if (score < 0) {
//             rating='unpopular'
//         }
//         return[positive,negative,score,rating]
//     }
//     return result
// }

// let post = {
//     id:'3',
//     author:'emil',
//     content:'wazaaaaa',
//     upvotes:100,
//     downvotes:100
// }

// solution.call(post,'upvote')
// solution.call(post,'downvote')
// let score  = solution.call(post,'score')
// console.log(score);
// for (let i = 0; i <50; i++) {
//     solution.call(post,'downvote')
// }
// score = solution.call(post,'score')
// console.log(score);


/////to be fixed ^







