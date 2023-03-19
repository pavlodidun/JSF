// 1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c

console.log('a' < 'b' && 'b' < 'c');

// 2. 
// Є такий код:
// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

let x = 1;
let y = 2;

let res1 = String((x + y) * 4); // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = ((x < y) + '2'); // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = Number('x' + 'y');// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// 3. 
// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. 
// Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”.

let isAdult = prompt('How old are you stranger?');
isAdult >= 18 ? alert('Ви досягли повнолітнього віку.') : alert('Ви ще надто молоді.');

// 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, 
// занести це число в новий масив і видалити всі входження цього числа із поточного масиву.

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let frequency = {};
let maxFreq = 0;
let mostRepeatedNum;

arr.forEach(function (num) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
        maxFreq = frequency[num];
        mostRepeatedNum = num;
    }
});

arr = arr.filter(function (num) {
    return num !== mostRepeatedNum;
});

console.log(mostRepeatedNum); // 5
console.log(arr); // [4, 2, 1, 6, 3, 2]

// 5. 
// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
//     a) визначити і вивести в консоль площу трикутника 
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 
// 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

let roadSide = parseFloat(prompt('Введіть першу сторону трикутника:'));
let gardenSide = parseFloat(prompt('Введіть другу сторону трикутника:'));
let neighbourSide = parseFloat(prompt('Введіть третю сторону трикутника:'));

const checkNum = (roadSide && gardenSide && neighbourSide) >= 1;
checkNum ? ('') : alert('Incorrect data');

// S = p(p-a)(p-b)(p-c) ** (1/2);
const pTriangle = (roadSide + gardenSide + neighbourSide) / 2;
const areaOfTriangle = (pTriangle * (pTriangle - roadSide) * (pTriangle - gardenSide) * (pTriangle - neighbourSide)) ** (1 / 2);
const roundAreaOfTriangle = areaOfTriangle.toFixed(3);
console.log(roundAreaOfTriangle);

// (a ** 2) + (b ** 2) = (c ** 2) || (b ** 2) + (c ** 2) = (a ** 2) || (a ** 2) + (c ** 2) = (b ** 2);
const rightTriangle = (roadSide ** 2) + (gardenSide ** 2) === (neighbourSide ** 2) || (gardenSide ** 2) + (neighbourSide ** 2) === (roadSide ** 2) || (roadSide ** 2) + (neighbourSide ** 2) === (gardenSide ** 2);
console.log(rightTriangle ? ('Ваш трикутник є прямокутним.') : ('Ваш трикутник не є прямокутним.'));

// 6. 
// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
// Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

const date = new Date();
const hours = date.getHours();
let timeOfDay;

switch (true) {
    case hours >= 23 || hours < 5:
        timeOfDay = 'Доброї ночі';
        break;
    case hours >= 5 && hours < 11:
        timeOfDay = 'Доброго ранку';
        break;
    case hours >= 11 && hours < 17:
        timeOfDay = 'Доброго дня';
        break;
    case hours >= 17 && hours < 23:
        timeOfDay = 'Доброго вечора';
        break;
}

console.log(timeOfDay);

const currentDate = new Date();
const currentTime = currentDate.getHours();
let timeMessage;

if (currentTime >= 23 || currentTime < 5) {
    timeMessage = 'Доброї ночі';
} else if (currentTime >= 5 && currentTime < 11) {
    timeMessage = 'Доброго ранку';
} else if (currentTime >= 11 && currentTime < 17) {
    timeMessage = 'Доброго дня';
} else if (currentTime >= 17 && currentTime < 23) {
    timeMessage = 'Доброго вечора';
}

console.log(timeMessage);


