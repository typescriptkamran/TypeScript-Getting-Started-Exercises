"use strict";
/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

*/
Object.defineProperty(exports, "__esModule", { value: true });
// Array of magician's names
const magicianNames = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const items of magicians) {
        console.log(items);
    }
}
// Call the function to show the magician's names
show_magicians(magicianNames);
