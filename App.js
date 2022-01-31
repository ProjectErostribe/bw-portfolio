import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import Home from './src/Home';
import Education from './src/resume/Education';
import Skills from './src/resume/Skills';
import Footer from './src/Footer';
import Experience from './src/resume/Experience';
import Contact from './src/Contact';
import Portfolio from './src/portfolio/PortfolioMain';

export default function App() {
  return (
    <View style={styles.container}>
      {/* NAVIGATION COMPONENTS */}
      <Navigation />
      <Portfolio />
      <Contact />
      {/* CONTENT COMPONENTS */}
      <Home />

      {/* RESUME COMPONENTS */}
      <Skills />
      <Education />
      <Experience />

      {/* FOOTER COMPONENTS */}
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##486766',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
