import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfTerms from './ListOfTerms';
import TermDefinition from './TermDefinition';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableLatestRenderer } from 'react-native-maps';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import geolocation from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

  <NavigationContainer>
    <MapView 
      style={{height: '50%', width: '100%'}}
      provider={PROVIDER_GOOGLE} 
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}
      initialRegion={{
        latitude: 40.037056,
        longitude: -75.343582,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    /> 

      <Stack.Navigator initialRouteName="ListOfTerms">
        <Stack.Screen name="Terms" component={ListOfTerms} />
        <Stack.Screen name="Translation" component={TermDefinition} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
