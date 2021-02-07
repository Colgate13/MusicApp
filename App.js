import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [audio, setAudio] = useState(null);

  const [music, setMusic] = useState([
    {
      id: 1,
      nome: 'Sweet child of mine',
      artista: 'Guns N Roses',
      playing: false,
      file: '',
    },
    {
      id: 2,
      nome: 'Of mine',
      artista: 'N Roses',
      playing: true,
      file: '',
    },
    {
      id: 3,
      nome: 'Sweet mine',
      artista: 'Guns N',
      playing: false,
      file: '',
    },

  ])


  function trocarMusica(id)
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
    

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.header_text}>| MusicApp | </Text>
      </View>

    <View style={styles.table}>
        <Text style={styles.TableText}>Musca</Text>
        <Text style={styles.TableText}>Artista</Text>
    </View>

    {
      music.map((val) => {

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
            <TouchableOpacity onPress={() => trocarMusica(val.id)} style={styles.BtnTouchaOpaciMusic}>
              <Text style={styles.TableTextBtnFalse}><AntDesign name="play" size={16} color="#1DB954"/>  {val.nome}</Text>
              <Text style={styles.TableTextBtnFalse}>{val.artista}</Text>
            </TouchableOpacity>
          </View>
          );
        }

      })
    }


    </ScrollView>
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
