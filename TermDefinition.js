import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { listData } from './ListOfTerms';
import React, { useState, useEffect } from 'react';
import { styles } from "./Style";
import terms from './TermsConst';
import ListOfTerms from './ListOfTerms';

export default function TermDefintion({ route, navigation }) {

//is it possible to make the onPrees go to the markers on the map as well? 
//Each Marker has its own key and I believe we can use that to refer to it
  return (

    <View style={styles.container}>
          
      <TouchableOpacity onPress={()=> {navigation.navigate('Terms', {data: "data sent from home screen"});}}>
        <Text style={styles.termDefinition}>{route.params.keyTerm}</Text>
      </TouchableOpacity>

    </View>

  );
}





