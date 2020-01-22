import React, { Component } from 'react';
import { Button,StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from "react-native-elements";
import {KeyboardAvoidingView} from 'react-native';

class ChatHeader extends Component {
    state = {
        newTodo: '',
    }
    addNewTodo = () => {
        if(this.state.newTodo) {
            this.props.addTodo(this.state.newTodo);
            this.setState({
                newTodo: ''
            });
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style = {{flexDirection: 'column'}} behavior = "padding">
                <View style = {{flexDirection: 'row',}} behavior="padding" enabled>
                    <TextInput 
                        placeholder = "채팅입력" 
                        style = {{ paddingHorizontal: '3%',width: 300,backgroundColor: 'gray', borderRadius: 5, marginLeft: 10, marginRight: 10,height: 40}} 
                        autoCorrect = {false}
                        value = {this.state.newTodo}
                        onChangeText = {(newTodo) => this.setState({newTodo})}
                    />
                    <TouchableOpacity
                        style = {{alignItems: 'center',justifyContent: 'center'}}
                        onPress = {this.addNewTodo}>
                        <Icon
                            name = 'send'
                            size = {30}
                            color = "white"
                        />
                    </TouchableOpacity>
                </View>
                <View style = {{height: 10}}/>
                <Button
                    title="Go to Home"
                    color= '#156290'
                    onPress={() => {
                    this.props.navigation.navigate('Home')}}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default ChatHeader;