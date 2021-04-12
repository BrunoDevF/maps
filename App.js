import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView,{Marker} from 'react-native-maps';
export default function App() {
  const [region,setRegion] = useState({
    latitude: -6.8881626,
    longitude: -38.5550128,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  function moverCidade(lat,long){
    setRegion({
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    })
  }

  return (
    //-6.8881626
    //-38.5550128
    <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginTop:160 }} >
          <Button title="Brasilia" onPress={()=>{moverCidade(-15.8080374,-47.8750231)}} />
          <Button title="São Paulo" onPress={()=>{moverCidade(-23.5492243,-46.5813785)}} />
        </View>

        <Text>{region.latitude} | {region.longitude}</Text>

        <MapView
          style={styles.mapView}
          region={region}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Entrega"
            description="Local de entrega"
            icon={{
              uri: "https://img.icons8.com/plasticine/1x/truck.png"
            }}
          />
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapView:{
    width: Dimensions.get('window').width,
    height: '100%'
  }
});
