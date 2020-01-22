import React, { Component } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';


class ChatBody extends Component {

    render() {
        return (
            
            <View style={styles.container}>
                <ScrollView>
                <View style = {styles.todobox}>
                
                        {
                            this.props.todos.map(data => (
                                <View style={styles.todo}>
                                    <View style={styles.todoText} key = {data.id} >
                                        <Text>{data.text}</Text>
                                    </View>
                                </View>
                            ))
                        }
                    
                </View>
                </ScrollView>
                
                
                <View style = {{height: 10}}></View>
                <View style = {{height: 10}}></View>
                
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
        flexDirection: 'column-reverse',
        
        
    },
    todobox: {
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        marginRight: 15,
        
    },
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
        marginRight: 5,
    },
    todoText: {
        flexDirection: 'row',
    },
    todoDelBtn: {
        color: '#777'
    }
});

export default ChatBody;