import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../routers/routes';
import CharacterData from '../models/CharacterData';
import { APP_URL } from '../utils/constant';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({ route, navigation }: Props, character: CharacterData) {

  const [data, setData] = useState([character]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      let result = await fetch(APP_URL.Base_URL, {
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
            onPress={() => {
              navigation.navigate('Details', {
                character: item
              })
            }}
          >
            <View style={styles.innerview}>
              {/* To load the images from the server,
             we need to define the height and weight */}
              <Image
                style={styles.img}
                source={{ uri: item.image }}
                resizeMode='stretch'
              />
              <View style={styles.text_view}>
                <Text style={styles.title}>{item.name}</Text>

                <Text style={styles.subTitle}>{item.species}</Text>

              </View>

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

    borderRadius: 12
  },
  img: {
    width: '100%',
    resizeMode: 'stretch',
    height: 270,
    borderRadius: 8
  },
  text_view:{
    marginHorizontal: 12,
    marginVertical:8
  }

});