import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ElevenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/prison.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>Sir Edward was captured by Prince Alaric's guards and taken to the prince's castle. Prince Alaric appeared and laughed. He explained that he had always been jealous of Sir Edward and wanted to destroy his reputation. The prince offered Sir Edward a choice: betray his three comrades or face execution. Sir Edward refused to betray his friends. The prince ordered the guards to execute him.</Text>
        </View>   


           <View style={styles.buttonPanel}>
           <Link href="/" style={styles.button}>
            Sir Edward dies in the prince's dungeon. THE END.
          </Link>
          </View>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#720808',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',         
    height: 180,          
    borderRadius: 12,    
    resizeMode: 'cover', 
  },
  panel: {
    backgroundColor: '#acaeb0', 
    padding: 20,                
    borderRadius: 12,           
    width: '90%',               
  },
  buttonPanel: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)', 
  },
  text: {
    color: '#000000',
  },
   button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#bc9020',
  },
});