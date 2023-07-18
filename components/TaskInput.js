import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function TaskInput(props) {
  const [input, setInput] = useState("");

  const taskInputHandler = (text) => {
    setInput(text);
  }

  const addTaskHandler = () => {
    props.addTaskHandler(input);
    setInput("");
  }

  return ( 
        <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your task' value={input} onChangeText={taskInputHandler}/>
        <Button title='Add Task' onPress={addTaskHandler} />
      </View>
    );
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        gap: 5,
        width: '100%',
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        borderRadius: 5,
        padding: 5,
        color: '#F5F5F5'
    }
})