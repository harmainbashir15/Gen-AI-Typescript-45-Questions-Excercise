let magicians: string[] = ['David', 'Dynamo', 'Charlie'];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians[i] = `the Great ${magicians[i]}`;
    }
    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

let originalMagicians: string[] = magicians;
let greatMagicians: string[] = make_great(magicians);

console.log("Original magicians:");
show_magicians(originalMagicians);

console.log("Great magicians:");
show_magicians(greatMagicians);