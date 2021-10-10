/* eslint-disable prettier/prettier */
//import React from 'react';
import React, {Component} from 'react';
//import CountDown from 'react-native-countdown-component';

import Ctimer from './timer';

import {Text, View, StyleSheet, Image} from 'react-native';

export default class screen_2 extends Component {
  render() {
    return (
      <View style={styles2.container}>
        <View style={styles2.view1}>
          <Ctimer />
          <Text style={styles2.text1}>Maximum attempt reached</Text>
          <View>
            <Image
              style={styles2.lockicon}
              source={require('./assets/picture/lock.png')}
            />
          
          </View>
          <View style ={styles2.midview}>
            <Text style = {styles2.text2}>To protect your information access has been locked for 1 minites. Come back later and try again</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },

  view1: {
    marginTop : 29,
    Height: 178,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text1: {
    fontFamily: 'roboto',
    fontSize: 25,
    color: '#B3C1D4',
    letterSpacing: -0.41,
    lineHeight: 40,
    marginTop: 25,
  },

  lockicon: {
    height: 70,
    width: 70,
    marginTop : 220,
  },
  text2: {
    padding : 30,
    fontFamily: 'roboto',
    fontSize: 16,
    color: 'black',
    letterSpacing: 0,
    lineHeight: 25,
    textAlign : 'center'
  },

  midview: {
    padding: 10,
    marginTop : 20,
    Height: 178,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
