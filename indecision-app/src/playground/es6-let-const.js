var nameVar = 'Andrew';
var nameVar = 'Phil';
console.log('nameVar:', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet:', nameLet);

const nameConst = 'Billy';
// nameConst = 'Bobby';
console.log('nameConst:', nameConst);

// function getPetName() {
//     var petName = 'Hal';
//     return petName;
// }
//
// console.log(getPetName());
// console.log('petName: ', petName);

// Block scoping

var fullName = 'Phil King';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);