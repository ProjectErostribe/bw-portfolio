import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, 
    View, 
    Text, 
    Image 
} from 'react-native';

export default function Navigation() {
    return(
        <View style={styles.container}>
            <Text>
                <p> RESUME | PORTFOLIO | SPEAKING ENGAGEMENTS | CONTACT </p>
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexShrink: 0,
        flexBasis: 'auto',
        backgroundColor: '#CAF704',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    h5: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
        
    },
    p: {
        marginBottom: 20,
        fontSize: 15,
    }
});