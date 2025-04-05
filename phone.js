// Find the cheapest phone from an array of phone objects

//In programming, getMin typically means "get minimum" and is used to retrieve the smallest value from a data structure.

const prices =[23, 41, 34, 56, 45];

function getmin(numbers){
    let min = numbers[0];//aikhane  amra dhore nichi j shobcheye cheapest number holo first ar ta
for(const num of numbers){
    if(num<min){ //aikhane num jdi min theke choto hoi taile amra oi name ta niye nebo
        min= num;
    }

}
return min;
}


const cheap =getmin(prices);
console.log('the cheapest price is', cheap);


