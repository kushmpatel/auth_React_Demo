import React, {Component} from 'react';
import {Text} from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from '@firebase/app';
import '@firebase/auth';

class LoginForm extends Component {

state = { email: '', password: '', error: '' };


onButtonPress(){

  const { email, password } = this.state;
  firebase.auth().singInWithEmailAndPassword(email,password)
  .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(() => {
          this.setState({error: 'Authentication Failed.'});
      });
  });
}

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            hint="user@gmail.com"
            label="Email"
            value={ this.state.email }
            onChangeText = { text => this.setState({ email:text })}
             />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
            hint="password"
            label="Password"
            value={ this.state.password }
            onChangeText = { text => this.setState({ password:text })}
             />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
