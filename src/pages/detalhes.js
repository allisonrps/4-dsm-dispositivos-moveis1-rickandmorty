import React from 'react';
import { View, Text } from 'react-native';

const Detalhes = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>Nome: {item.name}</Text>
      <Text>Espécie: {item.species}</Text>
      <Text>Gênero: {item.gender}</Text>
      <Text>Episódios: {item.episode.length}</Text>
    </View>
  );
};

export default Detalhes;
