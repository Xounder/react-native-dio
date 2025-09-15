import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { CardView } from '../../components/CardView';

export function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.triangleCorners}></View>
        <View style={[styles.triangleCorners, styles.topRight]}></View>
        <View style={[styles.triangleCorners, styles.bottomLeft]}></View>
        <View style={[styles.triangleCorners, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}