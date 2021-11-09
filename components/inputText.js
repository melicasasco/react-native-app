import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const InputText = (props) => {
  const [text, setText] = React.useState('');

  return (
    <TextInput style={styles.input}
      label={props.label}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        minWidth: '60%'
    }
})