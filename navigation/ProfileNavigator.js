import React from 'react';
import { StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import PerfilGatuno from '../screens/PerfilGatuno';
import Colors from '../constants/Colors';
//fonts
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";



const ProfileNavigator = () =>{

    
const Stack = createNativeStackNavigator();

//const [loaded] = useFonts({
  //  Lato: require("../assets/fonts/Lato-Regular.ttf"),
    //LatoItalic: require("../assets/fonts/Lato-Italic.ttf"),
  //});

    
    //if (!loaded) return <AppLoading />;
    
   return (

    <Stack.Navigator
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}
      initialRouteName="PerfilGatuno"
    >
      <Stack.Screen
        name="PerfilGatuno"
        component={PerfilGatuno}
        options={{
          title: 'Perfil gatuno',
        }}
      />
    </Stack.Navigator>

);
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
  }
})

export default ProfileNavigator;
