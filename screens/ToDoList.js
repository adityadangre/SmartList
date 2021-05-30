import React, {useState, useLayoutEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons"
import Colors from "../constants/Colors"

const renderAddListIcon = (addItem) => {
    return(
        <TouchableOpacity onPress={() => addItem({text: "hello2", isChecked: false})}>
            <Text style={styles.icon}> + </Text>
        </TouchableOpacity>
    )
}

export default ({navigation }) => {
    const [toDoItems, setToDoItems] = useState([{text: "hello", isChecked: false}])

    const addItemToLists = (item) => {
        toDoItems.push(item);
        setToDoItems([...toDoItems]);
    }

    const removeItemFromLists = (index) => {
        toDoItems.splice(index,1);
        setToDoItems([...toDoItems]);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => renderAddListIcon(addItemToLists)
        })
    })

    return(
    <View style={styles.container}>
        <FlatList
            data={toDoItems}
            renderItem={({item: {text, isChecked}, index})=>{
                return(
                    <Text>{text}</Text>
                )
            }}
        />
    </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    icon: {
        padding: 5,
        fontSize: 32,
        color: "white",
    },
});
