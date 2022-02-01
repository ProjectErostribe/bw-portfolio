import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.p}>
                Project Erostribe| GitHub | LinkedIn |Twitter
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
        marginBottom: 20,
    },
    p: {
        marginTop: 20,
        marginBottom: 20,
    },
  });