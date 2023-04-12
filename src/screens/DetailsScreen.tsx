import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../routers/routes'

type Props = NativeStackScreenProps<RootStackParamList,'Details'>

const DetailsScreen = ({route,navigation}: Props) => {

  const status = route.params.character.status

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
      <View style = {{
        flexDirection : 'row',
        marginHorizontal : 16,
        alignItems : 'center'
      }}>
        <View style={[styles.dot_indicator,{
          backgroundColor : status==='Alive'? '#0FE944' : '#555555'
        }]}></View>
      <Text style={styles.text}>{status}   - </Text>
      <Text style={styles.text}>{route.params.character.gender}</Text>
      </View>
      <View style = {styles.details}>
      <Text style = {styles.header}>Species: </Text>
      <Text style={styles.text}>{route.params.character.species}</Text>

      <Text style = {styles.header}>Last known location:</Text>
      <Text style={styles.text}>{route.params.character.origin.name}</Text>

      <Text style = {styles.header}>No of Episode:</Text>
      <Text style={styles.text}>{route.params.character.episode.length}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
    flex : 1,
    backgroundColor : '#fff',
  },
  img:{
    width : '100%',
    height: '100%',
    flex : 0.5,
    borderBottomLeftRadius : 8,
    borderBottomRightRadius : 8
  },
  title:{
    fontSize : 20,
    fontWeight : 'bold',
    margin : 16
  },
  text:{
    fontSize : 18,
    marginStart : 16
  },
  dot_indicator:{
    height : 8,
    width : 8,
    borderRadius : 4,
  },
  details:{
    marginHorizontal : 16,
    marginVertical : 16,
    flexDirection : 'column',
    flexGrow : 0.2,
    justifyContent : 'space-evenly'
  },
  header:{
    fontSize : 20,
    fontStyle : 'normal',
    fontWeight : '600',
    color : '#000',
  }
}) 

export default DetailsScreen;