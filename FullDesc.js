/**
 * This is the full description that is used in the specific article pages so that
 * the whole article can be read in one place
*/

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class FullDesc extends Component{
    constructor(props){
        super(props);

        this.state = {
            desc: this.props.desc,
        }
    }

    render(){

        
        return(
            <View>
                <Text style={{textAlign:'center', fontSize:15, margin:10}}>
                    {this.props.desc}
                </Text>
            </View>

        )
    }
}


export default FullDesc