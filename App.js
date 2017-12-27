import React, { Component } from "react";
import { AppRegistry, View, Text } from "react-native";
import { Header } from "./src/components/common";

export default class App extends Component {
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
