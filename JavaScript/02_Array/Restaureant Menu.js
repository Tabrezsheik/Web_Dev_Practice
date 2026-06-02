//  Store menu: 
//  Do: Add food Delete food Search food Sort menu alphabetically
let menu = ["Pizza", "Burger", "Pasta", "Salad", "Sushi", "Tacos", "Steak", "Ice Cream", "Fries", "Soup"];

// Show menu
console.log(menu);

// Add food
menu.push("Sandwich");
console.log(`Updated Menu: ${menu}`);

// Delete food
menu.splice(2, 1); // Removes "Pasta"
menu.pop(); // Removes "Sandwich"
console.log(`Updated Menu: ${menu}`);
menu.splice(5,1); // Removes "Steak"
console.log(`Updated Menu: ${menu}`);


// Search food
console.log("Is Pizza Available?");
console.log(menu.includes("Pizza"));

// Sort menu alphabetically
menu.sort();
console.log(`Sorted Menu: ${menu}`);
