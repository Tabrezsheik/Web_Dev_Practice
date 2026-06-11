//spread operator in array used to exapnd /spread ,copy or comabine array

//spreding array into stings
let arr1 = ['t','a','b','r','e','z'];
console.log(...arr1); //here we are spreding array into stings

//combining array using spread operator
let domesticAnimals = ['dog','cat','cow'];
let wildAnimals = ['lion','tiger','leopard'];
let animals = [...domesticAnimals,...wildAnimals];//here we are combining two array into one using spread operator
console.log(animals);

//copying array using spread operator
let arr2 = [1,2,3,4,5];
let arr3 = [...arr2];
console.log(arr3); //here we are copying arr2 into arr3 using spread operator