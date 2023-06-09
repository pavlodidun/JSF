// 1. Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).

class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius
    }

    getLength() {
        return 2 * Math.PI * this.radius;
    }

    static getLengthByRadius(radius) {
        return 2 * Math.PI * radius;
    }

    getCopy() {
        return new Circle(this.x, this.y, this.radius);
    }

    static getCircleByParameters(x, y, radius) {
        return new Circle(x, y, radius);
    }

    isPointInside(x, y) {
        const distanceFromCenter = Math.sqrt((x - this.x) ** 2 + (y - this.y) ** 2);
        return distanceFromCenter <= this.radius;
    }

    toString() {
        return 'Center of circle is (${this.x}, ${this.y}) and radius is (${this.radius})'
    }
}

const smallWheel = new Circle(3, 1, 14);
console.log('Task1: ', smallWheel.getLength());
console.log(Circle.getLengthByRadius(15));
const mediumWheel = smallWheel.getCopy();
mediumWheel.radius = 16;
console.log(mediumWheel.getLength());
const largeWheel = new Circle(4, 1, 18);
console.log(largeWheel.isPointInside(2, 5));
console.log(largeWheel.isPointInside(26, 56));
console.log(largeWheel.toString());

// 2. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log('Task2: ', propsCount(mentor));

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

// 3. -  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(),
// який виводить у консоль ім’я і прізвище особи.
// - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету).
// - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName)
// студента.
// - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6).
// Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
// Приклад результату:

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

class Student extends Person {
    constructor(firstName, lastName, year) {
        super(firstName, lastName);
        this.year = year;
    }

    showFullName(middleName) {
        console.log('Task3: ', `${this.firstName} ${middleName} ${this.lastName}`);
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year - 1;
        console.log(`Current course ${course}`);
    }
}

const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4



// 4. А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера.
// Продемонструвати роботу написаних методів

class Marker {
    constructor(color, inkAmount) {
        this.color = color;
        this.inkAmount = inkAmount;
    }

    print(text) {
        let printedText = "";
        for (let i = 0; i < text.length; i++) {
            if (this.inkAmount >= 0.5) {
                printedText += text[i];
                if (text[i] !== " ") {
                    this.inkAmount -= 0.5;
                }
            } else {
                break;
            }
        }
        console.log('Task4: ',"%c" + printedText, `color: ${this.color}`);
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.inkAmount = 100;
    }
}

const marker = new RefillableMarker("red", 50);
marker.print("Lorem ipsum dolor sit amet");
console.log(`Ink amount: ${marker.inkAmount}%`);
marker.refill();
console.log(`Ink amount after refill: ${marker.inkAmount}%`);
marker.print("Lorem ipsum dolor sit amet");
console.log(`Ink amount: ${marker.inkAmount}%`);

// 5. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName(ім’я і прізвище), dayRate(ставка за день роботи),
//     workingDays(кількість відпрацьованих днів).
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника.Зарплата - це добуток ставки dayRate на кількість
//        відпрацьованих днів workingDays.
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні
// зарплати – створити метод showSalaryWithExperience().Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience.Встановити значення experience = 1.5 і вивести його на екран.
//         4) Вивести значення зарплати з новим experience.
//         5) Створити кілька екземплярів класу(працівників) з різними зарплатами, як показано в прикладі нижче.Посортувати зарплату
//         працівників із найбільшим experience по зростанню і вивести результат в форматі: worker_fullName: salary_value
// 6) Реалізувати динамічне сортування для будь - кої кількості працівників - екземплярів класу Worker.


class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        let salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        let salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    get showExp() {
        return this._experience;
    }

    set setExp(value) {
        this._experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log('Task5: ',worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

let workers = [worker1, worker2, worker3];

workers.sort(function (a, b) {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
});

console.log("Sorted salary:");
for (let i = 0; i < workers.length; i++) {
    console.log(`${workers[i].fullName}: ${workers[i].showSalaryWithExperience()}`);
}

// Output example:

// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584