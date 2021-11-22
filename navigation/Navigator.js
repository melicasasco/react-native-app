import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import PerfilGatuno from '../screens/PerfilGatuno';
import Home from '../screens/Home';
import Colors from '../constants/Colors';
import Shop from '../screens/Shop';
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";



const Navigator = () =>{

    
const Stack = createNativeStackNavigator();

//const [loaded] = useFonts({
  //  Lato: require("../assets/fonts/Lato-Regular.ttf"),
    //LatoItalic: require("../assets/fonts/Lato-Italic.ttf"),
  //});

    
    //if (!loaded) return <AppLoading />;
    
   return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}
      initialRouteName="Home"
    >
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Les Chats',
        }}
      />
      <Stack.Screen
        name="PerfilGatuno"
        component={PerfilGatuno}
        options={{
          title: 'Perfil gatuno',
        }}
      />
        <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
        title: 'Tienda Les Chats'
        }}
        />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  }
})

export default Navigator;
