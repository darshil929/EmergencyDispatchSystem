import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import User from '../screens/User'

export type AppStackParamList = {
  User: undefined;
}

const Stack = createNativeStackNavigator<AppStackParamList>();


export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitleVisible: false
      }}
    >
      <Stack.Screen name='User' component={User} />
    </Stack.Navigator>
  )
}



