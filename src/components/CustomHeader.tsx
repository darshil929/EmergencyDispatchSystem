import React, { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  navigation: any;
}

export const CustomHeader: React.FC<Props> = ({ navigation }) => {
  const route = useRoute();
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Appbar.Header
      mode="center-aligned"
      elevated={true}
    >
      <Appbar.Action
        icon="theme-light-dark"
        onPress={toggleTheme}
      />
      <Appbar.Content title='JanRakshak'/>
      {/* <Appbar.Content title={route.name} /> */}
      <Appbar.Action icon="phone" onPress={() => console.log('call')} />
    </Appbar.Header>
  );
};
