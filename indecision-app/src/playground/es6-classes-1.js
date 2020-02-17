class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'Hi ' + this.name + '!';
        return `Hi.  I am ${ this.name }!`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` ${ this.name } is majoring in ${ this.major }.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += `  I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Student('Phil King', 38, 'Mathematics');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

const abroad = new Traveler('John Smith', 22, 'St. Louis');
console.log(abroad.getGreeting());

const local = new Traveler('Mark Johnson', 23);
console.log(local.getGreeting());