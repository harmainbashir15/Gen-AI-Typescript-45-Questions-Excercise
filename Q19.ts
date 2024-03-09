const guests: string[] = ['Cristiano Ronaldo', 'Lionel Messi', 'Neymar', 'Paul Pogba', 'Antoine Griezmann'];

console.log(`Originally invited ${guests.length} people to dinner.`);

// Remove guests from the list until only two names remain
while (guests.length > 2) {
  console.log(`Sorry, ${guests.pop()}, you can't make it to dinner.`);
}

// Print a message to each of the two people still on the list
console.log(`${guests[0]}, you're still invited to dinner.`);
console.log(`${guests[1]}, you're still invited to dinner.`);

// Empty out the list
guests.length = 0;

// Print the empty list
console.log(guests);