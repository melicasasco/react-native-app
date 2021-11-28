import React from "react";
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from '../constants/Colors';
import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: styles.header,
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
            headerTitle: "Les Chats"
          }}
          initialRouteName="Home"
          >
            <Stack.Screen 
            name="Home" 
            component={Home}
            title="Les Chats" />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    }
  })
  
export default HomeNavigator;