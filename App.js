import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>

        <Ionicons name="menu-sharp" size={32} color="white" />
        <MaterialIcons name="search" size={32} color="white" />

        <Text style={styles.text}>$931280</Text>
      </View>

      <View style={styles.view3}>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.text}>Transaction</Text>
          </View>
          <View>
            <Text style={styles.text}>See All</Text>
          </View>
        </View>

        <View>
          <Text style={styles.text}>Car Purchase</Text>

          <Text style={styles.text}>House Purchase</Text>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',

  },
  view1: {
    flex: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#2F26D9'
  },

  view3: {
    flex: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A2C4F'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});