import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function ResumeSummary() {
    return()
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 0,
        flexBasis: 'auto',
        width: '95%',
        marginTop: 75,
        backgroundColor: '#486766',
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
        fontSize: 15,
        
    }
});