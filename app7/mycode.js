"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotherPerson = void 0;
class MyClass {
    constructor(name, grade, member1) {
        this.name = name;
        this.grade = grade;
        this.member1 = member1;
    }
    // getters and setters
    getName() { return this.name; }
    setName(name) { this.name = name; }
}
let classA = new MyClass("Taekwon-do", 100, "Robi");
console.log(classA.name); // "Taekwon-do"
classA.setName("Karate");
console.log(classA.getName()); // "Karate"
// console.log(classA.grade); // CE, but can run!
// console.log(classA.member1); // CE, but can run!
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) { this._firstName = firstName; }
    get lastName() { return this._lastName; }
    set lastName(lastName) { this._lastName = lastName; }
}
let one = new Person("Darren", "Brown");
console.log(`one ==> ${one.firstName} ${one.lastName}`); // Notice no paranthesis when calling accessors
class AnotherPerson {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() { return this._firstName; }
    get lastName() { return this._lastName; }
    set firstName(firstName) { this.firstName = firstName; }
    set lastName(lastName) { this.lastName = lastName; }
}
exports.AnotherPerson = AnotherPerson;
let two = new AnotherPerson("Bobby", "Kennedy");
console.log(`two ==> ${two.firstName} ${two.lastName}`);
