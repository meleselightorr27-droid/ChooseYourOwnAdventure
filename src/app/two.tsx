import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function TwoScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/clearing.jpg')} style={styles.image}/>
          <View style={styles.panel}>
            <Text style={styles.text}>The knights rode through the forest until they heard horses approaching. Three bounty hunters appeared behind them. Thomas spotted a narrow trail leading deeper into the woods. William noticed an abandoned village nearby.</Text>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/three" style={styles.button}>
            He follows Thomas down the narrow forest trail.
          </Link>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/four" style={styles.button}>
            He rides toward the abandoned village.
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