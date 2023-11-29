const cars = [
    {
        model: 'BMW',
        brand: 'F30',
        year: '2014',
        engine: ['2.0T', '3.0T', '4.0T']
    }
];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i].engine[2])
};


const car = {
    model: 'Subaru',
    brand: 'forester',
    engine: ['2.0', '2.0T', '2.5', '2.5sti-best subaru engine']
};
console.log(car.engine[3])


const fastCar = [
    {
        model: 'toyota',
        brand: 'supra',
        engine: ['2JZ-GTE', 'maxsPower 2033Hp']
    }
];
for (let i = 0; i < fastCar.length; i++){
    console.log(fastCar[i].engine[0])
    console.log(fastCar[i].engine[1])
};


let vaxosAge = 50 - 34;

console.log(vaxosAge);


var giosAge = 49;
var sabasAge = 19;
var ladosAge = giosAge - sabasAge;

console.log(ladosAge);

console.log(Boolean(ladosAge > 15));