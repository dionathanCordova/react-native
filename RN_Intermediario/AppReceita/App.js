import {createStackNavigator, createAppContainer} from 'react-navigation';

import Lista from './src/screens/Lista';
import Receita from './src/screens/Receita';

const Navegador = createStackNavigator({
	Lista: {screen: Lista},
	Receita: { screen: Receita}
})

export default createAppContainer(Navegador);