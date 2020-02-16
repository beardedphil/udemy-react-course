function squared(num) {
    return num * num;
}

console.log(squared(2));

const square = function (x) {
    return x * x;
}

console.log(square(5));

const squareArrow = (x) => {
    return x * x;
}

console.log(squareArrow(9));

const squareArrowExpressionSyntax = (x) => x*x;

console.log(squareArrowExpressionSyntax(14));

// Challenge

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Phil King'));