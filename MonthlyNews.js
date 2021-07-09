import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Button, Text, Image, ScrollView} from 'react-native';
import { Divider} from 'react-native-elements';

import logo from "./assets/logo.png";
import marchNewsletter from "./images/marchNewsletter.png"
import FullDesc from "./FullDesc.js";


export default class SixthPage extends Component {
  static navigationOptions = {
    title: 'Monthly Newsletter',
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
        
        <Text style={styles.articleTitle}> Monthly Newsletter (March Edition) </Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {marchNewsletter} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 2}}/>
        <View style={styles.articleText}>
          <FullDesc 
            desc = 'Business Society would like to share our March 2021 Newsletter. It has the latest updates, recap, and new goals for Business Society. If you are interested in staying up to date with us and what we are up to, then take look. The link is in the image. Thank you for staying updated!'
          />
        </View>
        <Button title = "Learn More" style={{paddingTop: 5, paddingBottom: 5}} onPress={()=> Linking.openURL('https://www.canva.com/design/DAEVsXlUEyg/kuFCu3XUkJ1s5AHdcIxGhA/view?utm_content=DAEVsXlUEyg&utm_campaign=designshare&utm_medium=link&utm_source=viewer&irgwc=1&utm_medium=affiliate&utm_source=Skimbit%20Ltd.&clickId=03WVeTTgWxyLWB-wUx0Mo36KUkB33BV1TxRqRA0')}/>


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