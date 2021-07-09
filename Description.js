/**
 * This description shows a limited aount of lines. It is used on the main page
 * so that the "Learn More" button is clicked to access the whole article
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Description extends Component{
    constructor(props){
        super(props);

        this.state = {
            desc: this.props.desc,
        }
    }

    render(){

        
        return(
            <View>
                <Text numberOfLines={5} style={{textAlign:'center', fontSize:15, margin:10}}>
                    {this.props.desc}
                </Text>
            </View>

        )
    }
}


export default Description