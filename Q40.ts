interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist,
        title
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album('Ahmed', 'sunshine');
console.log(album1); // prints { artist: 'Ahmed', title: 'sunshine' }

let album2 = make_album('Pink Floyd', 'The Wall', 27);
console.log(album2); // prints { artist: 'Pink Floyd', title: 'The Wall', tracks: 27 }

let album3 = make_album('Harmain', 'Selenophile');
console.log(album3); // prints { artist: 'Harmain', title: 'selenophile' }