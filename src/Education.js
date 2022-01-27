import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';


export default function Education() {
    
    return (
        <View style={styles.container}>
            <Text id="education" style={styles.h1}>Education</Text>            
            <Text style={styles.h5}>Lambda School</Text>
            <Text style={styles.p}>Summer Hacker's Program</Text>

            <Text style={styles.h5}>City College of San Francisco</Text>
            <Text style={styles.p}>Certificate of Completion</Text>
            <Text style={styles.h5}>Academy of Art University</Text>
            <Text style={styles.p}>Bachelor's of Fine Arts (Product Design)</Text>
            
        </View>
        )
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 0,
        flexBasis: 'auto',
        width: '95%',
        marginTop: 75,
        backgroundColor: 'green',
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