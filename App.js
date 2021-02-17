import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import FoodHome from './widgets/foodhome.js'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <FoodHome />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  }
})