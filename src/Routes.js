import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';

const Stack = createStackNavigator();

const Routes = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{headerShown:false}} name="Pokedex" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;