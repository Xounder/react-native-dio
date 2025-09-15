import React, { useState } from 'react';
import { View, Text, Image, Pressable, TextInput } from 'react-native';

import { styles } from './styles';
import logo from '../../../assets/logo.png';

export function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [locationDescription, setLocationDescription] = useState('');
  const [description, setDescription] = useState('');

  const [isBatSignalActive, setIsBatSignalActive] = useState(false);

  const handleActivateBatSignal = (activate: boolean) => {
    setIsBatSignalActive(activate);
  }


  return (
    <View style={styles.container}>
      {!isBatSignalActive ? (
        <View style={styles.content}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <Pressable
            style={styles.button}
            onPress={() => handleActivateBatSignal(true)}
          >
            <Text style={styles.text}>Activate Bat Signal</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={logo}
          />
          <TextInput
            style={styles.input}
            placeholder='Nome'
            onChangeText={text => setName(text)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder='Telefone'
            onChangeText={text => setPhone(text)}
            value={phone}
          />
          <TextInput
            style={styles.input}
            placeholder='Localização atual'
            onChangeText={text => setLocationDescription(text)}
            value={locationDescription}
          />
          <TextInput
            style={styles.input}
            placeholder='Descrição'
            onChangeText={text => setDescription(text)}
            value={description}
            multiline={true}
            numberOfLines={4}
          />
          <Pressable
            style={styles.button}
            onPress={() => handleActivateBatSignal(false)}
          >
            <Text style={styles.text}>Enviar</Text>
          </Pressable>
        </View>
      )} 
    </View>
  );
}