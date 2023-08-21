import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const SongSlider = () => {

    const { duration, position } = useProgress()

    return (
        <View>
            <Slider
                value={position}
                minimumValue={0}
                maximumValue={duration}
                thumbTintColor='#FFFFFF'
                maximumTrackTintColor='#FFFFFF'
                style={styles.slider}
                onValueChange={async (value) => await TrackPlayer.seekTo(value)}
            />
            <View style={styles.timeContainer}>
                <Text style={styles.time}>
                    {new Date(position * 1000).toISOString().substring(15, 19)}
                </Text>
                <Text style={styles.time}>
                    {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slider: {
        width: 350,
        height: 40,
        marginTop: 25,

        flexDirection: 'row',
    },
    timeContainer: {
        width: 340,

        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: '#fff',
    },
})

export default SongSlider