import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function TwelveScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/inside.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>Sir Edward and his comrades rested inside the castle. They were relieved to have found food and shelter. In the morning, Richard discovered the secret tunnel behind the fireplace. They believed it would lead them safely toward home. However, Thomas noticed fresh footprints near the tunnel entrance. Someone had recently been inside.</Text>
        </View>

           <View style={styles.buttonPanel}>
           <Link href="/fourteen" style={styles.button}>
            He enters the tunnel with his comrades. 
          </Link>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/thirteen" style={styles.button}>
            He leaves through the main castle doors.
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