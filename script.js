const dig1 = document.getElementById('dig1');
const dig2 = document.querySelector('#dig2');
const dig3 = document.querySelector('#dig3');
const dig4 = document.querySelector('#dig4');
const dig5 = document.querySelector('#dig5');
const dig6 = document.querySelector('#dig6');
const dig7 = document.querySelector('#dig7');
const dig8 = document.querySelector('#dig8');
const dig9 = document.querySelector('#dig9');
const dig0 = document.querySelector('#dig0');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const digMultiply = document.querySelector('#multiply');
const digDivide = document.querySelector('#divide');
const equalto = document.querySelector('#equalto');
const output = document.querySelector('#output');
const clear = document.querySelector('#clear');


//basic math functions for the calculator

function add(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total + current);
        // console.log(result);
        return result;
}

function subtract(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total - current);
         return result;
}

function multiply(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total * current);
        return result;
}

function divide(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total / current);
       return result;
}

//variables for calculator operation , two numbers and one operator

let number1;
let operator;
let number2;

function operate(number1, operator, number2){
    switch(operator){
        case add: 
            add(number1, number2);
        break;

        case subtract:
            subtract(number1,number2);
        break;

        case multiply:
            multiply(number1,number2);
        break;

        case divide:
            divide(number1,number2);
        break;  
    }
}

dig1.addEventListener('click',()=> output.textContent+=1);
dig2.addEventListener('click',()=> output.textContent+=2);
dig3.addEventListener('click',()=> output.textContent+=3);
dig4.addEventListener('click',()=> output.textContent+=4);
dig5.addEventListener('click',()=> output.textContent+=5);
dig6.addEventListener('click',()=> output.textContent+=6);
dig7.addEventListener('click',()=> output.textContent+=7);
dig8.addEventListener('click',()=> output.textContent+=8);
dig9.addEventListener('click',()=> output.textContent+=9);
dig0.addEventListener('click',()=> output.textContent+=0);
plus.addEventListener('click',()=> output.textContent+= '+');
minus.addEventListener('click',()=> output.textContent+= '-');
digMultiply.addEventListener('click',()=> output.textContent+='x');
digDivide.addEventListener('click',()=> output.textContent+='/');
//equalto.addEventListener('click',()=> output.innerHTML=1);
clear.addEventListener('click',()=> output.textContent = '');



