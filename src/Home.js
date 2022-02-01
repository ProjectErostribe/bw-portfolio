import { StyleSheet,
     View, 
     Text, 
     Image,
     Button,
     TextInput,
    } from 'react-native';

import Beccahenry from './../_back/images/beccahenry.jpg';

export default function Home() {
    
    return (
        <View style={styles.container}>
            <Image style={styles.beccahenry} source={Beccahenry} />

            <Text>
                <p>This porfolio features work from my time as a React/React Native Apprentice at Bitwise Industries.</p>
            </Text>
        </View>

        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 0,
        flexBasis: 'auto',
        width: '95%',
        backgroundColor: '#486766',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    h1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    p: {
        fontSize: 15,
        marginTop: 20,
        marginBottom: 20,
    },
    beccahenry: {
        marginTop: 20,
        width: 200,
        height: 400,
    }
});