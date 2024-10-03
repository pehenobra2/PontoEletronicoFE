import { StatusBar } from 'expo-status-bar';
import { VStack, Text, Box, FormControl, Input, Button, Link} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/titulo';
import { EntradaTexto } from './components/EntradaText';
import { Botao } from './components/botao';


export default function Login({ navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">

      <Titulo>
        Faça o login em sua conta
      </Titulo>

      <Box w="100%">
        <EntradaTexto
          label="Email"
          placeholder='Insira seu endereço de e-mail'
        />
        <EntradaTexto
          label="Senha"
          placeholder='Insira sua senha'
          secureTextEntry={true}
        />
      </Box>

      <Botao>
        Entrar
      </Botao>

      <Link mt={5}>Esqueceu sua senha?</Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={5}>
        <Text>
          Ainda não tem cadastro?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text color='blue.500' ml={1}>
            Faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

