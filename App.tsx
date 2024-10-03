import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Login';
import { NativeBaseProvider } from 'native-base';
import { TEMAS } from './src/estilos/temas';
import Cadastro from './src/Cadastro';
import Rotas from './src/Rotas';

export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />

      <Rotas/>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
