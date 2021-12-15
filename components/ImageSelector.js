import React, { useState } from 'react';
import { View, Button, Image, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

import Colors from '../constants/Colors';

const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la cámara para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    });

    console.log(image)
    setPickedUri(image.uri);
    props.onImage(image.uri);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleTakeImage}>
            <Avatar.Image size={40} source={pickedUri
            ? { uri: pickedUri }
            : require('../assets/images/material-plus-icon.png')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  }
});

export default ImageSelector;