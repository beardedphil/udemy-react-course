const add = function (a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(55, 92, 10001));

// const es6Add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// console.log(es6Add(55, 92, 10001));

const user = {
    name: 'Phil',
    cities: ['St. Louis', 'Knoxville', 'Gillespie'],
    printPlacesLived: function () {
        const that = this;
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
}

user.printPlacesLived();

const userEs6 = {
    name: 'Phil',
    cities: ['St. Louis', 'Knoxville', 'Gillespie'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
}

userEs6.printPlacesLived();

const methodSyntax = {
    name: 'Phil',
    cities: ['St. Louis', 'Knoxville', 'Gillespie'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    }
}

methodSyntax.printPlacesLived();

const mapArray = {
    name: 'Phil',
    cities: ['St. Louis', 'Knoxville', 'Gillespie'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(mapArray.printPlacesLived());

// Challenge

const multiplier = {
    numbers: [11, 12, 31, 41, 51],
    multiplyBy: 13,
    multiply() {
        return multiplier.numbers.map((number) => number * multiplier.multiplyBy);
    },
    divide() {
        return multiplier.numbers.map((number) => number / multiplier.multiplyBy);
    }
}

console.log(multiplier.multiply());
console.log(multiplier.divide());