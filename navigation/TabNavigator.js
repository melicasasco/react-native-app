import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfileNavigator from "./ProfileNavigator";
import ShopNavigator from "./ShopNavigator";
import Colors from "../constants/Colors";
import HomeNavigator from "./HomeNavigator";

const BottomTabs = createMaterialBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
        
        screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarShowLabel: false,
          
        }}
        activeColor= {Colors.primary}
        inactiveColor= {Colors.accent}
        barStyle={{ backgroundColor: '#eeeeee' }}>
            <BottomTabs.Screen 
            name="HomeTab" 
            component={HomeNavigator} 
            options= {{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={24} />
                )
            }} />
            <BottomTabs.Screen 
            name="ShopTab" 
            component={ShopNavigator} 
            options= {{
                tabBarLabel: 'Shop',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="shopping" color={color} size={24} />

                )
            }} />
            <BottomTabs.Screen 
            name="ProfileTab" 
            component={ProfileNavigator}
            options= {{
                tabBarLabel: 'Cat Profile',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="paw" color={color} size={24} />
                )
            }} />
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        backgroundColor: Colors.primary,
        //bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
});

export default TabNavigator;