import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const InputNumeric = (props) => {
  const [text, setText] = React.useState('');


  return (
    <TextInput style={styles.input}
      label={props.label}
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default InputNumeric;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',

    }
})