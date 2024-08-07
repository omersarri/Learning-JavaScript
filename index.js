// console.log('Hello');
// console.log('I like piiza');

// window.alert('This is an alert!');
// window.alert('I like pizza!');

// THis is a comment

// document.getElementById('myH1').textContent = 'Hello';
// document.getElementById('myP').textContent = 'What can i do sometimes its the football thats the football';


// let fullName = 'Bro Code'
// let age = 25;
// let student = false;


//--user input
//-easy way
// let username;

// username = window.prompt('whats your username?')

// document.getElementById('myP').textContent = username;

//-pro way
// let username;
// document.getElementById('mySubmit').onclick = function() {
//     username = document.getElementById('myText').value;
//     console.log(username);
//     //document.getElementById('myP').textContent = username;
// }

//--type conversation

//-convert to number
// let age = '25';

// age = Number(age);

//-convert to string

// let x = 25;
// x = String(x);

//-conver to boolean
//String ve numberi dönüştürmke istersen herhangi bir değer true değer alır uninitialized ve null false alır
// let y = 'blabla'
// y = Boolean(y);


//consts

// const PI = 3.14159
// let radius;
// let circumference;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);

// circumference = 2* PI *radius;
// console.log(circumference);

//--Math
//console.log(Math.PI);

// let x = 3.21;
// let y = 3.80
// let z;

// z = Math.round(y); //to closest
// z = Math.floor(y); //to bottom
// z = Math.ceil(x); //to up
// z = Math.trunc(x); //to eliminate decimal portion
// z = Math.pow(x, y); //üs alma
// z = Math.sqrt(x); //karekök
// z = Math.log(x); //logaritma
// z = Math.sin(x); //sinus
// z = Math.cos(x); //cosinus
// z = Math.tan(x); //tanjant
// z = Math.abs(x); //make it positive
// z = Math.max(x, y) //find max value
// z = Math.min(x, y) //find min value

// let randomNum = Math.random() // gives you num between 0-1 with decimals
// randomNum = Math.random() *6 // gives you num between 0-6 with decimals
// randomNum = Math.floor( Math.random() *6) // gives you num between 0-6 without decimals
// randomNum = Math.floor( Math.random() *6) +1 // gives you num between 1-6 without decimals

// const min = 50;
// const max = 100

// console.log(randomNum);


//--checkbox and radio

// const  myCheckBox = document.getElementById('myCheckbox');
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const payPalBtn = document.getElementById('payPalBtn');
// const mySubmitBtn = document.getElementById('mySubmitBtn');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');

// mySubmitBtn.onclick = function() {
//     if(myCheckBox.checked){
//         subResult.textContent = 'You are subscribed!';
//     }else{
//         subResult.textContent = 'You are not subscribed!';
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = 'You are paying with Visa!';
//     }else if(payPalBtn.checked){
//         paymentResult.textContent = 'You are paying with PayPal';
//     }else if(masterCardBtn.checked){
//         paymentResult.textContent = 'You are paying with Master Card';
//     }
// }

//--Arrays and spread operator

// let fruits = ['apple', 'orange', 'banana'];

// let vegatables = ['carrots', 'celery', 'potatoes'];

// let foods = [...fruits, ...vegatables];

// console.log(foods);

//--rest parameters

// function openFridge(...foods) {
//     console.log(foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// const food1 = 'pizza';
// const food2 = 'hamburger';
// const food3 = 'hotdog';
// const food4 = 'sushi';

// //openFridge(food1,food2,food3,food4);

// const foods = getFood(food1,food2,food3,food4)

// console.log(foods);

// function sum(...numbers){
//     let result = 0;
//     for(let i =0; i<numbers.length; i++){
//         result += numbers[i];
//     }
//     return result;
// }

// function getAverage(...numbers){
//     let result = sum(...numbers)
//     return result/numbers.length;
// }

// console.log(getAverage(5,7,8,9));

// function combineString(...strings){
//     return strings.join(' ');
// }

// const fullName = combineString('Mr.', 'Spongaebob', 'Squarepants');

// console.log(fullName);

//--callbacks

hello(goodbye);

function hello(callback){
    console.log('Hello!');
    callback();
}

function leave() {
    consoleLog('Leave!');
}

function goodbye() {
    console.log('Goodbye!')
}

function sum(callback, x, y,){
    let result = x+y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

sum(displayConsole, 7,13);



