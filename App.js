import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS} from 'react-native';
import Main from './App/Component/Main'


export default class App extends React.Component {
  render() {
    return (
          // <NavigatorIOS
          // initialRoute={{
          //   component:Main,
          //   title:'Github NoteTaker'
          // }}
          // style={styles.container}>
          // </NavigatorIOS>
          <View><Text>xx</Text></View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
