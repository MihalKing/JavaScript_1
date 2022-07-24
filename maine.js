// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
//

// let a = 100;
// console.log(a);
// a = 100000;
// console.log(a);
//
// let str1 = 'hello ';
// let space = ' '
// let str2 = "okten";
// let words = (str1 + space + str2);
// console.log(words);
// console.log(str1);
// console.log(!!str1);
// console.log(!!0)

let a1 = 'hello';
let a2 = 'owu';
let a3 = 'com';
let a4 = 'ua';
let a5 = 1;
let a6 = 10;
let a7 = -999;
let a8 = 123;
let a9 = 3.14;
let a10 = 2.7;
let a11 = 16;
let a12 = true;
let a13 = false;
let space = ' ';

console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a9, a10, a11, a12, a13);

alert(a1 + space + a2 + space + a3 + space + a4 + space + a5 +
    space + a6 + space + a7 + space + a8 + space + a9 + space + a10 + space + a11 + space + a12 + space + a13);

document.write(a1 + space + a2 + space + a3 + space + a4 + space + a5 +
    space + a6 + space + a7 + space + a8 + space + a9 + space + a10 + space + a11 + space + a12 + space + a13);

let firstName;
firstName = 'Korolchuk ';
let middleName;
middleName = 'Mykhailo ';
let lastName;
lastName = 'Oleksandrovich';
let person = firstName + middleName + lastName;
console.log(person);


let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// let age = prompt('Mykhailo Oleksandrovich', 2001);
// age = 2001;
// alert(`я з ${age} року`);
// console.log(prompt(age))
// //


let test = prompt("ведіть ваше імя", 'Михайло');
let name = prompt("По батькові", 'Олександрович');
let age = prompt("дата народження", '2001');

console.log(test, name, age);


//
// confirm(test)
// alert('ttttt')
// document.write('<h1>ttt</h1>')
