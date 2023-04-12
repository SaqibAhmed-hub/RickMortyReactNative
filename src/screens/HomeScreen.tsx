import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../routers/routes';
import CharacterData from '../models/CharacterData';

type Props = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>

export default function HomeScreen({route,navigation}: Props, character: CharacterData) {

  const [data, setData] = useState([character]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      let result = await fetch('https://rickandmortyapi.com/api/character', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
      let json = await result.json();
      console.log(json);
      setData(json.results);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        bounces
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={()=> {
                navigation.navigate('Details',{
                  character: item
                })
            }}
          >
          <View style={styles.innerview}>
            {/* To load the images from the server,
             we need to define the height and weight */}
            <Image
              style={{ width: '100%', height: 240 }}
              source={{ uri: item.image }}
              resizeMode='stretch'
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>{item.species}</Text>
            <Text style={styles.subTitle}>{item.gender}</Text>
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16,
    marginTop: 4
  },
  innerview: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12
  }

});