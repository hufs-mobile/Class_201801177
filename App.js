import React from "react";
import { Button, View, ScrollView, StyleSheet, Text, Image, ImageBackground } from "react-native";
import Constants from 'expo-constants';
import { useState } from "react";
import MainStackNavigator from "./routes/MainStackNavigator";
import MainTabNavigator from "./routes/MainTabNavigator";

const App = () => {

    return <MainTabNavigator/>;
}

export default App;