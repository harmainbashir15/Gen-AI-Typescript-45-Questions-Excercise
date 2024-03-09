const guest1: string = "Cristiano Ronaldo";
const guest2: string = "Lionel Messi";
const guest3: string = "Neymar";

const guests: string[] = [guest1, guest2, guest3];

// Print the original set of invitations
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}

// Replace one of the guests
const guestToReplace: string = guest1;
const newGuest: string = "Zlatan Ibrahimović";
const indexToReplace: number = guests.indexOf(guestToReplace);
guests[indexToReplace] = newGuest;

// Print a message about the guest who can't make it
console.log(`Unfortunately, ${guestToReplace} can't make it to dinner.`);

// Print the new set of invitations
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}