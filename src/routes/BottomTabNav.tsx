import { View, Text, useColorScheme } from 'react-native'
import React, { useState } from 'react'

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import {
    Provider as PaperProvider,
    MD3LightTheme,
    MD3DarkTheme,
    adaptNavigationTheme
} from 'react-native-paper';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import merge from 'deepmerge';

import JanRakshak from '../screens/JanRakshak';
import Account from '../screens/Account';
import FakeCall from '../screens/FakeCall';
import Map from '../screens/Map';
import NearMe from '../screens/NearMe';
import { ThemeContext } from '../context/ThemeContext';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    //combine themeing for navigation and default
    const { LightTheme, DarkTheme } = adaptNavigationTheme({
        reactNavigationLight: NavigationDefaultTheme,
        reactNavigationDark: NavigationDarkTheme,
    });

    const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
    const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

    const [colorScheme, setColorScheme] = useState(useColorScheme());
    const paperTheme = colorScheme === "dark" ? CombinedDarkTheme : CombinedDefaultTheme;

    const toggleTheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    return (
        <PaperProvider theme={paperTheme}>
            <ThemeContext.Provider value={{ toggleTheme }}>
                <NavigationContainer theme={paperTheme}>
                    <Tab.Navigator
                        initialRouteName='JanRakshak'
                        // labeled={false}
                    >
                        <Tab.Screen
                            name="Near Me"
                            component={NearMe}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="near-me" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Map"
                            component={Map}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="map-marker" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Home"
                            component={JanRakshak}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Fake Call"
                            component={FakeCall}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="phone" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Account"
                            component={Account}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="account" color={color} size={26} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </ThemeContext.Provider>
        </PaperProvider>
    );
}
