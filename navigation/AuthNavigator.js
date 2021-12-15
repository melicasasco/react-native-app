import React from "react";
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from '../constants/Colors';
import AuthScreen from "../screens/AuthScreen";
import RegistroScreen from "../screens/RegistroScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {


    return (
        <Stack.Navigator initialRouteName="Auth" 
        screenOptions={{ 
            headerStyle: styles.header,
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitle: "Bienvenido a Les Chats"}}>
            <Stack.Screen 
            name='Auth' 
            component={AuthScreen}
            title= 'Bienvenido a Les Chats'>
            </Stack.Screen>
            <Stack.Screen 
            name='Registro' 
            component={RegistroScreen}
            title= 'Bienvenido a Les Chats'>
            </Stack.Screen>
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    header: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    }
  })

export default AuthNavigator;