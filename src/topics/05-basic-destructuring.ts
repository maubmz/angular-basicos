
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Superhero",
    details: {
        author: "Metro Boomin",
        year: 2022
    }
}

//Con destructuracion:
const { song:anotherSong, details: { author } } = audioPlayer;
console.log('Song con destructuracion: ', anotherSong);
//Sin destructuracion:
console.log('Song: ', audioPlayer.song);

console.log('Author: ', author);

// const { details } = audioPlayer;
// const { author } = details;

//Desustructuracion de arreglos
const [ , , trunks = 'Not found']: string[] = ['Goku','Vegeta'];


console.log('Personaje 3: ', trunks );



export {};