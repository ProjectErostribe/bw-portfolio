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
      width: '95%',
      backgroundColor: '#CAF704',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });