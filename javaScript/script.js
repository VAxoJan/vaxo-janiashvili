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