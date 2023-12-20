const user = 20 < 10;

const promise = new Promise ((resolve, reject) => {
    if (user) {
        resolve('zd dzmajan');
    } 
    else {
            reject('au errori daartka simon');
    }
});


promise.then((mess) => {
    console.log(mess);
}).catch((errorrrr) => {
    console.log(errorrrr);
})
























// // Parsing JSON
// var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// var jsonObj = JSON.parse(jsonString);

// console.log(jsonObj.name); // Output: John
// console.log(jsonObj.age);  // Output: 30
// console.log(jsonObj.city); // Output: New York

// // Creating JSON
// var person = { name: "John", age: 30, city: "New York" };
// var jsonString = JSON.stringify(person);

// console.log(jsonString);
// // Output: {"name":"John","age":30,"city":"New York"}

// // Nested JSON
// var nestedJsonString = '{"person": {"name": "Alice", "age": 25}}';
// var nestedJsonObj = JSON.parse(nestedJsonString);

// console.log(nestedJsonObj.person.name); // Output: Alice
