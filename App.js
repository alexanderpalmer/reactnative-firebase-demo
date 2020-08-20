import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  FlatList, Button, TextInput, TouchableHighlight,
  SafeAreaView, StyleSheet, Text, View
} from 'react-native';

import DB, { db } from './Db';
import ItemList from './ItemList';

export default function App() {
  const ref = db.collection('rndemo');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.disableYellowBox = true;
  })

  useEffect(() => {
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const { firstname, lastname, age } = doc.data();
        list.push({
          id: doc.id,
          firstname,
          lastname,
          age
        });
      });

      setItems(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Firebase Demo mit React Native</Text>
      <ItemList items={items}></ItemList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  header: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 18,
    paddingTop: 25,
    padding: 10,
  },
});
