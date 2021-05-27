import * as React from 'react';
import {Text, View, TouchableOpacity, Button, Image, StyleSheet} from 'react-native';

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Setting</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"pink",
        justifyContent:"center",
        alignItems:"center",
        padding:100,
    },
})