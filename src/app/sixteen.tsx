import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SixteenScreen() {
  return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/family.jpg')} style={styles.image}/>
        <View style={styles.panel}>
          <Text style={styles.text}>Sir Edward and his three comrades followed the narrow country road through the farmland. After days of fighting, hiding, and escaping the prince's assassins, they finally reached his village. His wife stood outside their home with their children. When they spotted Sir Edward, they ran toward him with tears of happiness. Sir Edward hugged his family tightly. He was finally home. Thomas, William, and Richard were welcomed as heroes. Prince Alaric had failed. Sir Edward had survived and returned to the people he loved.</Text>
        </View>
           
           <View style={styles.buttonPanel}>
           <Link href="/" style={styles.button}>
            HOME TO HIS FAMILY! THE END.
            </Link>
            </View>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a28aa',
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
    height: 450,          
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