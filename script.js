const dig1 = document.querySelector('#dig1');
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
        console.log(result);
        output.textContent = result;
        
}

function subtract(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total - current);
    console.log(result);
    output.textContent = result;
}

function multiply(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total * current);
    console.log(result);
    output.textContent = result;
}

function divide(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total / current);
    console.log(result);
    output.textContent = result;
}

//variables for calculator operation , two numbers and one operator

let number1;
let operator;
let number2;

function operate(number1, operator, number2){
    
    switch(operator){
        case '+': 
           add(number1, number2);
        break;

        case '-':
            subtract(number1,number2);
        break;

        case '*':
            multiply(number1,number2);
        break;

        case '/':
            divide(number1,number2);
        break;  
    }
}

let displayValue;

dig1.addEventListener('click',()=> {output.textContent+=1;
    // displayValue = output.textContent;
});
dig2.addEventListener('click',()=> {output.textContent+=2;
    // displayValue = output.textContent;
});
dig3.addEventListener('click',()=> {output.textContent+=3;
    // displayValue = output.textContent;
});
dig4.addEventListener('click',()=> {output.textContent+=4
    // displayValue = output.textContent;
});
dig5.addEventListener('click',()=> {output.textContent+=5
    // displayValue = output.textContent;
});
dig6.addEventListener('click',()=> {output.textContent+=6
    // displayValue = output.textContent;
});
dig7.addEventListener('click',()=> {output.textContent+=7
    // displayValue = output.textContent;
});
dig8.addEventListener('click',()=> {output.textContent+=8
    // displayValue = output.textContent;
});
dig9.addEventListener('click',()=> {output.textContent+=9
    // displayValue = output.textContent;
});
dig0.addEventListener('click',()=> {output.textContent+=0
    // displayValue = output.textContent;
});
clear.addEventListener('click',()=> {output.textContent = '';
    // displayValue = output.textContent;
});

let firstNum;
let secondNum;
let operatorSign;
 plus.addEventListener('click',()=> {
     firstNum = +(output.textContent);
     console.log(firstNum);
     operatorSign = '+';
    output.textContent = '';
    return firstNum,operatorSign;
    
});

minus.addEventListener('click',()=> {
    firstNum = +(output.textContent);
    console.log(firstNum);
    operatorSign = '-';
   output.textContent = '';
   return firstNum,operatorSign;
});
digMultiply.addEventListener('click',()=> {
    firstNum = +(output.textContent);
    console.log(firstNum);
    operatorSign = '*';
   output.textContent = '';
   return firstNum,operatorSign;
});
digDivide.addEventListener('click',()=> {
    firstNum = +(output.textContent);
    console.log(firstNum);
    operatorSign = '/';
   output.textContent = '';
   return firstNum,operatorSign;
});
let solution;
equalto.addEventListener('click',()=> {
    secondNum = +(output.textContent);
    console.log(firstNum);
    console.log(secondNum);
    console.log(operatorSign);
    operate(firstNum,operatorSign,secondNum);
       
    //console.log(solution);
});





