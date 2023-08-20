import { PropsWithChildren } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Track } from 'react-native-track-player'

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({ track }: SongInfoProps) => {
    return (
        <View>
            <View>
                <Text>
                    {track?.title}
                </Text>
                <Text>
                    {track?.artist} . {track?.album}
                </Text>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({

})

export default SongInfo