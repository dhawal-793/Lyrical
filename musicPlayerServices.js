import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";

import { playListData } from "./src/constants";

export async function setUpPlayer() {
    let isSetUp = false;
    try {
        await TrackPlayer.getCurrentTrack()
        isSetUp = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetUp = true
    }
    finally {
        return isSetUp
    }
}


export async function addTrack() {
    await TrackPlayer.add(playListData)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}

export async function playBackService() {
    TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
    TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
    TrackPlayer.addEventListener(Event.RemoteNext, () => TrackPlayer.skipToNext());
    TrackPlayer.addEventListener(Event.RemotePrevious, () => TrackPlayer.skipToPrevious());
}