import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>
                PAIDAMOYO-JANET "My.L.E.S" AZEHKO
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
        alignItems: 'center',
        justifyContent: 'center',

    },
    h1: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
    }
    
    
    
    
    
    
});