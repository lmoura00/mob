import React,{useState, useEffect, useRef} from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image, Animated} from "react-native";
import MapView, {Marker, MarkerAnimated} from "react-native-maps";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import *  as Location from 'expo-location'
import MapViewDirections from 'react-native-maps-directions';
import api from '../../config/index.json'

// Get dimensions of the screen
const { height, width } = Dimensions.get('window');

// Define styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  scroll: {
    backgroundColor: '#f9f9f9',
    width: '100%',
    maxHeight: 250,
  },
  lugares: {
    width: width - 40,
    maxHeight: 250,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 10,
  },
  botaoIr: {
    width: 100,
    height: 40,
    backgroundColor: '#FF3030',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
    borderRadius: 8,
    elevation: 10,
  },
  botaoMapa: {
    width: 100,
    height: 40,
    backgroundColor: '#FF3030',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  titleModal: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  image: {
    height: 120,
    width: 120,
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#252525',
  },
  textBotao: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export function Teste() {
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const mapRef = useRef(null);
    const [region, setRegion] = useState({
      latitude: 51.5079145,
      longitude: -0.0899163,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    });
    const [locations, setLocations] = useState({
        Current: { latitude:  -5.1046, longitude: -42.8289},
        Alice: { latitude: -5.014799040097355, longitude: -43.030555534705435},
        Chico: { latitude: -5.000577737434068,  longitude:   -42.982024312569955},
        Cocais : {latitude: -5.091682590432839, longitude: -42.824027336998554},
        Convencoes : {latitude: -5.095009608462627,    longitude: -42.82405131380548},
        Jericoroa : {latitude: -5.09277795569128,     longitude:   -42.81977871812526},
        Juventude : {latitude: -5.0946646249865735,   longitude:  -42.836622037041074},
        MiguelLima : {latitude: -5.1050031657056385,   longitude: -42.8271101874807},
        PonteMetalica : {latitude: -5.087202519172876,   longitude: -42.82500599210132},
        PortalAmazonia : {latitude: -5.0346987, longitude: -43.0132515},
        PortalSol : {latitude: -5.0040103, longitude: -42.9629141},
        Praca : {latitude: -5.097856423506959, longitude:  -42.82447591645458},
        Rodoviaria : {latitude: -5.090041369358882,    longitude: -42.83453854503971},
        Roncador : {latitude: -5.095095838704937,  longitude:  -42.95901965301087},
        Sena : {latitude: -5.06196421786934,   longitude:  -42.90140484502799},
        Sucupira : {latitude: -5.077368432638451,  longitude: -42.841334715344246},
        CentroArtesanato : {latitude: -5.090210890634855,   longitude:  -42.82738778794578},
        LekLek : {latitude: -4.977532424261423,    longitude: -43.060848443769025},
        MeninoJesus : {latitude: -5.132490450706987,    longitude:  -42.83306711564996},
        OsAmigos : {latitude: -4.978301986828953,    longitude: -43.06073042657791},
        PonteAmizade : {latitude: -5.097262188670391,   longitude:  -42.818435331836426},
        Sambico : {latitude: -5.090332458047968,   longitude:  -42.82479990789226},
        SantoAntonio : {latitude: -5.105744633248898,  longitude:  -42.82493502917901},
        SilvaBrito : {latitude: -5.003137796360265,   longitude:  -42.97906284746647},
        TemploCentral : {latitude: -5.1020533099623835,   longitude:   -42.82651218794579},
        Velokart : {latitude: -5.17352117470909,  longitude:   -42.839991974451785}
      });
    
    
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let locationCurrent = await Location.getCurrentPositionAsync({});
          const currentLocation = {
            latitude: locationCurrent.coords.latitude,
            longitude: locationCurrent.coords.longitude,
            latitudeDelta: 0.0072,
            longitudeDelta: 0.0055,
          };
          setLocation(currentLocation);
          setSelectedLocation(currentLocation);
          setLocations((prevLocations) => ({
            ...prevLocations,
            Current: currentLocation,
          }));
        })();
      }, []);
    
    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const itemWidth = width - 40;
        const index = Math.floor(scrollPosition / itemWidth);
        const locationKeys = Object.keys(locations);
        const selectedKey = locationKeys[index];
        setSelectedLocation(locations[selectedKey]);
    };
  
    useEffect(() => {
        
        if (selectedLocation) {
            mapRef.current.animateToRegion({
                ...selectedLocation,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }, 1000);
        }
    }, [selectedLocation]);

    
    return (
      <View style={styles.container}>
        <MapView
          loadingEnabled
          ref={mapRef}
          showsBuildings={false}
          showsCompass={true}
          scrollEnabled={false}
          zoomEnabled={false}
          showsUserLocation={true}
          showsPointsOfInterest={false}
          style={styles.map}
          initialRegion={location}
        >
          {selectedLocation && <Marker coordinate={selectedLocation} pinColor='blue' />}
          {/* Other markers if needed */}
        </MapView>
        <ScrollView
          style={styles.scroll}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          <View style={styles.lugares}>
            <Text style={styles.titleModal}>VOCÊ ESTÁ AQUI</Text>
            <Image source={require('../images/mapa.jpg')} style={styles.image} />
            <View style={{ height: 25, width: 25, marginTop: 25 }}>
              <LottieView
                source={require("../Assets/13171-forward-arrow.json")}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <View style={styles.lugares}>
            <Text style={styles.titleModal}>SITIO ALICE</Text>
            <Image source={require('../images/alice.jpg')} style={styles.image} />
            <TouchableOpacity 
              onPress={() => navigation.navigate('Alice')} 
              style={styles.botaoIr}
            >
              <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
            </TouchableOpacity>
            <View style={{ height: 10, width: 10 }}>
              <LottieView
                source={require("../Assets/13171-forward-arrow.json")}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <View style={styles.lugares}>
            <Text style={styles.titleModal}>SITIO CHICO</Text>
            <Image source={require('../images/chico.jpg')} style={styles.image} />
            <TouchableOpacity 
              onPress={() => navigation.navigate('Chico')} 
              style={styles.botaoIr}
            >
              <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
            </TouchableOpacity>
            <View style={{ height: 10, width: 10 }}>
              <LottieView
                source={require("../Assets/13171-forward-arrow.json")}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          <View style={styles.lugares}>
            <Text style={styles.titleModal}>SITIO CHICO</Text>
            <Image source={require('../images/chico.jpg')} style={styles.image} />
            <TouchableOpacity 
              onPress={() => navigation.navigate('chico')} 
              style={styles.botaoIr}
            >
              <Text style={styles.textBotao}>IR PARA A PAGINA</Text>
            </TouchableOpacity>
            <View style={{ height: 10, width: 10 }}>
              <LottieView
                source={require("../Assets/13171-forward-arrow.json")}
                autoPlay={true}
                loop={true}
              />
            </View>
          </View>
          {/* Add other views here */}
        </ScrollView>
      </View>
    );
};

