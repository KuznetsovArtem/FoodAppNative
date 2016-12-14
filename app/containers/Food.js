/**
 * Created by artem on 12/14/16.
 */
/**
 * Created by artem on 12/14/16.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Food = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome} onPress={() => Actions.user()}>
        Food Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7D98A1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});

export default Food;