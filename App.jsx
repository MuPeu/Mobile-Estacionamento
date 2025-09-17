import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Login from './src/screens/Login';
import SingIn from './src/screens/SingIn';
import SingUp from './src/screens/SingUp';
import Home from './src/screens/Home';
import Historico from './src/screens/Historico';
import Entrada from './src/screens/Entrada';
import Saida from './src/screens/Saida';
import Pagamento from './src/screens/Pagamento';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      {/* <Login /> */}
      <SingIn />
      {/* <SingUp /> */}
      {/* <Home /> */}
      {/* <Historico /> */}
      {/* <Entrada /> */}
      {/* <Saida /> */}
      {/* <Pagamento /> */}
    </SafeAreaView>

  );
};
