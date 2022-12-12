import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { listData } from './ListOfTerms';
import React, { useState, useEffect } from 'react';
import { styles } from "./Style";
import terms from './TermsConst';
import ListOfTerms from './ListOfTerms';

export default function TermDefintion({ route, navigation }) {

  return (

    <View style={styles.container}>
          
      <TouchableOpacity onPress={()=> {navigation.navigate('Terms', {data: "data sent from home screen"});}}>
        <Text style={styles.termDefinition}>{route.params.keyTerm}</Text>
      </TouchableOpacity>

    </View>

  );
}





