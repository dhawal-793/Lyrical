import { useState } from 'react'
import { Image, StyleSheet, View, Dimensions } from 'react-native'
import TrackPlayer, { Track, Event, useTrackPlayerEvents } from 'react-native-track-player'
import ControlCenter from '../components/ControlCenter'
import SongSlider from '../components/SongSlider'
import SongInfo from '../components/SongInfo'

const { width } = Dimensions.get('window')

const images = [
    require('../assets/images/Cheap_Thrills.png'),
    require('../assets/images/On_My_Way.png'),
    require('../assets/images/In_The_End.jpg'),
    require('../assets/images/Teri_Mitti.jpg'),
    require('../assets/images/Faded.png'),
]

const MusicPlayer = () => {

    const [track, setTrack] = useState<Track | null>(null)


    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        switch (event.type) {
            case Event.PlaybackTrackChanged:
                const playingTrack = await TrackPlayer.getTrack(event.nextTrack)
                setTrack(playingTrack)
                break;

            default:
                break;
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.albumContainer}>
                {track?.artwork && (
                    <Image
                        source={images[track.id - 1]}
                        style={styles.albumArtImg}
                    />
                )}
            </View>
            <SongInfo track={track} />
            <SongSlider />
            <ControlCenter />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#001d23',
    },
    albumContainer: {
        width: width,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 55,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
        marginHorizontal: 'auto',
    },
})

export default MusicPlayer