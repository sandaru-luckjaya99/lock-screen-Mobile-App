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

const {width, height} = Dimensions.get('window');
export default class lock_screen_passcode extends Component {
  constructor(props){
    super(props);
    this.state = {
      passcode : ['','','',''],
    };
  }

  Press_number = num => {
    let tempCode = this.state.passcode;
    for (var i = 0; i < tempCode.length; i++){
      if (tempCode[i] == ''){
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    this.setState({ passcode: tempCode});
  };


  render() {

    let numbers = [
      {id:1},
      {id:2},
      {id:3},
      {id:4},
      {id:5},
      {id:6},
      {id:7},
      {id:8},
      {id:9},
      {id:0},

    ];

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.top_container} >
          <View style={{flexDirection : 'row'}} >
            <Text style={styles.enter_text}> Enter your PIN code </Text>
          </View>

          <View style = {styles.codeContainer}>
          {
            this.state.passcode.map(p=>{
              let style = p != '' ? styles.code2 : styles.code1;
              return <View style = {style} />;

            })}
          </View>
        </View>
        <View style = {{alignItems : 'center', justifyContent : 'center'}}>
          <View style = {styles.numbersContainer}>
            {numbers.map(num=> {
              return (
                <TouchableOpacity
                  style = {styles.number}
                  key = {num.id}
                  onPress = {() => this.Press_number(num.id)}
                >
                  <Text style = {styles.numberText}>{num.id}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style = {styles.buttons}>
          <TouchableOpacity>
            <Text style = {styles.buttonsText}>Delete</Text>
          </TouchableOpacity>
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
    marginTop : 25,
  },

  codeContainer : {
    marginTop : 12,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    top : 50,
  },

  code1 : {
    width : 10,
    height : 10,
    borderRadius : 10,
    borderWidth : 1,
    margin : 10,
    borderColor : '#a6d8e8',
    // backgroundColor : '#a6d8e8',
  },

  code2 : {
    width : 10,
    height : 10,
    borderRadius : 10,
    margin : 10,
    backgroundColor : '#a6d8e8',
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
    textAlign : 'center',
  },
});
