//tests for equality and inequality with strings
let str6: string = 'apple';
let str7: string = 'orange';
console.log("Is str6 == str7? I predict False.");
console.log(str6 == str7);

let str8: string = 'apple';
let str9: string = 'apple';
console.log("Is str8 != str9? I predict False.");
console.log(str8 != str9);

// Tests using the lowercase function
let uppercaseStr: string = 'HELLO';
console.log("Is lowercase of uppercaseStr equal to 'hello'? I predict True.");
console.log(uppercaseStr.toLowerCase() == 'hello');

// Numerical tests
let num6: number = 10;
let num7: number = 5;
console.log("Is num6 greater than num7? I predict True.");
console.log(num6 > num7);

console.log("Is num7 less than or equal to num6? I predict True.");
console.log(num7 <= num6);

// Tests using "and" and "or" operators
let bool3: boolean = true;
let bool4: boolean = false;
console.log("Is bool3 AND bool4 true? I predict False.");
console.log(bool3 && bool4);

console.log("Is bool3 OR bool4 true? I predict True.");
console.log(bool3 || bool4);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];
let fruitToFind: string = 'banana';
console.log(`Is ${fruitToFind} in the fruits array? I predict True.`);
console.log(fruits.includes(fruitToFind));

// Test whether an item is not in an array
let numbers: number[] = [1, 2, 3, 4, 5];
let numberToCheck: number = 6;
console.log(`Is ${numberToCheck} not in the numbers array? I predict True.`);
console.log(!numbers.includes(numberToCheck));