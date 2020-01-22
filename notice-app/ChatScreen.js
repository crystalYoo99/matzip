import React from 'react';
import { TextInput, Button, StyleSheet, View, Text, AsyncStorage,TouchableOpacity } from 'react-native';

import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'

export default class ChatScreen extends React.Component {
    static navigationOptions = {
      headerShown: false,
    }
    
    state = {
        todos: []
    }
    // 할일 추가 함수
    addTodo = (todo) => {
     
    // 새로운 할일(todo) 객체 생성
    const newTodo = {
        id: Date.now(), // 등록시간
        text: todo,      // 할일 내용
        completed: false, // 완료 여부
    }   

    // state 업데이트
    this.setState(prevState => ({
        todos: [
            newTodo,       // 새로 추가된 할일(todo)
            ...prevState.todos // 기존의 할일 목록
        ]
    }));
   
    // 콘솔창에 출력해보자~
    console.log(this.state.todos);
  }
    render() {
      return (
        <View style = {styles.container}>
            <View style = {{height: 30}}></View>
                <View style = {{height: 55}}>
                    <Text style={styles.title}>Chat</Text>
                </View>
            <ChatBody todos = {this.state.todos}/>
            <ChatHeader addTodo = {this.addTodo} navigation = {this.props.navigation}/>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 0,
      backgroundColor: '#ccdce6',
    },
    title: {
      fontWeight: "800",
      fontSize: 30, 
      marginLeft: 20,
      marginBottom: 20,
      color: '#585c5e',
    },
    header: {
      height: 80,
      backgroundColor: '#5ba5f9',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
  },
    headerText: {
      fontSize: 22,
      color: 'white',
    },
    body: {
      height: 150,
      backgroundColor: 'white',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  });