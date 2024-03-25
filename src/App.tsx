import React, { useState } from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

import BottomTabNav from './routes/BottomTabNav';
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <BottomTabNav />
  );
};

export default App;

const styles = StyleSheet.create({});
