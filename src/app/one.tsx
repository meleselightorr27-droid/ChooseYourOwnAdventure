import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function OneScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/Scene.jpg')} style={styles.image}/>
          <View style={styles.panel}>
            <Text style={styles.text}>Sir Edward was a brave knight returning home after fighting in a long war. He was traveling with his three loyal comrades: Thomas, William, and Richard. The evil Prince Alaric was jealous of Sir Edward's bravery and popularity. He had hired assassins and placed a bounty on all four knights' heads. One night, the four men escaped their military camp just before the prince's soldiers discovered them. They reached a fork in the road.</Text>
          </View>
           
          <View style={styles.buttonPanel}>
           <Link href="/two" style={styles.button}>
             He leads his comrades into the dark forest. 
          </Link>
        </View>
       
        <View style={styles.buttonPanel}>
          <Link href="/eleven" style={styles.button}>
           He stays behind to fight the soldiers. 
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