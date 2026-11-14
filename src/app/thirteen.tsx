import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function ThirteenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/assassians.jpg')} style={styles.image}/>
          <View style={styles.panel}>
            <Text style={styles.text}>Sir Edward stepped into the corridor and heard a sword being drawn. Prince Alaric's assassins had been hiding inside the castle all along! Sir Edward tried to defend himself, but there were too many of them. The assassins surrounded him and killed him before his comrades could escape.</Text>
          </View>

           <View style={styles.buttonPanel}>
           <Link href="/" style={styles.button}>
            Sir Edward never makes it home. THE END.
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