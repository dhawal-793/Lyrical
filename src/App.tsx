import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { addTrack, setUpPlayer } from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

function App(): JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  async function setup() {
    let isSetup = await setUpPlayer()

    if (isSetup) {
      await addTrack()
    }

    setIsPlayerReady(isSetup)
  }

  useEffect(() => {
    setup()
  }, [])

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Lyrical</Text>
      </View>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d23',
    paddingTop: 30,
  },
  heading: {
    color: 'green',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;