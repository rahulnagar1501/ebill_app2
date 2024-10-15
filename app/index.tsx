import { router } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Index = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Index;
