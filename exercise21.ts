/* 
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

const bouquet = 
{
    name: "Spring Delight",
    price: 250,
    description: "Beautiful arrangement of spring flowers"
}

// define an array of objects

let bouquets: Array<typeof bouquet> = [];

// pushing multipul object

bouquets.push(bouquet);
bouquets.push({
 name: "Summer bliss",
 price: 350,
 description: "beautiful arrangement of Summer flowers"})

 let bouquet3 = 
    {
    name: "Red Hot",
    price: 350,
    description: "Beautiful arrangement of red roses"
    }

bouquets.push(bouquet3);

// console.log(bouquets);

bouquets.push({ name:"Freshness", price:250, description:"A beautiful arrangement of white and yellow roses"});

// console.log(bouquets);

// function to display bouquets

function displayBouquets(bouquets: Array<typeof bouquet>)
{
    for (let i of bouquets) {
        console.log(`
        ${i.name}
        ${i.description}
        price: ${i.price} USD
        ______________\n`);
    }
}

displayBouquets(bouquets);

export{};