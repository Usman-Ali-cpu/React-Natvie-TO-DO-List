import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalTextInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const inputGoalHandler = () => {
        props.onAddBtn(enteredGoal)
        setEnteredGoal("");
    }
    const inputCancelHandler = () => {
        props.onCancelBtn();
        setEnteredGoal("");
    }




    return (
        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.container}>
                <View style={styles.textbox}>
                    <TextInput
                        style={styles.textedInput}
                        placeholder='Enter Course Goal..'
                        onChangeText={(text) => {
                            setEnteredGoal(text)
                        }}
                        value={enteredGoal}
                    />
                </View>
                <View style={styles.btnView}>
                    <View style={styles.button}>
                        <Button
                            title='Add'
                            onPress={inputGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color={"red"}
                            onPress={inputCancelHandler}
                        />
                    </View>


                </View>

            </View>

        </Modal>


    )

}
export default GoalTextInput;

const styles = StyleSheet.create({
    textbox: {
        borderColor: 'grey',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textedInput: { padding: 5, margin: 0, width: '80%', },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnView: {
        width: "60%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",

    },
    button: {
        width: "40%",
    },
})
