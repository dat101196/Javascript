class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() { 
        return this.name;
    }

    getAge() {
        return this.age;
    }

    toString(){
        return `${this.name} is ${this.age} years old`;
    }
}

const me = new Person('Atom', 27);
const you = new Person('Test', 18);

console.log(me.toString());
console.log(you.toString());