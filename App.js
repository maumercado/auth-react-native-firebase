import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import { Header } from "./src/components/common";
import firebase from "firebase";

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
                <Text>An app</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("auth", () => App);
