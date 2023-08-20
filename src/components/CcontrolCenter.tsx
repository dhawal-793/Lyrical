import { View, StyleSheet, Text, Pressable } from 'react-native'
import { playbackService } from '../../musicPlayerServices'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import Icon from 'react-native-vector-icons/MaterialIcons'


const CcontrolCenter = () => {

    const playbackState = usePlaybackState()

    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }
    const TogglePlabck = async (playback: State) => {
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
        <View>
            <Pressable onPress={skipToPrevious}>
                <Icon
                    name="skip-previous"
                    size={40}
                />
            </Pressable>
            <Pressable onPress={() => TogglePlabck(playbackState)}>
                <Icon
                    name={playbackState === State.Playing ? "pause" : "play-arrow"}
                    size={40}
                />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icon
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

    }
})

export default CcontrolCenter