// A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in non-decreasing order by height. Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example:
const example = [1, 2, 1, 2, 4, 5, 6, 3];
// Output: 6; because there are 6 indices that don't match a perfectly sorted version of the same array;

/////////// first attempt /////////////
function howManyWrong(arr) {
  const original = [...arr];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const perfect = arr.sort((a,b) => a - b);
    if (original[i] !== perfect[i]) {
      count++;
    }
  }
    return count;
}

console.log(howManyWrong(example));