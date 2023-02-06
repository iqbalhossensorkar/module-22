// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 


// const sideOne = 4;
// const sideTwo = 6;
// const sideThree = 7;

// function triangleArea(side1, side2, side3) {
//   const value = (side1 + side2 + side3) / 2;
//   const areaValue = Math.sqrt(value * (value - side1) * (value - side2) * (value - side3));
//   return areaValue;
// }

// const totalArea = triangleArea(sideOne, sideTwo, sideThree);
// console.log(totalArea);








// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো। 


// function primeNumber(number) {
//   let isPrime = true;
//   if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
//     } else if (number > 1) {
//       for (let i = 2; i < number.length; i++) {
//         if (number % 2 == 0) {
//           isPrime = false;
//           break;
//         }
//       }
//       if (isPrime) {
//         return true;
//       } else{
//         return false
//       }
//     }
// }

// const getPrimeNumber = primeNumber(5)
// console.log(getPrimeNumber);