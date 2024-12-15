function filterArray(numbers, value) {
  // Створюємо порожній масив для зберігання чисел, які більше за value
  const maxNumbers = [];
  // Ітерація по масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо поточний елемент більше за value, додаємо його до maxNumbers
    if (numbers[i] > value) {
      maxNumbers.push(numbers[i]);
    }
  }
  // Повертаємо новий масив
  return maxNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
