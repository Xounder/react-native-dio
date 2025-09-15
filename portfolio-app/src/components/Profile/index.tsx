import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';
import photo from '../../../assets/photo.jpg'

import { ProfileProps } from './props';

export function Profile({ text }: ProfileProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={photo}
      />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}