//ভ্যালিডেশন (Validation) হল ইনপুট ডেটা বা ইউজার এন্টার করা তথ্যের সঠিকতা বা গঠন যাচাই করা। 
// এটি প্রোগ্রামিংয়ের একটি গুরুত্বপূর্ণ অংশ, বিশেষত ওয়েব ডেভেলপমেন্টে, যেখানে ইউজারের ইনপুট সঠিক ও প্রত্যাশিত হতে হবে। 
// জাভাস্ক্রিপ্টে ভ্যালিডেশন সাধারণত ইনপুট ফর্ম বা ডেটা যাচাই করার জন্য ব্যবহৃত হয়।




function multiply (num1, num2){// ----->perameter
    const mult =  num1 * num2;
    return mult;
}

const result = multiply(3,5 ); 
console.log(result);


function validateInput(input, minLength = 3) {  // একটি ফাংশন তৈরি করা হয়েছে, যা ইনপুট ভ্যালিডেশন করবে
    if (!input || input.trim() === "") {  // প্রথমে চেক করা হচ্ছে যে ইনপুট ফাঁকা বা null/undefined না কি
        return "Input cannot be empty.";  // যদি ইনপুট ফাঁকা হয়, তাহলে "Input cannot be empty." রিটার্ন হবে
    }
    if (input.length < minLength) {  // যদি ইনপুটের দৈর্ঘ্য minLength এর চেয়ে কম হয়
        return `Input must be at least ${minLength} characters long.`;  // তবেএই মেসেজ রিটার্ন হবে
    }
    return "Valid input.";  // যদি সব শর্ত পূরণ হয়, তাহলে "Valid input." রিটার্ন হবে
}

// Example usage:
console.log(validateInput(""));       // Output: "Input cannot be empty."
console.log(validateInput("Hi"));     // Output: "Input must be at least 3 characters long."
console.log(validateInput("Hello"));  // Output: "Valid input."

//Validation in JavaScript is the process of checking user input to ensure it 
// meets certain criteria before submitting it to a server. It helps prevent errors, security issues, and incorrect data entry.
///javascript a array o kintu ak dhoroner object