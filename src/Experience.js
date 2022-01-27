import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Experience() {

  return (
    <View style={styles.container}>
      <Text id="experience" style={styles.h1}>Experience</Text>
      <Text id="education-header" style={styles.h5}>Shpongle</Text>
      <Text style={styles.p}>
        Shpongle           
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        backgroundColor: 'red',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    h5: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        
    },
    p: {
        marginBottom: 20,
    }
});