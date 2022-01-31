import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    Image,
    TextInput,
 } from 'react-native';

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>
                CONTACT
            </Text>
            <Text style={styles.p}>
                Contact Me 
            </Text>
        </View>
    )

    }    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          width: '95%',
          backgroundColor: '#CAF704',
          alignItems: 'center',
          justifyContent: 'center',
        },
        h1: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
        },
      });