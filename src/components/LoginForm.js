import React, { Component } from "react";
import firebase from "firebase";
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    onButtonPress = () => {
        const { email, password } = this.state;
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        placeholder="user@example.com"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress}>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
