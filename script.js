//basic math functions for the calculator

function add(...values){
    let arr =[];
    arr.push(...values);
    let result = arr.reduce((total,current)=> total + current);
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

