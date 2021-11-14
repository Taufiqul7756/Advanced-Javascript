// let vs Var
// hoisting

let bonus = 20;

function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    var mood = "happy";
    mood = "funky";
    console.log(mood);
  }

  let day = "friday";
  console.log(day);

  return result;
}
const output = sum(3, 4);
console.log(output);
