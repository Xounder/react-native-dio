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
    setName('');
    setPhone('');
    setLocationDescription('');
    setDescription('');
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
            <Text style={styles.textButton}>Activate Bat Signal</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.contentForm}>
          <Image
            style={styles.miniLogo}
            source={logo}
          />
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Text>Nome:</Text>
              <TextInput
                style={styles.input}
                placeholder='Nome'
                onChangeText={text => setName(text)}
                value={name}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Telefone:</Text>
              <TextInput
                style={styles.input}
                placeholder='Telefone'
                onChangeText={text => setPhone(text)}
                value={phone}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Localização:</Text>
              <TextInput
                style={styles.input}
                placeholder='Localização atual'
                onChangeText={text => setLocationDescription(text)}
                value={locationDescription}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text>Descrição:</Text>
              <TextInput
                style={[
                  styles.input, 
                  { 
                    height: 180, 
                    textAlignVertical: 'top', 
                  }
                ]} 
                placeholder="Descrição"
                onChangeText={text => setDescription(text)}
                value={description}
                multiline={true}
              />
            </View>
          </View>
          <Pressable
            style={[
              styles.button, 
              { 
                width: '80%', 
                justifyContent: 'center',
                alignSelf: 'center' 
              }
            ]}
            onPress={() => handleActivateBatSignal(false)}
          >
            <Text style={styles.textButton}>Enviar</Text>
          </Pressable>
        </View>
      )} 
    </View>
  );
}