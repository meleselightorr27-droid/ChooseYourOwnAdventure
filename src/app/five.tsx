import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FiveScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/evil.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>After escaping the river and village, the knights discovered a bounty hunters' camp. They realized that the hunters were working for Prince Alaric. The men were preparing to search the surrounding forest. Thomas suggested sneaking around the camp. William believed they could steal horses from the camp and escape faster.</Text>
        </View>

         <View style={styles.buttonPanel}>
          <Link href="/six" style={styles.button}>
           He sneaks around the camp with his comrades.
          </Link>
          </View>

          <View style={styles.buttonPanel}>
          <Link href="/seven" style={styles.button}>
           He steals the horses and rides away.
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