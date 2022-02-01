import { StyleSheet, Text, View } from 'react-native';

export default function Speak() {
    
    return (
        <View style={styles.container}>
            <Text>
                <h1>SPEAKING ENGAGEMENTS</h1>
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
      backgroundColor: '#486766',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });