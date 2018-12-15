import React, {Component} from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

state = { email: '' };
state = { password: '' };

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

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
