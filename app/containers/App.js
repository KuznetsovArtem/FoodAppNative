/**
 * Created by artem on 12/13/16.
 */
import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Food from './Food'
import Home from './Home'
import User from './User'


export default class App extends Component {
  render() {
    const scenes = Actions.create( // TODO: move to sep file;
      <Scene key="root"
             hideNavBar={true}>
        <Scene key="home"
               component={Home}
               title="home"
               initial
        />
        <Scene
          key="food"
          direction="leftToRight"
          component={Food}
          title="Food"
        />
        <Scene
          hideNavBar={false}
          direction="vertical"
          key="user"
          component={User}
          title="User Page"
        />
      </Scene>
    );

    return (
        <Router scenes={scenes}/>
    );
  }
}

