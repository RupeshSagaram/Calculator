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

let firstNum =null;
let secondNum=null;
let operatorSign=null;
let result = null;
let alreadyClicked = false;

 plus.addEventListener('click',()=> {
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

minus.addEventListener('click',()=> {
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
digMultiply.addEventListener('click',()=> {
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
digDivide.addEventListener('click',()=> {
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

dotButton.addEventListener('click',(event)=>{
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

equalto.addEventListener('click',()=> {
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

