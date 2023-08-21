import { Track } from 'react-native-track-player'

export const playListData: Track[] = [
    {
        id: 1,
        title: 'Cheap Thrills',
        artist: 'Sia',
        album: 'This Is Acting',
        artwork: require('./assets/images/Cheap_Thrills.png'),
        url: require('./assets/audios/Cheap_Thrills.mp3'),
    },
    {
        id: 2,
        title: 'On My Way',
        artist: 'Farruko, Alan Walker, Sabrina Carpenter',
        album: 'Live Fast',
        artwork: require('./assets/images/On_My_Way.png'),
        url: require('./assets/audios/On_My_Way.mp3'),
    },
    {
        id: 3,
        title: 'In The End',
        artist: 'Linkin Park',
        album: 'Hybrid Theory',
        artwork: require('./assets/images/In_The_End.jpg'),
        url: require('./assets/audios/In_The_End.mp3'),
    },
    {
        id: 4,
        title: 'Teri Mitti',
        artist: 'B Prak, Arko',
        album: 'Kesari SoundTrack',
        artwork: require('./assets/images/Teri_Mitti.jpg'),
        url: require('./assets/audios/Teri_Mitti.mp3'),
    },
    {
        id: 5,
        title: 'Faded',
        artist: 'Alan Walker',
        album: 'Different World',
        artwork: require('./assets/images/Faded.png'),
        url: require('./assets/audios/Faded.mp3'),
    },
]