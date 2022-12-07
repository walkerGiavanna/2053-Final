import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListOfTerms from './ListOfTerms';
import TermDefinition from './TermDefinition';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListOfTerms">
        <Stack.Screen name="Terms" component={ListOfTerms} />
        <Stack.Screen name="Translation" component={TermDefinition} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
