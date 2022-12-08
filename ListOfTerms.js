import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from "./Style";
import {terms} from './TermsConst';

export default function ListOfTerms({ navigation }) {

  const [listData, setListData] = useState(terms);

  return (
    
    <View style={styles.container}>
      <FlatList
      data={listData}
      extraData={listData}
      renderItem={({item}) => 
        <View style={styles.border}>
          <TouchableOpacity onPress={()=> {navigation.navigate('Translation', {keyTerm: item.termDefinition});}}>
            <Text style={styles.term}>{item.term}</Text>
            <Text style={styles.termDescription}>{item.termDescription}</Text>
          </TouchableOpacity>
        </View>
      } />
    </View>
    
  );
}