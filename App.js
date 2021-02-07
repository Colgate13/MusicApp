import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.header_text}>| MusicApp | </Text>
      </View>
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
});
