import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image } from 'react-native';
import axios from 'axios';

const Cards = ({ navigation }) => {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/');
      setCards(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <View>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
            <Text>{item.name}</Text>
            <Text>{item.status}</Text>
            <Text>{item.location.name}</Text>
            <Button title="Ver Mais Detalhes" onPress={() => navigation.navigate('Detalhes', { item })} />
          </View>
        )}
      />
    </View>
  );
};

export default Cards;
