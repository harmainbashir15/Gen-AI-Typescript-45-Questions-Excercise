function create_car(manufacturer: string, model: string, ...properties: [string, string][]): object {
    let car: object = {
        manufacturer,
        model
    };

    for (let i = 0; i < properties.length; i++) {
        let [key, value] = properties[i];
        car[key] = value;
    }

    return car;
}

let car = create_car('Toyota', 'corolla', ['color', 'black'], ['year', '24']);
console.log(car); // prints { manufacturer: 'Toyota', model: 'Camry', color: 'red', transmission: 'automatic' }