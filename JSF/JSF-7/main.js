const parameter = document.querySelectorAll('div');

for (let i = 0; i < parameter.length; i++) {
    parameter[i].style.padding = '20px';
}

// 7-1. За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.

let box = window.open('', '', 'width=300,height=300');

setTimeout(() => {
    box.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
    box.moveTo(200, 200);
}, 4000);

setTimeout(() => {
    box.close();
}, 6000);

// 7-2. Для заданої HTML-сторінки:
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, 
// розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

function changeCSS() {
    const changeStyles = document.getElementById('text');
    changeStyles.style.color = 'orange';
    changeStyles.style.fontSize = 20;
    changeStyles.style.fontFamily = 'Comic Sans MS';
}

const btn = document.querySelector('.second-task');
btn.addEventListener('click', changeCSS);

// 7-3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

const mouseClick = document.querySelector('.mouse-click');
const doubleClick = document.querySelector('.double-click');
const holdClick = document.querySelector('.hold-click');
const myBlock = document.querySelector('.mouse-hover')
const page = document.querySelector('body');

mouseClick.addEventListener('click', function () {
    page.style.backgroundColor = 'lightBlue';
});

doubleClick.addEventListener('dblclick', function () {
    page.style.backgroundColor = 'pink';
});

holdClick.addEventListener('mousedown', function () {
    page.style.backgroundColor = 'tan';
});

holdClick.addEventListener('mouseup', function () {
    page.style.backgroundColor = 'white';
})

myBlock.addEventListener('mouseover', function () {
    page.style.backgroundColor = 'yellow';
});

myBlock.addEventListener('mouseout', function () {
    page.style.backgroundColor = 'white';
});

// 7-4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.

const deleteList = document.querySelector('.delete-list');
const choose = document.getElementById('choose');

choose.addEventListener('change', function () {
    console.log(choose.options[choose.selectedIndex].textContent);
});

deleteList.addEventListener('click', function () {
    choose.remove(choose.selectedIndex);
});

// 7-5.Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

const liveBtn = document.querySelector('.live-btn');
const liveText = document.getElementById('live-text');
let text = '';

liveBtn.addEventListener('click', function () {
    text += 'I was pressed<br>';
    liveText.innerHTML = text;
});

liveBtn.addEventListener('mouseover', function () {
    text += 'Mouse on me<br>';
    liveText.innerHTML = text;
});

liveBtn.addEventListener('mouseout', function () {
    text += 'Mouse is not on me<br>';
    liveText.innerHTML = text;
});

// 7-6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) 
// вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення

const sizeText = document.getElementById('size-text');

function newWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    sizeText.textContent = `${width} x ${height}`;
}

newWindowSize();

window.addEventListener('resize', newWindowSize);

// 7-7.На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому - назви міст.
// Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна 
// - в правому випадаючому списку зʼявлялися міста цієї країни. Список міст формується динамічно, через JavaScript. 
// Також потрібно нижче вивести назву обраної країни і місто.

const citiesByCountries = {
    ger: ['Berlin', 'Munich', 'Dresden'],
    usa: ['Los Angeles', 'New York', 'Chicago'],
    ukr: ['Lviv', 'Sambir', 'Dnipro']
};

const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const result = document.getElementById('result');

function updateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountries[selectedCountry];

    citiesSelect.innerHTML = '';
    for (let i = 0; i < cities.length; i++) {
        const option = document.createElement('option');
        option.value = cities[i];
        option.textContent = cities[i];
        citiesSelect.appendChild(option);
    }

    updateResult();
}

function updateResult() {
    const selectedCountryText = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCityText = citiesSelect.options[citiesSelect.selectedIndex].text;
    result.textContent = `Selected: ${selectedCountryText}, ${selectedCityText}`;
}

updateCities();
countrySelect.addEventListener('change', updateCities);
citiesSelect.addEventListener('change', updateResult);























