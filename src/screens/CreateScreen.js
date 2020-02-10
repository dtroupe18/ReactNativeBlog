import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
        <View>
            <Text style={styles.text}>Enter Title:</Text>
            <TextInput 
                style={styles.textInput}
                value={title} 
                onChangeText={ (text) => setTitle(text)} 
            />
            
            <Text style={styles.text}>Enter Content:</Text>
            <TextInput 
                style={styles.textInput}
                value={content} 
                onChangeText={ (text) => setContent(text)}
            />

            <Button title='Add blog post'/>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        marginTop: 8,
        marginLeft: 8,
        marginBottom: 4,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textInput: {
        marginHorizontal: 8,
        marginBottom: 16,
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default CreateScreen;