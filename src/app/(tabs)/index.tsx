import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose Your Own Adventure</Text>
       <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc9020',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#4a28aa',
  },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
