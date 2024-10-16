import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons'; // Icons used here

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard</Text>

            <View style={styles.card}>
                <View style={styles.cardRow}>
                    <Ionicons name="logo-usd" size={32} color="#A0A9C6" />
                    <Text style={styles.cardTitle}>Revenue</Text>
                </View>
                <Text style={styles.cardValue}>$ 199,099</Text>
                <Text style={styles.cardDescription}>Since last month</Text>
                <Text style={styles.cardChangePositive}>▲ 5,35%</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardRow}>
                    <FontAwesome5 name="shopping-cart" size={32} color="#A0A9C6" />
                    <Text style={styles.cardTitle}>Orders</Text>
                </View>
                <Text style={styles.cardValue}>2,200</Text>
                <Text style={styles.cardDescription}>Since last month</Text>
                <Text style={styles.cardChangePositive}>▲ 8,66%</Text>
            </View>

            <View style={styles.card}>
                <View style={styles.cardRow}>
                    <MaterialIcons name="groups" size={32} color="#A0A9C6" />
                    <Text style={styles.cardTitle}>Visitors</Text>
                </View>
                <Text style={styles.cardValue}>702,258</Text>
                <Text style={styles.cardDescription}>Since last month</Text>
                <Text style={styles.cardChangeNegative}>▼ 2,81%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F3FA',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#4F4F4F',
    },
    card: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 12,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
        color: '#6C757D',
    },
    cardValue: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    cardDescription: {
        fontSize: 14,
        color: '#6C757D',
        marginTop: 10,
    },
    cardChangePositive: {
        fontSize: 16,
        color: 'green',
        fontWeight: '600',
        marginTop: 5,
    },
    cardChangeNegative: {
        fontSize: 16,
        color: 'red',
        fontWeight: '600',
        marginTop: 5,
    },
});

export default Dashboard;
