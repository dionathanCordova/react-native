import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions';

export class Home extends Component {

	static navigationOptions = {
		title:'',
		header:null
	}

	constructor(props) {
		super(props);
        this.state = {
            email: ''
        };
        
        this.signUpButton = this.signUpButton.bind(this);
        this.signInButton = this.signInButton.bind(this);

      
    }
    
    signInButton() {
        this.props.navigation.navigate('SignIn');
    }

    signUpButton() {
        this.props.navigation.navigate('SignUp');
    }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.h1}>Devsapp 1.0 </Text>

         
                <View style={styles.buttonArea}>
                    <Button onPress={this.signInButton} title='Login'/>
                    <Button onPress={this.signUpButton} title='Cadastrar'/>
                    
                    <Text>{this.props.navigation.getParam('token')}</Text>
                </View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
        margin:10,
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    h1: {
        fontSize: 25,
        marginBottom: 40
    },
    buttonArea: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        padding: 10
    }
    
});

const mapStateToProps = (state) => {
	return {
        status:state.auth.status,
        uid: state.auth.uid
	};
};

const HomeConnect = connect(mapStateToProps, { checkLogin })(Home);
export default HomeConnect;
















