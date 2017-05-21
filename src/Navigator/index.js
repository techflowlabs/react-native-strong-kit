
import React, { Component } from 'react';

import {Actions, Scene, Router} from 'react-native-router-flux';

import { Provider, connect } from 'react-redux';

const RouterWithRedux = connect()(Router);

// Redux Store
import { store } from '../Redux/Store'

import Root from './Root'

// Containers
import { Main, Home } from '../Containers'

export default class Navigator extends Component {
  render() {
    return (
        <Provider store={store}>
          <RouterWithRedux>
            <Scene 
              key="root" 
              backButtonTextStyle={{ color: '#fff' }} 
              navigationBarStyle={{ backgroundColor: '#eeeeee', borderBottomWidth: 1 }}  
              titleStyle={{ color: '#fff', fontSize: 15 }}>

                <Scene key="START" direction="horizontal" schema="modal" component={ Main } hideNavBar   />
                <Scene key="HOME" direction="vertical" schema="modal" component={ Home }  />

            </Scene>
          </RouterWithRedux>
        </Provider>
    )
  }
}
 

 