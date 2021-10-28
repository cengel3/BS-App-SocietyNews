import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, Image, ScrollView} from 'react-native';
import { Divider} from 'react-native-elements';

import logo from "./images/logo.png";
import marchNewsletter from "./images/marchNewsletter.png";
import COVID19Impacts from "./images/COVID19Impact.jpg";
import HauntedHouse from "./images/HauntedHouse.jpg";
import PieExec from "./images/PieExec.jpeg";
import Description from "./Description.js";


export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Society News',
    headerStyle: {
      backgroundColor: '#800000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <Image source={logo} style = {{height: 150, width:350, alignSelf: 'center'}} />
        <View style={styles.subBox}> 
          <Text style = {styles.header}>Society News</Text>
        </View>


  {/* 

    To add more articles, copy the Haunted house example, and then just change the title,  description, and navigation page     
    Be sure to add the navigation page to App.js and create the corresponding NewPage# file in the directory
    
  */}


    {/* Haunted House Article */}
        <Text style={styles.articleTitle}> Haunted House </Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {HauntedHouse} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 1}}/>
        <View style={styles.articleText}>
          <Description 
            desc = 'Business Society would like to present the annual Haunted House at the Den. It is a free event for all UCM students, so come out to get the spooky in spooky season. Date: October 28th- 29th 2001 from 7:00 pm- 11:00 pm'
          />
          <Button title = "Learn More" style={{paddingTop: 5, paddingBottom: 5}} onPress={()=>navigate('NewsPage1')}/>
        </View>

    {/* Pie An Exec Artcicle */}
        <Text style={styles.articleTitle}> Pie an Exec </Text>
        <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
        <Image source = {PieExec} style = {{width:305, height: 320, alignSelf: 'center', marginBottom:5, borderColor: 'black', borderWidth: 1}}/>
        <View style={styles.articleText}>
          <Description 
            desc = 'PIE AN EXEC FUNDRAISER!🥧👥 Come to Scholars Lane to pie one of the executives from the executive board for only $3! This fundraiser will take place from 10/-8-10/22, 10:00 AM till 2:00 PM. See you there!'
          />
          <Button title = "Learn More" style={{paddingTop: 5, paddingBottom: 5}} onPress={()=>navigate('NewsPage2')}/>
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