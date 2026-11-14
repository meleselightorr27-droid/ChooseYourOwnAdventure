import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
export default function TenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/cave.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>The side path led the knights into a hidden cave. They found an old map showing two possible routes home. One route led through a dangerous forest. The other led through a village where Sir Edward had once been welcomed as a hero. Thomas suggested taking the forest route because it was less likely to have soldiers. Richard believed the village route was safer.</Text>
        </View>

           <View style={styles.buttonPanel}>
           <Link href="/fourteen" style={styles.button}>
            He follows Thomas through the forest. 
          </Link>
          </View>

        <View style={styles.buttonPanel}>
          <Link href="/fifteen" style={styles.button}>
            He follows Richard toward the village.
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