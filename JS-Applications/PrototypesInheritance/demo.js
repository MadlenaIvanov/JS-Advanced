// const myObj = {
//     name: 'Peter',
//     age: 23
// };

// console.log(Object.getOwnPropertyDescriptor(myObj, 'name'));

// myObj.name = 'John';
 
// Object.defineProperty(myObj, 'lastName', {
//     value: 'Jackson', 
//     writable: true, 
//     enumerable: true, 
//     configurable: true
// });

// console.log(myObj)
// console.log(myObj.lastName)

// for (let key in myObj) {
//     console.log(key, myObj[key])
// }

// const myCollection = {};

// Object.defineProperty(myCollection, 'size', {
//     enumerable: false,
//     get: function() {
//         return Object.keys(this).length;
//     }
// })

// myCollection['John'] = '+1-555-4321';
// myCollection['Peter'] = '+1-555-8765';
// myCollection['May'] = '+1-555-4567';

// console.log(myCollection.size)

// for(let key in myCollection) {
//     console.log(key, myCollection[key]);

// }

// console.log(myCollection)

const myObj = {};

// Object.defineProperty(myObj, 'name', {
//     value: 'George',
//     writable: false
// });

// console.log(myObj.name);
// myObj.name = 'John';
// console.log(myObj.name);

//or

let name = 'George';

Object.defineProperty(myObj, 'name', {
    get() {
        return name;
    },
    set(value) {
        name = value;
    }
});

console.log(myObj.name);
myObj.name = 'John';
console.log(myObj.name);