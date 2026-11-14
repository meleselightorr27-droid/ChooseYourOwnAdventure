import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function EightScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/passage.jpg')} style={styles.image}/>

        <View style={styles.panel}>
          <Text style={styles.text}>The stranger led the knights into a mountain passage. Suddenly, they heard soldiers approaching from behind. The stranger admitted that Prince Alaric knew about the passage and had sent guards to block the exit. Richard spotted a narrow side path leading around the guards.</Text>
        </View>
           
           <View style={styles.buttonPanel}>
           <Link href="/ten" style={styles.button}>
            He follows Richard down the side path. 
          </Link>
          </View>
          
          <View style={styles.buttonPanel}>
          <Link href="/eleven" style={styles.button}>
            He charges toward the guards to fight them. 
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
    height: 300,          
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