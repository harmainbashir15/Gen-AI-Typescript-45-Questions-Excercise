let animals = ['dog', 'cat', 'rabbit'];
let common_characteristic = 'would make a great pet';

for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    console.log(`A ${animal} ${common_characteristic}.`);
}

console.log(`Any of these animals ${common_characteristic}!`);