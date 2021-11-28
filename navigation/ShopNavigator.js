import React from "react";
import { StyleSheet, Platform } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from '../constants/Colors';
import Shop from "../screens/Shop";
import Categories from "../screens/Categories";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: styles.header,
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
          }}
          initialRouteName="Shop"
          >
            <Stack.Screen 
            name="Shop" 
            component={Shop}
            title="Shop Les Chats" />

            <Stack.Screen 
            name="Categories" 
            component={Categories}
            title="Qué estás buscando" />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    }
  })
  
export default ShopNavigator;