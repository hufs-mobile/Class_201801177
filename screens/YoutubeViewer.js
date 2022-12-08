import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground, TextInput } from "react-native";
import Constants from 'expo-constants';
import { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const YoutubeViewer = (props) => {
    const [playing, setPlaying] = useState(false);
    const [playingVideoID, setPlayingVideoID] = useState("j6FpcvSor8g");

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <ScrollView>
            <YoutubePlayer
            height={300}
            play={playing}
            videoId={playingVideoID}
            onChangeState={onStateChange}
            />
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            <TextInput
            style={styles.input}
            onChangeText={setPlayingVideoID}
            value={playingVideoID}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default YoutubeViewer