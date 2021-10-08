/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
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

export default class screen_2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: ['', '', '', ''],
    };
  }

  render() {
    return (
      <View style={styles2.container}>
        <View style={styles2.txt1_Vw}>
          <Text style = {styles2.enter_text}> Maximum attempt reached </Text>
        </View>
      </View>
    );
  }
}
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt1_Vw: {
    Height : 178,
    alignItems : 'center',
    justifyContent : 'center'

  },

  enter_text: {
    fontFamily : 'roboto',
    fontSize : 25,
    color : '#B3C1D4',
    letterSpacing : -0.41,
    lineHeight : 40,
    marginTop : 25,
  },

});
