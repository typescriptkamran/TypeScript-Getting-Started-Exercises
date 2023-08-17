"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Hello Admin: Make an array of five or more userNames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
// Empty array case
const emptyUserNames = [];
// Non-empty array case
const userNames = ['admin', 'Ali Phull', 'Muhammad Kamran', 'Muhammad Burhan', 'Muhammad Ali'];
//functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('We need to find some users!');
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
console.log(`for non empty username:\n`);
greetUsers(userNames);
console.log(`for empty username:\n`);
greetUsers(emptyUserNames);
