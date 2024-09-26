// function fruit(type,weightInGrams,price) {
//     let weightKG=weightInGrams/1000
//     let money=weightKG*price
//     console.log(`I need $${money.toFixed(2)} to buy ${weightKG.toFixed(2)} kilograms ${type}.`);
// }

// fruit('orange',2500,1.80)



// function GCD(numA,numB) {
//     let a=numA
//     let b=numB

//     let gcd=a%b
    
//     while (gcd!==0) {
//         a=b
//         b=gcd
//         gcd=a%b    
//     }
//     console.log(b);  
// }
// GCD(15,5)
// GCD(2154,458)




// function sameNums(num) {
//     let numAsString=num.toString()
//     let sum = 0
//     let isSame=true
//     let element = numAsString[0]
//     for (let i = 0; i < numAsString.length; i++) {
//         if (numAsString[i]!==numAsString[element]) {
//             isSame=false
//         }
//         sum+=Number(numAsString[i])   
//     }
//     console.log(isSame);
//     console.log(sum);
// }
// sameNums(2222222)
// sameNums(1234)



// function prevDay(year,month,day) {
//     let date=new Date(year,month-1,day)
//     date.setDate(date.getDate()-1)
//     console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);   
// }
// prevDay(2016,9,30)




// function timeToWalk(steps,lengthStep,speed) {
//     let distance=steps*lengthStep
//     let speedInSec=speed/3.6
//     let time=distance/speedInSec

//     //rest time
//     let rests=Math.floor(distance/500)*60
//     time+=rests

//     //hrs,min,sec
//     let timeInMin=Math.floor(time/60)
//     let timeinSec=(time%60).toFixed(0)
//     let hours=Math.floor(timeInMin/60)
//     timeInMin-=hours*60

//     //if cases
//     let hrsToPrint =hours<10 ?`0${hours}` : `${hours}`
//     let minToPrint =timeInMin<10 ?`0${timeInMin}` : `${timeInMin}`
//     let secToPrint =timeinSec<10 ?`0${timeinSec}` : `${timeinSec}`

//     //output
//     console.log(`${hrsToPrint}:${minToPrint}:${secToPrint}`);
// }
// timeToWalk(4000,0.60,5)
// timeToWalk(8000,0.60,5)


// function cookingByNumbers(num,arg1,arg2,arg3,arg4,arg5) {
//     let number = Number(num)
//     let opArr=[arg1,arg2,arg3,arg4,arg5]

//     for (let i = 0; i < opArr.length; i++) {
//         let op = opArr[i]
//         switch (op) {
//             case 'chop': number/=2
//                 break;
//             case 'dice': number=Math.sqrt(number)
//                 break
//             case 'spice': number+=1
//                 break
//             case 'bake': number*=3
//                 break
//             case 'fillet':number*=0.80 
//                 break
//             default:
//                 break;
//         }
//         console.log(number);
        
//     }
// }
// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop' )
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet')


function wordsUpper(str) {
    let res = str.split(/[^A-Za-z0-9]+/gm)
    for (let i = 0; i < res.length; i++) {
        const element = res[i];
        if (element.length<1) {
            res.splice(i,1)
        }
    }
    console.log(res.join(', ').toUpperCase());
}
wordsUpper('Hi, how are you?')