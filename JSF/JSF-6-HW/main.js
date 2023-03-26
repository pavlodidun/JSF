// 1. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3


const listItems = document.querySelectorAll('#list li');
const order = [0, 4, 1, 3, 2];
const contentInOrder = order.map(index => listItems[index].textContent);

alert(contentInOrder.join(', '));

// 2. Для сторінки
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

const header = document.querySelector('h1');
const div = document.querySelector('#myDiv');
const paragraphs = document.querySelectorAll('#myDiv p');
const firstParagraph = document.querySelector('#myDiv p:first-child');
const secondParagraph = document.querySelector('#myDiv p:nth-child(2)');
const thirdParagraph = document.querySelector('#myDiv p:nth-child(3)');
const fourthParagraph = document.querySelector('#myDiv p:nth-child(4)');
const list = document.querySelector('#myList');
const listItems2 = document.querySelectorAll('#myList li');
const span = document.querySelector('span');

header.style.fontSize = '3em';
header.style.backgroundColor = 'lightgreen';
firstParagraph.style.fontWeight = 'bold';
secondParagraph.style.color = 'red';
thirdParagraph.style.textDecoration = 'underline';
fourthParagraph.style.fontStyle = 'italic';
list.style.display = 'flex';
list.style.listStyleType = 'none';
span.style.display = 'none';


// 3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
window.addEventListener('DOMContentLoaded', function () {
    const main = document.createElement('main');
    const div1 = document.createElement('div');
    const paragraph = document.createElement('p');

    main.classList.add('mainClass', 'check', 'item');
    div1.id = 'myDiv1';
    paragraph.textContent = 'First paragraph';
    div1.appendChild(paragraph);
    main.appendChild(div1);

    const container = document.createElement('div');
    container.appendChild(main);
    document.body.appendChild(container);
});


// 4. Задача описана в блоці JS

// const inputs = document.querySelectorAll('.arr');
// const btn = document.querySelector('.btn');
// const outBlock = document.querySelector('.out');

// btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const data = {};
//     inputs.forEach(input => {
//         data[input.dataset.form] = input.value;
//     });
//     outBlock.textContent = JSON.stringify(data);
// });

// 5. Задача описана в блоці JS

// const circles = document.querySelectorAll('.circle');

// circles.forEach(circle => {
//     const animClass = circle.getAttribute('data-anim');
//     circle.classList.add(animClass);
// });

// setTimeout(() => {
//     circles.forEach(circle => {
//         console.log(circle.classList);
//     });
// }, 1000);

// 6. Задача описана в блоці JS

// const colors = document.querySelectorAll('.color');
// const priceDisplay = document.getElementById('outprice');

// let price = 189.99; // default price

// Add event listener to each color option

// colors.forEach(color => {
//     color.addEventListener('click', () => {
//         const newPrice = Number(color.getAttribute('data-price')); // get the price of the selected color
//         price = newPrice; // update the price
//         priceDisplay.textContent = price.toFixed(2); // display the updated price
//         // Remove active class from all colors and add it to the selected one
//         colors.forEach(c => c.classList.remove('active'));
//         color.classList.add('active');
//     });
// });

// Add size options - it doesn't work correctly!

// const sizeOptions = document.getElementById('size-options');

// const sizes = [
//     { size: 's', label: 'S', price: price },
//     { size: 'm', label: 'M', price: price + 10 },
//     { size: 'l', label: 'L', price: price + 20 },
// ];

// sizes.forEach(size => {
//     const sizeButton = document.createElement('button');
//     sizeButton.classList.add('size');
//     sizeButton.setAttribute('data-size', size.size);
//     sizeButton.textContent = size.label;
//     sizeOptions && sizeOptions.appendChild(sizeButton);

//     sizeButton.addEventListener('click', () => {
//         const sizeValue = sizeButton.getAttribute('data-size');
//         const selectedSize = sizes.find(size => size.size === sizeValue);
//         const sizePriceValue = selectedSize.price - sizes[0].price;
//         const newPrice = selectedSize.price;
//         price = newPrice;
//         priceDisplay.textContent = price.toFixed(2);
//         sizes.forEach(s => s.classList.remove('active'));
//         sizeButton.classList.add('active');
//     });
// });

