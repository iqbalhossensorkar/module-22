function woodQuantity(chairWoodQuantity, tableWoodQuantity, bedWoodQuantity) {
  const perChairWood = 4;
  const perTableWood = 15;
  const perBedWood = 45;

  const chairWood = chairWoodQuantity * perChairWood;
  const tableWood = tableWoodQuantity * perTableWood;
  const bedWood = bedWoodQuantity * perBedWood;
  
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}
const totalWood = woodQuantity(0, 1, 1);
console.log(totalWood);