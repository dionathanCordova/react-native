import React, { Component } from 'react';
 
import { View, StyleSheet, Text, TouchableOpacity, FlatList, Image } from 'react-native';
 
export default class HomeProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: props.navigation.getParam('produtos')
    }
  }
 
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    tabBarLabel: 'Home',
  });
 
  render() {
 
    return (
	
		<View style={styles.MainContainer}> 
			<FlatList data={this.state.list} renderItem={({item}) => <Produtos data={item} />} />
		</View>
	
    );
  }
}

class Produtos extends Component {
	constructor(props) {
		super(props)

	} 

	render() {
		return(
		<View style={styles.prodItem}>
			<Image resizeMode="contain" source={this.props.data.img} style={styles.imaage}/>
			<View>
				<Text style={styles.prodName}>{this.props.data.name}</Text>
				<Text style={styles.valor}>{this.props.data.valor}</Text>
			</View>			
		</View>
		)
	}
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
	backgroundColor: '#CCCCCC',
    flex:1,
    marginTop: 10,
    padding: 11
 
  },
 
  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  }, 
  text: { 
    color: '#fff'
  },
  prodItem: {
	height: 100,
	backgroundColor: '#FFFFFF',
	margin: 10,
	borderRadius: 5,
	padding: 10,
	flex: 1,
	flexDirection: 'row',
	alignItems: 'center'
  },
  imaage:{
	  width: 150,
	  height: 64
  },
  prodName: {
	marginRight: 5,
	color: '#000000',
	fontSize: 17,
	fontWeight: 'bold'
  },
  valor:{
	  fontSize: 15,
  }
 
});