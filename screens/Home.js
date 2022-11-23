import React from "react";
import {Image, Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../assets/frog-1371919.png')}
                style={{width:400,height:400}}    
            />
            <TouchableOpacity
                style={styles.buttoneContainer}
                onPress={() => navigation.navigate('Layout')}
            >
                <Text style={styles.buttonTest}>Go To Layout</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ebebeb'
    },
    buttoneContainer:{
        backgroundColor:'black',
        borderRadius:5,
        padding:10,
        margin:20

    },
    buttonTest:{
        fontSize:20,
        color:'#fff'

    }
})

export default Home