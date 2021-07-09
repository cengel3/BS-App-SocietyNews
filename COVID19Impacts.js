import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, Image, ScrollView} from 'react-native';
import { Divider} from 'react-native-elements';

import logo from "./assets/logo.png";
import COVID19Impacts from "./images/COVID19Impact.jpg";
import FullDesc from "./FullDesc.js";


export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'COVID-19 Impacts on Business Society',
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
        
        

        <Text style={styles.articleTitle}> COVID-19 Impacts on Business Society </Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {COVID19Impacts} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.articleText}>
          <FullDesc 
            desc = 'Due to the rising COVID-19 cases in Merced County, the University of California, Merced had transitioned into online learning. This forced a lot of students and our fellow members to move back home with their families. This ultimately changed the way of life for all our members. The University of California, Merced has announced that the upcoming school year of 2021-22 will resume in person. The current standing Business Society Executive Board of the 2021-2022 academic year has taken this into consideration and is currently planning to do in person meetings and events. In case of the Society having to go back to virtual meetings due to the limited capacity enforced by UCM , we can continue with the Student-Oriented model from last year. Business Society acknowledges that members are students first, so making activities optional has given the members the flexibility to balance their new life in school and personal professional growth.'
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