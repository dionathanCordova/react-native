import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

// import ListItem from './src/ListItem';

export default class App extends Component {

	constructor(props) {
		super(props);

		
	}

	render() {
		return (
		<View style={styles.container}>
			{/* <FlatList data={this.state.list} renderItem={({item}) => <ListItem data={item} />}></FlatList> */}
			<Text>teste</Text>
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
	backgroundColor: '#F5FCFF',
	marginTop: (Platform.OS == 'ios') ? 20: 0
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
