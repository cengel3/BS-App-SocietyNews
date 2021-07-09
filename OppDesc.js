import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Divider } from 'react-native-elements';



class OppDesc extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: this.props.name,
            desc: this.props.desc,
            linkAv: this.props.linkAv,
            link: this.props.link,

        }
    }
    checkLink = () => {
        if(this.props.linkAv == false){
            return (
                <Text style={{textAlign:'center', fontSize:15, margin:10, color:'red'}}>link unavaliable</Text>
            )
        }else {
            return(
                <Button title = "Link" style={{paddingTop: 5}} onPress={()=> Linking.openURL(this.props.link)}/>
            )
        }
    
        
    }

    render(){

        
        return(
            <View>
                <Text style={{textAlign:'center', fontSize:20, paddingBottom:5}}>
                    {this.props.name}
                </Text>
                <Divider style={{backgroundColor: 'black', height:1.5, marginBottom:10, maxWidth:150, marginLeft: 138}}/>
                <Text style={{textAlign:'center', fontSize:15, margin:10}}>
                    {this.props.desc}
                </Text>
                
                {this.checkLink(this.props.linkAv)}

            </View>

        )
    }

}



export default OppDesc