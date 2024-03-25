import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { Provider } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from '../screens/Home';
import Account from '../screens/Account';
import Call from '../screens/Call';
import Map from '../screens/Map';
import NearMe from '../screens/NearMe';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <Provider>
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
                        component={Account}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" color={color} size={26} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
