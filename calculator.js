//Simple calculator to call function inside a function

function add (num1, num2){
    return num1+num2;

}

function subtract (num1, num2){
    return num1 - num2;
    
}                                             //aikahne amra akta function ar modhe diye arekta function k call kortechi
function multiply (num1, num2){
    return num1 * num2;
    
}

function calculator(a, b, operation){
if (operation ==='add'){
    const result =add (a,b);
    return result;
}
 else if (operation ==='subtract'){
    const result =subtract (a,b);
    return result;
}
if (operation ==='multiply'){
    return multiply(a, b);
    
}
else {
    return 'operation s not allowed';
}
}

const result = calculator(3,7 ,'multiply');  //f10 dile ta function ar vitore chole jabe
                                             //ar f11 dile ta main function ar votore chole jabe means ta multiplt ar operation korle ta 
                                            //f11 dile ta multiply function ar main function ar vitore chole jabe
console.log('the number is :', result );





// calculator 


function addition( number1, number2){
    return number1+ number2;
}


function subtraction( number1, number2){
    return number1 -  number2;
}


function multiplication( number1, number2){
    return number1 * number2;
}

function division( number1, number2){
    return number1  / number2;
}




function calculator2 ( b,d , operation ){
    if (operation === 'addition'){
        const result = addition(b,d);
        return result;
    }
    else if (operation === 'subtraction'){
        const result = subtraction(b,d);
        return result;
    }
    else if (operation === 'multiplication'){
        const result = multiplication(b,d);
        return result;
    }
    else if (operation === 'division'){
        const result = division(b,d);
        return result;
    }
    else {
    return 'operation is not allowed';
}
}


const resultMain = calculator2( 23, 56 , 'addition');
console.log('the result is :', resultMain);