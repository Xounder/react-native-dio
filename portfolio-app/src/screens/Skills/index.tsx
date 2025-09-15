import React from 'react';
import { View, Button} from 'react-native';

import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';

export function Skills({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button
        title='Go to About Me'
        onPress={() => navigation.navigate('Main')}
      />
      <StatusBar style='light' />
    </View>
  );
}