import React, {Component} from 'react';
import { View, Text} from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {

  render() {
    return (
      <Card>
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
