import React from 'react';
import { View, Text, Pressable, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar'

import { styles } from './styles';
import { Profile } from '../../components/Profile';

export function Main() {

  const renderSocialButton = (socialName: string, link: string) => {
    return (
      <Pressable
        style={styles.socialButton}
        onPress={() => Linking.openURL(link)}
      >
        <Text style={styles.socialButtonText}>{socialName}</Text>
      </Pressable>
    )
  }

  return (
    <View style={styles.container}>
      <Profile text='Renan Fellipe'/>

      <View style={styles.socialContainer}>
        {renderSocialButton('Github', 'https://github.com/xounder')}
        {renderSocialButton('Linkedin', 'https://www.linkedin.com/in/renan-fellipe/')}
        {renderSocialButton('Instagram', 'https://www.instagram.com/renan.llipe/')}
      </View>

      <StatusBar style='auto' />
    </View>
  );
}