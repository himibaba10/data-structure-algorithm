const fibonacci = (num) => {
  const result = [0, 1];
  if (num <= 2) {
    return result;
  }

  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
};

console.log(fibonacci(7));

// The time complexity is O(n) which is a linear time complexity.
