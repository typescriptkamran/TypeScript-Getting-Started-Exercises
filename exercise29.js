"use strict";
/* Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
// Define the array of fruits
const favoriteFruits = ["apple", "banana", "orange", "grape", "mango"];
// Check for specific fruits using independent if statements
if (favoriteFruits.includes("apple")) {
    console.log("I like apples!");
}
if (favoriteFruits.includes("banana")) {
    console.log("I enjoy bananas!");
}
if (favoriteFruits.includes("orange")) {
    console.log("Oranges are delicious!");
}
if (favoriteFruits.includes("grape")) {
    console.log("Grapes are tasty!");
}
if (favoriteFruits.includes("mango")) {
    console.log("Mangoes are one of my favorites!");
}
