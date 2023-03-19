// 1. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:

function compact(arr) {
    return Array.from(new Set(arr));
}

const arrComp = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arrComp);
console.log(arr2); // [5,3,4,6,7]

// 2. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)

function createArray(start, end) {
    const arr = []
    for (let i = start; i <= end; i += 1) {
        arr.push(i);
    }
    return arr;
}

let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]


// 3. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

function buckets(a, b) {
    for (let i = a; i <= b; i += 1) {
        for (let s = 0; s < i - a + 1; s += 1) {
            console.log('i: ', i);
        }
    }
}

buckets(2, 25);
// 4. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.

function randArray(k) {
    const arr = []
    for (let i = 0; i < k; i += 1) {
        arr.push(Math.floor(Math.random() * 500) + 1);
    }
    return arr;
}

const myarr = randArray(5);
console.log(myarr);

// 5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних 
// (не приводити тип стрінг в число навіть якщо там лише число)

function separateByType(arr) {
    let numberArr = [];
    let stringArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arrLm[i])) {
            const subArrays = separateByType(arr[i]);
            numberArr = numberArr.concat(subArrays[0]);
            stringArr = stringArr.concat(subArrays[1]);
        } else if (typeof arrLm[i] === 'number') {
            numberArr.push(arrLm[i]);
        } else if (typeof arrLm[i] === 'string') {
            stringArr.push(arrLm[i]);
        }
    }

    return [numberArr, stringArr];
}

const arrLm = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const arrNew = separateByType(arrLm);
console.log(arrNew);

// 6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат.
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc() {
    const { a, b, op } = calcInput();

    const answer = calcOp(a, b, op);

    alert(answer);
}

function calcInput() {
    const a = +prompt('Введіть число a:');
    const b = +prompt('Введіть число b:');
    const op = +prompt('Введіть арифметичну дію');

    return { a, b, op };
}

function calcOp(a, b, op) {
    if (op === 1) return a - b;
    if (op === 2) return a * b;
    if (op === 3) return a / b;
    return a + b;
}

calc();

// 7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}

findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
