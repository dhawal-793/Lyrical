import { PropsWithChildren } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Track } from 'react-native-track-player'

type SongInfoProps = PropsWithChildren<{
    track: Track | null | undefined
}>

const SongInfo = ({ track }: SongInfoProps) => {
    return (
        <View style={Styles.container}>
            <View>
                <Text style={Styles.name}>
                    {track?.title}
                </Text>
                <Text style={Styles.artist}>
                    {track?.artist} . {track?.album}
                </Text>
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop: 18,
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    name: {
        marginBottom: 8,
        textAlign: 'center',
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
    },
    artist: {
        color: '#d9d9d9',
        textAlign: 'center',
    },
})

export default SongInfo