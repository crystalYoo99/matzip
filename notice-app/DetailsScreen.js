import React from 'react';
import { Button, StyleSheet, View, Text, AsyncStorage,TouchableOpacity } from 'react-native';
import Header from './Header'

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    headerShown: false,
  }
  state = {
    info : {
      name: '',
      time: '',
      person: ''
    }
  }
  
  addInfo = (imo) =>{
    const newinfo = {
      name: imo.name,
      time: imo.time,
      person: imo.person
    }
    this.setState(prevState => {
      this.state.info.name=newinfo.name,
      this.state.info.time=newinfo.time,
      this.state.info.person=newinfo.person
    });
    console.log(this.state.info);
  }
  
  /*removeTodo = (id) => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(e => e.id === id);
      prevState.todos.splice(index, 1);
      const todos = [
        …prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return ({ todos })
    });
  }*/

  componentDidMount = () => {
    AsyncStorage.getItem("todos").then(data => {
      const todos = JSON.parse(data || '[]');
      this.setState({ todos });
    });
  };

  render() {
    let add = this.props.navigation.getParam("add");
    return (
      <View style={styles.container}>
        <View style = {{height: 40}}/>
        <Text style={styles.title}>게시판 추가</Text>
        <Header add={this.addInfo}/>
        <Button
          title="Go to Home"
          onPress={() => {
            add(this.state)
            this.props.navigation.navigate('Home')}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 0,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
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