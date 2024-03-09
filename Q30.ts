let usernames = ['Harmain', 'Ruqia', 'admin', 'Daneen', 'Elif'];

for (let i = 0; i < usernames.length; i++) {
    let username = usernames[i];

    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}