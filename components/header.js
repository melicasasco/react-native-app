import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Header = (props) => {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction color="white" onPress={_goBack} />
      <Appbar.Content color="white" title={props.title} subtitle={props.subtitle} />
      <Appbar.Action color="white" icon="magnify" onPress={_handleSearch} />
      <Appbar.Action color="white" icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create ({
    header: {
        backgroundColor: '#fe9b96',
    }
})