const disha = 23;
const noman = 56;

if (disha > noman) {
    console.log('Disha will get the strawberry');
} else if (disha < noman) {  // Use "else if" instead of "else(condition)"
    console.log('Noman will get the strawberry');
} else {
    console.log('Both will get the strawberry');
}


//inside a function

function getMax(num1, num2) {  // একটি ফাংশন তৈরি করা হয়েছে যা দুটি সংখ্যার মধ্যে বড়টি বের করবে
    if (num1 > num2) {  // যদি num1 num2 এর থেকে বড় হয়
        return num1;  // তাহলে num1 রিটার্ন হবে
    } else {  // যদি num1 num2 এর থেকে ছোট বা সমান হয়
        return num2;  // তাহলে num2 রিটার্ন হবে
    }
}

const max1 = getMax(23, 56);  // ২৩ এবং ৫৬ এর মধ্যে বড় সংখ্যা বের করতে getMax ফাংশনটি কল করা হয়েছে
  // আবার ২৩ এবং ৫৬ এর মধ্যে বড় সংখ্যা বের করতে getMax ফাংশনটি কল করা হয়েছে
  // max1 এবং max2 এর মধ্যে বড় সংখ্যা বের করতে getMax ফাংশনটি কল করা হয়েছে

console.log('The max of two is:', max1);  // সবচেয়ে বড় সংখ্যাটি কনসোলে প্রিন্ট করা হয়েছে