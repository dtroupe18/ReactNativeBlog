import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(BlogContext);

    return (
        <View>
            <Text>Index Screen</Text>
            <Button 
                title='Add Post'
                onPress={ addBlogPost }/>
            <FlatList
                data={data}
                keyExtractor={(blogPost) => { blogPost.title }}
                renderItem={( { index, item } ) => {
                    return <Text key={index}>{item.title}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;