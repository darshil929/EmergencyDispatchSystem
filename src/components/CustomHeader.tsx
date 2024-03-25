import React from 'react';
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

export function CustomHeader({ navigation }: any) {
  const route = useRoute();

  return (
    <Appbar.Header 
    mode='center-aligned'
    elevated={true}
    >
      <Appbar.Action icon="theme-light-dark" onPress={() => console.log('theme')} />
      <Appbar.Content title={route.name} />
      <Appbar.Action icon="phone" onPress={() => console.log('call')} />
    </Appbar.Header>
  );
}
