"use strict";
let age = 50;
let personName = 'Max';
let toggle = true;
let empty = null;
let notInitialize = undefined;
let callback = (a) => { return 100 + a; };
let anything = -20;
anything = 'Text';
anything = {};
let some;
some = 'Text';
let str;
str = some;
let person = ['Max', 21];
var isReady;
(function (isReady) {
    isReady["Loading"] = "false";
    isReady["Ready"] = "true";
})(isReady || (isReady = {}));
let someStr = 1;
let someStr2 = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
