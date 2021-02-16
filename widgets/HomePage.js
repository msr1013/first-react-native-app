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

const TransactionCard = props => {
    return (
        <View style={styles.transaction}>
            <View style={styles.tranLeft}>
                <View style={{ ...styles.iconContainer, backgroundColor: props.color }}>
                    <AntDesign name={props.icon} size={30} color='#fff' />

                </View>
                <View>
                    <Text style={styles.transactionTitle}>{props.title}</Text>
                    <Text style={styles.transactionSubTitle}>{props.subtitle} </Text>
                </View>
            </View>
            <View style={styles.tranRight}>
                <Text >{props.amount}</Text>
            </View>

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
                    <TypeCard color={Colors.lightBlue} icon='md-notifications-outline' title='Expenses' amount='$5000' />
                </View>
            </View>
            <View style={styles.transactionContainer}>
                <View style={{ ...styles.container, marginTop: 15 }}>
                    <View style={styles.titleBar}>
                        <Text style={styles.amount}>Transactions</Text>
                        <CustomButton title='View All' color={Colors.blue} bgc='#abc' />

                    </View>
                    <View style={styles.transactions}>
                        <TransactionCard icon='car' title='Car Purchase' subtitle='Auto -Loan' amount='$250' color='#469' />
                        <TransactionCard icon='home' title='House Purchase' subtitle='Airbnb Home' amount='$2250' color='#9df' />
                        <TransactionCard icon='gift' title='Transport' subtitle='Uber Pathao' amount='$250' color='#1c9' />
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
    },
    transLeft: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20
    },
    transactionTitle: {
        fontWeight: 'bold',
        fontSize: 13
    },
    tranRight: {

    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    }

})

export default HomePage