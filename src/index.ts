let age: number = 50;
let personName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number):number => { return 100 + a };

let anything: any = -20;
anything = 'Text';
anything = {};

let some: any;
some = 'Text';

let str: string;

str = some;

let person: [string, number] = ['Max', 21];

enum isReady {
    Loading = 'false',
    Ready = 'true',
}

let someStr: string | number = 1;

let someStr2: 'enable' | 'disable' = 'enable'

function showMessage(message: string): void {
    console.log(message);
}

function calc(num1: number, num2: number): number {
    return num1 + num2;
}

function customError(): void {
    throw new Error('Error');
}

interface Page1{
    title: string,
    likes: number,
    accounts: [string],
    status: string,
    details: {
        createAt: Date,
        updateAt: Date,
    }
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
}

interface Page2{
    title: string,
    likes: number,
    accounts: [string],
    status: string,
}

const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
}