import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.text}>Conversation</Text>
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',


  },
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f00'
  },
  view2: {
    flex: 8,
    backgroundColor: '#ff0'
  },
  view3: {
    flex: 1,
    backgroundColor: '#00f'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'fff'
  }
})

export default App