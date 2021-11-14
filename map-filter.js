const numbers = [3, 4, 5, 6, 7];

//rules 01
const output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}
console.log(output);

// rules 02 (map)

const result1 = numbers.map(function (x) {
  return x * x;
});
console.log(result1);

//rules 03 (map)
const result2 = numbers.map((x) => x * x);
console.log(result2);

// --------------- filter ------------

const bigger = numbers.filter((x) => x > 5);
console.log(bigger);

// ------find -------

const isThere = numbers.find((x) => x > 5);
console.log(isThere);
