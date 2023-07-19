import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
  Modal,
  Image,
} from "react-native";

function TaskInput(props) {
  const [input, setInput] = useState("");

  const taskInputHandler = (text) => {
    setInput(text);
  };

  const addTaskHandler = () => {
    props.addTaskHandler(input);
    setInput("");
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/favicon.png")}
          style={{ width: 50, height: 50, marginBottom: 20 }}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your task"
          value={input}
          onChangeText={taskInputHandler}
        />
        {/* <Button title='Add Task' onPress={addTaskHandler} color='#5e0acc' buttonStyle={styles.addTaskBtn} /> */}
        <Pressable
          android_ripple={{ color: "#210614" }}
          onPress={addTaskHandler}
          style={styles.addTaskBtn}
        >
          <Text style={styles.addTaskBtnText}>Add Task</Text>
        </Pressable>
        <Pressable
          android_ripple={{ color: "#ccc" }}
          onPress={props.closeModal}
          style={styles.cancelBtn}
        >
          <Text style={styles.cancelBtnText}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  inputContainer: {
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#080808",
    gap: 5,
  },
  textInput: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: "#000",
  },
  addTaskBtn: {
    marginTop: 5,
    backgroundColor: "#5e0acc",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "80%",
  },
  cancelBtn: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "80%",
  },
  addTaskBtnText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelBtnText: {
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
});
