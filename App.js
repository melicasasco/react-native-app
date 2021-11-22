import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from 'react-native';
import { Provider as PaperProvider, TextInput, IconButton, Chip, Modal } from 'react-native-paper';
import AppBar from './components/AppBar';
import Home from './screens/Home';
import PerfilGatuno from './screens/PerfilGatuno';
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from './navigation/Navigator';


export default function App() {

  //const [loaded] = useFonts({
    //Lato: require("./assets/fonts/Lato-Regular.ttf"),
    //LatoItalic: require("./assets/fonts/Lato-Italic.ttf"),
  //});


    //if (!loaded) return <AppLoading />;


    return (
   
        <PaperProvider>
          <Navigator />
        </PaperProvider>

    );
    }
