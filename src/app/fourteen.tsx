import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function FourteenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/home.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>Sir Edward and his comrades finally escaped the mountains and forests. They could see the familiar countryside in the distance. They were close to home! Suddenly, Richard noticed Prince Alaric's royal banner near the main road. The prince's soldiers were waiting for them. Thomas spotted a narrow country road leading around the soldiers. What should Sir Edward do?</Text>
        </View>

          <View style={styles.buttonPanel}>
          <Link href="/sixteen" style={styles.button}>
            He takes the narrow country road and continues toward his village.
          </Link>
          </View>
          
          <View style={styles.buttonPanel}>
          <Link href="/seventeen" style={styles.button}>
            He charges toward the prince's soldiers to fight them. 
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
    height: 300,          
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