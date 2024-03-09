const places: string[] = ["Paris", "Tokyo", "New York", "Sydney", "Turkey"];

// Print the array in its original order
console.log("Original order:", places);

// Print the array in alphabetical order
console.log("Alphabetical order:", [...places].sort());

// Print the array in its original order
console.log("Original order:", places);

// Print the array in reverse alphabetical order
console.log("Reverse alphabetical order:", [...places].sort().reverse());

// Print the array in its original order
console.log("Original order:", places);

// Reverse the order of the array
places.reverse();
console.log("Reversed order:", places);

// Reverse the order of the array again
places.reverse();
console.log("Original order:", places);

// Sort the array in alphabetical order
places.sort();
console.log("Alphabetical order:", places);

// Sort the array in reverse alphabetical order
places.sort().reverse();
console.log("Reverse alphabetical order:", places);