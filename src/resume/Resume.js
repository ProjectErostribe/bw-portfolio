import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

export default function Resume() {
    return(
        <View style={styles.container}>
            <Text style={styles.h1}>Resume</Text>
            <Text style={styles.p}>
                    I am a former circus performer, current fashion design student and self taught web developer seeking a career in tech that suits my professional skills, ability to quickly learn new things, and my love of finding creative ways to look at the world.My decade-long career as an artist and performer gives me the unique ability to find creative and empathetic solutions to every problem.I can bring creativity, drive, and passion to your organization.
            </Text>
        {/* RESUME COMPONENTS */}
            <Education />
            <Skills />
            <Experience />                
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexBasis: 'auto',
        width: '95%',
        marginTop: 10,
        marginBottom: 10,
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