class MyClass {
    name : string; // public by default
    private grade : number; // Accessible only within class
    protected member1 : string; // Accessible only within class and subclass

    constructor(name : string, grade : number, member1 : string) {
        this.name = name;
        this.grade = grade;
        this.member1 = member1;
    }

    // getters and setters
    public getName() : string { return this.name; }
    public setName(name : string) : void { this.name = name; }
}

let classA = new MyClass("Taekwon-do", 100, "Robi");

console.log(classA.name); // "Taekwon-do"
classA.setName("Karate");  
console.log(classA.getName()); // "Karate"
// console.log(classA.grade); // CE, but can run!
// console.log(classA.member1); // CE, but can run!

class Person {
    private _firstName : string;
    private _lastName : string;

    constructor(firstName : string, lastName : string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName() : string { return this._firstName; }
    set firstName(firstName : string) { this._firstName = firstName; }
    get lastName() : string { return this._lastName }
    set lastName(lastName : string) { this._lastName = lastName; }
}

let one = new Person("Darren", "Brown");
console.log(`one ==> ${one.firstName} ${one.lastName}`); // Notice no paranthesis when calling accessors

export class AnotherPerson {
    constructor(private _firstName : string, private _lastName: string) {}
    get firstName() : string { return this._firstName; }
    get lastName() : string { return this._lastName; }
    set firstName(firstName : string) { this.firstName = firstName; }
    set lastName(lastName : string) { this.lastName = lastName; }
}

let two = new AnotherPerson("Bobby", "Kennedy");
console.log(`two ==> ${two.firstName} ${two.lastName}`);