const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");
const { writeFile } = require("fs");

const filePath = "./products.json";

let product = () => {
  const time = new Date();

  return {
    id: uuidv4(),
    name: faker.commerce.productName(),
    adjective: faker.commerce.productAdjective(),
    description: faker.commerce.productDescription(),
    quantity: faker.number.int({ min: 10, max: 10000 }),
    country_of_origin: faker.location.country(),
    createdAt: time.toISOString(),
  };
};

let productList = [];

for (let i = 0; i < 1; i++) {
  productList.push(product());
}

console.log(productList);

// console.log("@@@ first 100 ", productList.slice(101, 201))
// console.log("@@@ second 100 ", productList.slice(0, 101))
// console.log("@@@ third 100 ", productList.slice(201, 301))
// console.log("@@@ fourth 100 ", productList.slice(301, 401))
// console.log("@@@ fifth 100 ", productList.slice(401, 501))

// writeFile(filePath, JSON.stringify(productList), err => {
//     if(err) {
//         console.log("An error has occurred", err)
//         return
//     }
//     console.log("Data written successfully to disk");
// })
