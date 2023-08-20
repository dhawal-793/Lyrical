import Slider from '@react-native-community/slider'
import { View, Text, StyleSheet } from 'react-native'
import { useProgress } from 'react-native-track-player'

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
            />
            <View>
                <Text>
                    {new Date(position * 1000).toISOString().substring(15, 19)}
                </Text>
                <Text>
                    {new Date((duration - position) * 1000).toISOString().substring(15, 19)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SongSlider