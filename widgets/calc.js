import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Letter } from '../comp/letter.js'
import { Ionicons } from "@expo/vector-icons"

const Calc = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}></View>
            <View style={styles.view2}>
                <View style={styles.view21}>
                    <View style={styles.view21a}>
                        <View style={styles.view21a1}>
                            <Letter>1</Letter>
                            <Letter>2</Letter>
                            <Letter>3</Letter>
                        </View>
                        <View style={styles.view21a2}>
                            <Letter>4</Letter>
                            <Letter>5</Letter>
                            <Letter>6</Letter>
                        </View>
                    </View>
                    <View style={styles.view21b}>
                        <Ionicons name='backspace-outline' size={32} />
                    </View>
                </View>
                <View style={styles.view22}>
                    <View style={styles.view22a}>
                        <View style={styles.view22a1}>
                            <Letter>7</Letter>
                            <Letter>8</Letter>
                            <Letter>9</Letter>
                        </View>
                        <View style={styles.view22a2}>
                            <View style={styles.zero}>
                                <Letter>0</Letter>
                            </View>
                            <Letter>.</Letter>
                        </View>
                    </View>
                    <View style={styles.view22b}>
                        <Text style={styles.something}>Yes</Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f',
        flexDirection: 'column',
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    view1: {
        flex: 3,
        backgroundColor: '#ff0',

    },
    view2: {
        flex: 4,
        backgroundColor: '#4fc'
    },
    view21: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#6f1',
        borderBottomWidth: 2
    },
    view21a1: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomColor: '#abc',
        borderBottomWidth: 2
    },
    view21a2: {
        flexDirection: 'row'
    },
    view21b: {
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    view22: {
        flexDirection: 'row'
    },
    view22a1: {
        flexDirection: 'row',
        borderBottomColor: '#dab',
        borderBottomWidth: 2
    },
    view22a2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view22b: {
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'

    },

    something: {
        fontSize: 26,
        textTransform: 'uppercase',
        alignItems: 'center',
        textAlign: 'center'
    },
    zero: {
        width: 197
    }

})

export default Calc