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
