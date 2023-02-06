let mobiles = [
  {name: 'Samsung', camera: 8, price: 28000, color: 'gray', guarantee: 1},
  {name: 'Apple', camera: 12, price: 85000, color: 'white', guarantee: 2},
  {name: 'Oppo', camera: 28, price: 22000, color: 'silver', guarantee: 1},
  {name: 'Pixel', camera: 11, price: 37000, color: 'purple', guarantee: 1},
  {name: 'Redmi', camera: 16, price: 30000, color: 'light gray', guarantee: 1},
  {name: 'Htc', camera: 6, price: 63000, color: 'yellow', guarantee: 1},
  {name: 'Nokia', camera: 9, price: 48000, color: 'mate black', guarantee: 1},
  {name: 'Vevo', camera: 22, price: 39000, color: 'white', guarantee: 1},
  {name: 'Xiaomi', camera: 18, price: 19000, color: 'silver', guarantee: 1},
  {name: 'Black Berry', camera: 14, price: 76000, color: 'black', guarantee: 1}
];

function cheapestPhone(mobiles) {
  let cheap = mobiles[0];
  for (let i = 0; i < mobiles.length; i++) {
    const element = mobiles[i];
    if (element.price < cheap.price) {
      cheap = element;
    }
  }
  return cheap;
}

const cheapPhone = cheapestPhone(mobiles);
console.log(cheapPhone);