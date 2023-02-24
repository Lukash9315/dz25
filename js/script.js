
alert('Привіт, зараз я поставлю тобі декілька запитань. Гарно подумай перед тим як відповідати!');

let userName = prompt('Як тебе звуть?');
alert('Привіт,' +userName);
let firstName = 'John';
let userSurname = prompt('Яке у тебе прізвище?');
let lastName = 'Wick';
let bornYear = prompt('В якому році ти народився?');
const nowYear = 2023;
let userAge = (nowYear - bornYear);
let sideSquare = prompt('Уяви що в тебе є квадрат, який був би в нього розмір сторони?');
let perimeterSquare = (sideSquare * 4);
let circleRadius = prompt('А тепер закрий очі, і уяви коло. Який в нього радіус?');
const numberPi = 3.14159265359;
let circleArea = (numberPi * circleRadius * circleRadius);
let distanceСities = prompt('Назви відстань між містами.');
let timeCities = prompt('Назви час за який ти хочешь подолати цю відстань.');
let userSpeed = (distanceСities / timeCities);
let exchangeRate = 0.94;
let sumDollar = prompt('А зараз я допоможу тобі перевести Долари в Євро! Вкажи яку кількість доларів ти хочешь обміняти?');
let sumEuro = (sumDollar * exchangeRate);
/*
let value = 'John';
let last_name = 'Wick';
let username = 'John';
let USERSURNAME = 'Wick';
let USER_SURNAME = 'Wick';
*/

console.log(userName);
console.log(userSurname);
console.log(userAge);
console.log(perimeterSquare);
console.log(circleArea);
console.log(distanceСities);
console.log(timeCities);
console.log(userSpeed);
console.log(sumEuro)