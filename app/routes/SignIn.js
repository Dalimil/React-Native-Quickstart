import React from 'react';
import {
    Alert, View, Button, ActivityIndicator, StatusBar
} from 'react-native';


export default class SignIn extends React.Component {

    onButtonPress() {
        Alert.alert("Button has been pressed.");
        // or modal: https://facebook.github.io/react-native/releases/next/docs/modal.html
    }

    render() {
        return (
            <View style={{ margin: 10 }}>

                <StatusBar backgroundColor="blue" barStyle="light-content" />

                <Button
                    onPress={this.onButtonPress}
                    title="Learn More"
                    color="#841584"
                />
                <ActivityIndicator 
                    size="large"
                />

            </View>
        );
    }
    
}

