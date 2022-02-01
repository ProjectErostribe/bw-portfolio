import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, 
  Text,
  Button, 
  View,
  Image,
  TextInput,
 } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Home from './src/Home';
import Education from './src/resume/Education';
import Skills from './src/resume/Skills';
import Footer from './src/Footer';
import Experience from './src/resume/Experience';
import ContactModal from './src/ContactModal';
import Speak from './src/Speak';
import Portfolio from './src/portfolio/PortfolioMain';
import Resume from './src/resume/Resume';


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      {/* NAVIGATION COMPONENTS 
        <Portfolio />
        <Speak />
        <Contact />
      
      */}
      <Navigation />
      
      {/* CONTENT COMPONENTS */}
        <Home />

      {/* CONTACT MODAL */}
      <ContactModal />    
         
      
      {/* RESUME COMPONENTS 
        <Resume />
      */}

      {/* PORTFOLIO COMPONENTS 
        <Portfolio />
      */}

      {/* SPEAKING ENGAGEMENTS COMPONENTS 
        <Speak />
      */}

      

      {/* FOOTER COMPONENTS */}
      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 0,
    flexBasis: 'auto',    
    width: '100%',
    height: '100%',
    backgroundColor: '#486766',
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
    fontSize: 15,
    
}
});
