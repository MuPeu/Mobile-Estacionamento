import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <Home />
    </SafeAreaView>

  );
};
