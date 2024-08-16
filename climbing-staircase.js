const climbingStaircase = (n) => {
  const resultArr = [1, 2];
  if (n <= 2) {
    return resultArr[n - 1];
  }

  for (let i = 2; i < n; i++) {
    resultArr[i] = resultArr[i - 1] + resultArr[i - 2];
  }

  return resultArr[n - 1];
};

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));

//The time complexity is bigO = n
