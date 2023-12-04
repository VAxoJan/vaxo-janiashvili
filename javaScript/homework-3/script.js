const products = [
    { name: "Laptop", price: 1299 },
    { name: "Phone", price: 499 },
    { name: "Tablet", price: 299 },
    { name: "Watch", price: 199 },
    { name: "Headphones", price: 99 },
];

const flt = products.filter(excess, index, arr) => {
    console.log(excess, index, arr)
    return excess > 240;    
};

console.log(flt);