import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    console.log(`id: ${id}`);

    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingHorizontal: 16,
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        paddingHorizontal: 16,
        fontSize: 18,
        paddingTop: 8
    }
});

export default ShowScreen;