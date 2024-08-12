const factorial = (num) => {
  if (num <= 0) {
    return 1;
  }

  let result = 1;

  for (i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
};

console.log(factorial(8));

// The time complexity is O(n) which is a linear time complexity.
