// 1. Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) 
// – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

function sumSliceArray(arr, first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
        throw new Error("Параметри повинні бути числами");
    }
    if (first >= arr.length || second >= arr.length) {
        throw new Error("Індекс перевищує розмір масиву");
    }
    if (first < 0 || second < 0) {
        throw new Error("Індекс не може бути від'ємним");
    }

    let sum = 0;

    for (let i = first; i <= second; i++) {
        sum += arr[i];
    }

    return sum;
}

const arr = [1, 2, 3, 4, 5, 6];

try {
    const result = sumSliceArray(arr, 2, 'a');
    console.log(result);
} catch (error) {
    console.error(error.message);
}

// 2. Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач)
// та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error).
//  У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення.
//  У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.

function checkAge() {
    const name = prompt("Введіть ваше ім'я:");
    let age = prompt("Введіть ваш вік:");
    const status = prompt("Введіть ваш статус (адмін, модератор, користувач):");

    try {
        if (age === "") {
            throw new Error("The field is empty! Please enter your age");
        }

        age = Number(age);

        if (isNaN(age)) {
            throw new Error("Age should be a number!");
        }

        if (age < 18 || age > 70) {
            throw new RangeError("Age should be between 18 and 70 years old");
        }

        if (status !== "адмін" && status !== "модератор" && status !== "користувач") {
            throw new EvalError("Invalid status!");
        }

        alert(`Welcome, ${name}! You can watch the movie now.`);
    } catch (error) {
        alert(`Error: ${error.name} - ${error.message}`);
    }
}

checkAge();

// 3.Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width
// і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку,
// якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

function calcRectangleArea(width, height) {
    if (typeof width !== 'number' && typeof height !== 'number') {
        throw new Error('Both parameters must be numbers');
    }

    return width * height;
}

let width = prompt('Enter the width of the rectangle:');
let height = prompt('Enter the height of the rectangle:');

try {
    width = Number(width);
    height = Number(height);

    const area = calcRectangleArea(width, height);

    console.log(`The area of the rectangle is ${area}`);
} catch (error) {
    console.error(error.message);
}

// 4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
// Функція повертає назву місяця відповідно до введеного номера місяця.У випадку некоректного вводу кидається ексепшн
// у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
    }
}

function showMonthName(month) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    if (month < 1 || month > 12) {
        throw new MonthException("Incorrect month number");
    }

    return months[month - 1];
}

try {
    console.log(showMonthName(5)); //May
    console.log(showMonthName(14)); //MonthException Incorrect month number
} catch (error) {
    console.log(`${error.name} ${error.message}`);
}

// 5.Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id.
// Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку.
// Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

function showUser(id) {
    return { id: id };
}

function showUsers(ids) {
    const validIds = ids.filter(function (id) {
        if (id < 0) {
            console.error('ID must not be negative: ' + id);
            return false;
        }
        return true;
    });

    return validIds.map(showUser);
}

console.log(showUsers([7, -12, 44, 22]));
// Error: ID must not be negative: -12
// [{ id: 7 }, { id: 44 }, { id: 22 }]