const quickSort = (arr) => {
  if (arr.length < 1) {
    return [];
  }

  let pivotElementIndex = arr.length - 1;
  let pivotElement = arr[pivotElementIndex];

  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotElement) {
      leftArr.push(arr[i]);
    }

    if (arr[i] > pivotElement) {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivotElement, ...quickSort(rightArr)];
};

console.log(quickSort([-6, 4, -2, 6, 0, 10]));
