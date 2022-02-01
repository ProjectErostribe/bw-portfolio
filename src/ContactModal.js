import React from 'react';
import { StyleSheet,
    SafeAreaView, 
    Text,
    Button, 
    View,
    Image,
    TextInput,
 } from 'react-native';

 const Contact = () => {
    const [text, onChangeText] = React.useState('');
    const [number, onChangeName] = React.useState('');

    return (
        <><View style={styles.container}>
            <Text>
                <h1>CONTACT</h1>
                <p> Contact Modal </p>
            </Text>
        <SafeAreaView>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text} />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={number}
                    keyboardType="numeric" />
            </SafeAreaView>

            <View>
                <Button
                    Button
                    title="CANCEL"
                    color="#485766"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />

                <Button
                Button
                title="SUBMIT"
                color="#485766"
                onPress={() => Alert.alert('Button with adjusted color pressed')}
            />
            </View>
            </View></>
    );
};


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          flexShrink: 0,
          flexBasis: 'auto',
          width: '75%',
          marginTop: 50,
          marginBottom: 50,
          marginLeft: '12.5%',
          marginRight: '12.5%',
          backgroundColor: '#CAF704',
          alignItems: 'center',
          justifyContent: 'center',
        },
        h1: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 20,
        },
        input:{
            height: 40,
            margin: 15,
            borderWidth: 1,
            padding: 10,
        }
      });

export default Contact;