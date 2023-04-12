import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';


const AppContainer = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='HomeScreen'
                screenOptions={{
                    headerLargeTitle: true,
                    headerStyle: {
                        backgroundColor: '#0080ff'
                    },
                    headerTintColor: '#ffffff',
                }}
            >
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                >
                </Stack.Screen>
                <Stack.Screen
                    name='Details'
                    component={DetailsScreen}
                >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppContainer;