let current_users = ['alice', 'bob', 'charlie', 'dave', 'eve'];
let new_users = ['alice', 'bob', 'carol', 'dave', 'eve'];

for (let i = 0; i < new_users.length; i++) {
    let new_username = new_users[i];
    let is_unique = true;

    for (let j = 0; j < current_users.length; j++) {
        let current_username = current_users[j];

        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            console.log(`The username '${new_username}' has already been used. Please enter a new username.`);
            is_unique = false;
            break;
        }
    }

    if (is_unique) {
        console.log(`The username '${new_username}' is available.`);
    }
}