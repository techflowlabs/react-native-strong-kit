import React, { Component  } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';


// Actions
import { Increment, Decrease } from '../../Redux/Actions'

import { Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';



// Styles
import styles from './styles'


class Home extends Component {
    constructor(props){
        super(props)

    }


    render(){
        return(
            <View style={[ styles.container ]}>   

                <View style={ styles.row }>

                    <Text style={ styles.title }> { this.props.count } </Text>

                    <View style={{ flexDirection: 'column', marginTop: 40 }}>
                        <Button 
                            title='Increment'
                            backgroundColor='#9c27b0'
                            onPress={ ()=> this.props.dispatch(Increment()) } />

                        <Button 
                            title='Decrease'
                            style={{ marginTop: 20 }}
                            backgroundColor='#9c27b0'
                            onPress={ ()=> this.props.dispatch(Decrease()) } />
                    </View>


                </View>
                
            </View>
        )
    }
}





const mapStateToProps =( state)=>{
  return {
    count: state.reducer.count
  };
}

export default connect(mapStateToProps) (Home);