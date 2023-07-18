import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './components/TaskItems';
import TaskInput from './components/TaskInput';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (text) => {
    setTasks(currentTasks => [...currentTasks, {id: Date.now(), text: text}])
  }

  const deleteTaskHandler = (id) => {
    console.log(id)

    setTasks(currentTasks => currentTasks.filter(task => {
      if(task.id !== id) {
        return task;
      }
    }))
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput addTaskHandler={addTaskHandler} />
      <View style={styles.taskContainer}>
        <Text style={styles.taskTitle}>List of Tasks</Text>
        <FlatList 
          data={tasks} 
          renderItem={task => (<TaskItem task={task.item} deleteTaskHandler={deleteTaskHandler}/>)} 
          keyExtractor={(item, index) => item.id}
        />
        {/* {tasks.length === 0 ? (<Text style={styles.TaskItem}>No tasks</Text>) : (tasks.map((task, index) => (<Text key={index} style={styles.TaskItem}>{task}</Text>)))} */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    height: '100%',
    backgroundColor: '#080808'
  },
  taskContainer: {
    height: '100%',
    paddingBottom: 30,
    marginVertical: 10,
    paddingVertical: 10,
  },
  taskTitle: {
    textAlign: 'center',
    fontSize: 24,
    paddingVertical: 10,
    fontWeight: '500',
    color: '#F5F5F5'
  },
});
