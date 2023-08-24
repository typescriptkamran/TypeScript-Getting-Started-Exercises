"use strict";
/* Hello Admin: Make an array of five or more userNames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const userNames = ['admin', 'Ali Phull', 'Muhammad Kamran', 'Muhammad Burhan', 'Muhammad Ali'];
function greetUsers() {
    for (const i in userNames) {
        if (userNames[i].toLowerCase() === 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
        }
    }
}
greetUsers();
