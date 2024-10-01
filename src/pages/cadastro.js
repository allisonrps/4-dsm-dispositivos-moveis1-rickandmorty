import React from 'react';
import { View, TextInput, Button } from 'react-native';
import Login from './login'

const Cadastro = ({ navigation }) => {
  return (
    <View>
      <TextInput placeholder="Nome" />
      <TextInput placeholder="Telefone" />
      <TextInput placeholder="CPF" />
      <TextInput placeholder="E-mail" />
      <TextInput placeholder="Curso" />
      <Button title="Salvar" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Cadastro;
