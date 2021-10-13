/* eslint-disable prettier/prettier */
import {jsxAttribute} from '@babel/types';
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
  Alert,
  TouchableHighlight,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class Lock_screen_passcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: [0, 0, 0, 0], // to get password
      count: 1, // how many numbers enterd at once
      code_entrycount: 1, // how many times wrong

      // Enter your pin code- phrase as a variable
      entry_text: (
        <>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.enter_text}> Enter your PIN code </Text>
          </View>
          <View>
            <Text style={styles.re_enter_txt}></Text>
          </View>
        </>
      ),
    };
  }

  // Code verify
  verifier = tempCode => {
    // permenent password
    const pincode = [1, 2, 3, 4];



   

    // check how many times enter wrong
    if ((this.state.count === 3) ) {
      // Verify the pin code -->> false part
      if (JSON.stringify(tempCode) === JSON.stringify(pincode)) {
        this.setState({code_entrycount: this.state.code_entrycount + 1});
        Alert.alert('Success! App will rederect you to the home now !');

        // console.log('yes');
        // console.log('eeeeee' + this.state.code_entrycount);

        // Verify the pin code -->> true part
      } else {
        this.setState({
          //entry text converting to red
          entry_text: (
            <>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.enter_text_wrongcase}>
                  {' '}
                  Enter your PIN code{' '}
                </Text>
              </View>
              <View>
                <Text style={styles.re_enter_txt}> please try again </Text>
              </View>
            </>
          ),
        });

        // count how many times wrong
        this.setState({code_entrycount: this.state.code_entrycount + 1});

        let tempCode = this.state.passcode;
        this.setState({count: 1});
        console.log(this.state.count);

        for (var i = tempCode.length - 1; i >= 0; i--) {
          if (tempCode[i] != '') {
            tempCode[i] = '';
            //break;
          } else {
            continue;
          }
        }
        this.setState({passcode: tempCode});
      };
    }else{
      
    }
  };

  // get number pressed

  Press_number = num => {
    const tempCode = this.state.passcode;
    console.log(this.state.count);

    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == 0) {
        this.setState({count: this.state.count + 1});

        tempCode[i] = num;
        console.log(tempCode);

        break;
      } else {
        continue;
      }
    }

    this.verifier(tempCode);
    this.setState({passcode: tempCode});
  };

  // Delete all implications of code container

  All_delete = () => {
    let tempCode = this.state.passcode;
    this.setState({count: 0});
    console.log(this.state.count);

    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
      } else {
        continue;
      }
    }
    this.setState({passcode: tempCode});
  };

  // Delete one by one

  Press_delete = () => {
    let tempCode = this.state.passcode;
    this.setState({count: this.state.count - 1});
    console.log(this.state.count);

    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({passcode: tempCode});
  };

  render() {
    // Numbers
    let numbers = [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 0},
    ];

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.top_container}>
          {/* enter your Pin code text */}
          {this.state.entry_text}

          {/* code indicator */}
          <View style={styles.codeContainer}>
            {this.state.passcode.map(p => {
              let style = p != '' ? styles.code2 : styles.code1;
              return <View style={style} />;
            })}
          </View>
        </View>

        {/* Number buttons */}
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.numbersContainer}>
            {numbers.map(num => {
              return (
                <TouchableHighlight
                  activeOpacity={0.5}
                  underlayColor="#80e9d8"
                  style={styles.number}
                  key={num.id}
                  onPress={() => this.Press_number(num.id)}>
                  <Text style={styles.numberText}>{num.id}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        </View>

        {/* Delete buttons */}
        <View style={styles.buttons}>
          <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="#80e9d8"
            onPress={() => this.Press_delete()}>
            <Text style={styles.buttonsText}>Delete</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  top_container: {
    height: 178,
    alignItems: 'center',
    justifyContent: 'center',
  },

  enter_text: {
    fontFamily: 'Roboto-Italic',
    fontSize: 25,
    color: '#a6d8e8',
    letterSpacing: -0.41,
    lineHeight: 40,
    marginTop: 25,
  },

  enter_text_wrongcase: {
    fontFamily: 'roboto',
    fontSize: 25,
    color: 'red',
    letterSpacing: -0.41,
    lineHeight: 25,
    marginTop: 18,
    alignItems: 'center',
  },
  re_enter_txt: {
    fontFamily: 'roboto',
    flexDirection: 'column',
    fontSize: 15,
    color: 'red',
    letterSpacing: -0.41,
    lineHeight: 35,
    marginTop: 5,
    alignItems: 'center',
  },

  codeContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 45,
  },

  code1: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    borderColor: '#a6d8e8',
  },

  code2: {
    width: 10,
    height: 10,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#80e9d8',
  },

  numbersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    width: 320,
    height: 348,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  number: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 14,
    backgroundColor: '#EEF4FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  number_press: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 14,
    backgroundColor: '#a6d8e8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numberText: {
    fontFamily: 'roboto',
    fontSize: 36,
    color: '#5c7aa2',
    letterSpacing: 0,
    textAlign: 'center',
  },
  buttons: {
    margin: 45,
    marginLeft: 290,
    marginRight: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
