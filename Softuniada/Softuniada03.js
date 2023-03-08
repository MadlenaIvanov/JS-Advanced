// // function solve(numArr) {
// //     // console.log(numArr);

// const sum = require("./UnitTesting/MyModules/myModule");

// //     let numbersToArrange = numArr[1];
// //     let numbersArr = numbersToArrange.split(' ');

// //     // let oddArr = [];
// //     // let evenArr = [];
// //     // for (let i = 0; i < numbersArr.length; i++) {

// //     //     if (i % 2 != 0) {
// //     //         oddArr.push(numbersArr[i]);
// //     //     } else {
// //     //         evenArr.push(numbersArr[i]);
// //     //     }
        
// //     // }

// //     let sortedArray = [];
// //     // for (let odd = 0; odd < oddArr.length; odd++) {
// //     //     for (let even = 0; even < evenArr.length; even++) {

// //     //         if(oddArr[odd] >= evenArr[even]) {
// //     //             sortedArray.push(oddArr[odd]);
// //     //             sortedArray.push(evenArr[even]);

// //     //             oddArr.shift();
// //     //             evenArr.shift();
// //     //         } 
// //     //     }        
// //     // }
// //     // let reverseArray = numbersArr.reverse();
// //     for (let i = 0; i < numArr[0].length; i++) {
// //         numbersArr.reverse();
// //         let firstEl = numbersArr.pop();
// //         numbersArr.reverse();

// //         for (let i = 0; i < numbersArr.length; i++) {
// //              console.log(numbersArr[i])

// //             if (firstEl >= numbersArr[i]) {
// //                 sortedArray.push(firstEl);
// //                 sortedArray.push(numbersArr[i]);
// //             } else {
// //                 sortedArray

// //             }
            
// //         }
        
// //     }




// //     // while (numbersArr.length > 0) {
// //     //     numbersArr.reverse();
// //     //     let firstEl = numbersArr.pop();
// //     //     numbersArr.reverse();

// //     //     for (let i = 0; i < numbersArr.length; i++) {
// //     //          console.log(numbersArr[i])

// //     //         if (firstEl >= numbersArr[i]) {
// //     //             sortedArray.push(firstEl);
// //     //             sortedArray.push(numbersArr[i]);
// //     //         }
            
// //     //     }

// //     //     // console.log(firstEl);
// //     // }

// //     console.log(sortedArray);
// // }

// // solve(['5', '13 22 35 49 51']);
// // // solve(['6', '22 40 76 87 91 123'])


// function solve(numArr) {

//     let countArr = Number(numArr[0]);
//     let numbersToArrange = numArr[1];
//     let numbersArr = numbersToArrange.split(' ');

//     let sortedArray = [];
//     for (let i = 0; i < countArr; i++) {
//         // console.log(numbersArr[i])
//         // console.log(numbersArr[i+1])
//         if (i % 2 != 0) {

//             if (Number(numbersArr[i]) >= Number(numbersArr[i+1])) {
//                 sortedArray.push(numbersArr[i]);
//                 sortedArray.push(numbersArr[i+1]);
//             } 
//         } else if (Number(numbersArr[i]) < Number(numbersArr[i+1])){
//                 sortedArray.push(numbersArr[i+1]);
//                 sortedArray.push(numbersArr[i]);
//         } else {
//             sortedArray.push(numbersArr[i]);
//         }
        
//     }

//     let numb = '';
//     for (let i = 0; i < sortedArray.length; i++) {
//         numb += sortedArray[i] + ' ';
        
//     }
//     console.log(numb);
// }

// solve(['5', '13 22 35 49 51']);
// solve(['6', '22 40 76 87 91 123'])

function friends(casesAndPrice) {

    let numCases = Number(casesAndPrice[0]);
    casesAndPrice.shift();
    // console.log(numCases);


    for (let i = 0; i < casesAndPrice.length; i++) {
        //    console.log(casesAndPrice[i])
        let singleArr = casesAndPrice[i].split(', ')
        //  console.log(singleArr)

        let sum = 0;
        for (let a = 0; a < singleArr.length; a++) {
            //    console.log(singleArr[a]);
            let numAlone = singleArr[a].split(' ').sort((a, b) => b - a);
             console.log(numAlone)

            let sum2 = 0;
            for (let b = 0; b < numAlone.length; b++) {
                // console.log(numAlone[b])
                sum2 += Number(numAlone[b]);                
            }
            // console.log(sum2)
            let evenSplit = 0;

            if (sum2 % 3 != 0) {
                console.log('No');
                break;
            } else {
                evenSplit = sum2 / 3;
                // console.log(evenSplit)

                let biggestNum = numAlone.shift();
                // console.log(biggestNum)

                if(biggestNum > evenSplit) {
                    
                    console.log("No");
                    break;
                } else if (biggestNum <= evenSplit) {

                    // numAlone.sort((a, b) => a - b);
                    // console.log(numAlone);
                    // console.log(biggestNum)

                    for (let d = 0; d < numAlone.length; d++) {
                        // console.log(numAlone[d])
                        let count = 0;
                        if(biggestNum == evenSplit) {

                            biggestNum = numAlone[d];
                            numAlone[d] = '0'
                            
                            // console.log("BiggestNum")
                            // console.log(biggestNum)
                            // console.log(numAlone)   
                            if(numAlone.every(zero => zero == 0)) {
                                console.log('Yes')
                            }

                        } else if (biggestNum < evenSplit) {
                            let checkIfEven = Number(biggestNum) + Number(numAlone[d]);
                            // console.log('not even')
                            // console.log(checkIfEven)
                        }
                        
                    }
                    
                    

                }

                for (let c = 0; c < numAlone.length; c++) {
                    // let biggestNum = numAlone[c];
                    // console.log(biggestNum)
                    // let check = 
                    
                }

            }






        }

    }
}
// friends(['3', '4 2 5 8 3', '5 1 7 4 3 6 1', '4 5 2 5 3 4 2 5', '7 9 3 8 3', '5 2 1 3 2 5', '3 3 3', '5 3 2']);
friends(['3', '0 0', '0 3 6', '0 0 0 0 0']);