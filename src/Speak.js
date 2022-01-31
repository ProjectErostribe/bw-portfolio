import { StyleSheet, Text, View } from 'react-native';

export default function Speak() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.p}>
                SPEAK
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '95%',
      backgroundColor: '#CAF704',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });