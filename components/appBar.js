import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const AppBar = ({navigation}) => {
  
const handleGoToPerfilGatuno = () => {
  navigation.navigate('PerfilGatuno');

}

const handleGoHome = () => {
  navigation.navigate('Home');
}

  return(
  <Appbar style={styles.bottom}>
    <Appbar.Action color='white'
      icon="home"
      onPress={handleGoHome}
      />
      <Appbar.Action color='white' icon="account-multiple" onPress={() => console.log('Pressed mail')} />
      <Appbar.Action color='white' icon="account" onPress={() => console.log('Pressed label')} />
      <Appbar.Action color='white' icon="paw" onPress={handleGoToPerfilGatuno}
      />
    </Appbar>
 );};

export default AppBar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fe9b96',
    justifyContent: 'space-around',
    color: 'white',
  },
});