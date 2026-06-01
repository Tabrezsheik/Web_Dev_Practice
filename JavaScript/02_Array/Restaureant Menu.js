const menu = [
  { name: 'Pizza', price: 10 },
  { name: 'Burger', price: 8 },
  { name: 'Pasta', price: 12 },
  { name: 'Salad', price: 7 }
];

console.log('Restaurant Menu:');
menu.forEach(item => {
  console.log(`${item.name} - $${item.price}`);
});