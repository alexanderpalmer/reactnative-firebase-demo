import React from 'react';
import {
    FlatList, TouchableHighlight, StyleSheet, Text
} from 'react-native';

const ItemList = (props) => {
    const renderItem = ({ item }) => (
        <TouchableHighlight
            style={styles.item}
            key={item.id}
            underlayColor='#ffaaaa'
            onPress={() => console.log(item.id)}>

            <Text selectionColor='white'>
                {item.firstname} {item.lastname}
            </Text>
        </TouchableHighlight>
    );

    return (
        <FlatList
            data={props.items}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
};

const styles = StyleSheet.create({
    item: {
        marginLeft: 5,
        marginRight: 5,
        padding: 15,
        paddingVertical: 20,
        marginVertical: 0,
        borderBottomColor: 'black',

        borderStyle: 'solid',
        borderBottomWidth: 0.3,
    },
});

export default ItemList;