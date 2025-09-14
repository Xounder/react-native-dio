import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePassword from '../../services/passwordService';


export function BatButton() {
  const [password, setPassword] = useState('');

  function handleGenerateButton() {
    const generateToken = generatePassword();
    setPassword(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(password);
  }

  return (
    <>
      <BatTextInput password={password} />

      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>COPY</Text>
      </Pressable>
    </>
  );
}