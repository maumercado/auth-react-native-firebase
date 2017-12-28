import React, { Component } from "react";
import { Text } from "react-native";

import firebase from "firebase";

import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false
        };
    }

    onLoginSuccess = () => {
        this.setState({
            email: "",
            password: "",
            loading: false,
            error: ""
        });
    };

    onButtonPress = async () => {
        const { email, password } = this.state;
        this.setState({ error: "", loading: true });
        try {
            await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password);
            this.onLoginSuccess();
        } catch (err) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                this.onLoginSuccess();
            } catch (error) {
                this.onLoginFail();
            }
        }
    };

    onLoginFail = () => {
        this.setState({ error: "Authentication Failed", loading: false });
    };

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small" />;
        }

        return <Button onPress={this.onButtonPress}>Login</Button>;
    }

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

                {this.renderButton()}
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
