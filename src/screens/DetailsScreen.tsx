import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routers/routes'

type Props = NativeStackScreenProps<RootStackParamList,'Details'>

const DetailsScreen = ({route,navigation}: Props) => {

  return (
    <View style = {styles.container}>
      <Image 
        style = {styles.img}
        source={{
          uri : route.params.character.image
        }}
        resizeMode='stretch'
      />
      <Text style={styles.title}>{route.params.character.name}</Text>
      <Text style={styles.text}>{route.params.character.gender}</Text>
      <Text style={styles.text}>{route.params.character.species}</Text>
      <Text style={styles.text}>{route.params.character.origin.name}</Text>
      <Text style={styles.text}>{route.params.character.status}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : '#fff'
  },
  img:{
    width : '100%',
    height: '100%',
    flex : 0.5,
  },
  title:{
    fontSize : 20,
    fontWeight : 'bold',
    margin : 16
  },
  text:{
    fontSize : 18,
    marginStart : 16
  }
}) 

export default DetailsScreen;