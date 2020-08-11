import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, Button, TextInput, TouchableHighlight, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD9izt88wpYu_gVf1w2BvC2xPaGap4RqP8",
  authDomain: "reactnative-57c6b.firebaseapp.com",
  databaseURL: "https://reactnative-57c6b.firebaseio.com",
  projectId: "reactnative-57c6b",
  storageBucket: "reactnative-57c6b.appspot.com",
  messagingSenderId: "794768995053",
  appId: "1:794768995053:web:1a64f1bce820ff2a3812e4",
  measurementId: "G-34MRPD5K0C"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);

}
const db = firebase.firestore();

console.disableYellowBox = true;


export default function App() {
  const ref = db.collection('rndemo');
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.item}
      key={item.id}
      underlayColor='#aee6e0'>
      <View>
        <Text selectionColor='white'>
          {item.firstname} {item.lastname}
        </Text>
      </View>
    </TouchableHighlight>
  );

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
    <FlatList
      style={{ flex: 1 }}
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginLeft: 5,
    marginRight: 5,
    padding: 15,
    marginVertical: 0,
    borderBottomColor: 'black',

    borderStyle: 'solid',
    borderBottomWidth: 0.3,
  },
});
