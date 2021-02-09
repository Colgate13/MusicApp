import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Player(props) {

    const handlePlay = async() => {
        let curFile = props.music[props.audioIndex].file;
        let newMusic = props.music.filter((val,k) => {

            if(props.audioIndex == k){
             props.music[k].playing = true;
      
             curFile = props.music[k].file;      
            }else{

            props.music[k].playing = false;

            }
            return props.music[k];
          })
        
          try {
              
            if(props.audio != null)
            {
                props.setPlaying(true);
                props.setMusic(newMusic);
                await props.audio.playAsync();
            }else{
                let curAudio = new Audio.sound();
                try {
                    await curAudio.loadAsync(curFile);
                } catch (error) {
                    
                }
                props.setAudio(curAudio);
                props.setMusic(newMusic);
                props.setPlaying(true);
            }

          } catch (error) {
              
          }

    }
    const handlePause = async() => {
        if(props.audio != null){
            props.audio.pauseAsync();
        }
        props.setPlaying(false);
    }


    return(
        <View  style={styles.player}  >
            <TouchableOpacity style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name="banckward" size={35} color="white"/>
            </TouchableOpacity>
            { 
            (!props.playing)? 
            <TouchableOpacity onPress={() => handlePlay()} style={{marginRight: 20, marginLeft: 20}}>
                <AntDesign name="playcircleo" size={35} color="white"/>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => handlePause()} style={{marginRight: 20, marginLeft: 20}}>
            <AntDesign name="pausecircleo" size={35} color="white"/>
            </TouchableOpacity>
            }

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