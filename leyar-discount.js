//aikahne leyar a leyar a discount hishab kora hobe


//100--->100
//101to200---->90
//avobe200---->70


function leyaredTotal(quantity){

const first100price = 100;
const to200price = 90;
const avobe200price= 70;


if(quantity<= 100){
    const total =quantity * first100price;

return total;
}
else if(quantity<= 200){ ///ai ghore dhoka mane holo ami sure 100 ar beshi kinchi
const first100total =100 * first100price;
const remainingquantity =quantity -100;
const remainingtotal = remainingquantity*to200price;
const total=first100total+remainingtotal ; 


return total;
}

else{
    const first100total =100 * first100price;
    const to200pricetotal =100 * to200price;
    const remainingquantity =quantity -200;
    const remainingtotal = remainingquantity*avobe200price;
    const total=first100total+remainingtotal+ to200pricetotal; 

    

return total;
}


}

const total= leyaredTotal(120);//aikahne quantity ar man ta boshate hobe naile man show korbe na aikahne
console.log(total);


