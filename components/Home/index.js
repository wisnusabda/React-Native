import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/image5.jpg')} style={styles.image} />
      <Text style={styles.text}>Hello World!</Text>

      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});