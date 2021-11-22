import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, TextInput, IconButton, Chip, Modal, Card as ImageCard} from 'react-native-paper';
import AppBar from '../components/AppBar';
import Card from '../components/Card';

const Shop = ({ navigation }) => {

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.cardSpace}>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover source={require('../assets/images/accesorios.jpeg')} />
                                <Text>Accesorios</Text>
                            </ImageCard>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardSpace}>
                    <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover source={require('../assets/images/alimentacion.jpeg')} />
                                <Text>Alimentacion</Text>
                            </ImageCard>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cardSpace}>
                        <TouchableOpacity>
                                <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                    <ImageCard.Cover source={require('../assets/images/medicacion.jpeg')} />
                                    <Text>Medicacion</Text>
                                </ImageCard>
                            </TouchableOpacity>
                    </View>
                    </ScrollView>
                    </SafeAreaView>
                <AppBar navigation={navigation} />

            </PaperProvider>


    )
}

const styles = StyleSheet.create ({
    title: {
        alignSelf: 'center',
        paddingTop: 15,
    },
    container: {
        flex: 1,
    paddingBottom: 70,
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


export default Shop;