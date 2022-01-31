import { StyleSheet, View, Text, Image } from 'react-native';

import Beccahenry from './../_back/images/beccahenry.jpg';

export default function Home() {
    
    return (
        <><View>
            <Image style={styles.beccahenry} source={Beccahenry} />
        </View>
        <View style={styles.container}>

                <Text id="home" style={styles.h1}>Paidamoyo-Janet Azehko</Text>
                <Text style={styles.p}>
                    I am a former circus performer, current fashion design student and self taught web developer seeking a career in tech that suits my professional skills, ability to quickly learn new things, and my love of finding creative ways to look at the world.My decade-long career as an artist and performer gives me the unique ability to find creative and empathetic solutions to every problem.I can bring creativity, drive, and passion to your organization.
                </Text>
            </View></>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        backgroundColor: '#486766',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    p: {
        marginTop: 20,
        marginBottom: 20,
    },
    beccahenry: {
        marginTop: 20,
        width: 200,
        height: 400,
    }
});