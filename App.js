import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, 
  Text,
  Button, 
  View,
  Image,
  TextInput,
 } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navigation from './src/Navigation';
import Home from './src/Home';
import Education from './src/resume/Education';
import Skills from './src/resume/Skills';
import Footer from './src/Footer';
import Experience from './src/resume/Experience';
import Contact from './src/Contact';
import Speak from './src/Speak';
import Portfolio from './src/portfolio/PortfolioMain';

export default function App() {
  return (
    <View style={styles.container}>
      {/* NAVIGATION COMPONENTS */}
      <Navigation />
      <Portfolio />
      <Speak />
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
