const cart =[
    { item :"laptop", price : 50000},
    { item :"mouse", price : 900},
     { item : "keyboard", price : 2000},
    { item : "headphones", price : 1500},
    { item : "monitor", price : 25000}

];
let totalPrice = 0;
for (let i of cart){
    console.log(` items : ${i.item} and price :${i.price}`);
    totalPrice += i.price;
}
console.log(`\nTotal Price: ${totalPrice}`);

//expensive items
let expensiveitems = [0];
for(let i = 0; i < cart.length; i++){
    if(cart[i].price > expensiveitems){
        expensiveitems = cart[i].price;
    }

}
console.log(`\nMost Expensive Item Price: ${expensiveitems}`);
console.log(`total items in cart : ${cart.length}`);
let leastExpensiveItem = [0];

console.log(`\n cheap product under 1000`);
for (let product of cart){
 if(product.price < 1000)
 console.log(`Item: ${product.item}, Price: ${product.price}`);
}