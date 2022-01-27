import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function Skills() {

    return (
        <View style={styles.container}>
            <Text id="skills" style={styles.h1}>Skills</Text>
            <Text id="skills-header" style={styles.h5}>Languages</Text>
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
        marginTop: 100,
        
        backgroundColor: 'blue',
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
    }
});