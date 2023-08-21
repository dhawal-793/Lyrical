import { View, StyleSheet, Pressable } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'


const ControlCenter = () => {

    const playbackState = usePlaybackState()

    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }
    const togglePlabck = async (playback: State) => {
        const currentTrack = await TrackPlayer.getCurrentTrack()
        if (currentTrack !== null) {
            if (playback === State.Paused || playback === State.Ready) {
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon
                    style={styles.icon}
                    name="skip-previous"
                    size={40}
                />
            </Pressable>
            <Pressable style={styles.playButton} onPress={() => togglePlabck(playbackState)}>
                <Icon
                    style={styles.icon}
                    name={playbackState === State.Playing ? "pause" : "play-arrow"}
                    size={40}
                />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon
                    style={styles.icon}
                    name="skip-next"
                    size={40}
                />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        color: '#FFFFFF',
    },
    playButton: {
        marginHorizontal: 25,
    }
})

export default ControlCenter