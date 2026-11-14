import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function SeventeenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/evilprince.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>Sir Edward charged toward the prince's soldiers. He fought bravely, but there were too many enemies. Prince Alaric appeared on horseback and ordered his men to surround the knight. Sir Edward realized that he had made a terrible mistake. He was too close to the prince's army to escape. His three comrades tried to help him, but the soldiers overwhelmed them. Sir Edward was killed before he could reach his family.</Text>
      </View>

          <View style={styles.buttonPanel}>
          <Link href="/" style={styles.button}>
            The prince finally gets his revenge. THE END.
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