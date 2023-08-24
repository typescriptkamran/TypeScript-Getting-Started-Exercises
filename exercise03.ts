// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let PersonName: string = "muhamMad kaMran ali rana";

// step 1 show in lower case:

let lowercaseName: string = PersonName.toLowerCase();

console.log(lowercaseName);

// step 2 show name in uppercase

let uppercaseName: string = PersonName.toUpperCase();

console.log(uppercaseName);

// step 3 show name in titlecase

let words: string[] = PersonName.split(" ");

let titlecaseName: string = ""

for (let i = 0 ; i < words.length; i++) {
    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};


console.log(titlecaseName)

export{};

