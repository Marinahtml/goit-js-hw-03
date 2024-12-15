function slugify(title) {
  //Перетворюємо символи в нижній регістр.
  const titleLowerCase = title.toLowerCase();
  //Розділяємо усі слова за допомогою " ".
  const slug = titleLowerCase.split(" ");
  //Розділяємо усі слова за допомогою тире.
  return slug.join("-");
}

console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
