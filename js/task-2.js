function makeArray(firstArray, secondArray, maxLength) {
  // Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
  newArray = firstArray.concat(secondArray);
  // Якщо довжина нового масиву більше maxLength, повертаємо його копію з обмеженою довжиною
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  // Інакше повертаємо весь масив
  return newArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
