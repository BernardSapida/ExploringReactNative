import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your task'/>
        <Button title='Add Task' />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalTitle}>List of Task</Text>
        <Text style={styles.goalList}>Magcode</Text>
        <Text style={styles.goalList}>Magaral</Text>
        <Text style={styles.goalList}>Hangout with friends</Text>
        <Text style={styles.goalList}>Kayquit Portal System</Text>
        <Text style={styles.goalList}>Play Sky</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    gap: 5,
    width: '100%',
    padding: 5
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    borderRadius: 5,
    padding: 5
  },
  goalContainer: {
    marginTop: 10
  },
  goalTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500'
  },
  goalList: {
    fontSize: 18,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 0.5,
    backgroundColor: '#fafafa',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: -1,
    shadowRadius: 10,
    overflow: 'hidden',
  }
});
