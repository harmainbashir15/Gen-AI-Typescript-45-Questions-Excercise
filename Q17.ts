const guest1: string = "Cristiano Ronaldo";
const guest2: string = "Lionel Messi";
const guest3: string = "Neymar";
const guest4: string = "Zlatan Ibrahimović";
const guest5: string = "Gareth Bale";
const guest6: string = "Luka Modric";

const guests: string[] = [guest1, guest2, guest3, guest4, guest5, guest6];

// Print the original set of invitations
for (const guest of guests) {
  console.log(`Dear ${guest}, you are invited to dinner at my place.`);
}

// You can only invite two people for dinner
console.log("I can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guests.length > 2) {
  const removedGuest: string = guests.pop()!;
  console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on the list
console.log(`Dear ${guests[0]}, you are still invited to dinner.`);
console.log(`Dear ${guests[1]}, you are still invited to dinner.`);

// Remove the last two names from the list
guests.pop();
guests.pop();

// Print the empty list
console.log(guests);