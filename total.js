const numbers = [100, 200, 300, 400,500];
const mobiles = [
    { name: 'Samsung', price: 100 },//array ar name ta usually plural dite hoy
    { name: 'Oppo', price: 300 },
    { name: 'Vivo', price: 500 },
    { name: 'Xiaomi', price: 200 }
];

function getshoppingtotal(mobiles){
    let total =0;
    for(const mobile of mobiles){
        total =total + mobile.price;
    }
return total;
}

const totalprice= getshoppingtotal(mobiles);
console.log('the total is :',totalprice);