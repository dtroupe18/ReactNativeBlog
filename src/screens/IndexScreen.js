import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
// import { Context as ImageContext } from '../context/ImageContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    // console.log(props);
    const { state, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost, index) => index.toString() }
                renderItem={( { index, item } ) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ShowScreen', {id: item.id }) }>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => {
                                    deleteBlogPost(item.id)
                                }}>
                                    <Feather style={styles.icon} name='trash' />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ); 
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('CreateScreen');
            }}>
                <Feather name='plus' style={styles.plusIcon} />
            </TouchableOpacity>
            );
        }
    };
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    },
    plusIcon: {
        fontSize: 30,
        flexDirection: 'row',
        marginRight: 8
    }
});

export default IndexScreen;