/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

  componentWillMount(){
      firebase.initializeApp(
        {
          apiKey: 'AIzaSyAtaMc_ns4PD2_ZeK8kKO_RIvHeJkw5tK0',
          authDomain: 'react-auth-demo-30c52.firebaseapp.com',
          databaseURL: 'https://react-auth-demo-30c52.firebaseio.com',
          projectId: 'react-auth-demo-30c52',
          storageBucket: 'react-auth-demo-30c52.appspot.com',
          messagingSenderId: '501953122732'
        }
    );
  }

  render(){
    return(
      <View>
      <Header headerText="Authentication"/>
        <LoginForm />
      </View>
      );
  }
}

export default App;
