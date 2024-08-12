const isPrime = (num) => {
  if (num === 1) {
    return "Not prime";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not prime";
    }
  }

  return "Is Prime";
};

// console.log(isPrime(10201));

// The time complexity is O(n) which is a linear time complexity.

//A better solution
const isPrimeBetter = (num) => {
  if (num === 1) {
    return "Not prime";
  }

  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return "Not prime";
    }
  }

  return "Is Prime";
};

// console.log(isPrimeBetter(93));

// The time complexity is O(logn) which is a logarithmic time complexity.

//The best solution
const isPrimeBest = (num) => {
  if (num === 1) {
    return "Not prime";
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return "Not prime";
    }
  }

  return "Is Prime";
};

// console.log(isPrimeBest(10249));

// The time complexity is O(sqrt(n)) which is a square root time complexity.
