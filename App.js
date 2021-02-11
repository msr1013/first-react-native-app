import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return <View style={styles.screen}>
    <Text style={styles.title}>Welcome to React Native </Text>
    <View style={styles.card}>
      <Text style={styles.title}>ABC </Text>
    </View>
    <Text>Hello World!!
      <Text>
        From another world
      </Text>
    </Text>
  </View>

}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30
  },
  title: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  card: {
    width: '100%',
    height: '200',
    backgroundColor: 'grey'
  }
})

export default App