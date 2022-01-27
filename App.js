import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Home';
import Education from './src/Education';
import Skills from './src/Skills';
import Footer from './src/Footer';
import Experience from './src/Experience';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      
      <Skills />
      <Experience />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
