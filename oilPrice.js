function oilPrice(dieselPriceQuantity, petrolPriceQuantity, oktenPriceQuantity) {
  const perLiterDieselPrice = 114;
  const perLiterPetrolPrice = 130;
  const perLiterOktenPrice = 135;

  const dieselPrice = dieselPriceQuantity * perLiterDieselPrice;
  const petrolPrice = petrolPriceQuantity * perLiterPetrolPrice;
  const oktenPrice = oktenPriceQuantity * perLiterOktenPrice;

  const totalOilPrice = dieselPrice + petrolPrice + oktenPrice;
  return totalOilPrice;

}
const totalOil = oilPrice(30, 20, 10);
console.log(totalOil);