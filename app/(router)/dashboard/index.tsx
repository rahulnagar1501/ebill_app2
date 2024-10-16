import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Dashboard = () => {
    const cardData = [
        {
            icon: <Ionicons size={60} name="logo-usd" color="#A0A9C6" />,
            title: "Revenue",
            value: "$199,099",
            description: "Since last month",
            change: "▲ 5.35%",
            changeType: "positive"
        },
        {
            icon: <Feather name="shopping-cart" size={60} color="#A0A9C6" />,// Ensure this uses FontAwesome5
            title: "Orders",
            value: "2,200",
            description: "Since last month",
            change: "▲ 8.66%",
            changeType: "positive"
        },
        {
            icon: <MaterialIcons size={66} name="groups" color="#A0A9C6" />,
            title: "Visitors",
            value: "702,258",
            description: "Since last month",
            change: "▲ 2.81%",
            changeType: "positive"
        },

        {
            icon: <FontAwesome5 size={66} name="heartbeat" color="#A0A9C6" />,
            title: "Followers",
            value: "+50K",
            description: "Since last month",
            change: "▲ 1.74%",
            changeType: "positive"
        },

    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard</Text>
            {cardData.map((card, index) => (
                <View key={index} style={styles.card}>
                    <View style={styles.childcard}>
                        <View style={styles.cardRow}>{card.icon}</View>
                        <View style={styles.columntwo}>
                            <Text style={styles.cardTitle}>{card.title}</Text>
                            <Text style={styles.cardValue}>{card.value}</Text>
                        </View>
                    </View>
                    <View style={styles.childcardtwo}>
                        <Text style={styles.cardDescription}>{card.description}</Text>
                        <Text
                            style={
                                card.changeType === 'positive'
                                    ? styles.cardChangePositive
                                    : styles.cardChangeNegative
                            }
                        >
                            {card.change}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F3F8',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#6c757d',
    },
    card: {
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        display: "flex",
        justifyContent: "space-between",
    },
    childcard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    childcardtwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    columntwo: {
        gap: 20,
        alignItems: 'flex-end',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 10,
        color: '#6C757D',
    },
    cardValue: {
        fontSize: 28,
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
