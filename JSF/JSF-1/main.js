// 2

const lastName = 'Didun';
console.log(lastName);

// 3

let firstCar = 'Porshe';
let secondCar = 'BMW';

console.log(firstCar);
console.log(secondCar);

secondCar = firstCar;

console.log(firstCar);
console.log(secondCar);

// 4

let myCar = {
    carColor: 'Black',
    carPrice: 50000,
    carNew: true,
    carSits: undefined,
    carMaitance: null
};

console.table(myCar);

// 5

let ageCheck = confirm('Are you over 18?');
console.log(ageCheck);

// 6

const myName = 'Paul';
const myLastName = 'Didun';
const myGroup = 7;
const myYearOfBirth = 1995;
const isMarried = true;

console.log(typeof myGroup, myGroup);
console.log(typeof myYearOfBirth, myYearOfBirth);
console.log(typeof isMarried, isMarried);
console.log(typeof myName, myName);
console.log(typeof myLastName, myLastName);

const myTree = null;
const myFlower = undefined;

console.log(myTree);
console.log(myFlower);

// 7

const login = prompt('Enter your login:');
const email = prompt('Enter your email:');
const password = prompt('Enter your password:');

let message = "Dear User, your email is" + email + ", your password is" + password + ".";
alert(message);

// 8

let secondsInHour = 60 * 60;
let secondsInDay = secondsInHour * 24;
let secondsInMonth = secondsInHour * 30;

console.log('Seconds in an hour: ' + secondsInHour);
console.log('Seconds in a day: ' + secondsInDay);
console.log('Seconds in a month: ' + secondsInMonth);