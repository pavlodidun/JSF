// 8-1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function checkRegister (str) {
    const regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character"
    }
}

console.log(checkRegister ('Driver'));
console.log(checkRegister ('bUS'));
console.log(checkRegister ('1Jeep'));

// 8-2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
// Валідними вважаються всі символи на різних позиціях.
// checkEmail("Qmail2@gmail.com");
// true

function checkEmail (email) {
    const regexp = /[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})/ig;
    if (regexp.test(email)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEmail('first@gmail.com'));
console.log(checkEmail('1first@pilot.con'));
console.log(checkEmail('secoND@.com'));
console.log(checkEmail('myEmail@gmail,com'));

// 8-3. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

const someTxt = 'Java Script';
const mirrorMagic = someTxt.replace(/(\w+)\s+(\w+)/, "$2 $1");
console.log(mirrorMagic); 

// 8-4. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function cardCheck (card) {
    const regexp = /^(\d{4}-){3}\d{4}$/;
    return regexp.test(card);
}

console.log(cardCheck('2022-03-31-1234'));
console.log(cardCheck('2022-0332-3111-1234'));
console.log(cardCheck('202203311234'));


// 8-5. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"

function checkNewEmail(email) {
    const regexp = /^[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+([_-]?[A-Za-z0-9]+)*(\.[A-Za-z]{2,})+$/;
    return regexp.test(email) ? "Email is correct!" : "Email is not correct!";
}

console.log(checkNewEmail('my_mail@gmail.com'));
console.log(checkNewEmail('#my_mail@gmail.com'));
console.log(checkNewEmail('my_ma--il@gmail.com'));

// 8-6. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, 
// що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, 
// включаючи числа з плаваючою комою (наприклад, 3.4).

// checkLogin('ee1.1ret3');
// true 
// 1.1, 3

// checkLogin('ee1*1ret3');
// false 
// 1, 1, 3

function checkLogin(str) {
    const regexp = /^[a-zA-Z][a-zA-Z\.0-9]{1,9}$/;
    const match = str.match(regexp);

    if (match !== null) {
        const loginNumbers = str.match(/[0-9]*\.?[0-9]+/g);
        return [true, loginNumbers ? loginNumbers : []];
    } else {
        const loginNumbers = str.match(/[0-9]*\.?[0-9]+/g);
        return [false, loginNumbers ? loginNumbers : []];
    }
}

console.log(checkLogin('ee1.1ret3'));
console.log(checkLogin('ee1*1ret3'));
console.log(checkLogin('ee11ret32123'));