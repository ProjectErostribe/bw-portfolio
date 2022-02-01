import { StyleSheet, 
    View, 
    Text, 
    Image } from 'react-native';

export default function Portfolio() {
    return(
        <View style={styles.container}>
            <Text>
                <h1>PORTFOLIO</h1>
                <p> Portfolio </p>
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexShrink: 0,
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        
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
    }
});