import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, ScrollView, 
  Dimensions, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import {Data} from './src/data/filmes'


const { width: screenW, height: screenH } = Dimensions.get('window')

export default function App() {

  const [lista, setLista] = useState(Data)
  const [background, setBackground] = useState(Data[0].img)


  return (
    <ScrollView style={styles.container}>
       <View style={{flex: 1, height: screenH,}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: "#000"}}>

          <ImageBackground 
          source={{uri: background}}
          style={styles.imgBg}
          blurRadius={8}
          >
            <View style={styles.viewSearch}>
                  <TextInput 
                   style={styles.input}
                   placeholder="pesquisar"
                  />
                  <TouchableOpacity>
                    <Icon style={styles.icon} name="search" color="#000" size={26} />
                  </TouchableOpacity>
            </View>
            
            <Text style={
              {color: '#fff', fontSize: 25, marginLeft: 10, marginVertical: 10, fontWeight: 'bold'}}>
              Acabou de chegar</Text>

              <View style={styles.slideView}>

              </View>

          </ImageBackground>

        </View>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: 'flex-start',
    backgroundColor: "#000"
  },
  viewSearch:{
    marginTop: 34,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '94%',
    flexDirection: 'row',
    height: 50,
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    padding: 13,
    paddingLeft: 20,
    fontSize: 17
  }, 
  icon: {
    position: 'absolute', 
    top: 10
  },
  slideView: {
    width: '100%',
    height: 350, 
    justifyContent: 'center',
    alignItems: 'center',
  }
 
});
