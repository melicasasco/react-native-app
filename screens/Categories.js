import React, { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, Card as ImageCard} from 'react-native-paper';

const Categories = ({ navigation }) => {

    return (
        <PaperProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <Text>Alimentos</Text>
                    </View>
                    <View style={styles.cardSpace}>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover style={{height: 140, width: 140}} source={require('../assets/images/balanceado.jpg')} />
                                <Text>Seco</Text>
                            </ImageCard>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover style={{height: 140, width: 140}}  source={require('../assets/images/humedo.jpg')} />
                                <Text>Humedo</Text>
                            </ImageCard>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text>Dietas especiales</Text>
                    </View>
                    <View style={styles.cardSpace}>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover style={{height: 140, width: 140}} source={require('../assets/images/balanceado.jpg')} />
                                <Text>Gastrointestinal</Text>
                            </ImageCard>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover style={{height: 140, width: 140}}  source={require('../assets/images/humedo.jpg')} />
                                <Text>Renal</Text>
                            </ImageCard>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={styles.cardSpace}>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover style={{height: 140, width: 140}} source={require('../assets/images/balanceado.jpg')} />
                                <Text>Renal</Text>
                            </ImageCard>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <ImageCard style={[styles.cardsHome, styles.shadow]}>
                                <ImageCard.Cover style={{height: 140, width: 140}}  source={require('../assets/images/humedo.jpg')} />
                                <Text>Bebe</Text>
                            </ImageCard>
                        </TouchableOpacity>
                        
                    </View>
                   </ScrollView>
                </SafeAreaView>

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
    paddingBottom: 15,
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
          flexDirection: 'row',
          justifyContent: 'center',
      },
      cardsHome: {
          margin: 10,
      }
})


export default Categories;