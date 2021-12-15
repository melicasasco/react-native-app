import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Card as ImageCard} from 'react-native-paper';


const Home = ({navigation}) =>  {

    const handleGoToShop = () => {
        navigation.navigate('Shop');
    }

    return (
        <PaperProvider>
                <View style={styles.title}> 
                <Text style={{fontSize: 30, fontFamily: 'Lato'}}>¡Hola!</Text>
                </View>
                <View style={styles.title}>
                <Text style={{fontSize: 20, fontFamily: 'LatoItalic'}}>¿Qué querés visitar hoy?</Text>
                </View>
                <View style={styles.cardSpace}>
                <TouchableOpacity  onPress={handleGoToShop}>
                    <ImageCard style={[styles.cardsHome, styles.shadow]}>
                        <ImageCard.Cover source={require('../assets/images/tienda.jpeg')} />
                        <Text style={styles.cardText}>Tienda</Text>
                    </ImageCard>
                </TouchableOpacity>
                </View>
                <View style={styles.cardSpace}>
                <ImageCard style={[styles.cardsHome, styles.shadow]}>
                    <ImageCard.Cover source={require('../assets/images/comunidad2.jpeg')} />
                    <Text style={styles.cardText2}>Comunidad</Text>
                </ImageCard>
                </View>
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
          position: 'relative',
      },
     cardText: {
         position: 'absolute',
         paddingLeft: 275,
         paddingTop: 160,
         color: '#fff',
         fontSize: 20,
     },
     cardText2: {
        position: 'absolute',
        paddingLeft: 235,
        paddingTop: 160,
        color: '#fff',
        fontSize: 20,
    },
    
})

export default Home;

