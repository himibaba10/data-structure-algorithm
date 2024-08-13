const fibonacciRecursion = (num) => {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
  }
};

console.log(fibonacciRecursion(6));

// The time complexity is O(2^n).
