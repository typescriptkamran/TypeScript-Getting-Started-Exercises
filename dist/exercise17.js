"use strict";
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
Object.defineProperty(exports, "__esModule", { value: true });
let guestList = [
    'Ali Phul',
    'Zia Khan',
    'Mian Asif',
    'Jahanzaib Tayab',
    'Abid Shirwani',
    'Muhammad Ali'
];
// message about invitng only two people.
console.log(`I can invite only two people for dinner.`);
// 2nd step remove guest from th list untill only two name rmain.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner.`);
}
// Part 3 - Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`);
}
console.log(`\nList of invited guests:\n\n ${guestList}\n`);
// 4th part: Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Removing last two
guestList.pop();
guestList.pop();
// prnint empty string
console.log(`Guest list after dinner:`, guestList);
