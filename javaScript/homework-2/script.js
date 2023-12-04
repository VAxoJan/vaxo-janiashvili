const products = [
    {
        name: "Product X",
        description: "A high-quality product with many features.",
        price: 100
    },
    {
        name: "Product Y",
        description: "Another great product with a competitive price.",
        price: 75
    },
    {
        name: "Product Z",
        description: "A basic product that gets the job done.",
        price: 50
    }
];

let productPrice = products.map(prdc => prdc.price);
const prices = productPrice.reduce((sum, price) => sum + price, 0);

console.log(prices);