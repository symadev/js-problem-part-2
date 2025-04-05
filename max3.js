//who is the most tallest



const height =[23, 41, 34, 56, 45];
//  function getmax(numbers){
//     console.log(numbers);
//  }

function getmax(numbers){

    //This defines a function named getmax, which takes one parameter numbers.
// numbers is expected to be an array of numbers.


    let max = numbers[0];

    // This initializes a variable max with the first element of the array (numbers[0]).

    for (const num of numbers){//This is a for...of loop that iterates through each element of the numbers array.
        // num will take the value of each element one by one.
       
       if(num>max){//Inside the loop, we check if the current number (num) is greater than the current max value.

        max=num;
       }
    }

    return max;
}


 const max = getmax(height);//This calls the getmax function and passes the height array as an argument.
//  The function returns the maximum value, which is stored in the max variable.
 
 console.log('max value is ', max);//This prints the maximum value of the array to the console.