///quantity mane holo poriman jar sathe cutt ar number multiply kora hoice aikhane

function woodquantity(chairquantity, tablequantity, bedquantity) {
    const perchairwood = 3;
    const pertablewood = 30;
    const perbedwood = 20;

    const totalchairwood = chairquantity * perchairwood;
    const totaltablewood = tablequantity * pertablewood; // Fixed variable name
    const totalbedwood = bedquantity * perbedwood;

    const totalwood = totalchairwood + totaltablewood + totalbedwood;
    
    return totalwood;
}

const wood = woodquantity(1, 1, 3);
console.log('wood needed', wood);


// shirt price ---->300
//pant price ---->400
//shous price---->500  ai type ar math calculate korte hobe aikhane process holo same
