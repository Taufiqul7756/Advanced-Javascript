const nums = [1, 2, 3, 4, 5, 6, 7, 8];
//console.log(nums);
const part1 = nums.slice(2, 5);
const removed = nums.splice(2, 3, 100);

// console.log(removed);
// console.log(nums);
// console.log(part1);

const together = nums.join(" ");
console.log(together);
