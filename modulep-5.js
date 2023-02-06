// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 



// let numbers = [23, 45, 67, 34, 59, 26, 47, 89];
// function getSmallestNumber(numbers) {
//   let smallNumber = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number < smallNumber) {
//       smallNumber == number;
//     }
//   }
//   return smallNumber;
// }

// const smallestNumberIs = getSmallestNumber(numbers);
// console.log(smallestNumberIs);



// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।





// const numberOne = 7;
// const numberTwo = 9;
// const numberThree = 15;
// function smallestNumber(number1, number2, number3) {
//   if (number1 < number2 && number1 < number3) {
//     return number1;
//   } else if (number2 < number3 && number2 < number1) {
//     return number2;
//   } else {
//     return number3;
//   }
// }
// const smallNumber = smallestNumber(numberOne, numberTwo, numberThree);
// console.log(smallNumber);
  




// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।



// let array = [4, 56, 8, 90, 5, 64, 57, 54, 21, 10, 96, 74, 37, 82, 31];
// function averageNumber(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
//     average = sum / numbers.length;
//   }
//   return average;
// }
// const averageValue = averageNumber(array);
// console.log(averageValue);



// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।








// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 



// let numbers = [20, 120, 111, 215, 54 , 78, 54, 93, 134, 156, 234, 356];

// function secondLargest(numbers) {
//   let first = numbers[0];
//   let second = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     if (number > first) {
//       second = first;
//       first = number;
//     }
//     else if (number > second) {
//       second = number;
//     }
//   }
//   return second;
// }
// const getSecondLargest = secondLargest(numbers);
// console.log(getSecondLargest);





// ১. leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।



// function leapYear(year) {
//   let remainder = year % 4;
//   if (remainder === 0) {
//     return true;
//   } else{
//     return false;
//   }
// }

// const myYear = leapYear(2024);
// console.log(myYear);
// const yourYear = leapYear(2023);
// console.log(yourYear);