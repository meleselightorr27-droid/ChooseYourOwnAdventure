import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FourScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/village.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>The knights reached the abandoned village and found an old house to hide inside. Inside, Richard discovered a letter from Prince Alaric. It revealed that the prince had sent assassins to block the roads leading home. Suddenly, they heard footsteps outside.</Text>
        </View>
        
        
        <View style={styles.buttonPanel}>
          <Link href="/five" style={styles.button}>
              He escapes through the back door with his comrades.          
          </Link>
          </View>

        <View style={styles.buttonPanel}>
          <Link href="/seventeen" style={styles.button}>
            He opens the front door to confront the strangers.
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