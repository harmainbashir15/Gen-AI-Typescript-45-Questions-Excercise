function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country('Delhi', 'India')); // prints "Delhi, India"
console.log(city_country('London', 'England')); // prints "London, England"
console.log(city_country('Tokyo', 'Japan')); // prints "Tokyo, Japan"