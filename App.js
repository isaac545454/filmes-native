import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, ScrollView, Image,
   Dimensions, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import {useState, useRef } from 'react'
import Icon from '@expo/vector-icons/MaterialIcons'
import { Data } from './src/data/filmes'
import Carousel from 'react-native-snap-carousel'


const { width: screenW, height: screenH } = Dimensions.get('window')

export default function App() {

  const carouselRef = useRef(null)

  const [lista, setLista] = useState(Data)
  const [background, setBackground] = useState(lista[0].img)
  const [activeIndex, setActiveIndex] = useState(0)

  const _renderItem = ({item, index})=>{
    return(
          <View>
            <TouchableOpacity>
              <Image 
                source={{uri: item.img}}
                style={styles.carouselImg}
              />
              <Text style={styles.carouselText}>{item.title}</Text>
              <Icon name="play-circle-outline" size={30} color="#fff" style={styles.caroselIcon} />
            </TouchableOpacity>
          </View>
    )
  }


  return (
    <ScrollView style={styles.container}>
       <View style={{flex: 1, height: screenH,}}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: "#000"}}>

          <ImageBackground 
          source={{uri: background}}
          style={styles.imgBg}
          blurRadius={5}
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
                    <Carousel 
                    style={styles.carousel}
                    ref={carouselRef}
                    data={lista}
                    sliderWidth={screenW}
                    itemWidth={200}
                    inactiveSlideOpacity={0.5}
                    renderItem={_renderItem}
                    onSnapToItem={(index)=>{
                      setBackground(lista[index].img)
                      setActiveIndex(index)
                    }}
                    />
              </View>

              <View style={styles.moreInfo}>
                <View style={{marginTop: 10}}>
                  <Text style={styles.movieTitle}>{Data[activeIndex].title}</Text>
                  <Text  style={styles.movieDesc}>{Data[activeIndex].text}</Text>
                </View>
                <TouchableOpacity  style={{marginTop: 10, marginRight: 15}}
                onPress={()=>alert('adicionado a lista')}>
                <Icon name="queue" color="#000" size={30}/>
                </TouchableOpacity>
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
  },
  carousel: {
    flex: 1,
    overflow: 'visible',
  },
  carouselImg: {
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  carouselText: {
    padding: 15,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontWeight: 'bold'
  },
  caroselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  moreInfo: {
    backgroundColor: '#fff',
    width: screenW,
    height: screenH,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-around'
  },
  movieTitle: {
    paddingLeft: 15,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc: {
      paddingLeft: 15,
      color: '#131313',
      fontSize: 14,
      fontWeight: 'bold',
      paddingRight: 10
  }
});
