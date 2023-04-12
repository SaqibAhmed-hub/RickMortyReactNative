import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CharacterData  from '../models/CharacterData';

export type RootStackParamList = {
    Home: undefined;
    Details: {character: CharacterData};
  };

const AppContainer = () => {

    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerLargeTitle: true,
                    headerStyle: {
                        backgroundColor: '#0080ff'
                    },
                    headerTintColor: '#ffffff',
                }}
            >
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;