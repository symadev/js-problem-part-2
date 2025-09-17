//Multi-layer discount price calculation

//1---100>100
//101-200---->90
//201---->70


function getdiscount(quantity){
    if(quantity<= 100){
        const total =quantity * 100;
    
    return total;
}
 else if(quantity<= 101){
    const total =quantity * 90;

return total;
}

else{
    const total =quantity * 70;

return total;
}


}

const total= getdiscount(5);//aikahne quantity ar man ta boshate hobe naile man show korbe na aikahne
console.log(total);



function discount(quantity){
    if(quantity<= 100){
        const total =quantity * 100;
    
    return total;
}
 else if(quantity<= 200){
    const total =quantity * 90;

return total;
}

else{
    const total =quantity * 70;

return total;
}


}

const result= discount(101);
console.log(result);