import { Pressable, StyleSheet, Text } from "react-native";

function TaskItem(props) {
    console.log(props.task.id)
    return ( <Pressable onPress={() => props.deleteTaskHandler(props.task.id)}><Text style={styles.TaskItem}>{props.task.text}</Text></Pressable> );
}

export default TaskItem;

const styles = StyleSheet.create({
    TaskItem: {
        fontSize: 18,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 0.5,
        backgroundColor: '#181818',
        color: '#F5F5F5',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: -1,
        shadowRadius: 10,
        overflow: 'hidden',
    }
})