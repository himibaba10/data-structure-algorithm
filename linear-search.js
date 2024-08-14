const linearSearch = (arr, targetElement) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetElement) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([2, 4, 10, 3, 0], 20));

// The time complexity is O(n) which is a linear time complexity.
