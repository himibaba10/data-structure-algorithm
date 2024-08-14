// My solution
const insertionSort = (arr) => {
  const arrayToSort = [...arr];
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (arrayToSort[j] < numberToInsert) {
        arrayToSort[j + 1] = numberToInsert;
        continue;
      }

      if (i === 1) {
        [arrayToSort[j], arrayToSort[j + 1]] = [
          arrayToSort[j + 1],
          arrayToSort[j],
        ];
      }

      if (arrayToSort[j] > numberToInsert) {
        arrayToSort[j + 1] = arrayToSort[j];
      }
    }
  }
  return arrayToSort;
};

//Mentor's solution
const insertionSortMentor = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

console.log(insertionSortMentor([21, -6, 20, 8, 4, -2]));

// The time complexity is O(n^2) which is a quadratic time complexity.
