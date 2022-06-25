import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const TextScreen = () => {
    const [password, setPassword] = useState('');

    return <View>
        <Text>
            Enter Password:
        </Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(newString) => setPassword(newString)}
        />
        <Text>
            My password is {password}
        </Text>
        { password.length < 8 ? <Text>Your password must be atleast 8 characters</Text> : null }
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
