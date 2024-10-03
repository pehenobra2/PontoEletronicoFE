import { StatusBar } from 'expo-status-bar';
import { VStack, Text, Box, FormControl, Input, Button, Link, Select, CheckIcon} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/titulo';
import { EntradaTexto } from './components/EntradaText';
import { Botao } from './components/botao';
import React from 'react';


export default function Cadastro({navigation}) {


    const [empresa, setEmpresa] = React.useState("");

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">

      <Titulo>
        Insira seus dados
      </Titulo>

      <Box w="100%">
        <EntradaTexto
          label="Nome"
          placeholder='Insira seu nome completo'
        />
        <EntradaTexto
          label="Email"
          placeholder='Insira seu email'
        />
        <EntradaTexto
          label="Senha"
          placeholder='Insira sua senha'
          secureTextEntry={true}
        />
        <EntradaTexto
          label="Confirmação de senha"
          placeholder='Insira sua senha novamente'
          secureTextEntry={true}
        />


        <FormControl mt={3}>
          <FormControl.Label>Empresa</FormControl.Label>
          <Select
            selectedValue={empresa}
            placeholder="Selecione a empresa que você trabalha"
            size="lg"
            w="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
              _text: {
                color: 'gray.100',
                fontWeight: "bold",
              },
            }}
            _item={{
                _text: {
                  color: 'gray.500',
                  fontWeight: "bold",
                },
              }}

            mt={1}
            onValueChange={(itemValue) => setEmpresa(itemValue)}
          >
            <Select.Item label="Empresa A" value="empresaA" />
            <Select.Item label="Empresa B" value="empresaB" />
            <Select.Item label="Empresa C" value="empresaC" />
            <Select.Item label="Empresa D" value="empresaD" />
            <Select.Item label="Empresa E" value="empresaE" />
          </Select>
        </FormControl>
      </Box>

      <Botao onPress={() => navigation.navigate('Login')}>
        Finalizar
      </Botao>
    </VStack>
  );
}

