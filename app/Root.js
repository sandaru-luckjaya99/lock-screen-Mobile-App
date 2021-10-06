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
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class lock_screen_passcode extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.top_container} >
          <View style={{flexDirection : 'row'}} >
            <Text style={styles.enter_text}> Enter your PIN code </Text>
          </View>

          <View style = {styles.codeContainer}>
            <View style = {styles.code}></View>
            <View style = {styles.code}></View>
            <View style = {styles.code}></View>
            <View style = {styles.code}></View>
          </View>
        </View>
        <View style = {{alignItems : 'center', justifyContent : 'center'}}>
          <View style = {styles.numbersContainer}>
            <View style = {styles.number}>
              <Text style = {styles.numberText}>1</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>2</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>3</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>4</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>5</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>6</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>7</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>8</Text>
            </View>

            <View style = {styles.number}>
              <Text style = {styles.numberText}>9</Text>
            </View> 
            
            <View style = {styles.number}>
              <Text style = {styles.numberText}>0</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top_container : {
    height : 178,
    alignItems : 'center',
    justifyContent : 'center',
  },

  enter_text: {
    fontFamily : 'roboto',
    fontSize : 25,
    color : '#B3C1D4',
    letterSpacing : -0.41,
    lineHeight : 40,
    marginTop : 25
    
  },
  codeContainer : {
    marginTop : 12,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    top : 50
  },
  code : {
    width : 13,
    height : 13,
    borderRadius : 13,
    borderWidth : 1,
    margin : 10,
    Color : '#a6d8e8',
  },
  numbersContainer : {
    flexDirection : 'row',
    flexWrap : 'wrap',
    marginTop : 10,
    width : 320,
    height : 348,
    top : 30,
    alignItems : 'center',
    justifyContent : 'center',
  },

  number : {
    width : 75,
    height : 75,
    borderRadius : 75,
    margin : 14,
    backgroundColor :'#EEF4FA',
    justifyContent : 'center',
    alignItems : 'center',


  },

  numberText : {
    fontFamily : 'roboto',
    fontSize : 36,
    color :'#B3C1D4',
    letterSpacing : 0,
    textAlign : 'center'

  },


});
