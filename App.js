import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalTextInput from './components/GoalInputText';

export default function App() {

  const [goalList, setGoalList] = useState([]);
  const [isvisible, setvisible] = useState(false);




  const addGoalHandler = (enteredText) => {
    setGoalList(currentgoals => [...currentgoals, { id: Math.random().toString(), value: enteredText }]);
    // setEnteredGoal("");
    setvisible(false);
  }
  const cancelGoalHandler = () => {
    setvisible(false);
  }

  const deleteGoalHandler = itemid => {
    setGoalList(currentgoals => {
      return currentgoals.filter((goal) => goal.id !== itemid)
    });
  }


  return (
    <View style={styles.outerContainer}>
      <Button title='Add Goal Items' onPress={() => setvisible(true)} />
      <GoalTextInput onAddBtn={addGoalHandler} visibility={isvisible} onCancelBtn={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={itemData => (
          <GoalItem goalid={itemData.item.id} onDelete={deleteGoalHandler} title={itemData.item.value} />
        )}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  outerContainer: {

    padding: 50,
  },

});
