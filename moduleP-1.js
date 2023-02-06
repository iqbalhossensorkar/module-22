// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 


// let stringType = 'string';
// let number = 1205;
// let isSure = true;
// console.log(typeof stringType);
// console.log(typeof number);
// console.log(typeof isSure);


// ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 



// const myName = 'Iqbal';
// // myName = 'Sorkar';
// // console.log(myName);

// let yourName = 'Yousuf';
// yourName = 'Sorkar Ali';
// console.log(yourName);



// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 


// let numOne = 23;
// let numTwo = 56;
// let sum = [(numOne + numTwo), (numOne - numTwo),(numOne * numTwo), (+(numOne / numTwo).toFixed(2)), (numOne % numTwo)];
// console.log(sum);


// ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

// let numOne = 23;
// let numTwo = 56;

// if (numOne > numTwo) {
//   console.log('This number is bigger: ', numOne);
// }
// else if (numOne < numTwo) {
//   console.log('This number is bigger' ,numTwo);
// }
// else if (numOne == numTwo) {
//   console.log('Both numbers are bigger', numOne, numTwo);
// }
// else if (numOne != numTwo) {
//   console.log('Both numbers are not bigger', numOne || numTwo);
// }
// else if (numOne <= numTwo) {
//   console.log('What are these');
// }
// else if (numOne >= numTwo) {
//   console.log('So much confusing');
// }
// else{
//   console.log('Here is no number');
// }



// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 


// let numOne = 23;
// let numTwo = 56;
// let numThree = 72;

// if (numOne > numTwo && numOne > numThree) {
//   console.log('This number is bigger: ', numOne);
// }
// else if (numTwo > numOne && numTwo > numThree) {
//   console.log('This number is bigger: ', numOne);
// }
// else{
//   console.log('This number is bigger', numThree);
// }


// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো


// if (condition) {
  
// }else{

// }

// ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

// let number = 0;

// while (true) {
//     if (number%2 === 0) continue;
//     console.log(number);
//     number ++;
// }
// let i = 1;
// while (i <= 15) {
//   if (i % 2 === 0) {
//     console.log(i);
//     i++;
//   }
// }


// let i , count = 0;
// i = 0;
// while(i<=100){
  
//   if(i%2==1){
//     count = count + 1;
//   }
//    i++;
// }
// console.log(count);



// let i=1 
// while (i<=100){
//   if(i%2==1){
//   console.log(i)
//   }
//   i++
// }