const cart = [
  { item: 'Apple', price: 1.5, quantity: 3 },
  { item: 'Banana', price: 0.5, quantity: 6 },
  { item: 'Orange', price: 2, quantity: 2 }
];

let total = 0;
cart.forEach(product => {
  const cost = product.price * product.quantity;
  total += cost;
  console.log(`${product.item}: $${cost}`);
});

console.log(`Total: $${total}`);