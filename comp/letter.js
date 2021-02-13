import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Letter = (props) => {
    return <Text style={styles.textstyle}>{props.children}</Text>
}

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 26,
        textAlign: 'center',
        borderRightWidth: 2,
        borderRightColor: '#efe',
        paddingHorizontal: 40,
        paddingVertical: 30

    }
})