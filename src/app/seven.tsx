import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SevenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/group.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>The knights successfully stole the horses and escaped the camp. They were excited because they were traveling much faster now. However, William noticed a strange symbol burned into the horses' saddles. It was the royal symbol of Prince Alaric. The horses had been planted as bait! In the distance, they spotted a mountain road and an abandoned castle.</Text>
        </View>

           <View style={styles.buttonPanel}>
           <Link href="/eight" style={styles.button}>
            He rides toward the mountain road. 
          </Link>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/nine" style={styles.button}>
            He heads toward the abandoned castle. 
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