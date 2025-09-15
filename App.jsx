import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Home from './src/screens/Home';
import SingIn from './src/screens/SingIn';
import SingUp from './src/screens/SingUp';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      {/* <Home /> */}
      {/* <SingIn /> */}
      <SingUp />
    </SafeAreaView>

  );
};
