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




