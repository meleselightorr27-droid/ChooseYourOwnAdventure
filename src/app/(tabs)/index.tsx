import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
         source={require('../../../assets/images/knights.jpg')}
        style={styles.image}
       />
      <Text style={styles.text}>The Knight's Journey Home</Text>
       <Link href="/about" style={styles.button}>
        A Choose Your Own Adventure Story
      </Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bc9020',
    alignItems: 'center',
    justifyContent: 'center',
  },
   image: {
    width: '90%',         
    height: 180,          
    borderRadius: 12,    
    resizeMode: 'cover', 
  },
  text: {
    color: '#4a28aa',
    fontSize: 25,
  },
    button: {
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
