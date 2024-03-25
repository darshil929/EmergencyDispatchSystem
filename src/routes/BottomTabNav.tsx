import { View, Text, useColorScheme } from 'react-native'
import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider as PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Call from '../screens/Call';
import Map from '../screens/Map';
import NearMe from '../screens/NearMe';
import { ThemeContext } from '../context/ThemeContext';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    const [colorScheme, setColorScheme] = useState(useColorScheme());
    const paperTheme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

    const toggleTheme = () => {
        setColorScheme(colorScheme === "dark" ? "light" : "dark");
    };

    return (
        <PaperProvider theme={paperTheme}>
            <ThemeContext.Provider value={{ toggleTheme }}>
                <NavigationContainer>
                    <Tab.Navigator
                        initialRouteName='Home'
                    >
                        <Tab.Screen
                            name="NearMe"
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
                            component={Home}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Call"
                            component={Call}
                            options={{
                                tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="phone" color={color} size={26} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Account"
                            component={Login}
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
