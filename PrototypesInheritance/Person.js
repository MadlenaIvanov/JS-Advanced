class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const tokens = value.split(' ');
        this.firstName = tokens[0];
        this.lastName = tokens[1];

    }
}

const myPerson = new Person('May', 'Sue');
console.log(myPerson.fullName);

myPerson.lastName = 'Johnson';
console.log(myPerson.fullName);

myPerson.fullName = 'May Sue';

console.log(myPerson.fullName);


