import { useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import TrackPlayer, { Track, Event, useTrackPlayerEvents } from 'react-native-track-player'
import { playListData } from '../constants'
import CcontrolCenter from '../components/CcontrolCenter'
import SongSlider from '../components/SongSlider'
import SongInfo from '../components/SongInfo'

const { width } = Dimensions.get('window')

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

    const renderArtWork = () => {
        return (
            <View style={styles.listArtWrapper}>
                <View style={styles.albumContainer}>
                    {track?.artwork && (
                        <Image
                            source={{ uri: track?.artwork?.toString() }}
                            style={styles.albumArtImg}
                        />
                    )}
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={playListData}
                renderItem={renderArtWork}
                keyExtractor={song => song.id.toString()}
            />
            <SongInfo track={track} />
            <SongSlider />
            <CcontrolCenter />
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
    listArtWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumContainer: {
        width: 300,
        height: 300,
    },
    albumArtImg: {
        height: '100%',
        borderRadius: 4,
    },
})

export default MusicPlayer