/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {time: 0, start: 'Start'};
    this.timer = null;
    this.start = this.start.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  start() {
    let s = this.state;

    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      s.start = 'Start';
    }else{
      s.start = 'Parar';
      this.timer = setInterval(() => {      
        s.time += 0.1;      
        this.setState(s); 
      }, 100);
    }
 
    this.setState(s);
  }

  limpar() {
    let s = this.state;
    s.time = 0;
    
    if(this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      s.start = 'Start';
    }   
   
    this.setState(s);
  }



  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Timer}>{this.state.time.toFixed(1)}</Text>
        <Image source={require('./images/relogio.png')} />

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.start}>
            <Text style={styles.botaoText}>{this.state.start}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.botaoText}>Limpar</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c1f30',
  },
  Timer: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginBottom: -180,
    color: '#FFFFFF',
    backgroundColor: 'transparent'
  },
  btnArea:{
    flexDirection: 'row',
    height: 40
  },
  btn: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#886532',
    height:40,
    borderRadius:5,
    margin:10,
  },
  botaoText:{
    fontSize: 20,
    color: '#FFFFFF',    
  },
 
});
