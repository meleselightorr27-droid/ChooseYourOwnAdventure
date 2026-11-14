import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FifteenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/villagefriends.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>The knights reached a village where Sir Edward had once helped the people during the war. The villagers recognized him and welcomed the four knights. They offered them food, fresh horses, and a place to rest. Sir Edward was happy to finally meet friendly people. The village leader warned him that Prince Alaric's soldiers were searching the nearby roads. He offered Sir Edward a secret route home through the farmland.</Text>
        </View>

          <View style={styles.buttonPanel}>
          <Link href="/sixteen" style={styles.button}>
            He accepts the village leader's help and follows the secret farmland route.
          </Link>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/seventeen" style={styles.button}>
            He ignores the warning and takes the main road. 
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
  panel: {
    backgroundColor: '#acaeb0', 
    padding: 20,                
    borderRadius: 12,           
    width: '90%',               
  },  
  image: {
    width: '90%',         
    height: 180,          
    borderRadius: 12,    
    resizeMode: 'cover', 
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