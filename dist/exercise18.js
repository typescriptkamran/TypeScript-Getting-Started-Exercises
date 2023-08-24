"use strict";
/* Exersise 18:
Seeing the World: Think of at least five places in the world you’d like to visit.
1
• Store the locations in a array. Make sure the array is not in alphabetical order.
2
• Print your array in its original order.
3
• Print your array in alphabetical order without modifying the actual list.
4
• Show that your array is still in its original order by printing it.
5
• Print your array in reverse alphabetical order without changing the order of the original list.
6
• Show that your array is still in its original order by printing it again.
7
• Reverse the order of your list. Print the array to show that its order has changed.
8
• Reverse the order of your list again. Print the list to show it’s back to its original order.
9
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
10
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Step 1: Create an array to store Tralve destinations.
let travelDestinations = ["Tokyo", "Paris", "Madina Munawara", "Cayman", "St Maartin"];
// Step 2:Print your array in its original order
console.log("Origional Order:");
console.log(travelDestinations);
// step 3:Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort());
let a = [1, 2, 3, 4, 5];
let b = a.map(x => x * 2);
console.log("new aray with .map", b);
// Step 4: Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);
// step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort().reverse());
// Step 6:Show that your array is still in its original order by printing it again. 
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);
// Step 7: Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse Order");
travelDestinations.reverse();
console.log(travelDestinations);
// Step 8: Reverse the order of your list again. Print the list to show it’s back to its original order. 
console.log("\nBack to Original");
travelDestinations.reverse();
console.log(travelDestinations);
// Step 9: Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabatical order");
travelDestinations.sort();
console.log(travelDestinations);
// Step 10 Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabatical order");
travelDestinations.sort().reverse();
console.log(travelDestinations);
