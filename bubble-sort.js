const bubbleSort = (arr) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }

  return arr;
};

console.log(bubbleSort([6, -2, 4, -10]));

// The time complexity is O(logn) which is a logarithmic time complexity.
