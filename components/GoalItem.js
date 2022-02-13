import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={props.onDelete.bind(this, props.goalid)} >
            <View style={styles.goalItemView}>
                <Text style={styles.goalListItem}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalListItem: {
        width: '90%',
        paddingHorizontal: 3,
        fontWeight: "600",
        fontSize: 20,



    },
    goalItemView: {
        backgroundColor: 'grey',
        padding: 10,
        margin: 5,




    }
})