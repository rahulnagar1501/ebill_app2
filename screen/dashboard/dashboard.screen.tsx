import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';


const DashboardScreen = () => {
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

        <ScrollView style={styles.container}>
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

            <View style={styles.card}>
                <View style={styles.childcardtwo}>
                    <Text style={styles.cardDescription}>Chart Line</Text>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>
                <View style={[styles.childcardtwo, styles.height]}>

                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.childcardtwo}>
                    <Text style={styles.cardDescription}>Chart Bar</Text>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>
                <View style={[styles.childcardtwo, styles.height]}>

                </View>
            </View>
            <View style={styles.card}>
                <View style={styles.childcardtwo}>
                    <Text style={styles.cardDescription}>Chart Doughnut</Text>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </View>
                <View style={[styles.childcardtwo, styles.height]}>

                </View>
                <View style={styles.language}>
                    <View style={styles.languagecontent}>
                        <Entypo name="dot-single" size={24} color="#5b6582" />
                        <Text>HTML</Text>
                    </View>
                    <View style={styles.languagecontent}>
                        <Entypo name="dot-single" size={24} color="#98a4c7" />
                        <Text>CSS</Text>
                    </View>
                    <View style={styles.languagecontent}>
                        <Entypo name="dot-single" size={24} color="#36a2eb" />
                        <Text>Javascript</Text>
                    </View>
                </View>
            </View>
        </ScrollView >

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
        marginBottom: 20,
        display: "flex",
        justifyContent: "space-between",
    },
    childcard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    childcardtwo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#f2f3f8',
        borderStyle: 'solid',
        padding: 20,
        paddingTop: 10,
        alignItems: "center"
    },
    cardRow: {
        flexDirection: 'row',
        marginBottom: 20,

    },
    language: {
        borderTopWidth: 1,
        borderTopColor: '#f2f3f8',
        borderStyle: 'solid',
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    languagecontent: {
        flexDirection: "row",
        paddingVertical: 10,
        alignItems: "center"
    },
    height: {
        height: 100
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

export default DashboardScreen;
