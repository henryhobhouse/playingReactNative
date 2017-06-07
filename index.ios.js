import React, { Component} from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import Questions from './src/components/questions';


class App extends Component {
  state = { firstVisit: true };


  render() {

    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Project Guiness Test!'} />
        <Footer footerText={'Developed by Beardy V2.0'} />
      </View>
    );
  }
}

AppRegistry.registerComponent('playingReactNative', () => App);
