import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { checkLogin } from './actions/AuthActions';

export class Preload extends Component {

	static navigationOptions = {
		title:'',
		header:null
	}

	constructor(props) {
		super(props);
		this.state = {};

		// this.props.checkLogin();
        this.directPages = this.directPages.bind(this);
          
		AsyncStorage.getItem('uid').then((value) => {
            if(value != null) {
                this.props.checkLogin(value);
            }else{
                this.props.navigation.navigate('Home')
            }
        })
    }
    
    directPages() {

        // SE ESTIVER LOGADO
        if(this.props.status == 1) {            
            // ZERAR A NAVEGAÇÂO ANTERIOR
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Conversas' })],
            });
            this.props.navigation.dispatch(resetAction);
        }

        // SE NAO ESTIVER LOGADO
        if(this.props.status == 2) {            
            // ZERAR A NAVEGAÇÂO ANTERIOR
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }
    
    componentDidMount() {
        this.directPages();
    }

    componentDidUpdate() {
        this.directPages();
    }

	render() {
		return (
			<View style={styles.container}>
				<Text>Carregando... {this.props.status}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status
	};
};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;
















