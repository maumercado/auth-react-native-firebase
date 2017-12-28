import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyB-7ErC1c7WAmNxm6ZTufAtJpK8HP57yi8",
            authDomain: "auth-react-native-accbe.firebaseapp.com",
            databaseURL: "https://auth-react-native-accbe.firebaseio.com",
            projectId: "auth-react-native-accbe",
            storageBucket: "auth-react-native-accbe.appspot.com",
            messagingSenderId: "876070193723"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

AppRegistry.registerComponent("auth", () => App);
