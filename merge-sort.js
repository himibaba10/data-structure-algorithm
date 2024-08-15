const mergeSort = (arr) => {
  if (arr.length < 2) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  const merge = (left, right) => {
    const sortedArr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  };

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([-6, 4, -2, 6, 0, 10]));

// The time complexity is bigO(nlogn)
