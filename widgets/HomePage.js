import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import Colors from '../comp/Colors.js'

const AppBar = props => {
    return (
        <View style={styles.appBar}>
            <Ionicons name='chevron-back' size={24} color='white' />
            <Ionicons name='md-notifications-outline' size={24} color='white' />
        </View>
    )
}

const TypeCard = props => {
    return (
        <View style={{ ...styles.typeCard, backgroundColor: props.color }}>
            <Ionicons name={props.icon} size={50} color={Colors.blue} />
            <Text style={styles.amount}>{props.amount}</Text>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const HomePage = props => {
    return (
        <View style={styles.screen}>
            <StatusBar hidden />
            <View style={styles.container}>
                <AppBar />
                <Text style={styles.balanceHeading}>Your Balance</Text>
                <Text style={styles.balance}>$547000.00</Text>
                <View style={styles.typeCards}>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.blue
    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    typeCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    }
})

export default HomePage