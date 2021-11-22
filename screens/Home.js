import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, TextInput, IconButton, Chip, Modal, Card as ImageCard} from 'react-native-paper';
import AppBar from '../components/AppBar';
import Card from '../components/Card';


const Home = ({navigation}) =>  {

    const handleGoToShop = () => {
        navigation.navigate('Shop');
    }

    return (
        <PaperProvider>
                <View style={styles.title}> 
                <Text style={{fontSize: 30}}>¡Hola!</Text>
                </View>
                <View style={styles.title}>
                <Text style={{fontSize: 20}}>¿Qué querés visitar hoy?</Text>
                </View>
                <View style={styles.cardSpace}>
                <TouchableOpacity onPress={handleGoToShop}>
                    <ImageCard style={[styles.cardsHome, styles.shadow]}>
                        <ImageCard.Cover source={require('../assets/images/tienda.jpeg')} />
                        <Text>Tienda</Text>
                    </ImageCard>
                </TouchableOpacity>
                </View>
                <View style={styles.cardSpace}>
                <ImageCard style={[styles.cardsHome, styles.shadow]}>
                    <ImageCard.Cover source={require('../assets/images/comunidad2.jpeg')} />
                    <Text>Comunidad</Text>
                </ImageCard>
                </View>
            <AppBar navigation={navigation} />
        </PaperProvider>
    );

}

const styles = StyleSheet.create ({
    title: {
        alignSelf: 'center',
        paddingTop: 15,
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      cardSpace: {
          padding: 20,
      }
})

export default Home;

