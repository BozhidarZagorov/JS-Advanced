// function solve() {
//     let arr = [[1,2,3],[4,5,6],[7,8,9]]
//     console.table(arr) //interesen na4in za logvane na matrica kato
// }
// solve()





// function printWithDeli(arr,delimiter) {
//     console.log(arr.join(delimiter));
// }
// printWithDeli(['One','Two','Three','Four','Five'],'-')


// function printFromArrN(arr,n) {
//     let result = []
//     for (let i = 0; i < arr.length; i+=n) {
//         result.push(arr[i])
//     }
//     return result
// }
// console.log(printFromArrN(['5','20','31','4','20'],6))



// function addRemoveElements(commands) {
//     n=1
//     let result = []

//     for (let i = 0; i < commands.length; i++) {
//         if (commands[i]==='add') {
//             result.push(n)
//         }else{
//             result.pop()
//         }
//         n++
//     }
//     if (result.length===0) {
//         console.log('Empty');
        
//     }else console.log(result.join('\n'));
    
// }
// addRemoveElements(['remove','remove','remove'])




// function subsequencefromArray(arr) {
//     let biggestOne=arr.shift()
//     let result=[]
//     result.push(biggestOne)

//     for (const element of arr) {
//         if (element>=biggestOne) {
//             biggestOne=element
//             result.push(element)
//         }
//     }
//     return result   
// }
// console.log(subsequencefromArray([1,2,3,4]))




// function listOfNames(arr) {
//     arr.sort((a,b)=>a.localeCompare(b))
//     let counter = 1
//     for (const element of arr) {
//         console.log(`${counter}.${element}`);
//         counter++
//     }
// }
// listOfNames(["John","Bob","Christina","Ema"])




// function sortingNums(arr) {
//     arr.sort((a,b)=>b-a)
//     let len=arr.length
//     let element = arr.pop()
//     let result = []
//     result.push(element)
//     for (let i = 0; i < len; i++) {
//         if (i%2===0) {
//             arr.sort((a,b)=>a-b)
//         }else arr.sort((a,b)=>b-a)
//         element=arr.pop()
//         if (!element) {
//             break
//         }
//         result.push(element)
//     }
//     return result
// }
// console.log(sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))




// function sortByTwoCriteria(arr) {
//     // arr.sort((a,b)=>{
//     //     if (a.length !== b.length) {
//     //        return a.length-b.length
//     //     }else{
//     //         return a.localeCompare(b)
//     //     }
//     // })
//     arr.sort((a,b)=>a.length - b.length || a.localeCompare(b))  // ravno na gornoto
//     console.log(arr.join('\n'))   
// }
// sortByTwoCriteria(['alpha','beta','gamma'])

function ticTakToe(data) {
    let board=[[false, false, false],
                [false, false, false],
                [false, false, false]]

    let isfirstPlayerPlay = true

    for (const el of data) {
        let [x,y]=el.split(" ")
        if (board[x][y]) {
            console.log("This place is already taken. Please choose another!");
            continue
        }
        let marker = isfirstPlayerPlay ? 'X' : "O"
        board[x][y]=marker

        if (checkWin(board,marker)) {
            console.log(`Player ${marker} wins!`);
            return printBoard(board)
        }

        if (checkSpaces(board)) {
            console.log("The game ended! Nobody wins :(");
            return printBoard(board)
        }

        isfirstPlayerPlay=!isfirstPlayerPlay
    }

    console.table(board)
    function checkWin(dashboard,marker) {
        if (dashboard[0][0]===marker && dashboard[1][1]===marker && dashboard[2][2]===marker) {
            return true
        }else if (dashboard[0][2]===marker && dashboard[1][1]===marker && dashboard[2][0]===marker) {
            return true
        }
        for (let i = 0; i < dashboard.length; i++) {
            if (dashboard[i][0]===marker && dashboard[i][1]===marker && dashboard[i][2]===marker) {
                return true
            }else if (dashboard[0][i]===marker && dashboard[1][i]===marker && dashboard[2][i]===marker) {
                return true
            }else return false
            
        }
    }

    function checkSpaces(dashboard) {
       return !dashboard.flat().filter(x=>!x).length
    }
    
    function printBoard(dashboard) {
        dashboard.forEach(row =>{
            console.log(row.join('\t'));
            
        })
    }
}
ticTakToe(["0 1","0 0","0 2","2 0","1 0","1 1","1 2","2 2","2 1","0 0"]) //O
ticTakToe(["0 0","0 0","1 1","0 1","1 2","0 2","2 2","1 2","2 2","2 1"]) //X
ticTakToe(["0 1","0 0","0 2","2 0","1 0","1 2","1 1","2 1","2 2","0 0"]) //out of space