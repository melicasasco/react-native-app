import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import MainNavigator from './navigation';


export default function App() {

  const [loaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Regular.ttf"),
    LatoItalic: require("./assets/fonts/Lato-Italic.ttf"),
  });


    if (!loaded) return <AppLoading />;


    return (
   
        <PaperProvider>
          <MainNavigator />
        </PaperProvider>

    );
    }
