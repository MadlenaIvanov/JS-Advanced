// class MyClass {
//     constructor(name, age) {
//         this.name = 'Peter';
//         this.age = age;
//     }

//     sayHi(){
//         console.log(`${this.name} says hi!`)
//     }
// }

// class otherClass {

// }



// const myLiteral = {
//     name: 'Peter',
//     sayHi(){
//         console.log(`${this.name} says hi!`)
//     }
// };
// const myInstance = new MyClass();
// const myOtherInstance = new otherClass();

// console.log(myInstance);
// console.log(myLiteral);
// console.log(myOtherInstance);

// myInstance.sayHi();

// const myFunc = myInstance.sayHi.bind(myInstance);
// myFunc();

// console.log(`------`)

class myClass {
    constructor() {
        this.name = 'Static Class'
    }

    static myStaticMethod() {
        console.log('from static method', this);
    }

    
}
myClass.myStaticMethod();

const myInstance = new myClass();
console.log(myInstance);
// myInstance.myStaticMethod();