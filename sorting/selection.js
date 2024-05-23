/** Self execution */

let arrayData = [11, 12, 64, 22, 2, 0];
function slectionSort(arr) {
  if (!arr.length) {
    return [];
  }
  for (let i = 0; i < arr.length-1; i++) {
    let minIndex = i; // Considering this is min value
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let tempValue = arr[i]; // Storing current value in temp
    arr[i] = arr[minIndex]; // Assing new min value to current array position
    arr[minIndex] = tempValue; // Assing current array value to new min position
  }
  return arr;
}

console.log(slectionSort(arrayData));

/** Complexity: Space O(1), Time O(n^2) */
/** Best and Worst case : O(n^2) */


