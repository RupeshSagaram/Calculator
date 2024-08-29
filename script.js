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
const backspaceButton = document.querySelector('#backspace');
const plus = document.querySelector('#add');
const minus = document.querySelector('#subtract');
const digMultiply = document.querySelector('#multiply');
const digDivide = document.querySelector('#divide');
const dotButton = document.querySelector('#dot');
const equalto = document.querySelector('#equalto');
const output = document.querySelector('#output');
const clear = document.querySelector('#clear');


//variables for calculator operation , two numbers and one operator

let number1;
let operator;
let number2;

function operate(number1, operator, number2){
    
    switch(operator){
        case '+': 
           return +(number1) + +(number2);

        case '-':
           return +(number1) - +(number2);

        case '*':
            return +(number1) * +(number2);

        case '/':
            if(secondNum===0){
                result= output.textContent = 'lol'
                return result;
             } else{
            return +(number1) / +(number2);
             }
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
    firstNum=secondNum=operatorSign = null;
    alreadyClicked = false;
    // displayValue = output.textContent;
});
let alreadyClicked = false;

document.addEventListener('keydown',(event)=>{
    

    switch(event.key){
        case '1':
            output.textContent +=1;
        break;
        case '2':
            output.textContent +=2;
        break;
        case '3':
            output.textContent +=3;
        break;
        case '4':
            output.textContent +=4;
        break;
        case '5':
            output.textContent +=5;
        break;
        case '6':
            output.textContent +=6;
        break;
        case '7':
            output.textContent +=7;
        break;
        case '8':
            output.textContent +=8;
        break;
        case '9':
            output.textContent +=9;
        break;
        case '0':
            output.textContent +=0;
        break;
        case  '+':
            add();
        break;
        case '_':
            subtract();
        break;
        case '*':
            multiply();
        break;
        case '/':
            divide();
        break;
        case '.':
            function dotOperator(event){
                if(alreadyClicked === true){
                    //event.preventDefault();
                    dotButton.disabled = true;
                } 
                else if(alreadyClicked === false){
                    output.textContent += '.';
                   // firstNum = output.textContent;
                    // output.textContent = firstNum + '.';
                    dotButton.disabled = false;
                     //event.stopPropagation();
                    alreadyClicked = true;
                }
            }
            dotOperator();
        break;
        case 'Backspace':
            backSpace();
        break;
        case 'Enter':
            equalTo();
        break;
    }

});

let firstNum =null;
let secondNum=null;
let operatorSign=null;
let result = null;


  plus.addEventListener('click',add = ()=> {
     if(!(firstNum==null) && !(operatorSign==null)){
        secondNum = +(output.textContent);
        result = operate(firstNum,operatorSign,secondNum);       
        firstNum = +(result.toFixed(3));;
        operatorSign= secondNum = null;
       return output.textContent = result;       

     } else {
        firstNum = parseFloat(output.textContent);
        operatorSign = '+';
     }
    output.textContent = '';
    alreadyClicked = false;
    return firstNum,operatorSign;
    
});

minus.addEventListener('click',subtract = ()=> {
    if(!(firstNum==null) && !(operatorSign==null)){
        secondNum = +(output.textContent);
        result = operate(firstNum,operatorSign,secondNum);       
        firstNum = +(result.toFixed(3));
        operatorSign= secondNum = null;
       return output.textContent = result;       

     } else {
        firstNum = +(output.textContent);
        operatorSign = '-';
     }
    output.textContent = '';
    alreadyClicked = false;
    return firstNum,operatorSign;
});
digMultiply.addEventListener('click',multiply = ()=> {
    if(!(firstNum==null) && !(operatorSign==null)){
        secondNum = +(output.textContent);
        result = operate(firstNum,operatorSign,secondNum);       
        firstNum = +(result.toFixed(3));
        operatorSign= secondNum = null;
       return output.textContent = result;       

     } else {
        firstNum = +(output.textContent);
        operatorSign = '*';
     }
    output.textContent = '';
    alreadyClicked = false;
    return firstNum,operatorSign;
});
digDivide.addEventListener('click', divide = ()=> {
    if(!(firstNum==null) && !(operatorSign==null)){
        secondNum = +(output.textContent);
        result = operate(firstNum,operatorSign,secondNum);       
        firstNum = +(result.toFixed(3));
        operatorSign= secondNum = null;
       return output.textContent = result;       

     } else {
        firstNum = +(output.textContent);
        operatorSign = '/';
     }
    output.textContent = '';
    alreadyClicked = false;
    return firstNum,operatorSign;
    
});

dotButton.addEventListener('click', dot =(event)=>{
    if(alreadyClicked === true){
        event.preventDefault();
        //dotButton.disabled = true;
    } else if(alreadyClicked === false){
        num = output.textContent;
        output.textContent = num + '.';
       // firstNum = output.textContent;
        // output.textContent = firstNum + '.';
         event.stopPropagation();
        alreadyClicked = true;
    }
});

backspaceButton.addEventListener('click', backSpace = ()=>{
    let num = output.textContent;
    let arr = num.split('');
    arr.pop();
    output.textContent = arr.join("");
})

equalto.addEventListener('click', equalTo = ()=> {
    secondNum = +(output.textContent);
    result = operate(firstNum,operatorSign,secondNum);
    if(typeof result !== Number){
        console.log(result);
        output.textContent = result;
    } else{
    output.textContent = +(result.toFixed(3));
        }
    secondNum = operatorSign = null;
    alreadyClicked = false;
       
    //console.log(solution);
});

