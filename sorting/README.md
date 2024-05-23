## Sorting
 Sorting algorithms play a crucial role in organizing data efficiently.
 They are used in various applications such as searching, merging, and sorting data.

### Selection Sort
- Finds the minimum (or maximum) element (select) and swaps it with the first (or last) element, then repeats.
- Divides the input list into two parts: the sorted part (first value) at the beginning and the unsorted part. Repeatedly selects the smallest (or largest) element from the unsorted part (from other array list) and moves it to the end of the sorted part.
 - Use Cases
    - Suitable for small datasets (small array).
    - Used when memory space is limited since it only requires a constant amount of additional memory.
  - Time complexity:
    -     O(n^2) in the worst case, O(n) in the best case.

### Bubble Sort
- Compares adjacent elements and swaps them if they are in the wrong order. Repeats this process until the list is sorted.
- In current round, current largest element will come on top or at end (Eg. In first round, first largest lement will come at end)
 - Use Cases
    - Simple and easy to understand, making it suitable for educational purposes.
    - Inefficient for large datasets but can be useful for small or nearly sorted arrays memory.
  - Time complexity:
    -      O(n^2) in the worst case, O(n) in the best case.

### Insertion Sort
- Builds the final sorted array one item at a time. It picks the next element and inserts it into its correct position in the already sorted part.
- Using shift array method
- Use Cases
    - Efficient for small datasets or lists that are already partially sorted.
    - Often used as a subroutine in more complex algorithms (e.g., TimSort).
- Time complexity:
  -      O(n^2) in the worst case, O(n) in the best case.

### Merge Sort
-  A divide-and-conquer algorithm that splits the array into smaller subarrays, sorts them, and then merges them back together.
 - It’s stable and efficient for large datasets.
  - Use Cases
    - Suitable for large datasets.
    - Useful when dealing with linked lists and external sorting (sorting data stored in external memory).
  - Time complexity:
    -     O(n log n) in the worst, average and best case.

### Quick Sort
-  Selects a 'pivot' element and partitions the array around the pivot, with all smaller elements on one side and all larger elements on the other.
- Recursively applies the same process to the sub-arrays.
- Use Cases
    - Highly efficient for large datasets.
    - Commonly used in practice due to its average-case efficiency and good cache performance.
- Time complexity:
  -     O(n log n) in the average case, O(n^2) in the worst case.