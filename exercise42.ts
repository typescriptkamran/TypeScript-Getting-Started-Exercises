/*
Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/
// Array of magician's names
const magicianNames: string[] = ["Harry Porter", "David Copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}


// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = make_great(magicianNames);
// Call the function to show the great magician's names
console.log("\nGreat Magicians:");
show_magicians(greatMagicianNames);