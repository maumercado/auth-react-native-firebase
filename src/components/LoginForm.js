import React, { Component } from "react";
import { Text } from "react-native";

import firebase from "firebase";

import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    onButtonPress = async () => {
        const { email, password } = this.state;
        try {
            await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
        } catch (err) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            } catch (error) {
                this.setState({ error: "Authentication Failed" });
            }
        }
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

                <Text style={styles.errorTextStyle}>{this.state.error}</Text>

                <CardSection>
                    <Button onPress={this.onButtonPress}>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: "center",
        color: "red"
    }
};

export default LoginForm;
