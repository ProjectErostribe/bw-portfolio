import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    
    return (
        <View style={styles.container}>
            <Text style={styles.p}>
                Thingy
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });