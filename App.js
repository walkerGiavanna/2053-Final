import ListOfTerms from './ListOfTerms';
import TermDefinition from './TermDefinition';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';

const Stack = createNativeStackNavigator();

const Villanova = {
  latitude: 40.037056,
  longitude: -75.343582,
  latitudeDelta: 0.0022,
  longitudeDelta: 0.0021,
}

const library = {
  latitude: 40.037144,
  longitude: -75.34215,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const diningHall = {
  latitude: 40.03543,
  longitude: -75.34117,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const school = {
  latitude: 40.03468,
  longitude: -75.33829,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const garden = {
  latitude: 40.04072,
  longitude: -75.33938,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const pool = {
  latitude: 40.03371,
  longitude: -75.33813,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const tenis = {
  latitude: 40.04254,
  longitude: -75.34713,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const apartment = {
  latitude: 40.04127,
  longitude: -75.34362,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

const train = {
  latitude: 40.03877,
  longitude: -75.34214,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

export default function App() {
  return (

  <NavigationContainer>
    <MapView 
      region={Villanova}
      style={{height: '50%', width: '100%'}}
      provider={PROVIDER_GOOGLE} 
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}
    >
      <Marker
        key={1}
        coordinate={library}
        title={"としょかん"}
        description={"Library"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/book-16-xxl.png"}}
      />

      <Marker
        key={2}
        coordinate={diningHall}
        title={"しょくどう"}
        description={"Dining Hall"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/pretzel-xxl.png"}}
      />

      <Marker
        key={3}
        coordinate={school}
        title={"がっこう"}
        description={"School"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/edit-7-xxl.png"}}
      />

      <Marker
        key={4}
        coordinate={garden}
        title={"にわ"}
        description={"Garden"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/bunch-flowers-xxl.png"}}
        />

      <Marker
        key={5}
        coordinate={pool}
        title={"プール"}
        description={"Pool"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/swimming-xxl.png"}}
        />

      <Marker
        key={6}
        coordinate={tenis}
        title={"テニズコート"}
        description={"Tenis Courts"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/stadium-xxl.png"}}
        />

      <Marker
        key={7}
        coordinate={apartment}
        title={"アパート"}
        description={"Apartments"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/signs-4-xxl.png"}}
        />

      <Marker
        key={8}
        coordinate={train}
        title={"電車"}
        description={"Train"}
        image={{uri: "https://www.iconsdb.com/icons/preview/icon-sets/sketchy-blue/train-xxl.png"}}
        />
       
    </MapView>

      <Stack.Navigator initialRouteName="ListOfTerms">
        <Stack.Screen name="Terms" component={ListOfTerms} />
        <Stack.Screen name="Translation" component={TermDefinition} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
