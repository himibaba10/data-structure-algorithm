const binarySearchRecursive = (arr, targetElement) => {
  const mainArr = [...arr];

  const search = (arr, targetElement) => {
    const middleElementIndex = Math.floor(arr.length / 2);
    const middleElement = arr[middleElementIndex];
    if (targetElement === middleElement) {
      for (let i = 0; i < mainArr.length; i++) {
        if (mainArr[i] === middleElement) {
          return i;
        }
      }
    } else if (targetElement < middleElement) {
      return search(arr.slice(0, middleElementIndex), targetElement);
    } else if (targetElement > middleElement) {
      return search(arr.slice(middleElementIndex + 1), targetElement);
    } else {
      return -1;
    }
  };

  return search(arr, targetElement);
};

console.log(binarySearchRecursive([0, 2, 3, 4, 10], 11));

// The time complexity is O(logn) which is a logarithmic time complexity.
