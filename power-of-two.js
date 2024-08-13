const powerOfTwo = (num) => {
  for (let i = 1; i < num; i++) {
    if (Math.pow(2, i) === num) {
      return true;
    }
  }
  return false;
};

// console.log(powerOfTwo(256));

// The time complexity is O(n) which is a linear time complexity.

const powerOfTwoBetter = (num) => {
  for (let i = 0; i <= Math.ceil(num / 2); i++) {
    if (Math.pow(2, i) === num) {
      return true;
    }
  }
  return false;
};

// console.log(powerOfTwoBetter(2));
// The time complexity is O(logn) which is a logarithmic time complexity.

const powerOfTwoBest = (num) => {
  if (num < 1) {
    return false;
  }

  return (num & (num - 1)) === 0;
};

console.log(powerOfTwoBest(256));
// The time complexity is O(1) which is a constant time complexity
