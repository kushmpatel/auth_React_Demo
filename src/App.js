/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component{

state = { loggedIn:null};

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

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({ loggedIn:true});
        } else {
          this.setState({ loggedIn:false});
        }
      });
  }

  renderContent(){

    switch(this.state.loggedIn){
      case true:
      return <Button>Log Out</Button>;

      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }

  }

  render(){
    return(
      <View>
      <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
      );
  }
}

export default App;
