import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import firebase from "firebase";
import { Header } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
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
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

AppRegistry.registerComponent("auth", () => App);
