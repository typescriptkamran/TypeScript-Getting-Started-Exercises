"use strict";
/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.
const make_shirt = (size, message) => {
    console.log(`Size: ${size}, Message: '${message}'`);
};
// 2 ways to Call the function
// 1. call the function with the size and the message variables.
let size = "medium";
let message = "TypeScrip Insights with Kamran";
make_shirt(size, message);
// 2. directly call the function
make_shirt("Large", "TypeScrip Insights");
