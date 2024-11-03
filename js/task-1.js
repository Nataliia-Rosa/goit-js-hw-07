const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.children.length}`);

items.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
