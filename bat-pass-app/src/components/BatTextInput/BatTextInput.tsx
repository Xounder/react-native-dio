import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTestInputProps {
  password: string;
}

export function BatTextInput(props: BatTestInputProps) {
  return (
    <>
      <TextInput 
        style={styles.inputer} 
        placeholder="Password"
        value={props.password}
      />
    </>
  );
}