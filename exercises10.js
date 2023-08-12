"use strict";
/*
Exercise 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


Solution:
My name: Muhammad kamran, Date: 1st Aug 2023
This program is to Change the name cases into lower, upper and title case.

*/
// Taking name in a variable
let personName = "muhaMMad kamraN ali rana";
// this will change name to lower case
let lowercaseName = personName.toLowerCase();
// this will change it to upper case
let uppercaseName = personName.toUpperCase();
// this will split the name from spaces into array of and will store it into array name: words
let words = personName.split(" ");
// here taking an empty string
let titleCaseName = "";
// using for loop to calling each word one by one from array words in order from 0 to end and chaning first chracter of each word in upper case and remaing in lower add adding them in empty string title case name one by one and space in between.
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
// here is result
console.log(lowercaseName);
console.log(uppercaseName);
console.log(titleCaseName);
