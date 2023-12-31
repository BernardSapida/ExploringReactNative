import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import TaskItem from "./components/TaskItems";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const addTaskHandler = (text) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), text: text },
    ]);
    setModalVisible(false);
  };

  const deleteTaskHandler = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => {
        if (task.id !== id) {
          return task;
        }
      })
    );
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Task" color="#5e0acc" onPress={showModal} />
      <TaskInput
        addTaskHandler={addTaskHandler}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>List of Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={(task) => (
            <TaskItem task={task.item} deleteTaskHandler={deleteTaskHandler} />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    height: "100%",
    backgroundColor: "#080808",
  },
  taskContainer: {
    height: "100%",
    paddingBottom: 30,
    marginVertical: 10,
    paddingVertical: 10,
  },
  taskTitle: {
    textAlign: "center",
    fontSize: 24,
    paddingVertical: 10,
    fontWeight: "500",
    color: "#F5F5F5",
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
});
