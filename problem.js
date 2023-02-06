// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো। 


const side2 = ('Enter side2: ', 45);
const side1 = ('Enter side1: ', 56);
const side3 = ('Enter side3: ', 78);

const sum = (side1 + side2 + side3) / 2;

const areaValue = Math.sqrt(
  sum * (sum - side1) * (sum - side2) * (sum - side3)
);

console.log(areaValue);










// ? ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।







let number = 11;
let primeNumber = true;

if (number == 1) {
  console.log({number});
}
else if(number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      primeNumber = false;
      break;
    }
    
  }
  if (primeNumber) {
    console.log('number: ', number, 'is a prime number');
  }
  else{
    console.log('number: ', number, 'is not a prime number');
  }
}
else{
  console.log('here is no prime number');
}