import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Player() {
    return(
        <View  style={styles.player}  >
            <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name="banckward" size={35} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name="playcircleo" size={35} color="white"/>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name="forward" size={35} color="white"/>
            </TouchableOpacity>

        </View>
    );

}

const styles = StyleSheet.create({
    player: 
    {
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 999,
        backgroundColor: "#111",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

})