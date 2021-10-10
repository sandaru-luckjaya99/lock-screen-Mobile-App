//import React from 'react';
import React, {Component} from 'react';
import CountDown from "react-native-countdown-component";

//import { useCountdownTimer } from 'use-countdown-timer';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  
} from 'react-native';

export default class Ctimer extends Component {
  
  render() {
    return (
      <View style={styles3.container}>
        <View style={styles3.timerVw}>
          <CountDown 
            
            until={60}
            size={28}
            onFinish={() => alert('Finished')}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: 'black'}}
           timeToShow={['M','S']}
           timeLabels={{m: 'MM', s: 'SS'}}
          />
        </View>
      </View>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
  },

  timerVw: {
    Height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems : 'center',
    marginTop : 200
    
    // flexDirection: "column"
  },

  // timerc: {
  //   Height: 200,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignItems : 'center'
  // },


});
