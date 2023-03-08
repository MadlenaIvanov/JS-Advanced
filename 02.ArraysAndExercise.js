// let myArr = [1, 2, 3, 4];

// console.log(myArr[08]);
// console.log(myArr.length);

// myArr[myArr.length] = 44;
// myArr[myArr.length] = 56;
// myArr[myArr.length] = 17;
// myArr[myArr.length] = 474;

// console.log(myArr.length);
// console.log(myArr);

// for (let i = 0; i < myArr.length; i++) {
//     console.log(`[${i}] -> ${myArr[i]}`);
// }

// for (let item of myArr) {
//     console.log(item);
// }
//---Even Position Element
// function even(inputArr) {
//     let result = '';

//     for (let i = 0; i < inputArr.length; i++)  {
//         if (i % 2 == 0) {
//             result += inputArr[i];
//             result += ' ';
//         }
//     }

//     console.log(result);
// }

// even(['20', '30', '40', '50', '60']);
//---------
// let myArr = [10, 20, 30, 40, 50, 60];

// let [...rest] = myArr;

// console.log(rest);
// console.log(myArr);
// console.log(rest == myArr);

// function takeRest(...params){
//     console.log(...params);
// }

// takeRest(1);
// takeRest(1,2);
// takeRest(1,2,3);
// takeRest(1,2,3,4);

//---Sum First And Last
// function firstLast(strings) {
//     let first = Number(strings.shift());
//     let last = Number(strings.pop());

//     return first + last;
// }
// console.log(firstLast((['20', '30', '40'])));
//---Negative/Positive numbers
// function solve(numbers) {
//     const result = [];

//     for (let num of numbers) {
//         if (num < 0) {
//             result.unshift(num);
//         } else {
//             result.push(num);
//         }
//     }

//     for (let num of result) {
//         console.log(num);
//     }
// }

// solve([7, -2, 8, 9]);
//----
// let myArr = [10, 20, 30, 40, 50, 60];

// let result = myArr.splice(1, 3);
// console.log(myArr);
// console.log(result);

// let myArr = [7, 6, 1, 5, 2, 13];

// console.log(myArr);
// // myArr.sort(compareNumber);
// myArr.sort((a, b) => b - a);
// console.log(myArr);

// // function compareNumber(a, b) {
// //     return a - b;
// // }

// let names = ['Peter', 'george', 'John', 'Mary', 'Alice'];

// names.sort((a, b) => a.localeCompare(b));
// console.log(names);

// let moreNumbers = [5, 8, 11, 0, 4];

// console.log(myArr.concat(names));
// console.log(myArr.concat(moreNumbers));
// console.log(myArr);
// console.log(moreNumbers);
// console.log(myArr.slice(1, 4));

//---Bigger Half
// function biggerHalf(numbers) {
//     return numbers
//     .sort((a, b) => a -b)
//     .slice(numbers.length / 2);
// }

// console.log(biggerHalf([4 ,7, 2, 5]));
// console.log(biggerHalf([3 ,19, 14, 7, 2, 19, 6]));

// let numbersAsStrings = ['1', '2', '3'];

// console.log(numbersAsStrings);
// console.log(numbersAsStrings.map(Number).map(x => x + 1));

//--reducers
// let myArr = [7, 6, 1, 5, 2, 13];
// let moreNumbers = [5, 8, 11, 0, 4];

// // let result = myArr.reduce(sumReducer, 0);
// //or
// let result = myArr.reduce((acc, c) => acc + c, 0);

// let average = myArr.reduce((acc, c, i , a) => acc + c / a.length, 0);

// let max = myArr.reduce((acc, c) => Math.max(acc, c));

// console.log(result);
// console.log(average);
// console.log(result / myArr.length);
// console.log(max);

// function sumReducer(acc, c) {
//     return acc + c;
// }

//---Diagonal Sums
// function diagonal(matrix) {
//     let mainDiag = 0;
//     let secDiag = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         mainDiag += matrix[i][i];
//         secDiag += matrix[i][matrix.length - i - 1];
//     }

//     console.log(mainDiag, secDiag);
// }

// diagonal([
//     [20, 40],
//     [10, 60]
// ]);

// diagonal([
//     [3, 5, 17],
//     [-1, 7, 14],
//     [1, -8, 89]
// ]);

// //----------
// let jaggedMatrix =[
//     [4, 6, 3, 0],
//     [2, 1, -2],
//     [-5, 17],
//     [7, 3, 9, 12]
// ];

// let result1 = jaggedMatrix.reduce(matrixReducer);

// console.log(result1);

// function matrixReducer(acc, c) {
//     return acc.concat(c);
// }

//---Given Delimiter
//  const solveGivenDelimiter = (arr, delimiter) => {
//      let result = '';

//      for (let i = 0; i < arr.length; i++) {
//          result += i==arr.length - 1 ? arr[i] : (arr[i] + delimiter);
//      }

//      return result;
//  }

//  console.log(solveGivenDelimiter(
//          [
//              'One',
//              'Two',
//              'Three',
//              'Four',
//              'Five'],
//              '-'
//  ))

//--Print Evert N-th Element
// function printEl (arr, n) {
//     let result = [];

//     for(let i = 0; i <= arr.length; i+=n) {

//         result.push(arr[i])
//         // if(i%n===0) {
//         //     result.push(arr[i])
//         // }
//     }

//     return result;
// }

// console.log(printEl(
//      [
//          '5',
//          '20',
//          '31',
//          '4',
//          '20'],
// //         2
// // ))

//---Add and remove
// function addAndRemoveElement(input) {

//     let result = [];

//     for (let i = 0; i < input.length; i++) {

//         if (input[i] == 'add') {

//             result.push(i + 1);

//         } else {

//             result.pop();
//         }
//     }

//     if (result.length == 0) {

//         console.log("Empty");
//     } else {
        
//         console.log(result.join("\n"));
//     }
// }

// input(
//     ['add',
//     'add',
//     'add',
//     'add']
// );

//---
// function solve(arr, rotations) {
//     for(let i = 0; i < rotations; i++) {
//         const element = arr.pop();
//         arr.unshift(element);
//     }
//     return arr.join(' ');
// }

// console.log(solve(
//     ['Banana',
//     'Orange',
//     'Coconut',
// 'Apple'],
//     15
// ))