import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <View style={styles.view3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'

  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: '#f00'
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: '#ff0'
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: '#00f'
  },
})

export default App