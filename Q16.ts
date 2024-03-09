const guest1: string = "Cristiano Ronaldo";
const guest2: string = "Lionel Messi";
const guest3: string = "Neymar";
const newGuest1: string = "Zlatan Ibrahimović";
const newGuest2: string = "Gareth Bale";
const newGuest3: string = "Luka Modric";

const guests: string[] = [guest1, guest2, guest3];

// Print the original set of invitations
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}

// Add new guests to the array
guests.unshift(newGuest1); // add to the beginning
guests.splice(Math.floor(guests.length / 2), 0, newGuest2); // add to the middle
guests.push(newGuest3); // add to the end

// Print a message about the bigger dinner table
console.log("I found a bigger dinner table, so I can invite more guests!");

// Print the new set of invitations
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}