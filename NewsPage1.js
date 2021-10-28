import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, Image, ScrollView} from 'react-native';
import { Divider} from 'react-native-elements';

import logo from "./assets/logo.png";
import HauntedHouse from "./images/HauntedHouse.jpg"
import FullDesc from "./FullDesc.js";

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Haunted House',
    //Sets Header text of Status Bar
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <Image source={logo} style = {{height: 150, width:350, alignSelf: 'center'}} />
        <View style={styles.subBox}> 
          <Text style = {styles.header}>Society News</Text>
        </View>
        
        

        <Text style={styles.articleTitle}> Haunted House </Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {HauntedHouse} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.articleText}>
          <FullDesc 
            desc = 'Business Society would like to present the annual Haunted House at the Den. It is a free event for all UCM students, so come out to get the spooky in spooky season. \n Date: October 28th- 29th 2001 from 7:00 pm- 11:00 pm'
          />
        </View>
        <Text style={{textAlign:'center', color:'#b0aea9', paddingBottom:5, paddingTop:5}}>Business Society @ UCM</Text>
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  //society news styles
  header: {
    color: '#800000',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
  },
  articleTitle:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20, 
    paddingTop: 25,
    paddingBottom:10,
  },
  articleText:{
    textAlign:'center',
    fontSize:15, 
    margin:10,
  },

});