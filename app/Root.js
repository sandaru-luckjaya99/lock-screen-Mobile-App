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
  TouchableOpacity,
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class Lock_screen_passcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passcode: [0, 0, 0, 0],
      count: 1,
      code_entrycount: 1,
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

      // <Text style={styles.enter_text}> Enter your PIN code </Text>
    };
  }

  verifier = tempCode => {
    const pincode = [1, 2, 3, 4];

    if (this.state.count === 4) {
      if (JSON.stringify(tempCode) === JSON.stringify(pincode)) {
        this.setState({code_entrycount: this.state.code_entrycount + 1});

        console.log('yes');
        console.log('eeeeee' + this.state.code_entrycount);
      } else {
        this.setState({
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

        this.setState({code_entrycount: this.state.code_entrycount + 1});

        // {
        //   () => this.All_delete;
        // }

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
      }
    }
  };

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

  All_delete = () => {
    let tempCode = this.state.passcode;
    this.setState({count: 0});
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
          {/* <View style={{flexDirection: 'row'}}>
            <Text style={styles.enter_text}> Enter your PIN code </Text>
          </View> */}

          {this.state.entry_text}

          <View style={styles.codeContainer}>
            {this.state.passcode.map(p => {
              let style = p != '' ? styles.code2 : styles.code1;
              return <View style={style} />;
            })}
          </View>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={styles.numbersContainer}>
            {numbers.map(num => {
              return (
                <TouchableOpacity
                  style={styles.number}
                  key={num.id}
                  onPress={() => this.Press_number(num.id)}>
                  <Text style={styles.numberText}>{num.id}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => this.Press_delete()}>
            <Text style={styles.buttonsText}>Delete</Text>
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

  top_container: {
    height: 178,
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
    backgroundColor: '#a6d8e8',
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
    color: '#B3C1D4',
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
