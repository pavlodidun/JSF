// 12-1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, 
// що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
// поточну робочу директорію і назву файлу сервера (використати модуль path).

const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>System information</h1>');
    res.write(`<p>Current user name: ${os.userInfo().username}</p>`);
    res.write(`<p>OS type: ${os.type()}</p>`);
    res.write(`<p>System work time: ${Math.floor(os.uptime() / 60)} minutes</p>`);
    res.write(`<p>Current work directory: ${process.cwd()}</p>`);
    res.write(`<p>Server file name: ${path.basename(__filename)}</p>`);
    res.end();
});

server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});


// 12-2. Необхідно створити власний модуль рег. js, який містить функцію, що приймає імʼя системного юзера і
// працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні
// чи функції модуля на зовні можна використати обʼєкт module.exports.
// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

function greeting(name) {
    const date = new Date();
    const hour = date.getHours();
    let timeOfDay = '';

    if (hour >= 6 && hour < 12) {
        timeOfDay = 'morning';
    } else if (hour >= 12 && hour < 18) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }

    return `Good ${timeOfDay}, ${name}!`;
}

module.exports = {
    greeting
};

const http = require('http');
const greetingModule = require('./greeting');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        const greeting = greetingModule.greeting('oivaniu');
        const date = new Date();
        const formattedDate = date.toString();

        res.write(`<p>Date of request: ${formattedDate}</p>`);
        res.write(`<p>${greeting}</p>`);
        res.end();
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});