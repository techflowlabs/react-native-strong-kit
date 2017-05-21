import React, { Component  } from 'react'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
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

import { Button } from 'react-native-elements';



// Styles
import styles from './styles'


class Main extends Component {
    constructor(props){
        super(props)

    }

    renderErrMsg(){
        return null
        // return <FormValidationMessage>Error message</FormValidationMessage>
    }


    render(){
        return(
            <View style={[ styles.container ]}>   

                <View style={ styles.row }>

                    <Text style={ styles.title } >Login</Text>
                
                    <FormLabel labelStyle={{ color: '#333', fontWeight: '100' }} >Email</FormLabel>
                    <FormInput autoCapitalize={ 'none' } onChangeText={(email)=> this.setState({ email : email.toLowerCase() }) }/>

                    <FormLabel labelStyle={{ color: '#333', fontWeight: '100' }} >Password</FormLabel>
                    <FormInput secureTextEntry={ true } onChangeText={(email)=> this.setState({ email }) }/>
                    
                    { this.renderErrMsg() }

                    <View style={{ flexDirection: 'column', marginTop: 40 }}>
                        <Button 
                            title='Login'
                            backgroundColor='#2c98f0'
                            onPress={ ()=> Actions.HOME({ type: ActionConst.RESET }) } />
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

export default connect(mapStateToProps) (Main);