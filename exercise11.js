"use strict";
// How to use array in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ['Muhammad', 'Ali', 'Javaid', 'Ahmed'];
console.log(`1st name from list: ${names[0]}`);
console.log(`2nd name from list: ${names[1]}`);
console.log(`3rd name from list: ${names[2]}`);
console.log(`4th name from list: ${names[3]}`);
// or we can print it with for loop. it will pring all names dynamically.
for (let i = 0; i < names.length; i++) {
    console.log(`\nWith for loop: ${i} name in list: ${names[i]}`);
}
