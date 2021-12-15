import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigator"
import AuthReducer from "../store/reducers/auth.reducer";
const MainNavigator = () => {

    const user = useSelector(state => state.auth.userId);

    return (
        <NavigationContainer>
            {user 
                ? <TabNavigator />
                : <AuthNavigator/>
            }
        </NavigationContainer>
    );
};

export default MainNavigator;