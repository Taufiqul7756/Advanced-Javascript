const students = [
  { id: 21, name: "Omar sunny" },
  { id: 31, name: "mannaa" },
  { id: 41, name: "Moyourii" },
  { id: 51, name: "Deepjol" },
];

const names = students.map((s) => s.name); // only names
const ids = students.map((s) => s.id); //only id's
const bigger = students.filter((s) => s.id > 30); // find all the names who are greater than 30 id's
const biggerNamedStudents = students.find((s) => s.id > 30); // find only one name who is greater than 30+ id
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerNamedStudents);
