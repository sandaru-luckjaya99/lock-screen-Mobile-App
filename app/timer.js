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

export default class c_downtimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
      <View style={styles3.container}>
        <View style={styles3.txt1_Vw}>
            <CountDown 
             until={60}
             size={30}
             onFinish={() => alert('Finished')}
            //digitStyle={{backgroundColor: '#FFF'}}
            //  digitTxtStyle={{color: '#1CC625'}}
             timeToShow={['M', 'S']}
             timeLabels={{m: 'MM', s: 'SS'}}
           />
            
            
            {/* <CountDown
            until={1}
            onFinish={console.log('done')}
            size = {20}
            timeToShow = {['M','S']}
            /> */}
          
          {/* <Text style={styles3.enter_text}>Maximum attempt reached</Text> */}
        </View>
      </View>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt1_Vw: {
    Height: 178,
    alignItems: 'center',
    justifyContent: 'center',
  },

  enter_text: {
    fontFamily: 'roboto',
    fontSize: 25,
    color: '#B3C1D4',
    letterSpacing: -0.41,
    lineHeight: 40,
    marginTop: 25,
  },
});
