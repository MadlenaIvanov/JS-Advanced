// function Person(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
    
//     Object.defineProperty(this, 'fullName', {
//         enumerable: true,
//         get: function() {
//             return `${this.firstName} ${this.lastName}`
//         },
//         set: function (value) {
//             [this.firstName, this.lastName] = value.split(' ');
//         }
//     });    
// }

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;  
}

Person.prototype.write = function(message) {
    console.log(`Person wrote: ${message}`);
}

function newOperator(constructor, ...params) {
    // const result = {};
    // Object.setPrototypeOf(result, Person.prototype);
    //or
    const result = Object.create(Person.prototype);
    //----
    constructor.apply(result, params);
    return result;
}

const myPerson2 = newOperator(Person, 'Johnathan', 'Abbottttt');
const myPerson3 = newOperator(Person, 'Peter', 'Jackson');
console.log(myPerson2, myPerson3)


// const myPerson = new Person('John', 'Abbot');

// console.log(myPerson);
// console.log(myPerson.write);
// console.log(myPerson.hasOwnProperty('write'));
// myPerson.write('hello world!')