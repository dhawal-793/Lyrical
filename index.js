/**
 * @format
 */

import { AppRegistry } from 'react-native';
import TrackPlayer from 'react-native-track-player';
import App from './src/App';
import { name as appName } from './app.json';
import { playBackService } from './musicPlayerServices';

// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => playBackService);

AppRegistry.registerComponent(appName, () => App);
