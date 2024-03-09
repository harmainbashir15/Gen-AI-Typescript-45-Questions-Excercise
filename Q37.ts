function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and the message is ${message}.`);
}

make_shirt(); // prints "The shirt size is large and the message is I love TypeScript."
make_shirt('medium'); // prints "The shirt is medium and the message is I love TypeScript."
make_shirt('small', 'I love programming'); // prints "The shirt size is small and the message is I love programming."