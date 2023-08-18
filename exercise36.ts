/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

*/

// Defining a function that accepts a size and the text of a message that should be printed on the Shirt.

const make_shirt = (size: string, message: string):void =>

{

    console.log(`Size: ${size}, Message: '${message}'`);
    
}

// 2 ways to Call the function

// 1. call the function with the size and the message variables.
let size: string = "medium";
let message: string = "TypeScrip Insights with Kamran"

make_shirt(size, message);

// 2. directly call the function

make_shirt("Large", "TypeScrip Insights");
