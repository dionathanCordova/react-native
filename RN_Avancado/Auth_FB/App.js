import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import CadUser from './src/CadastroUser';
import InsertDados from './src/InsertDados';
import ListaDados from './src/ListaDados';
import LoginUser from './src/LoginUser';
import CreatUsrDado from './src/CreatUsrDado';
import SincOutrsNos from './src/SincOutrsNos';
import Home from './src/Home';

const Navegador = createStackNavigator({
  LoginUser: { screen: LoginUser},
  CadUser: { screen: CadUser},
  InsertDados:  { screen: InsertDados},
  ListaDados : { screen: ListaDados},  
  CreatUsrDado: { screen: CreatUsrDado},
  SincOutrsNos: { screen: SincOutrsNos},
  Home: { screen : Home}
})

export default createAppContainer(Navegador);