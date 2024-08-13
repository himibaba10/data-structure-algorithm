const factorialRecursion = (num) => {
  if (num <= 1) {
    return 1;
  }

  return num * factorialRecursion(num - 1);
};

console.log(factorialRecursion(4));

// The time complexity is O(n) which is a linear time complexity.
