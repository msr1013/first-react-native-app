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

const CustomButton = props => {
    return <View style={{ ...styles.button, backgroundColor: props.bgc }}>
        <Text style={{ color: props.color }}>{props.title}</Text>
    </View>
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
                    <TypeCard color={Colors.lightBlue} icon='md-notifications-outline' title='Expenses' amount='$5000' />
                </View>
            </View>
            <View style={styles.transactionContainer}>
                <View style={{ ...styles.container, marginTop: 15 }}>
                    <View style={styles.titleBar}>
                        <Text style={styles.amount}>Transactions</Text>
                        <CustomButton title='View All' color={Colors.blue} bgc='#abc'> </CustomButton>
                    </View>
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
    container: {
        paddingHorizontal: 40,
        marginVertical: 40

    },
    appbar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    typeCards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    typeCard: {
        width: '48%',
        height: 180,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center'
    },
    transactionContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amount: {
        marginVertical: 6,
        fontWeight: 'bold',
        color: '#da0',
        fontSize: 20
    }
})

export default HomePage