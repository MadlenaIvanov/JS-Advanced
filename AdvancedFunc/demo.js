// const myObj = {
//     name: 'Peter',
//     myMethod() {
//         console.log('My name is ' + this.name);
//     }
// };

//  function myFunc(a, b) {
//      console.log(this.name);
//      console.log(a + b);
//  }

// const boundFunc = myFunc.bind(myObj, 9, 3);
// boundFunc();

// myFunc();

// myFunc.apply(myObj);

function A() {
    let myVarA = 5;
    console.log('inside A', myVarA);
}

function B() {
    let myVarB = 3;
    console.log('inside B', myVarB);
}

function C() {
    let myVarC = 'Peter';
    console.log('inside C', myVarC);
}

A();
B();
C();