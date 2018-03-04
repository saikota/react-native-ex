import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { api } from '../Utils/api';
import Dashboard from './Dashboard';

export var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#48BBEC'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    button: {
        height: 45,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    };
  }
  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    });
  }
  handleSubmit() {
    // update spinning indicator
    this.setState({
      isLoading: true
    });
    // fetch data from github
    api.getBio(this.state.username)
      .then((res) => {
        if (res.message === 'Not Found') {
          this.setState({
            error: 'User not found',
            isLoading: false
          });
        } else {
          // reroute to the next route, passing github info
          this.props.navigator.push({
            component: Dashboard,
            title: res.name || 'Select an Option',
            passProps: { userInfo: res }
          });
          // reset state
          this.setState({
            error: false,
            isLoading: false,
            username: ''
          });
        }
      });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a Github User </Text>
        <TextInput
          style={styles.searchInput}
          value={this.state.username}
          onChange={this.handleChange.bind(this)}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor='white'
          onPress={this.handleSubmit.bind(this)}>
            <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
    )
  }
}