let persons = [
  {name:'sakib', age:30},
  {name:'samiul', age:20},
  {name:'sahid', age:50},
  {name:'samin', age:10}
] 
function getSmallestPerson(persons) {
  let smallPerson = persons[0];
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age < smallPerson.age) {
      smallPerson = person;
    }
    
  } 
  return smallPerson;
}
const smallestPerson = getSmallestPerson(persons);
console.log(smallestPerson);