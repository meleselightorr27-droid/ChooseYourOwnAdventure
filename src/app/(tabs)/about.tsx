import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
      <View style={styles.container}>
          <Image source={require('../../../assets/images/trail.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>Help Sir Edward and his three comrades return home from the battle alive!</Text>
        </View>

           <Link href="/one" style={styles.button}> 
           Start the Adventure
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
  image: {
    width: '90%',         
    height: 180,          
    borderRadius: 12,    
    resizeMode: 'cover', 
  },
  panel: {
    backgroundColor: '#4a28aa', 
    padding: 20,                
    borderRadius: 12,           
    width: '90%',               
  },

  text: {
    color: '#bc9020',
    fontSize: 15,
  },
    button: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});