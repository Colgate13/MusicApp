import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import  Player  from './Player';

export default function App() {

  const [audio, setAudio] = useState(null);

  const [music, setMusic] = useState([
    {
      id: 1,
      nome: '505',
      artista: 'Artic Monkeys',
      playing: false,
      file: require('./assets/music/505.mp3'),
    },
    {
      id: 2,
      nome: 'Arte Insulto',
      artista: 'Matanza',
      playing: false,
      file: require('./assets/music/ArteInsulto.mp3'),
    },
    {
      id: 3,
      nome: 'Greek N',
      artista: 'Eletron',
      playing: false,
      file: require('./assets/music/Greek.mp3'),
    },
    {
      id: 4,
      nome: 'Kurd Cobain',
      artista: 'Eletron',
      playing: false,
      file: require('./assets/music/KurdCobain.mp3'),
    },
    {
      id: 5,
      nome: 'Lucas triste',
      artista: 'LUCAHUS',
      playing: false,
      file: require('./assets/music/Luclus.mp3'),
    },
    {
      id: 6,
      nome: 'So Canela',
      artista: 'Matheus Canela',
      playing: false,
      file: require('./assets/music/SoCanela.mp3'),
    },
    {
      id: 7,
      nome: 'Sua Assinatura',
      artista: 'Matanza Canela',
      playing: false,
      file: require('./assets/music/SuaAssinatura.mp3'),
    },
  ])


  function trocarMusica(id)/*Usar se for usar um banco de dados, com Id, vai facilitar */ 
  {
  let return_val = music.map((val) => {
      if(val.id == id){
        val.playing = true;
      }
      if(val.id != id){
        val.playing = false;
      }
      return val;
    })
    setMusic(return_val);
  }
  async function musicaTrocar(id){
    let curFile = null;
    let return_val = music.filter((val,k) => {
      if(id == k){
       music[k].playing = true;
       curFile = music[k].file;
      }
      if(id != k){
       music[k].playing = false;
      }
      return music[k];
    })

    if(audio != null)
    { 
      audio.unloadAsync();
    }


    let curAudio = new Audio.Sound();
    try {
      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();
    }catch(error)
    {

    }
    setAudio(curAudio);

    setMusic(return_val);
  }
  
  

  return (
    <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.header_text}>| Spotify Premium | </Text>
      </View>

    <View style={styles.table}>
        <Text style={styles.TableText}>Musica</Text>
        <Text style={styles.TableText}>Artista</Text>
    </View>

    {
      music.map((val,k) => {/* o K como se fosse um id para cada posição do array Music*/

        if(val.playing)
        {
          return(
            <View style={styles.table}>
            <TouchableOpacity /*onPress={}*/ style={styles.BtnTouchaOpaciMusic}>
              <Text style={styles.TableTextBtnTrue}><AntDesign name="play" size={16} color="rgb(133, 50, 168)"/>  {val.nome}</Text>
              <Text style={styles.TableTextBtnTrue}>{val.artista}</Text>
            </TouchableOpacity>
          </View>
            );
        }else
        {
          return(
            <View style={styles.table}>
            <TouchableOpacity /*onPress={() => trocarMusica(val.id)}*/ onPress={() => musicaTrocar(k)} style={styles.BtnTouchaOpaciMusic}>
              <Text style={styles.TableTextBtnFalse}><AntDesign name="play" size={16} color="#1DB954"/>  {val.nome}</Text>
              <Text style={styles.TableTextBtnFalse}>{val.artista}</Text>
            </TouchableOpacity>
          </View>
          );
        }

      })
    }


    <View style={{ paddingBottom:200}}></View>
    </ScrollView>
    <Player></Player>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',

  },
  header:{
    backgroundColor: '#1DB954',
    width: '100%',
    padding: 20,
  },
  header_text:{
    textAlign: 'center',
    color: 'white',
    fontSize: 25,
  },
  table: {
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  TableText: {
    width: '50%',
    color: 'rgb(200,200,190)',
  },
  BtnTouchaOpaciMusic:
    {
      width: '100%',
      flexDirection: 'row',
    },
    TableTextBtnFalse: {
      width: '50%',
      color: 'white',
    },
    TableTextBtnTrue: {
      width: '50%',
      color: '#1DB954',
    }
});
