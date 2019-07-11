import { createStackNavigator, createAppContainer} from 'react-navigation';

import Login from './src/Login';
// import GetPhoto from './src/GetPhoto';
import Home from './src/Home';

import Alunos from './src/Alunos/Alunos';
import AlunosGeral from './src/Alunos/AlunosGeral';
import AlunosEdit from './src/Alunos/EditAluno';
 
import Avaliacao from './src/Avaliacao';
import Exercicio from './src/Exercicio';
import Rank from './src/Rank';
import CadastroAluno from './src/CadastroAluno';

const Navegador = createStackNavigator({
	Login: {screen: Login},
	// GetPhoto: {screen: GetPhoto},
	Home: {screen: Home},
	Alunos: {screen: Alunos},
	AlunosEdit: {screen: AlunosEdit},
	Avaliacao: {screen: Avaliacao},
	Exercicio: {screen: Exercicio},
	Rank: {screen: Rank},
	AlunosGeral: {screen: AlunosGeral},
	CadastroAluno : {screen: CadastroAluno}
})

export default createAppContainer(Navegador)