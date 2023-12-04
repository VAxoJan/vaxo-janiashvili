const products = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

let price = products.map(fun => fun.price);

const result = products.filter(number => {
    return number < 220;
});

console.log(result);