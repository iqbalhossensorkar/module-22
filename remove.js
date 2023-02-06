const names = ['abul', 'babul', 'kabul', 'mofiz', 'nazmul', 'arman', 'abul', 'shimul', 'babul', 'nazmul', 'babul', 'shohag', 'abul', 'mofiz', 'nazmul'];

function removeDuplicates(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (unique.includes(element) === false) {
      unique.push(element);
    }
  }
  return unique;
}
const removeDuplicateNames = removeDuplicates(names);
console.log(removeDuplicateNames);













// function removeDuplicate(names) {
//   const unique = [];
//   for (let i = 0; i < names.length; i++) {
//     const element = names[i];
//     if (unique.includes(element) === false) {
//       unique.push(element);
//     }
//   }
//   return unique;
// }
// const duplicates = removeDuplicate(names);
// console.log(duplicates);
