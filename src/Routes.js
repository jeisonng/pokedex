import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import PokemonDetail from './Screens/PokemonDetail';

const Stack = createStackNavigator();

const Routes = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={PokemonDetail} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;