import React from 'react';
import { View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import { styles } from './styles';

export function Main({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        title='Go to Skills'
        onPress={() => navigation.navigate('Skills')}
      />
      <StatusBar style='light' />
    </View>
  );
}