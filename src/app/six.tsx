import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function SixScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/man.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>The knights met a mysterious stranger who claimed to know a secret passage through the mountains. He showed Sir Edward a royal letter with Prince Alaric's seal. The stranger explained that he once worked for the prince but now wanted to help them. Richard did not trust him.</Text>
        </View>

           <View style={styles.buttonPanel}>
           <Link href="/eight" style={styles.button}>
            He accepts the stranger's help but keeps his sword ready. 
          </Link>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/nine" style={styles.button}>
            He refuses the stranger's help and follows the old castle road.
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
    height: 400,          
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