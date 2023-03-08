// let name = 'Peter';
// console.log(name);

// name = 'Maria';
// console.log(name);
// // ----
// function printStars(count) {
//     console.log('*'.repeat(count));
// }
// printStars(5);
// // ---- Echo Problem
// function echo(input) {
//     console.log(input.length);
//     console.log(input);
// }

// echo('Hello, JavaScript!');
// // --- String Length
// function strlength(a, b, c){
//     let total = 0;
//     total += a.length;
//     total += b.length;
//     total += c.length;
//     let average = Math.floor(total / 3);

//     console.log(total);
//     console.log(average);
// }

// strlength('chocolate', 'ice cream', 'cake');
// // ---Largest Number
// function firstSolution(x, y, z) {
//     let result;
//     if (x > y && x > z) {
//         result = x;
//     } else if (y > x && y > z) {
//         result = y;
//     } else {
//         result = z;
//     }
//     console.log(`Largest number is ${result}`);
// }
// firstSolution(3, 4, 5);
// firstSolution(3, 10, 5);
// //--- Circle Area
// function solve(radius) {
//     let inputType = typeof(radius);

//     if (inputType === 'number') {
//         let area = Math.pow(radius, 2) * Math.PI;
//         console.log(area.toFixed(2));
//     } else {
//         console.log(`We can not calculate because ${inputType}`);
//     }
// }

// solve(5);
// //--- Math Operations
// function mathOp (a, b, operator) {
//     let result;
//     switch (operator) {
//         case '+': result = a+b; break;
//         case '-': result = a-b; break;
//         case '/': result = a/b; break;
//         case '*': result = a*b; break;
//         case '%': result = a%b; break;
//         case '**': result = a**b; break;
//     }
//     console.log(result);
// }

// mathOp(5, 7, '+');
//--- Sum Of Numbers
// function solve(n, m) {
//     let num1 = Number(n);
//     let num2 = Number(m);
//     let result = 0;

//     for (let i = num1; i <= num2; i++){
//         result += i;
//     }

//     console.log(result);
// }

// solve('3', '10');
//--- Exercises---------------------
//Fruit
// function solve(fruit, weight, price) {
//     let numWeight = Number(weight) / 1000;
//     let numPrice = Number(price);

//     let priceToBuy = numPrice * numWeight;

//     console.log(`I need $${priceToBuy.toFixed(2)} to buy ${numWeight.toFixed(2)} kilograms ${fruit}.`);

// }

// solve('orange', 2500, 1.80);

//GCD
// function solve(a, b) {
//     let num1 = Number(a);
//     let num2 = Number(b);

//     while (num2 != 0) {
//         let temp = num2
//         num2 = num1 % num2
//         num1 = temp;
//     }

//     console.log(num1);
// }

// solve(15, 5);
//Same Numbers
// function solve(number) {
//     const numToString = number.toString();
//     let isSame = true;
//     let sum = 0;

//     for(let i = 0; i < numToString.length; i++){
//         let next = numToString[i+1];
//         if(numToString[i] !== numToString[i+1] && next != undefined) {
//             isSame = false;
//         }
//         sum += Number(numToString[i]);
//     }

//     console.log(`${isSame}\n${sum}`)
// }

// solve(2222222);
//Time To Walk
// function solve(steps, lengthInMeters, speed) {
//     let speedInM = speed * 1000/3600;
//     let distance = steps * lengthInMeters;

//     let breaks = Math.floor(distance/500)*60;
//     let time = distance/speedInM + breaks;

//     const hours = Math.floor(time/60/60).toFixed(0).padStart(2, "0");
//     const minutes = Math.floor((time - hours*3600)/60).toFixed(0).padStart(2, "0");
//     const seconds = (time - hours*60*60 - minutes*60).toFixed(0).padStart(2, "0");

//     console.log(`${hours}:${minutes}:${seconds}`);
// }
// solve(4000, 0.60, 5);
//Validity Checker
function checker(x1, y1, x2, y2) {
    function getResult(x1, y1, x2, y2) {
        const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
        return Number.isInteger(distance) ? 'valid' : 'invalid'
    }

    return `{${x1}, ${y1}} to {0, 0} is ${getResult(x1, y1, 0, 0)}\n` +
        `{${x2}, ${y2}} to {0, 0} is ${getResult(x2, y2, 0, 0)}\n` +
        `{${x1}, ${y1}} to {${x2}, ${y2}} is ${getResult(x1, y1, x2, y2)}\n`

}