import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default class ReceitaModo extends Component {

	static navigationOptions = {
		tabBarLabel:'Modo'
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<View style={styles.areaTab}>
                 <View style={{margin:15}}>
                    <FlatList
                        data={this.props.screenProps.modo}
                        renderItem={({item}) => <Text style={styles.ingItem}>- {item.txt}</Text>}
                    />
                </View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	areaTab:{
		flex:1,
        margin:10,
        backgroundColor: '#FFF',
        borderRadius: 5,
	},
	ingItem:{
		fontSize:16,
		margin: 14,
	}
});









