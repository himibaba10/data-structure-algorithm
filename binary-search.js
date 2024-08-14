const binarySearch = (arr, targetElement) => {
  let leftMostIndex = 0;
  let rightMostIndex = arr.length - 1;

  while (leftMostIndex <= rightMostIndex) {
    let middleElementIndex = Math.floor((leftMostIndex + rightMostIndex) / 2);
    if (targetElement === arr[middleElementIndex]) {
      return middleElementIndex;
    }
    if (targetElement < arr[middleElementIndex]) {
      rightMostIndex = middleElementIndex - 1;
    }
    if (targetElement > arr[middleElementIndex]) {
      leftMostIndex = middleElementIndex + 1;
    }
  }
  return -1;
};

console.log(binarySearch([0, 2, 3, 4, 10], 10));

// The time complexity is O(logn) which is a logarithmic time complexity.
