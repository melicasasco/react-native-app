import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Card = (props) => {

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
            {props.children}
            </View>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 36,
        borderRadius: 3,
        elevation: 3,
        marginHorizontal: 4,
        marginVertical: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
});