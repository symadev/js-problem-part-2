// array ar moddhe string , number ,object shob rokom element thakte pare


const mobiles = [
    { name: 'Samsung', price: 23445, model: 'newbrand', color: 'black' },//array ar name ta usually plural dite hoy
    { name: 'Oppo', price: 23745, model: 'newbrand', color: 'black' },
    { name: 'Vivo', price: 23145, model: 'newbrand', color: 'black' },
    { name: 'Xiaomi', price: 23445, model: 'newbrand', color: 'blue' }
];

function getcheapestphone(mobiles) {
    let cheapest = mobiles[0]; // Assume first phone is the cheapest//akhane const set korle man pore cng kora jabe na

    for (let phone of mobiles) {
        if (phone.price < cheapest.price) {//phone.price-->phone akta object ar modhe j price ase oitah nite hobe
            cheapest = phone; // Update if a cheaper phone is found🚀
        }
    }

    return cheapest; // Return the cheapest phone
}


const cheap= getcheapestphone(mobiles);
console.log('the cheap phone is:', cheap);



const vegetables = [
    { name: 'Carrot', price: 50, type: 'Root', color: 'orange' },
    { name: 'Spinach', price: 30, type: 'Leafy', color: 'green' },
    { name: 'Tomato', price: 40, type: 'Fruit', color: 'red' },
    { name: 'Cabbage', price: 35, type: 'Leafy', color: 'green' },
    { name: 'Beetroot', price: 45, type: 'Root', color: 'red' }
];



function lowVeg(vegetables) {
    let low = vegetables [0]; //asseme the first veg is the  lowest one 


for (let veg of vegetables){
    if (veg.price < low.price){
        low = veg; //update if a lower veg is found
    }
     

}
return low;
}

const lowVegPrice = lowVeg(vegetables);//call the function
console.log('the lowest price veg is:', lowVegPrice );





const vegetables1 = [
    { name: 'Carrot', price: 50, type: 'Root', color: 'orange' },
    { name: 'Spinach', price: 30, type: 'Leafy', color: 'green' },
    { name: 'Tomato', price: 40, type: 'Fruit', color: 'red' },
    { name: 'Cabbage', price: 70, type: 'Leafy', color: 'green' },
    { name: 'Beetroot', price: 80, type: 'Root', color: 'red' }
];



function highVeg(vegetables1) {
    let high= vegetables [0]; //asseme the first veg is the  lowest one 


for (let veg of vegetables1){
    if (veg.price > high.price){
        high = veg; //update if a lower veg is found
    }
     

}
return high;
}

const highVegetables =highVeg(vegetables1);//call the function
console.log('the highest price veg is:', highVegetables );






