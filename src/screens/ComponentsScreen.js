import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = "Crissa";

    return <View>
        <Text style={styles.textStyle}>Getting Started with React Native!</Text>
        <Text style={styles.secondStyle}>My name is {greeting}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    secondStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
