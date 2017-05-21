import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// Navigator Scens
import Navigator from './src/Navigator'

export default class RNstrongKit extends Component {
  render() {
    return <Navigator/>
  }
}


AppRegistry.registerComponent('RNstrongKit', () => RNstrongKit);
