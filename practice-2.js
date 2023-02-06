function maxTallest(numbers) {
  let getMax = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > getMax) {
      getMax = element;
    }
  }
  return getMax;
}
const height = [167, 190, 120, 158, 134,142];
const tallest = maxTallest(height);
console.log(tallest);

function lowestTallest(numbers) {
  let lowest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < lowest) {
      lowest = element;
    }
  }
  return lowest;
}
const lowestHeight = lowestTallest(height);
console.log(lowestHeight);