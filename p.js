function greaterThanFive(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element > 5) {
      count = count + 1;
    }
    
  }
  return count;
}

const result = greaterThanFive = ([-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(result);