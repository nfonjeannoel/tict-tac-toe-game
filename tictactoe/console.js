// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
// const seedx = 'X'
// const seedo = 'O'

// console.log('start')
// console.log('1  2  3')
// console.log('4  5  6')
// console.log('7  8  9')

// board = [[0, 1, 2],
//          [3, 4, 5],
//          [6, 7, 8]
// ]

// const WINNING_COMBINATIONS = [
//     [0, 1, 2], 
//     [3, 4, 5], 
//     [6, 7, 8], 
//     [0, 3, 6], 
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// let curSeed = seedx

// let circleTurn 

// function putSeed(cell){
//     if (cell == 1){
//         board[0][0] = curSeed
//     } 
//     if (cell == 2){
//         board[0][1] = curSeed
//     } 
//     if (cell == 3){
//         board[0][2] = curSeed
//     } 
//     if (cell == 4){
//         board[1][0] = curSeed
//     } 
//     if (cell == 5){
//         board[1][1] = curSeed
//     } 
//     if (cell == 6){
//         board[1][2] = curSeed
//     } 
//     if (cell == 7){
//         board[2][0] = curSeed
//     } 
//     if (cell == 8){
//         board[2][1] = curSeed
//     } 
//     if (cell == 9){
//         board[2][2] = curSeed
//     } 
//     curSeed = seedo
// }


// while (true) {
//     cell = readline.question('enter number to put seed : ')
    
//         for(let lst in board){
//             for(let num in lst){
//                 if(cell == num){
//                     putSeed(cell)
//                 }
//             }
//         }
//     readline.close();
     
  
//    console.log(board)
//    break
// }